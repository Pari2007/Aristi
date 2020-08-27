class End{
    constructor(){}
    display(){
         
         if(score==10){
            console.log("ERROR");
            var success = createElement("h3")
         success.html("Congratulations! Your digital life is safe and secured!");
         success.position(displayWidth/2-700, displayHeight/2+90)
        


         }
         if(score ==! 10){
            var failed = createElement("h3")
            failed.html("Oh no! Your digital life is ruined!")
         success.position(displayWidth/2-700, displayHeight/2+90)

        

         }
        
    }
}