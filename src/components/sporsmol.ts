import { ref } from "vue";

export const Seksjoner = ref([
    {
        TotalPoeng: 10,
        SeksjonTall: "I",
        Tittel: "Hva jeg tror jeg kan bidra med til et team:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg tror jeg raskt kan se og utnytte nye muligheter",
                poeng: 0
            },
            {
                letter: "b",
                q: "Jeg kan jobbe godt med et bredt spekter av mennesker",
                poeng: 0
            },
            {
                letter: "c",
                q: "Å produsere ideer er en av mine naturlige styrker",
                poeng: 0
            },
            {
                letter: "d",
                q: "Min evne ligger i å kunne trekke folk frem når jeg oppdager at de har noe verdifullt å bidra med til gruppens mål",
                poeng: 1
            },
            {
                letter: "e",
                q: "Min evne til å følge opp har mye å gjøre med min personlige effektivitet",
                poeng: 3
            },
            {
                letter: "f",
                q: "Jeg er klar til å møte midlertidig upopularitet hvis det leder til verdifulle resultater til slutt",
                poeng: 10
            },
            {
                letter: "g",
                q: "Jeg kan vanligvis fornemme hva som er realistisk og sannsynlig å fungere",
                poeng: 3
            },
            {
                letter: "h",
                q: "Jeg kan tilby en begrunnet sak for alternative handlingsforløp uten å introdusere skjevhet eller fordommer",
                poeng: 3
            }
        ]
    },
    {
        TotalPoeng: 10,
        SeksjonTall: "II",
        Tittel: "Hvis jeg har en mulig svakhet i teamarbeid, kan det være at:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg er ikke komfortabel med mindre møter er godt strukturerte og kontrollert og generelt godt gjennomført",
                poeng: 5
            },
            {
                letter: "b",
                q: "Jeg har en tendens til å være for generøs mot andre som har et gyldig synspunkt som ikke har fått ordentlig lufting",
                poeng: 0
            },
            {
                letter: "c",
                q: "Jeg har en tendens til å snakke for mye når gruppen kommer inn på nye ideer",
                poeng: 5
            },
            {
                letter: "d",
                q: "Min objektive synsvinkel gjør det vanskelig for meg å delta lett og entusiastisk med kolleger",
                poeng: 0
            },
            {
                letter: "e",
                q: "Jeg blir noen ganger sett som kraftfull og autoritær hvis det er behov for å få noe gjort",
                poeng: 0
            },
            {
                letter: "f",
                q: "Jeg synes det er vanskelig å lede fra fronten, kanskje fordi jeg er for responsiv til gruppens stemning",
                poeng: 0
            },
            {
                letter: "g",
                q: "Jeg har en tendens til å bli for oppslukt i ideer som dukker opp for meg og dermed miste oversikten over hva som skjer",
                poeng: 10
            },
            {
                letter: "h",
                q: "Mine kolleger har en tendens til å se meg som bekymret unødvendig over detaljer og muligheten for at ting kan gå galt",
                poeng: 0
            }
        ]
    },
    {
        TotalPoeng: 10,
        SeksjonTall: "III",
        Tittel: "Når jeg er involvert i et prosjekt med andre mennesker:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg har en evne til å påvirke mennesker uten å presse dem",
                poeng: 10
            },
            {
                letter: "b",
                q: "Min generelle årvåkenhet forhindrer uforsiktige feil og utelatelser fra å bli gjort",
                poeng: 0
            },
            {
                letter: "c",
                q: "Jeg er klar til å presse for handling for å sikre at møtet ikke sløser tid eller mister synet på hovedmålet",
                poeng: 0
            },
            {
                letter: "d",
                q: "Jeg kan regnes med å bidra med noe originalt",
                poeng: 0
            },
            {
                letter: "e",
                q: "Jeg er alltid klar til å støtte et godt forslag i fellesskapets interesse",
                poeng: 0
            },
            {
                letter: "f",
                q: "Jeg er ivrig etter å se etter det nyeste i nye ideer og utviklinger",
                poeng: 0
            },
            {
                letter: "g",
                q: "Jeg tror min evne til dømmekraft kan hjelpe til med å bringe om de rette beslutningene",
                poeng: 10
            },
            {
                letter: "h",
                q: "Jeg kan kalles på for å se til at alt essensielt arbeid er organisert",
                poeng: 0
            }
        ]
    },
    {
        TotalPoeng: 10,
        SeksjonTall: "IV",
        Tittel: "Min karakteristiske tilnærming til gruppearbeid er at:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg har en stille interesse i å bli bedre kjent med kolleger",
                poeng: 10
            },
            {
                letter: "b",
                q: "Jeg er ikke motvillig til å utfordre andres synspunkter eller til å holde et minoritets-syn selv",
                poeng: 0
            },
            {
                letter: "c",
                q: "Jeg kan vanligvis finne en linje med argumenter for å motbevise usounde proposisjoner",
                poeng: 0
            },
            {
                letter: "d",
                q: "Jeg tror jeg har et talent for å få ting til å fungere når en plan skal settes i verk",
                poeng: 0
            },
            {
                letter: "e",
                q: "Jeg har en tendens til å unngå det åpenbare og å komme med det uventede",
                poeng: 0
            },
            {
                letter: "f",
                q: "Jeg bringer et preg av perfeksjonisme til enhver jobb jeg tar på meg",
                poeng: 0
            },
            {
                letter: "g",
                q: "Jeg er klar til å bruke kontakter utenfor gruppen selv",
                poeng: 10
            },
            {
                letter: "h",
                q: "Mens jeg er interessert i alle synspunkter har jeg ingen nøling med å ta en avgjørelse når en beslutning må tas",
                poeng: 0
            }
        ]
    },
    {
        TotalPoeng: 10,
        SeksjonTall: "V",
        Tittel: "Jeg får tilfredsstillelse i en jobb fordi:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg nyter å analysere situasjoner og veie opp alle mulige valg",
                poeng: 0
            },
            {
                letter: "b",
                q: "Jeg er interessert i å finne praktiske løsninger på problemer",
                poeng: 0
            },
            {
                letter: "c",
                q: "Jeg liker å føle at jeg fremmer gode arbeidsrelasjoner",
                poeng: 0
            },
            {
                letter: "d",
                q: "Jeg kan ha sterk innflytelse på beslutninger",
                poeng: 0
            },
            {
                letter: "e",
                q: "Jeg kan møte mennesker som kanskje har noe nytt å tilby",
                poeng: 0
            },
            {
                letter: "f",
                q: "Jeg kan få mennesker til å bli enige om en nødvendig handlingsvei",
                poeng: 0
            },
            {
                letter: "g",
                q: "Jeg føler meg i mitt esse der jeg kan gi en oppgave min fulle oppmerksomhet",
                poeng: 0
            },
            {
                letter: "h",
                q: "Jeg liker å finne et felt som strekker min fantasi",
                poeng: 10
            }
        ]
    },
    {
        TotalPoeng: 10,
        SeksjonTall: "VI",
        Tittel: "Hvis jeg plutselig får en vanskelig oppgave med begrenset tid og ukjente mennesker:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg ville føle meg fristet til å trekke meg tilbake i et hjørne for å finne en vei ut av dødvannet før jeg utvikler en linje",
                poeng: 10
            },
            {
                letter: "b",
                q: "Jeg ville være klar til å jobbe med personen som viste den mest positive tilnærmingen",
                poeng: 10
            },
            {
                letter: "c",
                q: "Jeg ville finne en måte å redusere størrelsen på oppgaven ved å etablere hva forskjellige individer kunne bidra best med",
                poeng: 0
            },
            {
                letter: "d",
                q: "Min naturlige følelse av haster ville hjelpe til med å sikre at vi ikke falt etter skjema",
                poeng: 0
            },
            {
                letter: "e",
                q: "Jeg tror jeg ville holde meg rolig og opprettholde min evne til å tenke rett",
                poeng: 0
            },
            {
                letter: "f",
                q: "Jeg ville beholde en urokkelig formålstro til tross for presset",
                poeng: 0
            },
            {
                letter: "g",
                q: "Jeg ville være forberedt på å ta en positiv ledelse hvis jeg følte at gruppen ikke gjorde fremskritt",
                poeng: 0
            },
            {
                letter: "h",
                q: "Jeg ville åpne opp diskusjoner med tanke på å stimulere nye tanker og få noe i gang",
                poeng: 0
            }
        ]
    },
    {
        TotalPoeng: 9,
        SeksjonTall: "VII",
        Tittel: "Med henvisning til problemene jeg er utsatt for i arbeidet i grupper:",
        Spørsmål: [
            {
                letter: "a",
                q: "Jeg har en tendens til å vise min utålmodighet med de som blokkerer fremgangen",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                poeng: 4
=======
                poeng: 9
>>>>>>> Stashed changes
=======
                poeng: 9
>>>>>>> Stashed changes
            },
            {
                letter: "b",
                q: "Andre kan kritisere meg for å være for analytisk og for lite intuitiv",
                poeng: 5
            },
            {
                letter: "c",
                q: "Min trang til å sikre at arbeidet gjøres riktig kan holde opp prosessen",
                poeng: 0
            },
            {
                letter: "d",
                q: "Jeg har en tendens til å bli kjedet ganske lett og stole på en eller to stimulerende medlemmer for å tenne meg",
                poeng: 0
            },
            {
                letter: "e",
                q: "Jeg synes det er vanskelig å komme i gang med mindre målene er klare",
                poeng: 0
            },
            {
                letter: "f",
                q: "Jeg er noen ganger dårlig til å forklare og klargjøre komplekse punkter som dukker opp for meg",
                poeng: 0
            },
            {
                letter: "g",
                q: "Jeg er bevisst på å kreve fra andre tingene jeg ikke kan gjøre selv",
                poeng: 0
            },
            {
                letter: "h",
                q: "Jeg nøler med å få mine poenger frem når jeg støter på reell motstand",
                poeng: 0
            }
        ]
    }
]);