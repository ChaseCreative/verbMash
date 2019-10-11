
//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "What's in Your Future!";
    var game2Title = get("answerTwo").innerHTML = "Four Tense Moments!";
    var game3Title = get("answerThree").innerHTML = "Perfect Mash Up!";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "verbMash";}

function gameTitle() {get("startButton").innerHTML = "What will you do!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();





var verbsFirst = [["am", "loving"], ["st", "standing"],["labor", "working"], ["habit", "living"], ["cogit", "thinking"], ["cant", "singing"], ["d", "giving"],["laud", "praising"],["serv", "saving"],["voc", "calling"],["err", "wandering"], ["conserv", "preserving"]];

var verbsFirstPer = [["amav", "loved"], ["stet", "stood"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sung"], ["ded", "given"],["laudav", "praised"],["servav", "saved"],["vocav", "called"],["errav", "wandered"],["conservav", "preserved"]];


var perEndingsFirst = [["ō", "I am "], ["ās", "You are "], ["at", "She/he/it is "], ["āmus", "We are "], ["ātis", "Ya'll are "], ["ant", "They are "]];

var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

var perEndingsFirstPerfect = [["ī", "I have "], ["isti", "You have "], ["it", "She/he/it has "], ["imus", "We have "], ["istis", "Ya'll have "], ["ērunt", "They have "]];

var pluPerEndingsFirstPerfect = [["eram", "I had "], ["eras", "You had "], ["erat", "She/he/it had "], ["eramus", "We had "], ["eratis", "Ya'll had "], ["erant", "They had "]];

var futPerEndings = [["ero", "I will have "], ["eris", "You will have "], ["erit", "She/he/it will have "], ["erimus", "We will have "], ["eritis", "Ya'll will have "], ["erint", "They will have "]];

var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];


var verbsFirstFuture = [["amā", "love"], ["sta", "stand"],["laborā", "work"], ["habitā", "live"], ["cogitā", "think"], ["cantā", "sing"], ["dā", "give"],["laudā", "praise"],["servā", "save"],["vocā", "call"],["errā", "wander"],["conservā", "preserve"]];

var verbsSecondFuture = [["vidē", "see"], ["terrē", "frighten"], ["habē", "have"], ["tenē", "hold"], ["monē", "warn"], ["sedē", "sit"],["timē", "fear"],["manē","remain"]];

var perEndingsFuture = [["bō", "I will "], ["bis", "You will "], ["bit", "She/he/it will "], ["bimus", "We will "], ["bitis", "Ya'll will "], ["bunt", "They will "]];

var verbsThird = [["duc", "lead"], ["dīc", "say"], ["intelleg", "understand"],["mitt", "send"],["vīv", "live"],["curr", "run"], ["ag", "do"], ["scrīb", "write"], ["vinc", "conquer"],["trah", "drag"],["ger", "wear"]];

var perEndingsThirdFuture = [["am", "I will "], ["ēs", "You will "], ["et", "She/he/it will "], ["ēmus", "We will "], ["ētis", "Ya'll will "], ["ent", "They will "]];

var verbsThirdIoAndFourth = [["faci", "make"], ["audi", "hear"], ["senti", "feel"],["dormi", "sleep"], ["accipi", "receive"], ["capi", "capture"], ["fugi", "flee"],["inveni", "find"],["veni", "come"]];

var perEndingsThirdIoAndFourthFuture = [["am", "I will "], ["ēs", "You will "], ["et", "She/he/it will "], ["ēmus", "We will "], ["ētis", "Ya'll will "], ["ent", "They will "]];


var randIndex = Math.floor(Math.random() * 12);
var randPEIndex = Math.floor(Math.random() * 6);
var randVerbPickIndex = Math.floor(Math.random() * 4);


var futTV0 =  verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];
var presTV1 = verbsFirst[randIndex][0] + perEndingsFirst[randPEIndex][0];
var impTV2 = verbsFirst[randIndex][0] + perEndingsFirstImp[randPEIndex][0];
var perTV3 = verbsFirstPer[randIndex][0] + perEndingsFirstPerfect[randPEIndex][0];
var pluPerTV4 = verbsFirstPer[randIndex][0] + pluPerEndingsFirstPerfect[randPEIndex][0];
var futPerTV5 = verbsFirstPer[randIndex][0] + futPerEndings[randPEIndex][0];


var randVerbPick = [pluPerTV4,presTV1,futPerTV5,perTV3];
var rand4TenseVerbPick = [pluPerTV4, presTV1,impTV2,perTV3];


var randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsFirstFuture[randIndex][1];
var randVerbPickEnglish1 = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
var randVerbPickEnglish2 = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];
var randVerbPickEnglish3 = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
var randVerbPickEnglish4 = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
var randVerbPickEnglish5 = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];

var randVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish5,randVerbPickEnglish3];
var rand4TenseVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3];


function resetQuestions(){

randIndex = Math.floor(Math.random() * 12);
randPEIndex = Math.floor(Math.random() * 6);
randVerbPickIndex = Math.floor(Math.random() * 4);

futTV0 =  verbsFirstFuture[randIndex][0] + perEndingsFuture[randPEIndex][0];
presTV1 = verbsFirst[randIndex][0] + perEndingsFirst[randPEIndex][0];
impTV2 = verbsFirst[randIndex][0] + perEndingsFirstImp[randPEIndex][0];
perTV3 = verbsFirstPer[randIndex][0] + perEndingsFirstPerfect[randPEIndex][0];
pluPerTV4 = verbsFirstPer[randIndex][0] + pluPerEndingsFirstPerfect[randPEIndex][0];
futPerTV5 = verbsFirstPer[randIndex][0] + futPerEndings[randPEIndex][0];

randVerbPick = [pluPerTV4, presTV1,futPerTV5,perTV3];

rand4TenseVerbPick = [pluPerTV4, presTV1,impTV2,perTV3];


randVerbPickEnglish0 = perEndingsFuture[randPEIndex][1] + verbsFirstFuture[randIndex][1];
randVerbPickEnglish1 = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1];
randVerbPickEnglish2 = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1];
randVerbPickEnglish3 = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
randVerbPickEnglish4 = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1];
randVerbPickEnglish5 = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];

randVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish5,randVerbPickEnglish3];

rand4TenseVerbPickEnglishArray = [randVerbPickEnglish4,randVerbPickEnglish1,randVerbPickEnglish2,randVerbPickEnglish3];



verbsFirst = [["am", "loving"], ["st", "standing"],["labor", "working"], ["habit", "living"], ["cogit", "thinking"], ["cant", "singing"], ["d", "giving"],["laud", "praising"],["serv", "saving"],["voc", "calling"],["err", "wandering"], ["conserv", "preserving"]];

verbsFirstPer = [["amav", "loved"], ["stet", "stood"],["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sung"], ["ded", "given"],["laudav", "praised"],["servav", "saved"],["vocav", "called"],["errav", "wandered"],["conservav", "preserved"]];


perEndingsFirst = [["ō", "I am "], ["ās", "You are "], ["at", "She/he/it is "], ["āmus", "We are "], ["ātis", "Ya'll are "], ["ant", "They are "]];

perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

perEndingsFirstPerfect = [["ī", "I have "], ["isti", "You have "], ["it", "She/he/it has "], ["imus", "We have "], ["istis", "Ya'll have "], ["ērunt", "They have "]];

futPerEndings = [["ero", "I will have "], ["eris", "You will have "], ["erit", "She/he/it will have "], ["erimus", "We will have "], ["eritis", "Ya'll will have "], ["erint", "They will have "]];

answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];


verbsFirstFuture = [["amā", "love"], ["sta", "standing"],["laborā", "work"], ["habitā", "live"], ["cogitā", "think"], ["cantā", "sing"], ["dā", "give"],["laudā", "praise"],["servā", "save"],["vocā", "call"],["errā", "wander"],["conservā", "preserve"]];

verbsSecondFuture = [["vidē", "see"], ["terrē", "frighten"], ["habē", "have"], ["tenē", "hold"], ["monē", "warn"], ["sedē", "sit"],["timē", "fear"],["manē","remain"]];

perEndingsFuture = [["bō", "I will "], ["bis", "You will "], ["bit", "She/he/it will "], ["bimus", "We will "], ["bitis", "Ya'll will "], ["bunt", "They will "]];


}


//shuffle(randVerbPick);



//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){futureTenseVerbShuffle()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){fourTenseShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){verbTenseShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){threeVerbTenseShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }






function verbTenseShuffle(){


resetQuestions();



countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


//shuffle(verbsFirstFuture);
//shuffle(verbsFirst)
//shuffle(verbFristPer)
//shuffle(verbsSecondFuture);
//shuffle(perEndingsFuture);


shuffle(answers);



//shuffle(randVerbPick);
//shuffle(randIndex);
//shuffle(randPEIndex);
//shuffle(randVerbPickIndex);



function shuffleAllVerbs(){




//var randIndex = Math.floor(Math.random() * 11);
//var randPEIndex = Math.floor(Math.random() * 6);
//var randVerbPickIndex = Math.floor(Math.random() * 4);

document.getElementById(answers[0]).innerHTML = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1]  ;

document.getElementById(answers[1]).innerHTML = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1]  ;

document.getElementById(answers[2]).innerHTML = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];
//document.getElementById(answers[2]).innerHTML = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1]  ;

document.getElementById("startButton").innerHTML =  randVerbPick[randVerbPickIndex];




}



shuffleAllVerbs();




//startButton.onclick =function(){verbTenseShuffle()};


	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}





function fourTenseShuffle(){


resetQuestions();



countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


//shuffle(verbsFirstFuture);
//shuffle(verbsFirst)
//shuffle(verbFristPer)
//shuffle(verbsSecondFuture);
//shuffle(perEndingsFuture);


shuffle(answers);



//shuffle(randVerbPick);
//shuffle(randIndex);
//shuffle(randPEIndex);
//shuffle(randVerbPickIndex);



function shuffleAllVerbs(){




//var randIndex = Math.floor(Math.random() * 11);
//var randPEIndex = Math.floor(Math.random() * 6);
//var randVerbPickIndex = Math.floor(Math.random() * 4);

document.getElementById(answers[0]).innerHTML = pluPerEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1]  ;

document.getElementById(answers[1]).innerHTML = perEndingsFirst[randPEIndex][1] + verbsFirst[randIndex][1]  ;

//document.getElementById(answers[2]).innerHTML = futPerEndings[randPEIndex][1] + verbsFirstPer[randIndex][1];
document.getElementById(answers[2]).innerHTML = perEndingsFirstImp[randPEIndex][1] + verbsFirst[randIndex][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPerfect[randPEIndex][1] + verbsFirstPer[randIndex][1]  ;

document.getElementById("startButton").innerHTML =  rand4TenseVerbPick[randVerbPickIndex];




}



shuffleAllVerbs();




//startButton.onclick =function(){verbTenseShuffle()};


	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}




























function futureTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirstFuture);
shuffle(verbsSecondFuture);
shuffle(perEndingsFuture);

shuffle(verbsThird);
shuffle(perEndingsThirdFuture);



shuffle(answers);




function shuffleFirstConFutureTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirstFuture[0][0]  + perEndingsFuture[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFuture[0][1] + verbsFirstFuture[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFuture[1][1] + verbsFirstFuture[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFuture[2][1] + verbsFirstFuture[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFuture[3][1] + verbsFirstFuture[0][1]  ;
}

function shuffleThirdConFutureTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsThird[0][0]  + perEndingsThirdFuture[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsThirdFuture[0][1] + verbsThird[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsThirdFuture[1][1] + verbsThird[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsThirdFuture[2][1] + verbsThird[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsThirdFuture[3][1] + verbsThird[0][1]  ;
}


function shuffleThirdIoAndFourthFutureTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsThirdIoAndFourth[0][0]  + perEndingsThirdIoAndFourthFuture[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsThirdIoAndFourthFuture[0][1] + verbsThirdIoAndFourth[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsThirdIoAndFourthFuture[1][1] + verbsThirdIoAndFourth[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsThirdIoAndFourthFuture[2][1] + verbsThirdIoAndFourth[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsThirdIoAndFourthFuture[3][1] + verbsThirdIoAndFourth[0][1]  ;
}

var randomFutureVerbIndex = Math.floor(Math.random() * 3);
var mixUp = [shuffleFirstConFutureTenseVerbs, shuffleThirdConFutureTenseVerbs, shuffleThirdIoAndFourthFutureTenseVerbs];

mixUp[randomFutureVerbIndex]();






	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}

































function presentTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);



shuffle(answers);





function shuffleFirstConPresTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirst[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + verbsFirst[0][1]  ;
}


 shuffleFirstConPresTenseVerbs();




	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}


function imperfectTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);



shuffle(answers);






function shuffleFirstConImpTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirstImp[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstImp[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstImp[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstImp[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstImp[3][1] + verbsFirst[0][1]  ;
}

shuffleFirstConImpTenseVerbs();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;




 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}


function perfectTenseVerbShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);



shuffle(answers);



function shuffleFirstConPerfectTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirstPer[0][0]  + perEndingsFirstPerfect[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPerfect[1][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPerfect[2][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPerfect[3][1] + verbsFirstPer[0][1]  ;
}



shuffleFirstConPerfectTenseVerbs();



	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}





function threeVerbTenseShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(verbsFirst);
shuffle(verbsFirstPer);

shuffle(perEndingsFirst);

shuffle(perEndingsFirstImp);
shuffle(perEndingsFirstPerfect);


shuffle(answers);



function shuffleFirstConPresTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirst[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + verbsFirst[0][1]  ;
}





function shuffleFirstConImpTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirst[0][0]  + perEndingsFirstImp[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstImp[0][1] + verbsFirst[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstImp[1][1] + verbsFirst[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstImp[2][1] + verbsFirst[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstImp[3][1] + verbsFirst[0][1]  ;
}





function shuffleFirstConPerfectTenseVerbs(){
document.getElementById("startButton").innerHTML =  verbsFirstPer[0][0]  + perEndingsFirstPerfect[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPerfect[1][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPerfect[2][1] + verbsFirstPer[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPerfect[3][1] + verbsFirstPer[0][1]  ;
}





var randomNounIndex = Math.floor(Math.random() * 3);
var mixUp = [shuffleFirstConPerfectTenseVerbs, shuffleFirstConImpTenseVerbs, shuffleFirstConPresTenseVerbs];

mixUp[randomNounIndex]();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}











   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == randVerbPickEnglishArray[randVerbPickIndex]||
    document.getElementById("answerOne").innerHTML == rand4TenseVerbPickEnglishArray[randVerbPickIndex]||
		document.getElementById("answerOne").innerHTML == perEndingsFuture[0][1] + verbsFirstFuture[0][1]||
		document.getElementById("answerOne").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerOne").innerHTML ==perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerOne").innerHTML ==perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsThirdFuture[0][1] + verbsThird[0][1]||
    document.getElementById("answerOne").innerHTML == perEndingsThirdIoAndFourthFuture[0][1] + verbsThirdIoAndFourth[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == randVerbPickEnglishArray[randVerbPickIndex]||
    document.getElementById("answerTwo").innerHTML == rand4TenseVerbPickEnglishArray[randVerbPickIndex]||
		document.getElementById("answerTwo").innerHTML == perEndingsFuture[0][1] + verbsFirstFuture[0][1]||
		document.getElementById("answerTwo").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1]||
		document.getElementById("answerTwo").innerHTML == perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerTwo").innerHTML == perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsThirdFuture[0][1] + verbsThird[0][1]||
    document.getElementById("answerTwo").innerHTML == perEndingsThirdIoAndFourthFuture[0][1] + verbsThirdIoAndFourth[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == randVerbPickEnglishArray[randVerbPickIndex]||
    document.getElementById("answerThree").innerHTML == rand4TenseVerbPickEnglishArray[randVerbPickIndex]||
		document.getElementById("answerThree").innerHTML == perEndingsFuture[0][1] + verbsFirstFuture[0][1]||
		document.getElementById("answerThree").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1]||
		document.getElementById("answerThree").innerHTML == perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerThree").innerHTML == perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsThirdFuture[0][1] + verbsThird[0][1]||
    document.getElementById("answerThree").innerHTML == perEndingsThirdIoAndFourthFuture[0][1] + verbsThirdIoAndFourth[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (document.getElementById("answerFour").innerHTML == randVerbPickEnglishArray[randVerbPickIndex]||
    document.getElementById("answerFour").innerHTML == rand4TenseVerbPickEnglishArray[randVerbPickIndex]||
		document.getElementById("answerFour").innerHTML == perEndingsFuture[0][1] + verbsFirstFuture[0][1]||
		document.getElementById("answerFour").innerHTML == perEndingsFirst[0][1] + verbsFirst[0][1]||
		document.getElementById("answerFour").innerHTML == perEndingsFirstImp[0][1] + verbsFirst[0][1] ||
		document.getElementById("answerFour").innerHTML == perEndingsFirstPerfect[0][1] + verbsFirstPer[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsThirdFuture[0][1] + verbsThird[0][1]||
    document.getElementById("answerFour").innerHTML == perEndingsThirdIoAndFourthFuture[0][1] + verbsThirdIoAndFourth[0][1]){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
