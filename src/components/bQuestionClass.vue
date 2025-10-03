<script setup>
        // legg til ref
        import { ref } from 'vue';
        import { Seksjoner } from './sporsmol';
        import {Roller} from "./roller.js";

        const isFinished = ref(false);
        const seksjoner = Seksjoner;
        const thewinners = ref([]);

        function addResult(){
            let theWinnerNames = `
                ${thewinners.value[0].name},
                ${thewinners.value[1].name},
                ${thewinners.value[2].name},
            `;
            let theWinnerPoints = `
                ${thewinners.value[0].total},
                ${thewinners.value[1].total},
                ${thewinners.value[2].total},
            `;
            let result = fetch("https://localhost:7134", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    scores: theWinnerPoints,
                    names: theWinnerNames
                })
            });
        }

        function getTotals(spørsmArr, intOrArray) {
            const tPs = [];
            spørsmArr.forEach(indviduellQ => {
                tPs.push(indviduellQ.poeng);
            });

            if (intOrArray === undefined) return tPs.reduce(function(x, y) {
                return x + y;
            }, 0);
            else return tPs;

            /* merk! husk å ta vekk parameter intOrArray!
            let tPs = 0;
            spørsmArr.forEach(spørsm => {
                tPs += spørsm.poeng;
            });
            
            return tPs;
            */

            //klakssnksnkl
        }

        function endrePoeng(obj, spørsmål, tegn){
            if (tegn === "pluss")
            {
                spørsmål.poeng++;
                obj.TotalPoeng++;
            }
            else 
            {
                spørsmål.poeng--;
                obj.TotalPoeng--;
            }
            checkIfFinished();
        }

        function checkIfFinished() 
        {
            let count = 0;
            seksjoner.value.forEach(element => {
                count += element.TotalPoeng;
            });
            if (count == 70)
            {
                isFinished.value = true;
            }    
        }


        const getResult = () =>  {
            //let chech = confirm();
            //if(!chech)
            //{
            //    return;
            //}
            
            const letterPoints = [];

            
            for(let i = 0; i < seksjoner.value.length; i++)
            {
                const letterPoint = [];
                for(let j = 0; j < 7; j++)
                {
                    letterPoint.push(seksjoner.value[i].Spørsmål[j].poeng);
                }
                letterPoints.push(letterPoint);
            }


            var roller = Roller;
            
            for(let i = 0; i < roller.length; i++)
            {
                for(let j = 0; j < roller[i].letters.length; j++)
                {
                    let objSelect = seksjoner.value[j].Spørsmål.find(e => e.letter == roller[i].letters[j]);
                    roller[i].points.push(objSelect.poeng);
                }
                for(let j = 0; j < roller[i].points.length; j++)
                {
                    roller[i].total += roller[i].points[j];
                }
            }

            //console.log(roller);
            let vinner = roller.sort((a, b) => b.total - a.total);

            //thewinners.value = vinner.filter(n => n.total == vinner[0].total);

            for(let i = 0; i < 3; i++){
                thewinners.value.push(vinner[i]);
            }
            console.log(thewinners.value);
        }



</script>

<template>
    <div class="tabell_1" v-for="tabell in seksjoner">
        <div><small>{{ tabell.SeksjonTall.toLowerCase() }} - </small> {{tabell.Tittel}}</div>
        <div class="tabell_1_spørsmålOppsett">
            <div v-for="spørsmål in tabell.Spørsmål">
                <div>{{ spørsmål.letter }}</div>
                <div class="høver">
                    <button @click="endrePoeng(tabell, spørsmål, 'pluss')" :disabled="tabell.TotalPoeng >= 10 || spørsmål.poeng >= 10">+</button>
                    {{ spørsmål.poeng }}
                    <button @click="endrePoeng(tabell, spørsmål, )" :disabled="tabell.TotalPoeng <= 0 || spørsmål.poeng <= 0">-</button>
                </div>
                <div>{{ spørsmål.q }}</div>
            </div>
            <div>
                <div>Total</div>
                <div>{{ getTotals(tabell.Spørsmål) }}</div>
                <div class="tommy"></div>
            </div>
        </div>
    </div>
    <div v-if="isFinished">
        <button @click="getResult">Lever resultat</button>
      
        <div id="finished" v-if="thewinners" v-for="vinner in thewinners">
          
          <br>            
            {{vinner.name}}
          <br>
            {{vinner.fullName}}
          <br>
            {{vinner.typicalFeatures}}
          <br>
            {{vinner.positiveQualities}}
          <br>
            {{vinner.allowableWeaknesses}}

          <br/>
        </div>
        <button @click="addResult">Klikk for å lagre resultatet ditt!</button>
          <br/>
          <button>Prøv igjen?</button>
        </div>
  
</template>

<style scoped>
    * { margin: 0; padding: 0; }
    body { padding: 20px; }
    .tabell_1 { border: 2px solid darkorchid; margin: 0 0 20px 0; border-width: 2px 2px 0 2px;}
    .tabell_1 > div:first-child { 
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .tabell_1_spørsmålOppsett { border: darkcyan solid; border-width: 1px 0; }
    .tabell_1_spørsmålOppsett > div {
        display: grid;
        grid-template-columns: 70px 100px 1fr;
        gap: 2px;
        background-color: darkcyan;
        padding: 1px 0;
    }
    .tabell_1_spørsmålOppsett > div > div, .tabell_1 > div:first-child {
        background-color: rgb(216, 212, 212);
        padding: 10px 20px;
    }
    .tabell_1_spørsmålOppsett > div > div:last-child {
        text-align: left;
    }
    .tabell_1_spørsmålOppsett > div:last-child > div:last-child {
        color: rgb(49, 191, 27);
    }

    .høver {
        padding: 0;
    }
    /* .høver:hover { background-color: rgb(196, 248, 255); cursor: pointer; } */
    /*.tabell_1{
        display: grid;
        grid-template-columns: repeat(2, 70px) 1fr;
        gap: 2px;
        margin-bottom: 15px;
        background-color: darkcyan;
        border: 2px solid darkcyan;
    }
    .tabell_1 > div {
        background-color: white;
        padding: 20px 6px;
        font-size: 1.2rem;
    }
    .tabell_1 > div:first-child {
        grid-column: 1 / 4;
        padding: 6px 20px;
    }
    .høver { color: #85cfe7; text-align: center; }
    .høver:hover { background-color: seashell; cursor: pointer; }
    .tommy { color: #41adb1; }
    */
</style>