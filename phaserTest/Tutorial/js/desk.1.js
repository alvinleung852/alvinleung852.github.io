/* global
game, Phaser, position, electorNum
*/

var DeskState = function(){};

var deskGroup, tweenElector, tweenElector2;
var desk, elector, speechBubble1, speechBubble2, speechBubble3, gameText, nextButton;
var turn, created;
var convoCount;
var convoText = [];
var form1, form2, form3, form4, form5, form6;
var deskCount = 0;
var formClick, LoE, tweenLoE;
var ID, tweenID;
var electorNum = 1;
var statementImg, tweenStatement;
var title;
var music, music2;
var isConvo;
var sub_val;
var extraAnimParam = 0;
var mummy = false;
var mummy2 = false;
var mummySprite, mummySprite2;
// var formLarge;

DeskState.prototype = {
    create: function(){
        mummy = false;
        mummy2 = false;
        deskCount++;
        formClick = false;
        convoCount = 0;
        created = false;
        isConvo = true;
        game.stage.backgroundColor = '#888888';
        bg = game.add.tileSprite(0, 0, 800, 600, 'backgroundL');
        
        // formLarge = game.add.sprite(0, 0, 'imgLoE');
        // formLarge.scale.setTo(0.5, 0.5);
        
        // game.add.text(40, 40, position, {font:'50px Arial', fill:'#ffffff'});
        
        title = game.add.text(10, 560, "", {font:'25px Arial', fill:'#ffffff'});
        
        deskGroup = game.add.group();
        // electorGroup
        // backGroup = game.add.group();

        speechBubble1 = game.add.sprite(100, 100, 'speechBubble1');
        speechBubble1.scale.setTo(0.3, 0.3);
        speechBubble1.alpha = 0;
        speechBubble2 = game.add.sprite(100, 100, 'speechBubble2');
        speechBubble2.scale.setTo(0.3, 0.3);
        speechBubble2.alpha = 0;
        speechBubble3 = game.add.sprite(100, 100, 'speechBubble4');
        speechBubble3.scale.setTo(0.3, 0.3);
        speechBubble3.alpha = 0;
        
        desk = game.add.sprite(0, 375, 'desk');
        
        form1 = game.add.button(340, 400, 'form1', this.start, this, 1, 0, 2);
        form1.scale.setTo(0.3, 0.3);
        form2 = game.add.button(442, 400, 'form6', this.statementVote, this, 1, 0, 2);
        form2.scale.setTo(0.3, 0.3);
        form3 = game.add.button(550, 385, 'form1', this.start, this, 1, 0, 2);
        form3.scale.setTo(0.3, 0.3);
        form4 = game.add.button(600, 410, 'form1', this.start, this, 1, 0, 2);
        form4.scale.setTo(0.3, 0.3);
        form5 = game.add.button(650, 435, 'form1', this.start, this, 1, 0, 2);
        form5.scale.setTo(0.3, 0.3);
        form6 = game.add.button(180, 435, 'form2', this.LoE, this, 1, 0, 2);
        form6.scale.setTo(0.3, 0.3);
        
        nextButton = game.add.button(480, 305, 'nextButton', this.speechBubble, this, 1, 0, 2);
        nextButton.scale.setTo(0.3, 0.3);
        
        deskGroup.add(desk);
        deskGroup.add(form1);
        deskGroup.add(form2);
        deskGroup.add(form3);
        deskGroup.add(form4);
        deskGroup.add(form5);
        deskGroup.add(form6);
        deskGroup.add(speechBubble1);
        deskGroup.add(speechBubble2);
        deskGroup.add(speechBubble3);
        deskGroup.add(nextButton);
        deskGroup.add(title);
        // deskGroup.add(formLarge);
        
        this.loadElectorInfo(deskCount);
        
    //     if(deskCount == 1){
    //         if(electorNum == 0){
    //             elector = game.add.sprite(800, 75, 'elector');
    //         }
    //         elector.scale.setTo(0.75, 0.75);
    //         elector.alpha = 0;
            
    //         tweenElector = game.add.tween(elector);
    //         tweenElector.to({x:600}, 500, 'Cubic', true, 0);
    //         game.add.tween(elector).to({alpha:1}, 200, 'Linear', true, 0);
    //         tweenElector.onComplete.add(function() {  game.time.events.add(1000, this.speechBubble)}, this);
            
    //         // convoText[0] = "Hello, bonjour. Can I please have your name and address?";
    //         // convoText[1] = "My name is Bob McBobson. I live at 532 rue Binton, Youville.";
    //     }else if(deskCount == 2){
    //         if(electorNum == 0){
    //             elector = game.add.sprite(600, 75, 'elector');
    //         }
    //         elector.scale.setTo(0.75, 0.75);

    //         tweenElector2 = game.add.tween(elector);
    //         tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
    //         tweenElector2.onComplete.add(this.speechBubble, this);
            
    //         convoText = [];
    //         convoText[0] = "Please may I see some ID with name and address?";
    //         convoText[1] = "Yes, here you go.";
    //     }
    //     else if(deskCount == 3){
    //         if(electorNum == 0){
    //             elector = game.add.sprite(600, 75, 'elector');
    //         }
    //         elector.scale.setTo(0.75, 0.75);

    //         tweenElector2 = game.add.tween(elector);
    //         tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
    //         tweenElector2.onComplete.add(this.speechBubble, this);
            
    //         // convoText = [];
    //         // convoText[0] = "Your ID is acceptable, here is your ballot. Go behind the screen, and mark the circle for your candidate. Bring back the ballot folded the same way.";
    //         // convoText[1] = "Great, thanks.";
    //         // convoText[2] = "";
    //         // convoText[3] = "Here is my ballot.";
    //         // convoText[4] = "";
    //     }else if(deskCount == 4){
    //         if(electorNum == 0){
    //             elector = game.add.sprite(600, 75, 'elector');
    //         }
    //         elector.scale.setTo(0.75, 0.75);

    //         tweenElector2 = game.add.tween(elector);
    //         tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
    //         tweenElector2.onComplete.add(this.speechBubble, this);
            
    //         // convoText = [];
    //         // convoText[0] = "Here is your ballot back";
    //         // convoText[1] = "Great, thanks.";
    //     }else if(deskCount == 5){
    //         if(electorNum == 0){
    //             elector = game.add.sprite(600, 75, 'elector');
    //         }
    //         elector.scale.setTo(0.75, 0.75);

    //         tweenElector2 = game.add.tween(elector);
    //         tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
    //         tweenElector2.onComplete.add(this.speechBubble, this);
            
    //         convoText = [];
    //         convoText[0] = "You are all done, thank you for voting.";
    //         convoText[1] = "Thank you, have a nice day.";
    //         convoText[2] = "";
    // }else 
        // if(deskCount == 6){
        //     var phaserJSON = game.cache.getJSON('version');
        //     var size = 1;
        //     for(var i in phaserJSON){
        //         // convoText[size] = phaserJSON.
        //         var key = i;
        //         var val = phaserJSON[i];
        //         alert(i.length);
        //         for(var j in val){
        //             var sub_key = j;
        //             var sub_val = val[j];
        //             // alert(sub_val);
        //         }
        //     }
            
        //     alert(size);
        //     isConvo = false;
        //     convoText = [];
        //     convoText[1] = "";
        //     this.speechBubble();
        // }
    },
    
    loadElectorInfo: function(param){
        convoText = [];
        switch(electorNum){
            case 1: 
                var phaserJSON = game.cache.getJSON('elector1');
                break;
            case 2: 
                var phaserJSON = game.cache.getJSON('elector2');
                break;
        }

        var size = 0;
        var electorAppearParam = 0;
        for(var i in phaserJSON){
            var key = i;
            var val = phaserJSON[i];
            size++;
            var temp = 0;
            for(var j in val){
                var sub_key = j;
                sub_val = val[j];
                if(size == param){
                    if(size == 1){
                        electorAppearParam = 0; 
                    }else if(size == i.length){
                        electorAppearParam = 2; 
                    }else{
                        electorAppearParam = 1; 
                    }
                    convoText[temp] = sub_val;
                    temp++;
                }
            }
        }
        this.electorAppear(electorAppearParam);
    },
    
    electorAppear: function(param){
        //Animate in elector, or elector already there
        if(param == 0){
            switch(electorNum){
                case 1:
                    elector = game.add.sprite(800, 75, 'electorImg1');
                    elector.scale.setTo(0.75,0.75)
                    elector.alpha = 0;
                    tweenElector = game.add.tween(elector);
                    tweenElector.to({x:600}, 500, 'Cubic', true, 0);
                    game.add.tween(elector).to({alpha:1}, 200, 'Linear', true, 0);
                    break;
                case 2:
                    elector = game.add.sprite(800, -50, 'regoIdle');
                    elector.scale.setTo(5,5);
                    // elector.anchor.setTo(1, 1);
                    elector.animations.add('idle');
                    elector.animations.play('idle', 5, true);
                    elector.alpha = 0;
            
                    tweenElector = game.add.tween(elector);
                    tweenElector.to({x:325}, 500, 'Cubic', true, 0);
                    game.add.tween(elector).to({alpha:1}, 200, 'Linear', true, 0);
                    // elector = game.add.sprite(800, 75, 'electorImg2');
                    break;
            }
            // elector.scale.setTo(0.75, 0.75);
            
            tweenElector.onComplete.add(function() {  game.time.events.add(1000, this.speechBubble)}, this);
        }else if(param == 1){
            switch(electorNum){
                case 1:
                    elector = game.add.sprite(600, 75, 'electorImg1');
                    elector.scale.setTo(0.75, 0.75);
                    tweenElector2 = game.add.tween(elector);
                    tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
                    break;
                case 2:
                    elector = game.add.sprite(325, -50, 'regoIdle');
                    elector.scale.setTo(5,5);
                    elector.animations.add('idle');
                    elector.animations.play('idle', 5, true);
                    tweenElector2 = game.add.tween(elector);
                    tweenElector2.to({x:325}, 0, 'Cubic', true, 0);
                    // elector = game.add.sprite(600, 75, 'electorImg2');
                    break;
            }
            // elector.scale.setTo(0.75, 0.75);

            // tweenElector2 = game.add.tween(elector);
            // tweenElector2.to({x:325}, 0, 'Cubic', true, 0);
            tweenElector2.onComplete.add(this.speechBubble, this);
        }else{
            this.speechBubble();
        }
    },
    
    update: function(){
        game.world.bringToTop(deskGroup);
        
        
        if(convoCount >= convoText.length){
            deskGroup.remove(nextButton);
        }
        
        if(speechBubble1.alpha == 1){
            nextButton.alpha = 1;
        }else if(speechBubble2.alpha == 1){
            nextButton.alpha = 1;
        }else if(speechBubble3.alpha == 1){
            nextButton.alpha = 1;
        }else{
            nextButton.alpha = 0;
        }
        
        //Randomly generate background walking
        // if(mummy == false){
        //     var randInt = Math.floor((Math.random() * 100) + 1);
        //     if(randInt == 7 && mummy == false){
        //         this.bg1Walk1();
        //         game.world.sendToBack(mummySprite);
        //     }
        // }
        // if(mummy2 == false){
        //     var randInt = Math.floor((Math.random() * 100) + 1);
        //     if(randInt == 50 && mummy2 == false){
        //         this.bg2Walk1();
        //         game.world.sendToBack(mummySprite2);
        //     }
        // }
        
        form1.events.onInputOver.add(this.overBookOath, this);
        form1.events.onInputOut.add(this.outForm, this);
        form2.events.onInputOver.add(this.overStatement, this);
        form2.events.onInputOut.add(this.outForm, this);
        form3.events.onInputOver.add(this.overRegCert, this);
        form3.events.onInputOut.add(this.outForm, this);
        form4.events.onInputOver.add(this.overCorrCert, this);
        form4.events.onInputOut.add(this.outForm, this);
        form5.events.onInputOver.add(this.overOathCert, this);
        form5.events.onInputOut.add(this.outForm, this);
        form6.events.onInputOver.add(this.overLoE, this);
        form6.events.onInputOut.add(this.outForm, this);
        game.world.sendToBack(bg);
        
    },
    
    extraAnim: function(param){
        switch (param){
            case 0:
                
                break;
            //Animate elector out
            case 1:
                tweenElector2 = game.add.tween(elector);
                tweenElector2.to({x:1000}, 0, 'Cubic', true, 0);
                turn = false;
                break;
            //Animate elector in
            case 2:
                tweenElector2 = game.add.tween(elector);
                
                switch(electorNum){
                    case 1:
                        tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
                        break;
                    case 2:
                        tweenElector2.to({x:325}, 0, 'Cubic', true, 0);
                        break;
                }
                break;
            //Animate IDs
            case 3:
                switch(electorNum){
                    case 1:
                        ID = game.add.sprite(200, 200, 'ID1');
                        break;
                    case 2:
                        ID = game.add.sprite(200, 200, 'ID2');
                        break;
                }
                ID.scale.setTo(0.25, 0.25);
                tweenID = game.add.tween(ID);
                tweenID.to({x:0, y:0}, 500, 'Linear', true, 1000);
                game.add.tween(ID.scale).to({x: 1, y:1}, 500, 'Linear', true, 1000);
                tweenID.onComplete.add(this.checkID, this);
                deskGroup.add(ID);
                break;
            //hide elector and speechbubble
            case 4:
                tweenElector2 = game.add.tween(elector);
                tweenElector2.to({x:1000}, 0, 'Cubic', true, 0);
                game.add.tween(speechBubble1).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble2).to({alpha:0}, 200, 'Linear', true, 0);
                break;
            //textbox
            case 5:
                game.add.tween(speechBubble1).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble2).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble3).to({alpha:1}, 200, 'Linear', true, 0);
                break;
            
        }    
    },
    
    speechBubble: function(){
        var style = { font: '20pt Arial', fill: '#343434', align: 'left', wordWrap: true, wordWrapWidth: 393, wordWrapHeight: 50 };
        
        //Change speechbubble
        if(convoCount == 0 && isConvo == true){
            if(convoText[convoCount].substr(0,6) == "/turn;"){
                convoText[convoCount] = convoText[convoCount].replace("/turn;", "");
                game.add.tween(speechBubble1).to({alpha:1}, 200, 'Linear', true, 0);
                turn = true;
            }else{
                game.add.tween(speechBubble2).to({alpha:1}, 200, 'Linear', true, 0);
                turn = false;
            }
            gameText = game.add.text(120, 120, convoText[convoCount], style);
            gameText.alpha = 0;
            game.add.tween(gameText).to({alpha:1}, 200, 'Linear', true, 0);
            deskGroup.add(gameText);
            
            created = true;
        }else if(convoCount > 0 && isConvo == true){
            this.playSelect();
            gameText.setText(convoText[convoCount]);
            if(gameText.text.substr(0,6) == "/turn;"){
                gameText.text = gameText.text.replace("/turn;", "");
                turn = true;
            }
            if(gameText.text.substr(0,9) == "/elecOut;"){
                // alert("asdf");
                game.add.tween(speechBubble1).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble3).to({alpha:1}, 200, 'Linear', true, 0);
                turn = false;
            }
            else if(turn){
                game.add.tween(speechBubble1).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble3).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble2).to({alpha:1}, 200, 'Linear', true, 0);
                turn = false;
            }else{
                game.add.tween(speechBubble1).to({alpha:1}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble2).to({alpha:0}, 200, 'Linear', true, 0);
                game.add.tween(speechBubble3).to({alpha:0}, 200, 'Linear', true, 0);
                turn = true;
            }
        }else{
            speechBubble3.alpha = 1;
            gameText = game.add.text(120, 120, convoText[convoCount], style);
            deskGroup.add(gameText);
            turn = false;
            created = true;
        }
        
        //Extra animations
        if(gameText.text.substr(0,9) == "/elecOut;"){
            gameText.text = gameText.text.replace("/elecOut;", "");
            this.extraAnim(1);
        }else if(gameText.text.substr(0,11) == "/goToCheck;"){
            gameText.text = gameText.text.replace("/goToCheck;", "");
            game.state.start('Check');
        }else if(gameText.text.substr(0,8) == "/showID;"){
            gameText.text = gameText.text.replace("/showID;", "");
            this.extraAnim(3);
        }else if(gameText.text.substr(0,8) == "/elecIn;"){
            gameText.text = gameText.text.replace("/elecIn;", "");
            this.extraAnim(2);
        }else if(gameText.text.substr(0,11) == "/speechOut;"){
            gameText.text = gameText.text.replace("/speechOut;", "");
            this.extraAnim(4);
        }else if(gameText.text.substr(0,9) == "/endText;"){
            gameText.text = gameText.text.replace("/endText;", "");
            this.extraAnim(5);
        }
        else if(gameText.text.substr(0,10) == "/nextElec;"){
            gameText.text = gameText.text.replace("/nextElec;", "");
            electorNum++;
            deskCount = 0;
            game.state.start('Desk');
        }
        // if(deskCount == 2 && convoCount == 1){
        //     ID = game.add.sprite(200, 200, 'ID1');
        //     ID.scale.setTo(0.25, 0.25);
        //     tweenID = game.add.tween(ID);
        //     tweenID.to({x:0, y:0}, 500, 'Linear', true, 1000);
        //     game.add.tween(ID.scale).to({x: 1, y:1}, 500, 'Linear', true, 1000);
        //     tweenID.onComplete.add(this.checkID, this);
        //     deskGroup.add(ID);
        // }
        // if(deskCount == 3 && convoCount == 2){
        //     tweenElector2 = game.add.tween(elector);
        //     tweenElector2.to({x:1000}, 0, 'Cubic', true, 0);
        // }
        // if(deskCount == 3 && convoCount == 3){
        //     tweenElector2 = game.add.tween(elector);
        //     tweenElector2.to({x:600}, 0, 'Cubic', true, 0);
        // }
        // if(deskCount == 3 && convoCount == 4){
        //     game.state.start('Check');
        // }
        // if(deskCount == 5 && convoCount == 2){
        //     tweenElector2 = game.add.tween(elector);
        //     tweenElector2.to({x:1000}, 0, 'Cubic', true, 0);
        //     game.add.tween(speechBubble1).to({alpha:0}, 200, 'Linear', true, 0);
        //     game.add.tween(speechBubble2).to({alpha:0}, 200, 'Linear', true, 0);
        // }
        convoCount++;
    },
    
    LoE:function(){
        if(deskCount != 2 && deskCount != 3 && deskCount != 5 && deskCount != 6 && convoCount == convoText.length && formClick == false){
            this.playSelect();
            formClick = true;
            LoE = game.add.sprite(180, 430, 'imgLoE');
            LoE.scale.setTo(0.185, 0.185);
            
            deskGroup.add(LoE);
            tweenLoE = game.add.tween(LoE);
            tweenLoE.to({x:0, y:0}, 500, 'Cubic', true, 0);
            game.add.tween(LoE.scale).to({x:1, y:1}, 500, 'Cubic', true, 0);
            tweenLoE.onComplete.add(this.LoE2, this);
        }else{
            this.playError();
        }
    },
    
    LoE2:function(){
        game.state.start('LoE');
    },
    
    checkID:function(){
        game.state.start('ID');
    },
    
    statementVote: function(){
        if(deskCount == 5 && convoCount == convoText.length && formClick == false){
            this.playSelect();
            formClick = true;
            statementImg = game.add.sprite(445, 405, 'imgStatement');
            statementImg.scale.setTo(0.122, 0.122);
            deskGroup.add(statementImg);
            
            tweenStatement = game.add.tween(statementImg);
            tweenStatement.to({x:0, y:100}, 500, 'Cubic', true, 0);
            game.add.tween(statementImg.scale).to({x:1, y:1}, 500, 'Cubic', true, 0);
            tweenStatement.onComplete.add(this.statementVote2, this);
        }else{
            this.playError();
        }
    }, 
    
    statementVote2: function(){
        game.state.start('Statement');
    },
    
    outForm: function(){
        title.text = "";
        // formLarge.alpha = 0;
    },
    
    overLoE: function(){
        title.text = "List of Electors";
        // formLarge.alpha = 1;
    },
    
    overStatement: function(){
        title.text = "Statement of the Vote";
    },
    
    overRegCert: function(){
        title.text = "Registration Certificate";
    },
    
    overCorrCert: function(){
        title.text = "Correction Certificate";
    },
    
    overOathCert: function(){
        title.text = "Oath of Residence Certificate";
    },
    
    overBookOath: function(){
        title.text = "Book of Oaths";
    },
    
    playSelect: function(){
        music = game.add.audio('menuSelect');
        music.loop = false;
        music.play();
    },
    
    playError: function(){
        music2 = game.add.audio('menuError');
        music2.loop = false;
        music2.play();
    },
    
    bg1Walk1: function(){
        // alert("asdf");
        if(mummy == false){
            mummy = true;
            mummySprite = game.add.sprite(-200, 100, 'mummy');
            mummySprite.scale.setTo(5, 5);
            mummySprite.animations.add('walk');
            mummySprite.animations.play('walk', 24, true);
            tweenMummy = game.add.tween(mummySprite);
            tweenMummy.to({x:800}, 5000, 'Linear', true, 0);
            // elector = game.add.sprite(800, -50, 'regoIdle');
                    // elector.scale.setTo(5,5);
                    // elector.anchor.setTo(1, 1);
                    // elector.animations.add('idle');
                    // elector.animations.play('idle', 5, true);
            tweenMummy.onComplete.add(this.bg1Walk2, this);
            
        }
    },
    
    bg1Walk2: function(){
        mummy = false;
    },
    
    bg2Walk1: function(){
        if(mummy2 == false){
            mummy2 = true;
            mummySprite2 = game.add.sprite(800, 100, 'electorImg2');
            mummySprite2.scale.setTo(0.5, 0.5);
            // mummy.animations.add('walk');
            // mummy.animations.play('walk', 24, true);
            tweenMummy2 = game.add.tween(mummySprite2);
            tweenMummy2.to({x:-200}, 5000, 'Linear', true, 0);
            // elector = game.add.sprite(800, -50, 'regoIdle');
                    // elector.scale.setTo(5,5);
                    // elector.anchor.setTo(1, 1);
                    // elector.animations.add('idle');
                    // elector.animations.play('idle', 5, true);
            tweenMummy2.onComplete.add(this.bg2Walk2, this);
            game.world.sendToBack(mummySprite2);
        }
    },
    
    bg2Walk2: function(){
        mummy2 = false;
    },
    
};