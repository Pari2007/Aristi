class Episode2{
    constructor(){}
    display(){
        var intro2 = createElement("h2");
                intro2.html("Season1:Episode2:Twittre and Fasebook Hacked!");
                intro2.position(displayWidth/2-200, displayHeight-700);
                
                var description2 = createElement("h3");
                description2.html("You noticed some unexpected and inappropriate posts from your account and realized that it has been hacked!");
                description2.position(displayWidth/2-700, displayHeight/2+90);
                
                var beginbutton2 = createButton("Begin>");
                beginbutton2.position(displayWidth/2, displayHeight/2-95)
                beginbutton2.style("backgroundColor","yellow");
                            beginbutton2.style("fontSize","20px");
                    beginbutton2.mousePressed(() => {
                    intro2.hide();
                    description2.hide();
                    beginbutton2.hide();

                    var situationE2 = createElement("h2");
                    situationE2.html("What would you do?");
                    situationE2.position(displayWidth/2-120, displayHeight-700);

                    var OptionAE2 = createButton("Reset Password");
                    OptionAE2.position(displayWidth/2-100,displayHeight/2-200);
                    OptionAE2.style("backgroundColor","pink");
                    OptionAE2.style("fontSize","20px");

                    var OptionBE2 = createButton("Reinstall Twittre app");
                    OptionBE2.position(displayWidth/2-200,displayHeight/2-100);
                    OptionBE2.style("backgroundColor","pink");
                    OptionBE2.style("fontSize","20px");

                    var OptionCE2 = createButton("Delete all your posts");
                    OptionCE2.position(displayWidth/2+100,displayHeight/2-200);
                    OptionCE2.style("backgroundColor","pink");
                    OptionCE2.style("fontSize","20px");

                    

                    OptionAE2.mousePressed(() => {
                        score = score+10;

                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var AdcE2 = createElement("h2");
                        AdcE2.html("Very Well played! Changing your password will end up the hacker getting logged out.")
                        AdcE2.position(displayWidth/2-700, displayHeight/2+250);
                        AdcE2.style("color","yellow");

                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         AdcE2.hide();
                         Alright.hide();
                         
                        })
                    });

                    OptionBE2.mousePressed(() => {
                        score = score-10;

                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();

                        var BdcE2 = createElement("h2");
                        BdcE2.html("That is never help you in securing.")
                        BdcE2.position(displayWidth/2-700, displayHeight/2+250);
                        BdcE2.style("color","yellow");

                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         BdcE2.hide();
                         Alright.hide();
                         
                        })
                    });

                    OptionCE2.mousePressed(() => {
                        score = score-10;
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();

                        var CdcE2 = createElement("h2");
                        CdcE2.html("That's not the solution for securing your account.")
                        CdcE2.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         CdcE2.hide();
                         Alright.hide();
                         
                        })
                    });

                    

                    var Next1E2 = createButton("What's Next")
                    Next1E2.position(displayWidth/2+50, displayHeight/2-50);
                    Next1E2.style("backgroundColor","yellow");
                    Next1E2.style("fontSize","20px");
                    Next1E2.mousePressed(() => {
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        
                        situationE2.hide();
                        Next1E2.hide();

                         var situation2E2 = createElement("h2");
                        situation2E2.html("Reset your Password.");
                        situation2E2.position(displayWidth/2-700, displayHeight/2+90);
                        var password2 = createInput("")
                        password2.position(displayWidth/2, displayHeight/2-95);
                        
                        var reset2= createButton("RESET")
                        reset2.position(displayWidth/2,displayHeight/2)
                        reset2.style("backgroundColor","yellow");
                            reset2.style("fontSize","20px");
                        reset2.mousePressed(()=>{
                            
                            situation2E2.hide();
                            password2.hide();
                            reset2.hide();
                             
                            var message = createElement("h2");
                            message.html("Your password has been reset successfully.")
                            message.position(displayWidth/2-700, displayHeight/2+250);

                            var nextEpisode = createButton("Go!");
                            nextEpisode.position(displayWidth/2+50, displayHeight/2-50)
                            nextEpisode.style("backgroundColor","purple");
                            nextEpisode.style("fontSize","20px");
                            nextEpisode.mousePressed(()=>{
                                message.hide();
                                nextEpisode.hide();
                                episode3 = new Episode3();
                                episode3.display();
                            })

                        })
    }
                    )}
                    )}
                }