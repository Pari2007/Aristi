class Episode3{
    constructor(){}
    display(){
        var intro3 = createElement("h2");
        intro3.html("Season1:Episode3:Online Shopping Account Hacked!");
        intro3.position(displayWidth/2-200, displayHeight-700);
        
        var description3 = createElement("h3");
        description3.html("You recieved a SMS from your shopping account that your Credit card detais have been updated shocked by this, you went on to check it out. ");
        description3.position(displayWidth/2-700, displayHeight/2+90);
        
        var beginbutton3 = createButton("Begin>");
        beginbutton3.position(displayWidth/2, displayHeight/2-95)
        beginbutton3.style("backgroundColor","yellow");
                            beginbutton3.style("fontSize","20px");

        beginbutton3.mousePressed(() => {
            
            intro3.hide();
            description3.hide();
            beginbutton3.hide();
            var situationE2 = createElement("h2");
            // 1
                    situationE2.html("What would you do?");
                    situationE2.position(displayWidth/2-700, displayHeight/2+90);

                    var OptionAE2 = createButton("Check Account History");
                    OptionAE2.position(displayWidth/2-200,displayHeight/2-200);
                    OptionAE2.style("backgroundColor","pink");
                    OptionAE2.style("fontSize","20px");

                    var OptionBE2 = createButton("Check Search History");
                    OptionBE2.position(displayWidth/2-200,displayHeight/2-100);
                    OptionBE2.style("backgroundColor","pink");
                    OptionBE2.style("fontSize","20px");

                    var OptionCE2 = createButton("Logg in again, might be a glitch!");
                    OptionCE2.position(displayWidth/2+100,displayHeight/2-200);
                    OptionCE2.style("backgroundColor","pink");
                    OptionCE2.style("fontSize","20px");

                    

                    OptionAE2.mousePressed(() => {
                        score = score+10
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var AdcE2 = createElement("h2");
                        AdcE2.html("It is correct! Looking at your account history ,you will be able to track down unusual activities.")
                        AdcE2.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         AdcE2.hide();
                         Alright.hide();
                    });})

                    OptionBE2.mousePressed(() => {
                        score = score-10
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var BdcE2 = createElement("h2");
                        BdcE2.html("Well, looking at your search history won’t help!")
                        BdcE2.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         BdcE2.hide();
                         Alright.hide();
                    });})

                    OptionCE2.mousePressed(() => {
                        score = score-10

                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var CdcE2 = createElement("h2");
                        CdcE2.html("It is definitely not a glitch,Logging in again won’t help you either!")
                        CdcE2.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         CdcE2.hide();
                         Alright.hide();
                    });})
// 2

            var nextbutton = createButton("Next>");
            nextbutton.position(displayWidth/2+50, displayHeight/2-50);
            nextbutton.style("backgroundColor","yellow");
                            nextbutton.style("fontSize","20px");
            nextbutton.mousePressed(()=>{
                nextbutton.hide();
                situationE2.hide();

            var situationE3 = createElement("h2");
            situationE3.html("Your Credit Card number has been changed,Take appropriate action before it is too late.");
            situationE3.position(displayWidth/2-700, displayHeight/2+90);
            
            var OptionAE3 = createButton("Call Amajon Security Department");
            OptionAE3.position(displayWidth/2-200,displayHeight/2-200);
            OptionAE3.style("backgroundColor","pink");
                    OptionAE3.style("fontSize","20px");
            
            var OptionBE3 = createButton("Enable 2 step authentification");
            OptionBE3.position(displayWidth/2-200,displayHeight/2-100);
            OptionBE3.style("backgroundColor","pink");
                    OptionBE3.style("fontSize","20px");
            
            var OptionCE3 = createButton("Delete your Amazon Account from this device.");
            OptionCE3.position(displayWidth/2+100,displayHeight/2-200);
            OptionCE3.style("backgroundColor","pink");
                    OptionCE3.style("fontSize","20px");
            
            
            
            OptionAE3.mousePressed(() => {
                score = score+10

                OptionAE3.hide();
                 OptionBE3.hide();
                 OptionCE3.hide();
                        

                var AdcE3 = createElement("h2");
                AdcE3.html("It would be most advisable to do so as they can assist you further and track down and block some unexpected activities")
                AdcE3.position(displayWidth/2-700, displayHeight/2+250);
                var Alright = createButton("Alright!")
                Alright.position(displayWidth/2+50, displayHeight/2-95);
                Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                Alright.mousePressed(()=>{
                 AdcE3.hide();
                 Alright.hide();
            })
            });
            
            OptionBE3.mousePressed(() => {
                score = score-10

                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                
                var BdcE3 = createElement("h2");
                BdcE3.html("That will not help you at the moment when your information is already leaked. ")
               
                BdcE3.position(displayWidth/2-700, displayHeight/2+250);
                var Alright = createButton("Alright!")
                Alright.position(displayWidth/2+50, displayHeight/2-95);
                Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                Alright.mousePressed(()=>{
                 BdcE3.hide();
                 Alright.hide();
            })
            });
            
            OptionCE3.mousePressed(() => {
                score = score-10;
                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                
                var CdcE3 = createElement("h2");
                CdcE3.html("logging out won’t help you rather you will not be able to log in again as till then the hackers would have already changed your password.")
                
                CdcE3.position(displayWidth/2-700, displayHeight/2+250);
                var Alright = createButton("Alright!")
                Alright.position(displayWidth/2+50, displayHeight/2-95);
                Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                Alright.mousePressed(()=>{
                 CdcE3.hide();
                 Alright.hide();
            })
            });
            
            
            
            var Next1E3 = createButton("Go!")
            Next1E3.position(displayWidth/2+50, displayHeight/2-50);
            Next1E3.style("backgroundColor","purple");
                            Next1E3.style("fontSize","20px");
            Next1E3.mousePressed(() => {
                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                
                situationE3.hide();
                Next1E3.hide();

                episode4 = new Episode4();
                episode4.display();

    })
    }
        )}
        )}
}
