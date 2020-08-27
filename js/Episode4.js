class Episode4{
    constructor(){}
    display(){
                var intro4 = createElement("h2");
                intro4.html("Season1:Episode4:Credit Card Hacked!");
                intro4.position(displayWidth/2-120, displayHeight-700);
                
                var description4 = createElement("h3");
                description4.html("You recieved messages quoting that 1 lac has been credited from your account.Take immediate actions and be careful until the cyber sector comes into the picture. ");
                description4.position(displayWidth/2-700, displayHeight/2+90);
                
                var beginbutton4 = createButton("Begin>");
                beginbutton4.position(displayWidth/2, displayHeight/2-95)
                beginbutton4.style("backgroundColor","yellow");
                            beginbutton4.style("fontSize","20px");

                beginbutton4.mousePressed(() => {
                    intro4.hide();
                    description4.hide();
                    beginbutton4.hide();

                    var situation3 = createElement("h2");
                    situation3.html("You got a call from a bank person who is asking you for your bank details for helping you out in your bank fraud,would you like to take the help?");
                    situation3.position(displayWidth/2-700, displayHeight/2+90);

                    var OptionA4 = createButton("Yes,Sure!");
                    OptionA4.position(displayWidth/2-100,displayHeight/2-200);
                    OptionA4.style("backgroundColor","pink");
                    OptionA4.style("fontSize","30px");
                    
                    var OptionB4 = createButton("No,Never!");
                    OptionB4.position(displayWidth/2-200,displayHeight/2-100);
                    OptionB4.style("backgroundColor","pink");
                    OptionB4.style("fontSize","30px");
                    
                    
                    OptionA4.mousePressed(() => {
                        score = score-15;
                        
                        OptionB4.hide();
                        OptionA4.hide();
                        var Adc4 = createElement("h2");
                        Adc4.html("Oh no! You have become a victim of a vishing attack!")
                        Adc4.position(displayWidth/2-700, displayHeight/2+250);
                    var Alright = createButton("Alright!")
                    Alright.position(displayWidth/2+50, displayHeight/2-95);
                    Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                    Alright.mousePressed(()=>{
                     Adc4.hide();
                     Alright.hide();
                     
                    })
                    });
                    OptionB4.mousePressed(() => {
                        score = score-15

                        OptionB4.hide();
                        OptionA4.hide();
                        var Bdc4 = createElement("h2");
                        Bdc4.html("Well done! You saved yourself from becoming a victim of a vishing attack, You should never share your bank details over a phone call.")
                        Bdc4.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                    Alright.position(displayWidth/2+50, displayHeight/2-95);
                    Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                    Alright.mousePressed(()=>{
                     Bdc4.hide();
                     Alright.hide();
                     
                    })
                    });

                    
                    
                    var Next2 = createButton("Next>")
                    Next2.position(displayWidth/2+50, displayHeight/2-50);
                    Next2.style("backgroundColor","yellow");
                            Next2.style("fontSize","20px");
                    Next2.mousePressed(() => {
                       
                        situation3.hide();  
                        Next2.hide();

                        var situation4 = createElement("h2");
                        situation4.html("You got a message quoting to go to this website 'http:\\support.hcdf.com' to get in touch with a bank official.Would you like to take help? ");
                        situation4.position(displayWidth/2-700, displayHeight/2+90);
                        
                        var OptionA3 = createButton("Yes,Why not?");
                        OptionA3.position(displayWidth/2-100,displayHeight/2-200);
                        OptionA3.style("backgroundColor","pink");
                        OptionA3.style("fontSize","20px");
                        
                        var OptionB3 = createButton("No,Never!");
                        OptionB3.position(displayWidth/2-200,displayHeight/2-100);
                        OptionB3.style("backgroundColor","pink");
                        OptionB3.style("fontSize","20px");
                        
                        
                        OptionA3.mousePressed(() => {
                            score = score-15;
                            OptionB3.hide();
                           OptionA3.hide();
                            var Adc3 = createElement("h2");
                            Adc3.html("Oh no! you are a victim of the most common cyber crime 'Smishing!'  ")
                            Adc3.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         Adc3.hide();
                         Alright.hide();
                         
                        })
                        });
                        OptionB3.mousePressed(() => {
                            score = score +10;
                            OptionB3.hide();
                           OptionA3.hide();
                            var Bdc3 = createElement("h2");
                            Bdc3.html("Well done!You saved yourself from the most common cyber crime 'Smishing!'.You should never click on unsecured websites(always click on websites having'https' as their prefixes.).   ")
                            Bdc3.position(displayWidth/2-700, displayHeight/2+250);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         Bdc3.hide();
                         Alright.hide();
                         
                        })
                        });


                        
                        var Next3 = createButton("Next>")
                    Next3.position(displayWidth/2+50, displayHeight/2-50);
                    Next3.style("backgroundColor","yellow");
                            Next3.style("fontSize","20px");
                    Next3.mousePressed(() => {
                       
                        situation4.hide();  
                        Next3.hide();
                        var situationE4 = createElement("h2");
                        situationE4.html("What action would you take?");
                        situationE4.position(displayWidth/2-700, displayHeight/2+90);
                        
                        var OptionAE4 = createButton("Report to local enforcement immediately");
                        OptionAE4.position(displayWidth/2-50,displayHeight/2-200);
                        OptionAE4.style("backgroundColor","pink");
                    OptionAE4.style("fontSize","20px");
                        
                        var OptionBE4 = createButton("Seek help from computer repairing shop.");
                        OptionBE4.position(displayWidth/2-200,displayHeight/2-100);
                        OptionBE4.style("backgroundColor","pink");
                    OptionBE4.style("fontSize","20px");
                        
                        var OptionCE4 = createButton("Freeze your Credit Card");
                        OptionCE4.position(displayWidth/2+100,displayHeight/2-200);
                        OptionCE4.style("backgroundColor","pink");
                        OptionCE4.style("fontSize","20px");
                       
                        
                        
                        OptionAE4.mousePressed(() => {
                            score = score -15;
                            OptionAE4.hide();
                            OptionBE4.hide();
                            OptionCE4.hide();
                            var AdcE4 = createElement("h2");
                            AdcE4.html("Your report has been successfully submitted , they have asked you to do a quick response and freeze your card :( ")
                            AdcE4.position(displayWidth/2-700, displayHeight/2+250);
                            var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         AdcE4.hide();
                         Alright.hide();
                         
                        })
                        });
                        
                        
                        OptionBE4.mousePressed(() => {
                            score = score-15;
                            OptionAE4.hide();
                            OptionBE4.hide();
                            OptionCE4.hide();
                            var BdcE4 = createElement("h2");
                            BdcE4.html("Well, the computer repairing guy will be more useful in fixing your device’s hardware rather than helping you out with your bank fraud")
    
                            BdcE4.position(displayWidth/2-700, displayHeight/2+250);
                            var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         BdcE4.hide();
                         Alright.hide();
                         
                        })
                        });
                        
                        OptionCE4.mousePressed(() => {
                            score = score -15;
                            OptionAE4.hide();
                            OptionBE4.hide();
                            OptionCE4.hide();
                            var CdcE4 = createElement("h2");
                            CdcE4.html("well done! you have safegauded your credit card!")
                            CdcE4.position(displayWidth/2-700, displayHeight/2+250);
                            var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.style("backgroundColor","yellow");
                            Alright.style("fontSize","20px");
                        Alright.mousePressed(()=>{
                         CdcE4.hide();
                         Alright.hide();
                         
                        })
                        });
                        
                    var finishbutton= createButton("Go!")
                    finishbutton.position(displayWidth/2+50, displayHeight/2-50)
                    finishbutton.style("backgroundColor","purple");
                    finishbutton.style("fontSize","20px");
                    finishbutton.mousePressed(()=>{
                      situationE4.hide();
                    finishbutton.hide();
                    end = new End();
                    end.display();
                    })
 

                }
                )}
                    )}
                    )}
                }