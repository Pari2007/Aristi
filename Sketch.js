
var Beginform, database,episode1,episode2,episode3,episode4,end,backimage,restartimg,restart,gameoverimg,gameover,hintbot,mysound;
var timer1 = 100;
var score = 0;
function preload(){
    backimage= loadImage("image.png");
    restartimg = loadImage("reset.png");
    gameover = loadImage("gameover.png");
    //mysound = loadSound("music2.mp3");

}

function setup() {
    console.log("abcd")
    database = firebase.database();
    var canvas = createCanvas(displayWidth,displayHeight);
    Beginform = new Beginning();
    episode1 = new Episode1();
    episode2 = new Episode2();
    episode3 = new Episode3();
    episode4 = new Episode4();
    end = new End();







   
    
    
}
function draw() {
    background(backimage);
   //mysound.play();
    Beginform.display();
    begintimeforEpisodes();
        textSize(26);
        text(score, displayWidth/2+400, displayHeight/2-360); 
        textSize(26);
        text("SCORE:", displayWidth/2+300, displayHeight/2-360); 
        textSize(26);
        text("TIMER:", displayWidth/2+550, displayHeight/2-360); 
        
        
        
 }
  
 function begintimeforEpisodes(){
        textSize(26);
        text(timer1, displayWidth/2+650, displayHeight/2-360); 
        if (frameCount % 60 == 0 && timer1 > 0) {
        // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
         timer1--;
         } 
        if (timer1 == 0) {
            textSize(50)
            text("Reload the page to play again!",displayWidth/2-180, displayHeight-700);
            textColor("Red");
            //image(gameover,displayWidth, displayHeight,displayWidth-100,displayHeight-100);
            
        //   restart = createButton("RESTART");
        //  restart.position(displayWidth/2-700, displayHeight/2+90)
        //  restart.mousePressed(()=>{
        //     reset();
        //  })

        
        }
        
     }
 
    //  function reset(){
        
        
    //      Beginform.hide();
    //      episode1.hide();
    //      episode2.hide();
    //      episode3.hide();
    //      episode4.hide();
    //      end.hide();
    //     score = 0;
    //     timer1 = 100;
        
    //     Beginform.display();
    //     begintimeforEpisodes()
    //     restart.hide();
    //     gameover.hide();
    //  }
