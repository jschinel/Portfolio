
/* Reset Variables
--------------------------------------------------------------------- */
let computerWord="";
let wrongIndex = 0;
let correctIndex = 0;
let correctNum=0;
let correct = [];
let wrong = [];
let tempWholeWord = "";
let language = 0;


/* Create a function to change display for winning
--------------------------------------------------------------------- */
function displayWin(){
    resultsText.innerText="LOOKS LIKE YOU WON!";
    popup.style.display="grid";
    results.style.display="grid";
    rulesContainer.style.display = "none"
    gameDisplay.style.display = "none";
    resumeGame.style.display = "none"
}
/* Create a function to change display for losing
--------------------------------------------------------------------- */
function displayLose(){
    resultsText.innerText="LOOKS LIKE YOU LOST";
    popup.style.display="grid";
    results.style.display="grid";
    rulesContainer.style.display = "none"
    gameDisplay.style.display = "none";
    resumeGame.style.display = "none"
}

/* Create a function to change display for playing game
--------------------------------------------------------------------- */
function displayGame(){
    popup.style.display="none";
    results.style.display="none";
    rulesContainer.style.display = "none"
    gameDisplay.style.display = "grid";
    resumeGame.style.display = "none"
}


/* Create a function to reset buttons after game is over
--------------------------------------------------------------------- */
function gameReset(correctArray,wrongArray) {
    if(wrongArray.length!=0)
    {
        for(let n = 0 ; n < wrongArray.length ; n ++)
        {
            hangman[n].style.display="none"
            tempchar=wrongArray[n]
            if(tempchar.length==1)
            {
                tempButton=document.getElementById(tempchar)
                tempButton.disabled=false;
            }
        }
    }
    if(correctArray.length!=0)
    {
        console.log(correctArray)
        for(let n = 0 ; n < correctArray.length ; n ++)
        {
            tempchar=correctArray[n]
            tempButton=document.getElementById(tempchar)
            tempButton.disabled=false;
        }
    }
    correctIndex=0
    wrongIndex=0;
    wrong=[];
    correct=[];
}


/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */


function $(cssSelector) {
    return document.querySelector(cssSelector)
}


/* Create a function called `calcsStat` for selecting random Element within a Range
-----------------------------------------------------------------------------------------*/


function calcStat (min,max)
{
   return Math.floor((Math.random() * (max-min))+ min);
}


/* Create a function called `calcsStat` for selecting random Element within a Range
-----------------------------------------------------------------------------------------*/


function grabWord (category)
{
    computerWord = category[calcStat(0,(category.length))]
    wrongLetters.innerText="";
    for(let i=0 ; i<6; i++)
    {
        hangman[i].style.display="none"
    }
    for(let i = 0 ; i<=computerLetter.length-1; i ++)
    {
        let tempId = document.getElementById(computerLetter[i].id)
        tempId.style.display="none"
    }
    for(let i = 0 ; i<=computerWord.length-1 ; i ++)
    {
        let tempId = document.getElementById(computerLetter[i].id)
        computerLetter[i].innerText="_";
        tempId.style.display="grid"
        console.log(computerWord[i]);
    }
}


/* All HTML elements we need to manipulate
--------------------------------------------------------------------- */

const popup = $('#popup')
const head = $("#head")
const torso = $('#torso')
const leftArm = $('#leftArm')
const rightArm = $('#rightArm')
const leftLeg = $('#leftLeg')
const rightLeg = $('#rightLeg')
const results = $('.results')
const rulesContainer = $('.rulesContainer')
const wrongLetters = $('#wrongletters')
const gameDisplay = $('.game')
const christmasPlayGame = $('#christmas')
const summerPlayGame = $('#summer')
const sportsPlayGame = $('#sports')
const kitchenPlayGame = $('#cocina')
const rules = $('#rulesButton')
const keyBoardBtn = $('.keyboard')
const playAgain = $('#Yes')
const resultsText = $('#resultsText')
const wholeword = $("#wholeword")
const submit = $("#submit")
const resumeGame = $("#resume")
const spanish = $("#spanish")
const english = $("#english")
const rulesHeader = $("#rules")
const rulesText = $("#rulesText")


/* All HTML elements we need to manipulate computers choice section
--------------------------------------------------------------------- */


const letter1 = $("#l1")
const letter2 = $("#l2")
const letter3 = $("#l3")
const letter4 = $("#l4")
const letter5 = $("#l5")
const letter6 = $("#l6")
const letter7 = $("#l7")
const letter8 = $("#l8")
const letter9 = $("#l9")
const letter10 = $("#l10")
const letter11 = $("#l11")
const letter12 = $("#l12")
const letter13 = $("#l13")
const letter14 = $("#l14")
const letter15 = $("#l15")
const letter16 = $("#l16")
const letter17 = $("#l17")
const letter18 = $("#l18")
const letter19 = $("#l19")
const letter20 = $("#l20")

computerLetter=
[
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    letter6,
    letter7,
    letter8,
    letter9,
    letter10,
    letter11,
    letter12,
    letter13,
    letter14,
    letter15,
    letter16,
    letter17,
    letter18,
    letter19,
    letter20,
]

for(let i = 0 ; i<=computerLetter.length-1; i ++)
{
    let tempId = document.getElementById(computerLetter[i].id)
    tempId.style.display="none"
    computerLetter[i].innerText="_"
}


/* THIS SECTION IS FOR THE Initial Screens
--------------------------------------------------------------------- */

for(let i = 0 ; i<=26; i ++)
{
    const enableBTN = document.getElementById("clicked")

   console.log(enableBTN)
}


/* THIS SECTION IS FOR THE SETTING UP HANGMAN
--------------------------------------------------------------------- */
head.style.display = "none";
torso.style.display = "none";
leftArm.style.display = "none";
rightArm.style.display = "none";
leftLeg.style.display = "none";
rightLeg.style.display = "none";

const hangman= [head,torso,leftArm,rightArm,leftLeg,rightLeg];

/* THIS SECTION IS FOR THE GETTING RID OF HANGMAN AND GRABBING RANDOM WORD FROM CORRESPONDING ARRAY
--------------------------------------------------------------------------------------------------*/
christmasPlayGame.addEventListener('click', () => 
{
    displayGame();
    if(language==1)
    {
        grabWord(christmasChoicesSpanish);
    }
    else
    {
        grabWord(christmasChoices);        
    }
}
)


sportsPlayGame.addEventListener('click', () => 
{
    displayGame();
    if(language==1)
    {
        grabWord(sportsChoicesSpanish);
    }
    else
    {
        grabWord(sportsChoices);        
    }
}
)

summerPlayGame.addEventListener('click', () => 
{
    displayGame()
    if(language==1)
    {
        grabWord(summerChoicesSpanish);
    }
    else
    {
        grabWord(summerChoices);        
    }
}
)

kitchenPlayGame.addEventListener('click', () => 
{
    displayGame();
    if(language==1)
    {
        grabWord(kitchenChoicesSpanish);
    }
    else
    {
        grabWord(kitchenChoices);        
    }
}
)

rules.addEventListener('click', () => 
{
    popup.style.display="grid";
    results.style.display="none";
    rulesContainer.style.display ="grid";
    gameDisplay.style.display ="none";
    resumeGame.style.display = "grid";
}
)
resumeGame.addEventListener('click', () => 
{
    displayGame();
}
)

keyBoardBtn.addEventListener('click', () =>
{
    wholeword.value="";
    buttonClicked=document.getElementById("clicked");
    buttonClicked.setAttribute('id',keyBoardBtn.id);
    buttonClicked.setAttribute('disabled','true')
    correctNum=0;
    for(let i = 0 ; i <= computerWord.length-1; i ++)
    {
        let tempString = computerWord[i].toUpperCase(i);
        if(keyBoardBtn.id==tempString)
        {
            correctNum=1;
            computerLetter[i].innerText = keyBoardBtn.id ;
            correct[correctIndex] = keyBoardBtn.id;
            correctIndex++;
            if(correctIndex==computerWord.length)
            {
                keyBoardBtn.id="";
                displayWin();
                gameReset(correct,wrong);

            }
        }
        if( correctNum != 1 && i == (computerWord.length-1))
        {
            tempBody = hangman[wrongIndex];
            tempBody.style.display="grid";           
            wrong[wrongIndex] = keyBoardBtn.id;
            wrongLetters.innerText=wrong;
            keyBoardBtn.id="";
            correctNum=0;
            hangman[wrongIndex].style.display="grid";
            wrongIndex++;
            if(wrongIndex==hangman.length)
            {
                displayLose();
                gameReset(correct,wrong);
            }
        }
    }
})

playAgain.addEventListener('click', () => 
{
    popup.style.display="grid";
    results.style.display="none";
    rulesContainer.style.display = "grid";
    gameDisplay.style.display = "none";
    resumeGame.style.display = "none";
}
)


submit.addEventListener('click', () => 
{
    for(let i = 0 ; i < wholeword.value.length; i++)
    {
        tempWholeWord = wholeword.value.toLowerCase(i);
    }
    if(wholeword.value != "")
    {
        if(tempWholeWord==computerWord)
        {
            keyBoardBtn.id="";
            displayWin();
            gameReset(correct,wrong);
        }
        if(tempWholeWord!=computerWord)
        {
            hangman[wrongIndex].style.display="grid";
            wrong[wrongIndex]=tempWholeWord;
            wrongLetters.innerText=wrong;  
            wrongIndex++;
            if(wrongIndex==hangman.length)
            {
                displayLose();
                gameReset(correct,wrong)
            }
        }
    }
    wholeword.value="";
} )


/* THIS SECTION CONVERTS THE LANGUGE
--------------------------------------------------------------------- */
spanish.addEventListener('click', () => 
{
    rulesHeader.innerText=`REGLAS`;
    rulesText.innerHTML=`Una vez que se selecciona una categoría a continuación, se elegirá una palabra aleatoria<br>
    </br>
    Usa el teclado en pantalla para seleccionar la letra que crees que contiene la palabra<br>
    </br>
    Si la letra que ha seleccionado es correcta, se mostrará<br> 
    </br>
    Si es incorrecto, aparecerá en el lado izquierdo en "Letras incorrectas" Y se dibujará una parte del ahorcado.<br>
    </br>
    ¡Solo tienes 6 oportunidades! En cualquier momento que creas que sabes la respuesta, puedes escribirla en el lado derecho. ¡Asegúrate de enviarlo!<br>
    </br>
    ¡¡Buena suerte!!<b></b>Elija su categoría a continuación`;
    christmasPlayGame.innerText=`Artículos de Navidad`;
    sportsPlayGame.innerText=`Artículos deportivos`
    summerPlayGame.innerText=`Artículos de verano`;
    kitchenPlayGame.innerText='Artículos de cocina';
    spanish.innerText="Espanol";
    english.innerText="Ingles";
    language = 1;
}
)
english.addEventListener('click', () => 
{
    rulesHeader.innerText="RULES";
    rulesText.innerHTML=`Once a category is selected below a random word will be chosen<br>
    </br>
    Use the on screen keyboard to select the letter that you think the word conatains<br>
    </br>
    If the letter you have selected is correct it will be be displayed<br>
    </br>
    If its incorrect it will be listed on the left hand side under "Incorrect Letters" AND a piece of the hangman will be drawn on.<br>
    </br>
    You only have 6 chances! At any time you think you know the answer you can type it in on the right hand side. Make sure to submit!<br>
    </br>
    Good Luck!!<b></b>Choose your category below`;
    christmasPlayGame.innerText=`Christmas Items`;
    sportsPlayGame.innerText=`Sports Items`;
    summerPlayGame.innerText=`Summer Items`;
    kitchenPlayGame.innerText=`Kitchen Items`;
    spanish.innerText="Spanish";
    english.innerText="English";
    language = 0;
}
)
/* THIS SECTION CONTAINS THE ARRAY OF COMPUTER ENGLISH CHOICES
--------------------------------------------------------------------- */
const christmasChoices= ["santa","presents","coal","snow","sledding","cookies","snowman","reindeer","chestnuts","ornaments"];
const sportsChoices= ["basketball","Soccer","football","baseball","tennis","hockey","volleyball","rugby","boxing","cricket"];
const summerChoices= ["beach","fishing","boating","vacation","sunburn","surfing","sandals","pool","sand","bonfire","sunset"];
const kitchenChoices=["Refrigerator","Plate","Fork","Knife","Cup","Cup","Pot","Pan","Can Opener","Bowl","Blender"]


/* THIS SECTION CONTAINS THE ARRAY OF COMPUTER SPANISH CHOICES
--------------------------------------------------------------------- */
const christmasChoicesSpanish= [
    "Nochebuena",
    "Parranda",
    "Aguinaldo",
    "Posada",
    "Pastorela",
    "Nacimiento",
    "Pascua",
    "EstrellaDeBelén",
    "Guirnalda",
    "Turrón",
    "Peregrinación",
    "Belén",
    "MisaDeGallo",
    "Trineo",
    "Renos",
    "PapáNoel",
    "AdornoNavideño",
    "Vela",
    "Cántico",
    "Yule",
    "Fraternidad",
    "Nevar",
    "Reunión",
    "Jubiloso",
    "Ornamento",
    "Tradición",
    "Epifanía",
    "Festividad",
    "Regocijo",
    "Campanadas",
    "Festín",
    "Resplandor",
    "Conmemorar",
    "Serenidad",
    "Anís",
    "Candelabro",
    "Armonía",
    "Canturrear",
    "Ventisca",
    "Invernal"]
const sportsChoicesSpanish= ["Deportividad",
"Polideportivo",
"Arbitraje",
"Entrenamiento",
"Equitación",
"PatinajeArtístico",
"Paracaidismo",
"Halterofilia",
"Karateca",
"Judo",
"Triatlón",
"TiroconArco",
"Alpinismo",
"Balonmano",
"Pentatlón",
"Fisiculturismo",
"Remo",
"Esgrima",
"Espeleología",
"Voleibol",
"HockeySobreHielo",
"Ciclismo",
"Surfista",
"Biatlón",
"EsquíNórdico",
"Motocross",
"PatinajeVelocidad",
"Boxeador",
"LanzamientodeDisco",
"Triatleta",
"Atletismo",
"GimnasiaRítmica",
"CarrerasdeMontaña",
"FútbolSala",
"Rugby",
"Taekwondo",
"MarchaAtlética",
"Slalom",
"Waterpolo",
"Hípica"];
const summerChoicesSpanish= ["Sombrilla",
"ProtectorSolar",
"Chapuzón",
"Helado",
"Sandalias",
"GafasdeSol",
"PiscinaInflable",
"Paleta",
"Picarona",
"CocinaSolar",
"Manguitos",
"Chiringuito",
"Frisbee",
"Hamaca",
"Hielera",
"Inflable",
"Piragua",
"Sorbete",
"Brújula",
"Clavadista",
"Cocotero",
"Crepúsculo",
"Gruta",
"Horizonte",
"Marea",
"Orilla",
"Playa",
"Resaca",
"Siesta",
"Barbacoa",
"Catarata",
"Fogón",
"Jardín",
"LuzdeLuna",
"Parrillada",
"Ventilador",
"Cascada",
"Estío",
"Rocio",
"Veraneante"];

const kitchenChoicesSpanish= ["Batidora",
"CuchilloEléctrico",
"Colador",
"Centrifugadora",
"Exprimidor",
"MolinillodeCafé",
"SarténAntiadherente",
"Tostadora",
"Licuadora",
"Hervidor",
"Abrelatas",
"Rayador",
"Espumadera",
"Cacerola",
"Cucharon",
"Balanza",
"TermómetrodeCocina",
"Batidor",
"Mandolina",
"OllaExpress",
"TajadoradeVegetales",
"Embudo",
"Mortero",
"Parrilla",
"Espátula",
"Cafetera",
"Cucharón",
"CucharadeMedir",
"Tetera",
"Báscula",
"MolinillodePimienta",
"RalladordeQueso",
"CucharaHendida",
"SacaCorchos",
"CocinaEléctrica",
"Mantequillera",
"CandelabrodeCocina",
"AbrelatasEléctrico",
"Paellera",
"PlanchadeAsar"];