let targetcolor = "";
let score = 0;                                    //score variable global and local =0 bcz we restart the game 
let time =30;
let timer;            // timer display ho , "setTime out " method 1 hi bar callback ko call krta hai jitn atie diya hai 
                      // setInterval = repeatedly call krta rhta hai 
                      // so we use "setInterval " -set intervals se jo  timer ki id milegi woh mein "timer variable" mein rkh rahi hu  bcz   jis e timer is clear when we restart the game .

let colors =['red', 'orange', 'green', 'grey', 'black', 'hotpink', 'purple', 'yellow', 'teal', 'white', 'lightgreen', 'maroon', 'peach', 'khaki', 'navyblue', 'indigo'   ]
const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("targetColor");
const scoreDisplay= document.getElementById("score");
const timeDisplay= document.getElementById("time")                   // these are the object which is needed to use 





// to create a function to generate the random color 
function getRandomColor(){

}








//create grid function
function createGrid(){                              // actual mein color generate karne hai 

    grid.innerHtml="";                              // agar pahle se kuch hai use blank karne ke liye


    // to change the color position which are written in array so,  we call function for shuffle the color position  ---- call
    colors = shuffleArray(colors);
    targetColor= colors[Math.floor(Math.random()*16)];                     // target color 

}






//we create function for shuffle the color position
function shuffleArray(colors){


}







// to create function for start the game 
function startGame(){
    score = 0;
    time = 30 ;
    scoreDisplay.textContent= score;                                //to display the time and score when start the game 
    timeDisplay.textContent =time;  
    
    // to create a function for to create a grid (jis se grid create ho)

    createGrid();                                                    // create grid function is call 
    clearInterval(timer);

    timer=setInterval(() => {                           // timer mein value kese aayi hogi --- woh setInterval
        time -- ;                                       // we want har second par time change ho so we use arrow functiom amd time -->  time ki vakue decremet and display
        timeDisplay.textContent=time;


        // if time 0 the stop the game 
        if(time===0){
            clearInterval(timer);
            alert("Time's up! Your Final Score: "+=score);
        }
        
        }, 1000);

    
     

}