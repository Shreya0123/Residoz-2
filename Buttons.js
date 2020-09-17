    class Buttons{
        constructor() {
            
           
            //this.va = createSprite();
            //this.va.position(100,200);
            //this.va.addImage("va",buttonImg);
            this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
            //this.other = createInput("");
              /*this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');*/
            
            
            /*this.greeting = createElement('h2');
            this.title = createElement('h2');
            this.reset = createButton('Reset');*/
          }



          hide(){
           this.va.hide();
            this.pic.hide();
            this.overallWG.hide();
            this.specificWM.hide();

          }

          changeColor() {
             //va.style.backgroundColor = "green";
             }
          
          display(){
            this.va.position(60,200);
            this.pic.position(60,300);
            this.overallWG.position(60,400);
            this.specificWM.position(60,500);
            
            
           this.va.mousePressed(()=>{
           //this.va.changeColor();
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              textSize(25);
              //fill("turqouise")
              this.speak = createButton('Press to speak!');
              this.speak.position(130,500);
              this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.speak.hide();
                this.back.hide();
                this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });

              this.speak.mousePressed(()=>{
               /*var talk = new p5.Speech(); // speech synthesis object
    talk.speak('How can I help you?'); // say something
    talk = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
    talk.onResult = showResult; // bind callback function to trigger when speech is recognized
    talk.start(); // start listening*/
    
    /*function showResult()
    {
      console.log(talk.resultString);// log the result
    }*/

              }
              );
              
            });

            this.pic.mousePressed(()=>{
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              this.takeAPic = createElement('h3');
              this.takeAPic.position(130,500);
              this.takeAPic.html("Take a pic!");
             /* textSize(25);
              text("TAKE A PIC!",130,500);*/
              this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.takeAPic.hide();
                this.back.hide();
                this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });
            });

            this.overallWG.mousePressed(()=>{
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              //textSize(16);
              /*text("How much waste do you generate per day",100,100);
              text("2-3 kg",100, 250);
              text("4-5 kg",100,350);
              text("6-7 kg",100,450);*/
              //text("Other: ",100,550);
              this.other = createInput("Other");
              //this.other.size(250);
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.question = createElement('h4');
            this.question.position(20,120);
            this.question.html("How many kilograms of waste do you generate per day?");
            this.back = createButton('Go to Home Page');
            this.back.position(30,650);
            this.back.mousePressed(()=>{
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              this.back.hide();
              this.va = createButton('VOICE ASSISTANT');
          this.pic = createButton('TAKE A PIC!');
          this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
          this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
         

            });
            
            
            this.twoThreeKg.mousePressed(()=>{
              this.back.hide();
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              this.previous = createButton('Back');
              this.previous.position(30,650);
              this.tip1 = createElement('h5');
              this.tip1.position(50,120);
              this.tip1.html("2-3 kg! That is very good!");
              this.tip2 = createElement('h5');
              this.tip2.position(50,140);
              this.tip2.html("Here are some tips to reduce that :");
              //text("2-3 kg! That is very good!",50,120);
              //text("Here are some tips to reduce that :",50,140);
              this.reduce1 = createButton('Reduce');
              //this.reduce1.color = "green";
              this.reuse1 = createButton('Reuse');
              this.recycle1 = createButton('Recycle');
              this.reduce1.position(50,180);
              this.reuse1.position(50,220);
              this.recycle1.position(50,260);
              this.question.hide();

              this.previous.mousePressed(()=>{
                this.other = createInput("Other");
              //this.other.size(250);
              this.question = createElement('h4');
              this.question.position(20,120);
              this.question.html("How many kilograms of waste do you generate per day?");
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.tip1.hide();
            this.tip2.hide();
            this.reduce1.hide();
            this.reuse1.hide();
            this.recycle1.hide();
            this.previous.hide();

            this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
               // this.tip3.hide();
               // this.tip4.hide();
               // this.tip5.hide();
                this.question.hide();
                this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
           

            
              });
              });

              this.reduce1.mousePressed(()=>{
                this.reduce1.hide();
                this.reuse1.hide();
                this.recycle1.hide();
                this.tip3 = createElement('h5');
              this.tip3.position(50,200);
              this.tip3.html("1)Avoid single-use food and drink containers and utensils");
              this.tip4 = createElement('h5');
              this.tip4.position(50,230);
              this.tip4.html("2)Shop local farmers markets and buy in bulk.");
              this.tip5 = createElement('h5');
              this.tip5.position(50,260);
              this.tip5.html("3)Start composting.");
              this.previous = createButton('Back');
              this.previous.position(30,650);
              

              this.previous.mousePressed(()=>{
                this.question = createElement('h4');
                this.question.position(20,120);
                this.question.html("How many kilograms of waste do you generate per day?");
                this.other = createInput("Other");
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.tip1.hide();
            this.tip2.hide();
            this.reduce1.hide();
            this.reuse1.hide();
            this.recycle1.hide();
            this.previous.hide();
            this.tip3.hide();
                this.tip4.hide();
                this.tip5.hide();

            this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });
              });


              /*this.previous.mousePressed(()=>{

              });*/
                //text(,50, 200);
                //text("2)Shop local farmers markets and buy in bulk to reduce packaging.",50,230);
                //text("3)Start composting.",50,260);
              });
              this.reuse1.mousePressed(()=>{
                this.reduce1.hide();
                this.reuse1.hide();
                this.recycle1.hide();
                
                //text("1)Use a reusable bottle/cup for beverages on-the-go.",50, 200);
                //text("2)Use reusable bags",50,230);
                //text("3)Buy secondhand items and donate used goods",50,260);
                this.reduce1.hide();
                this.reuse1.hide();
                this.recycle1.hide();
                this.tip6 = createElement('h5');
              this.tip6.position(50,200);
              this.tip6.html("1)Use a reusable bottle/cup for beverages on-the-go.");
              this.tip7 = createElement('h5');
              this.tip7.position(50,230);
              this.tip7.html("2)Use reusable bags");
              this.tip8 = createElement('h5');
              this.tip8.position(50,260);
              this.tip8.html("3)Buy secondhand items and donate used goods");
              this.previous = createButton('Back');
              this.previous.position(30,650);
              

              this.previous.mousePressed(()=>{
                this.question = createElement('h4');
                this.question.position(20,120);
                this.question.html("How many kilograms of waste do you generate per day?");
                this.other = createInput("Other");
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.tip1.hide();
            this.tip2.hide();
            this.reduce1.hide();
            this.reuse1.hide();
            this.recycle1.hide();
            this.previous.hide();
            this.tip6.hide();
                this.tip7.hide();
                this.tip8.hide();

            this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });
              });


              });
              this.recycle1.mousePressed(()=>{
                this.reduce1.hide();
                this.reuse1.hide();
                this.recycle1.hide();
                //text("1)Buy recycled paper and print on both sides.",50, 200);
                //text("2)Recycle your empty ink and toner cartridges.",50,230);
                //text("3)Look for the recycled option in all the products you buy",50,260);
                this.tip9 = createElement('h5');
              this.tip9.position(50,200);
              this.tip9.html("1)Buy recycled paper and print on both sides.");
              this.tip10 = createElement('h5');
              this.tip10.position(50,230);
              this.tip10.html("2)Recycle your empty ink and toner cartridges.");
              this.tip11 = createElement('h5');
              this.tip11.position(50,260);
              this.tip11.html("3)Look for the recycled option in all the products you buy");
              this.previous = createButton('Back');
              this.previous.position(30,650);
              

              this.previous.mousePressed(()=>{
                this.question = createElement('h4');
                this.question.position(20,120);
                this.question.html("How many kilograms of waste do you generate per day?");
                this.other = createInput("Other");
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.tip1.hide();
            this.tip2.hide();
            this.reduce1.hide();
            this.reuse1.hide();
            this.recycle1.hide();
            this.previous.hide();
            this.tip9.hide();
                this.tip10.hide();
                this.tip11.hide();

            this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });
              });

              });
      
            });

            this.fourFiveKg.mousePressed(()=>{
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              this.tip12 = createElement('h5');
              this.tip12.position(50,120);
              this.tip12.html("4-5 kg! You can do better!")
              //text("4-5 kg! You can do better!",50,120);
              this.tip13 = createElement('h5');
              this.tip13.position(50,150);
              this.tip13.html("Here are some tips to reduce that :")
              //text("Here are some tips to reduce that :",50,140);
              this.reduce2 = createButton('Reduce');
              this.reuse2 = createButton('Reuse');
              this.recycle2 = createButton('Recycle');
              this.reduce2.position(50,200);
              this.reuse2.position(50,230);
              this.recycle2.position(50,260);
              this.back.hide();
              this.question.hide();

              this.previous = createButton('Back');
              this.previous.position(30,650);
              this.previous.mousePressed(()=>{
                this.other = createInput("Other");
              //this.other.size(250);
              this.question = createElement('h4');
              this.question.position(20,120);
              this.question.html("How many kilograms of waste do you generate per day?");
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.tip12.hide();
            this.tip13.hide();
            this.reduce2.hide();
            this.reuse2.hide();
            this.recycle2.hide();
            this.previous.hide();
            
            this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                //this.tip14.hide();
                //this.tip15.hide();
                //this.tip16.hide();
                this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
            
              });
              });



              this.reduce2.mousePressed(()=>{
                this.reduce2.hide();
                this.reuse2.hide();
                this.recycle2.hide();
                //this.back.hide();
                this.tip14 = createElement('h5');
                this.tip14.position(50,200);
                this.tip14.html("1)Avoid single-use food and drink containers and utensils");
                this.tip15 = createElement('h5');
                this.tip15.position(50,230);
                this.tip15.html("2)Shop local farmers markets and buy in bulk.");
                this.tip16 = createElement('h5');
                this.tip16.position(50,260);
                this.tip16.html("3)Start composting.");
                this.previous = createButton('Back');
                this.previous.position(30,650);
                
  
                this.previous.mousePressed(()=>{
                  this.question = createElement('h4');
                  this.question.position(20,120);
                  this.question.html("How many kilograms of waste do you generate per day?");
                  this.other = createInput("Other");
                this.twoThreeKg = createButton('2-3 kg');
                this.fourFiveKg = createButton('4-5 kg');
                this.sixSevenKg = createButton('6-7 kg');
                this.twoThreeKg.position(100,250);
              this.fourFiveKg.position(100,350);
              this.sixSevenKg.position(100,450);
              this.other.position(100,550);
              this.tip14.hide();
              this.tip15.hide();
              this.tip16.hide();
              this.tip12.hide();
              this.tip13.hide();
              this.reduce2.hide();
              this.reuse2.hide();
              this.recycle2.hide();
              this.previous.hide();
              this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });
             
                 /* this.tip4.hide();
                  this.tip5.hide();*/
  
              /*this.previous = createButton('Go to Home Page');
                this.previous.position(30,650);
                this.previous.mousePressed(()=>{
                  this.twoThreeKg.hide();
                  this.fourFiveKg.hide();
                  this.sixSevenKg.hide();
                  this.other.hide();
                  this.back.hide();
                  
               

                  
                 this.va = createButton('VOICE ASSISTANT');
              this.pic = createButton('TAKE A PIC!');
              this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
              this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
                });*/
                });
  
  
                
              });
              this.reuse2.mousePressed(()=>{
                this.reduce2.hide();
                this.reuse2.hide();
                this.recycle2.hide();
                this.tip17 = createElement('h5');
                this.tip17.position(50,200);
                this.tip17.html("1)Use a reusable bottle/cup for beverages on the go");
                this.tip18 =  createElement('h5');
                this.tip18.position(50,230);
                this.tip18.html("2)Use reusable bags");
                this.tip19 = createElement('h5');
                this.tip19.position(50,260);
                this.tip19.html("3)Buy second-hand items and donate used goods");
                //text("1)........",50, 200);
                //text("2)............",50,230);
                //text("3).......",50,260);
                this.previous = createButton('Back');
                this.previous.position(30,650);

                this.previous.mousePressed(()=>{
                  this.question = createElement('h4');
                  this.question.position(20,120);
                  this.question.html("How many kilograms of waste do you generate per day?");
                  this.other = createInput("Other");
                this.twoThreeKg = createButton('2-3 kg');
                this.fourFiveKg = createButton('4-5 kg');
                this.sixSevenKg = createButton('6-7 kg');
                this.twoThreeKg.position(100,250);
              this.fourFiveKg.position(100,350);
              this.sixSevenKg.position(100,450);
              this.other.position(100,550);
              this.tip17.hide();
              this.tip18.hide();
              this.tip19.hide();
              this.tip12.hide();
              this.tip13.hide();
              this.reduce2.hide();
              this.reuse2.hide();
              this.recycle2.hide();
              this.previous.hide();
              this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });

              });

              });

              this.recycle2.mousePressed(()=>{
                this.reduce2.hide();
                this.reuse2.hide();
                this.recycle2.hide();
                this.tip20 = createElement('h5');
                this.tip20.position(50,200);
                this.tip20.html("1)Buy recycled paper and print on both sides");
                this.tip21 = createElement('h5');
                this.tip21.position(50,230);
                this.tip21.html("2)Recycle your empty ink and toner cartridges");
                this.tip22 = createElement('h5');
                this.tip22.position(50,260);
                this.tip22.html("3)Look for the recycled option in all products you buy");
                //text("1)........",50, 200);
                //text("2)............",50,230);
                //text("3).......",50,260);
                this.previous = createButton('Back');
                this.previous.position(30,650);

                this.previous.mousePressed(()=>{
                  this.question = createElement('h4');
                  this.question.position(20,120);
                  this.question.html("How many kilograms of waste do you generate per day?");
                  this.other = createInput("Other");
                  this.twoThreeKg = createButton('2-3 kg');
                  this.fourFiveKg = createButton('4-5 kg');
                  this.sixSevenKg = createButton('6-7 kg');
                  this.twoThreeKg.position(100,250);
                  this.fourFiveKg.position(100,350);
                  this.sixSevenKg.position(100,450);
                  this.other.position(100,550);
                  this.tip20.hide();
                  this.tip21.hide();
                  this.tip22.hide();
                  this.tip12.hide();
                  this.tip13.hide();
                  this.reduce2.hide();
                  this.reuse2.hide();
                  this.recycle2.hide();
                  this.previous.hide();
                  

              this.back = createButton('Go to Home Page');
              this.back.position(30,650);

                this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });

              });


              });
            });

            this.sixSevenKg.mousePressed(()=>{
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              this.tip23 = createElement('h5');
              this.tip23.position(50,120);
              this.tip23.html("6-7 kg! That is hazardous!")
              //text("4-5 kg! You can do better!",50,120);
              this.tip24 = createElement('h5');
              this.tip24.position(50,150);
              this.tip24.html("Here are some tips to reduce that :")
              //text("Here are some tips to reduce that :",50,140);
              this.reduce3 = createButton('Reduce');
              this.reuse3 = createButton('Reuse');
              this.recycle3 = createButton('Recycle');
              this.reduce3.position(50,200);
              this.reuse3.position(50,230);
              this.recycle3.position(50,260);
              this.back.hide();
              this.question.hide();

              this.previous = createButton('Back');
              this.previous.position(30,650);
              this.previous.mousePressed(()=>{
                this.other = createInput("Other");
              //this.other.size(250);
              this.question = createElement('h4');
              this.question.position(20,120);
              this.question.html("How many kilograms of waste do you generate per day?");
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            this.tip23.hide();
            this.tip24.hide();
            this.reduce3.hide();
            this.reuse3.hide();
            this.recycle3.hide();
            this.previous.hide();
            
            this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                //this.tip14.hide();
                //this.tip15.hide();
                //this.tip16.hide();
                this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
            
              });
              });


              this.reduce3.mousePressed(()=>{
                this.reduce3.hide();
                this.reuse3.hide();
                this.recycle3.hide();
                this.tip25 = createElement('h5');
                this.tip25.position(50,200);
                this.tip25.html("1)Avoid single-use food and drink containers and utensils");
                this.tip26 = createElement('h5');
                this.tip26.position(50,230);
                this.tip26.html("2) Shop local farmers market and buy in bulk");
                this.tip27 = createElement('h5');
                this.tip27.position(50,260);
                this.tip27.html("3)Start composting");
                //text("1)........",50, 200);
                //text("2)............",50,230);
                //text("3).......",50,260);

                this.previous = createButton('Back');
                this.previous.position(30,650);
                
                //this.other = createInput("Other");
                this.previous.mousePressed(()=>{
                  this.question = createElement('h4');
                this.question.position(20,120);
                this.question.html("How many kilograms of waste do you generate per day?");
                  this.other = createInput("Other");
                  this.twoThreeKg = createButton('2-3 kg');
                  this.fourFiveKg = createButton('4-5 kg');
                  this.sixSevenKg = createButton('6-7 kg');
                  this.twoThreeKg.position(100,250);
                  this.fourFiveKg.position(100,350);
                  this.sixSevenKg.position(100,450);
                  this.other.position(100,550);
                  this.tip25.hide();
                  this.tip26.hide();
                  this.tip27.hide();
                  this.tip23.hide();
                  this.tip24.hide();
                  this.reduce3.hide();
                  this.reuse3.hide();
                  this.recycle3.hide();
                  this.previous.hide();

              this.back = createButton('Go to Home Page');
              this.back.position(30,650);

                this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });

              });

              });
              this.reuse3.mousePressed(()=>{
                this.reduce3.hide();
                this.reuse3.hide();
                this.recycle3.hide();
                this.tip28 = createElement('h5');
                this.tip28.position(50,200);
                this.tip28.html("1)Use a reusable bottle/cup for beverages on the go");
                this.tip29 = createElement('h5');
                this.tip29.position(50,230);
                this.tip29.html("2)Use reusable bags");
                this.tip30 = createElement('h5');
                this.tip30.position(50,260);
                this.tip30.html("3) Buy second-hand items and donate used goods");
                
                //text("1)........",50, 200);
                //text("2)............",50,230);
                //text("3).......",50,260);

                this.previous = createButton('Back');
                this.previous.position(30,650);
               
               
                this.previous.mousePressed(()=>{
                  this.question = createElement('h4');
                  this.question.position(20,120);
                  this.question.html("How many kilograms of waste do you generate per day?");
                  
                  this.twoThreeKg = createButton('2-3 kg');
                  this.fourFiveKg = createButton('4-5 kg');
                  this.sixSevenKg = createButton('6-7 kg');
                  this.twoThreeKg.position(100,250);
                  this.fourFiveKg.position(100,350);
                  this.sixSevenKg.position(100,450);
                  this.other = createInput("Other");
                  this.other.position(100,550);
                  this.tip29.hide();
                  this.tip28.hide();
                  this.tip30.hide();
                  this.tip23.hide();
                  this.tip24.hide();
                  this.reduce3.hide();
                  this.reuse3.hide();
                  this.recycle3.hide();
                  this.previous.hide();

              this.back = createButton('Go to Home Page');
              this.back.position(30,650);

                this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });

              });

              });
              this.recycle3.mousePressed(()=>{
                this.reduce3.hide();
                this.reuse3.hide();
                this.recycle3.hide();
                this.tip31 = createElement('h5');
                this.tip31.position(50,200);
                this.tip31.html("1)Buy recycled paper and print on both sides");
                this.tip32 = createElement('h5');
                this.tip32.position(50,230);
                this.tip32.html("2)Recycle your empty ink and toner cartridges");
                this.tip33 = createElement('h5');
                this.tip33.position(50,260);
                this.tip33.html("3)Look for the recycled option in all the products you buy");
                //text("1)........",50, 200);
                //text("2)............",50,230);
                //text("3).......",50,260);
                this.previous = createButton('Back');
                this.previous.position(30,650);
               
              
                this.previous.mousePressed(()=>{

                  this.question = createElement('h4');
                  this.question.position(20,120);
                  this.question.html("How many kilograms of waste do you generate per day?");

                  this.other = createInput("Other");
                  this.twoThreeKg = createButton('2-3 kg');
                  this.fourFiveKg = createButton('4-5 kg');
                  this.sixSevenKg = createButton('6-7 kg');
                  this.twoThreeKg.position(100,250);
                  this.fourFiveKg.position(100,350);
                  this.sixSevenKg.position(100,450);
                  this.other.position(100,550);
                  this.tip31.hide();
                  this.tip32.hide();
                  this.tip33.hide();
                  this.tip23.hide();
                  this.tip24.hide();
                  this.reduce3.hide();
                  this.reuse3.hide();
                  this.recycle3.hide();
                  this.previous.hide();

              this.back = createButton('Go to Home Page');
              this.back.position(30,650);

                this.back.mousePressed(()=>{
                this.twoThreeKg.hide();
                this.fourFiveKg.hide();
                this.sixSevenKg.hide();
                this.other.hide();
                this.back.hide();
                this.question.hide();
                
               this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
              });

              });


              });
            });
              
            });

            this.specificWM.mousePressed(()=>{
              this.reduce4 = createElement('h5');
            this.reduce4.position(50,200);
            this.reduce4.html("Reduce-Purchase supplies and parts in bulk quantities.");

            this.reuse4 = createElement('h5');
            this.reuse4.position(50,230);
            this.reuse4.html("Reuse-Make crafts and have fun!")

            this.recycle4 = createElement('h5');
            this.recycle4.position(50,260);
            this.recycle4.html("Recycle-Cardboard can be recycled five to seven times!")

              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              this.search = createInput("Tips to dispose off cardboard");
              this.search.position(35,120);
              this.search.size(320);
              this.back = createButton('Go to Home Page');
              this.back.position(30,650);
              this.back.mousePressed(()=>{
                this.search.hide();
                this.back.hide();
                this.reduce4.hide();
                this.reuse4.hide();
                this.recycle4.hide();
                this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
            
           
              });
            });


          }
          
    
          
    }