let targetColor = "";
let score = 0;                                    //score variable global and local =0 bcz we restart the game 
let time =30;
let timer;            // timer display ho , "setTime out " method 1 hi bar callback ko call krta hai jitn atie diya hai 
                      // setInterval = repeatedly call krta rhta hai 
                      // so we use "setInterval " -set intervals se jo  timer ki id milegi woh mein "timer variable" mein rkh rahi hu  bcz   jis e timer is clear when we restart the game .

let colors =['red', 'orange', 'green', 'grey', 'black', 'hotpink', 'purple', 'yellow', 'teal', 'white', 'lightgreen', 'maroon', 'peachpuff', 'khaki', 'navy', 'indigo'   ]
const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const scoreDisplay= document.getElementById("score");
const timeDisplay= document.getElementById("time");                   // these are the object which is needed to use 





/*// to create a function to generate the random color 
function getRandomColor(){

}*/

function shuffleArray(colors){

    for(let i = colors.length -1; i>0; i--){

        const j = Math.floor (Math.random()*(i+1));
        [colors[i],colors[j]] = [colors[j],colors[i]];

    }

    return colors;



}






//create grid function
function createGrid(){                                                            // actual mein color generate karne hai 

    grid.innerHTML="";                                                            // agar pahle se kuch hai use blank karne ke liye

    // to change the color position which are written in array so,  we call function for shuffle the color position  ---- call
   
    colors = shuffleArray(colors);
    console.log(colors);
    targetColor= colors[Math.floor(Math.random()*colors.length)];                            // target color find 
    targetColorDisplay.textContent = targetColor;                                 // for diplay the target color
    
    // to display the color using colors array (16 colors)
    // har element ke forEach ka use karte hai

    colors.forEach((color)  => {
        const box = document.createElement("div");                                              // dyanmically elemnent create "div"
        box.className = "color-box";                                                            //.className -> ise se class attribute for css design  , 16 color box hoge uske class attribute "box-color" hoga
        box.style.backgroundColor = color;

        box.addEventListener("click", () => {
                   handleClick(color);
        });  
                                                                                      //color par click karna hai match krne ke liye we use evenhandle - jis mein ek arror function chale
        grid.appendChild(box);
    
    });
}





// to create a handleClick(color) function

function handleClick(clickedColor){

    if(clickedColor === targetColor){
        score++;
        scoreDisplay.textContent =score;
        createGrid();                                       // click ho cguka then grid fir se create and shuffle  
    }


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
            alert("Time's up! Your Final Score: " + score);
        }
        
        }, 1000);

    
     

}