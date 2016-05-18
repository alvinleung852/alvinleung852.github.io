/* global
game, Phaser, position, content, deskCount
*/

var LoEState = function(){};

var LoE, Title, button1, button2, button3, clickMechanic, speechBubble1, gameText, blackLine, tweenLine, checkLoE, tweenCheck, music, music2, music3;

var buttonGroup;

// var char, desk, text;
// var textLabel;
// var textGroup, charGroup, deskGroup, overlayGroup;
var currAspectRatio;            // 0 = 4:3, 1 = 16:9, 2 = 9:16
// var screenResolutions = [[800, 600], [1280, 720], [720, 1280]];
// var charDimensions = [[0, 0],[0, 0],[-1000, -1000]];
// var deskDimensions = [[0, 200],[0, 360],[0, 0]];
// var textDimensions = [[0, 400],[800, 0],[0, 640]];
// var scaleNum;
// var textPadding = 10;
// var elector;

var cursors;

var buttonArray = [];

var buttonSelect = -1;
var buttonLeftMechanic = 0;
var buttonRightMechanic = 0;
var buttonEnterMechanic = 0;

// var line = [];

// var letterIndex = 0;
// var lineIndex = 0;
// var lineCount = 0;

// var letterDelay = 50;
// var lineDelay = 25;

var waitForNext = false;

var LoEArray = [];
var LoEGroup;
var LoECount = 0;

var clicked;
var answerGroup;

var buttonClick, buttonNext, buttonBack;

LoEState.prototype = {
    create: function(){
        
        clickMechanic = 0;
        currAspectRatio = 5;
        clicked = false;
        buttonArray = [];
        buttonSelect = -1;
        
        buttonLeftMechanic = 0;
        buttonRightMechanic = 0;
        buttonEnterMechanic = 0;
        
        LoECount = 0;
        
        
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Find the elector on the List by clicking on their name", {font:'30px VT323', fill:'#ffffff'});
        
        // LoE = game.add.sprite(0, 0, 'imgLoE');
        // LoE.scale.setTo(1.2, 1.2);
        // LoE.anchor.setTo(0.5, 0.5);
        
        LoEGroup = game.add.group();
        answerGroup = game.add.group();
        
        for(var i = 0; i < 10; i++){
            LoEArray[i] = game.add.sprite(0, 0, 'imgLoE');
            LoEArray[i].scale.setTo(1.2, 1.2);
            LoEArray[i].anchor.setTo(0.5, 0.5);
            LoEArray[i].x = (1000 * i) + 640;
            LoEArray[i].y = 360;
            LoEGroup.add(LoEArray[i]);
        }
        
        blackLine = game.add.sprite(0, 0, 'LoELine');
        blackLine.anchor.setTo(0.5, 0.5);
        // blackLine2 = game.add.sprite(101, 180, 'LoELine');
        // blackLine3 = game.add.sprite(101, 450, 'LoELine');
        checkLoE = game.add.sprite(-300, 0, 'LoECheck');
        checkLoE.anchor.setTo(0.5, 0.5);
        checkLoE.alpha = 0;
        
        buttonGroup = game.add.group();
        
        buttonClick = game.add.button(0, 0, 'LoEClick', this.LoEClick, this, 1, 0, 2);
        buttonClick.anchor.setTo(0.5, 0.5);
        buttonClick.alpha = 0.1;
        // buttonClick.visible = false;
        
        answerGroup.add(blackLine);
        answerGroup.add(buttonClick);
        answerGroup.add(checkLoE);
        
        answerGroup.visible = false;
        buttonBack = game.add.button(150, 360, 'buttonBack', this.LoEBack, this, 1, 0, 2);
        buttonBack.scale.setTo(0.5, 0.5);
        buttonBack.anchor.setTo(0.5, 0.5);
        buttonNext = game.add.button(1130, 360, 'buttonNext', this.LoENext, this, 1, 0, 2);
        buttonNext.scale.setTo(0.5, 0.5);
        buttonNext.anchor.setTo(0.5, 0.5);
        
        cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'enter':Phaser.KeyCode.ENTER } );
        
        if(deskCount == 1){
            blackLine.alpha = 0;
            button1 = game.add.button(0, 0, 'button1', this.playSelect, this, 1, 0, 2);
            button1.scale.setTo(0.25, 0.25);
            button1.anchor.setTo(0.5, 0.5);
            button2 = game.add.button(-200, 0, 'button2', this.playSelect, this, 1, 0, 2);
            button2.scale.setTo(0.25, 0.25);
            button2.anchor.setTo(0.5, 0.5);
            button3 = game.add.button(200, 0, 'button3', this.playSelect, this, 1, 0, 2);
            button3.scale.setTo(0.25, 0.25);
            button3.anchor.setTo(0.5, 0.5);
            
            buttonGroup.add(button1);
            buttonGroup.add(button2);
            buttonGroup.add(button3);
            
            // buttonGroup.anchor.setTo(0.5, 1);
            
            speechBubble1 = game.add.sprite(0, 60, 'textBox_9_16');
            // speechBubble1.anchor.setTo(1, 0);
            speechBubble1.scale.x *= 0.6;
            speechBubble1.scale.y *= 0.2;
            // alert('asdf');
            var style = { font: '20pt VT323', fill: '#ffffff', align: 'left', wordWrap: true, wordWrapWidth: 325, wordWrapHeight: 50 };
            for(var i = 0; i < content.length; i++){
                if(content[i].substr(0, 17) == "Elector: My name "){
                    gameText = game.add.text(60, 70, content[i].replace("Elector: ", ""), style);
                }
            }
        }else if(deskCount == 4){
            
        }
        
        buttonArray.push(buttonBack);
        buttonArray.push(buttonNext);
        if(deskCount == 1){
            buttonArray.push(button2);
            buttonArray.push(button1);
            buttonArray.push(button3);
        }
    },
    
    update: function(){
        var screenRatio = window.innerWidth/ window.innerHeight;
        // deskLabel.setText(lineIndex + ", " + arrayNum2 + ", " + currLine);
        // deskLabel.setText(currLine + ", " + content.length);
        // deskLabel.setText(electorID.x + ", " + electorID.y);
        // deskLabel.setText(game.width);
        // deskLabel.setText(textLine[0]);
        // textLabel.setText(buttonSelect);
        // Title.setText(buttonSelect);
        
        // if(waitForNext && !convoEnd){
        //     nextButton.visible = true;
        // }else{
        //     nextButton.visible = false;
        // }
        
        if(screenRatio > 1.33 && currAspectRatio != 1){
            game.scale.setGameSize(1280, 720);
            // LoE.scale.setTo(1.2, 1.2);
            // LoE.x = 640;
            // LoE.y = 360;
            // LoEGroup.removeAll();
            for(var i = 0; i < 10; i++){
                // LoEArray[i] = game.add.sprite(0, 0, 'imgLoE');
                LoEArray[i].scale.setTo(1.2, 1.2);
                LoEArray[i].anchor.setTo(0.5, 0.5);
                LoEArray[i].x = (1000 * i) + 640;
                LoEArray[i].y = 360;
                // LoEGroup.add(LoEArray[i]);
            }
            LoEGroup.x = LoECount * -1000;
            buttonGroup.x = 640;
            buttonGroup.y = 640;
            // blackLine.x = 640;
            // blackLine.y = 375;
            buttonBack.scale.setTo(0.5, 0.5);
            buttonBack.x = 150;
            buttonBack.y = 360;
            buttonNext.scale.setTo(0.5, 0.5);
            buttonNext.x = 1130;
            buttonNext.y = 360;
            answerGroup.x = 640;
            answerGroup.y = 375;
            checkLoE.x = -300;
            // blackLine.x = 640;
            // blackLine.y = 375;
            // buttonClick.x = 640;
            // buttonClick.y = 375;
            
            currAspectRatio = 1;
        }
        else if(screenRatio < 1.33 && screenRatio > 0.5625 && currAspectRatio != 0){  
            game.scale.setGameSize(800, 600);
            // LoE.scale.setTo(1, 1);
            // LoE.x = 400;
            // LoE.y = 300;
            for(var i = 0; i < 10; i++){
                // LoEArray[i] = game.add.sprite(0, 0, 'imgLoE');
                LoEArray[i].scale.setTo(0.9, 0.9);
                LoEArray[i].anchor.setTo(0.5, 0.5);
                LoEArray[i].x = (700 * i) + 400;
                LoEArray[i].y = 300;
                // LoEGroup.add(LoEArray[i]);
            }
            LoEGroup.x = LoECount * -700;
            buttonGroup.x = 400;
            buttonGroup.y = 500;
            // blackLine.x = 400;
            // blackLine.y = 375;
            buttonBack.scale.setTo(0.25, 0.25);
            buttonBack.x = 50;
            buttonBack.y = 300;
            buttonNext.scale.setTo(0.25, 0.25);
            buttonNext.x = 750;
            buttonNext.y = 300;
            answerGroup.x = 400;
            answerGroup.y = 300;
            checkLoE.x = -200;
            // buttonClick.x = 400;
            // buttonClick.y = 300;
            // blackLine.x = 400;
            // blackLine.y = 300;
            
            currAspectRatio = 0;
        }
        else if(screenRatio < 0.5625  && currAspectRatio != 2){  
            game.scale.setGameSize(720, 1280);
            
            
            currAspectRatio = 2;
        }
        
        //On left arrow
        if (cursors.right.isDown){
            buttonRightMechanic = 1;
        }else if(buttonRightMechanic == 1){
            
            
            buttonSelect++;
            if(buttonSelect == buttonArray.length){
                buttonSelect = 0;
            }
            for(var i = 0; i < buttonArray.length; i++){
                if(i == buttonSelect){
                    buttonArray[i].frame = 1;
                }else{
                    buttonArray[i].frame = 0;
                }
            }
            buttonRightMechanic = 0;
        }
        
        //On right arrow
        if (cursors.left.isDown){
            buttonLeftMechanic = 1;
        }else if(buttonLeftMechanic == 1){
            buttonSelect--;
            if(buttonSelect < 0){
                buttonSelect = buttonArray.length-1;
            }
            for(var i = 0; i < buttonArray.length; i++){
                if(i == buttonSelect){
                    buttonArray[i].frame = 1;
                }else{
                    buttonArray[i].frame = 0;
                }
            }
            buttonLeftMechanic = 0;
        }
        
        //On enter key
        if(cursors.enter.isDown){
            buttonEnterMechanic = 1;
        }else if(buttonEnterMechanic == 1){
            switch(buttonSelect){
                case 0:
                    // this.addRegO();
                    this.LoEBack();
                    break;
                case 1:
                    // this.addPC();
                    this.LoENext();
                    break;
                case 2:
                    // this.start();
                    break;
                case 3:
                    // this.LoENext();
                    break;
                case 4:
                    // this.LoEBack();
                    break;
                case 5:
                    
                    break;
                
            }
            buttonEnterMechanic = 0;
        }
        
        // if(game.input.activePointer.isDown){
        //     // Title.setText("down");
        //     clickMechanic = 1;
        // }else if(clickMechanic == 1){
        //     if(game.input.y < 400 && game.input.y > 350){
        //         this.playSelect();
        //         if(deskCount == 1){
        //             tweenLine = game.add.tween(blackLine);
        //             tweenLine.to({alpha:1}, 200, 'Linear', true, 0);
        //             tweenLine.onComplete.add(function() {game.time.events.add(1000, this.crossOff)}, this);
        //         }else if(deskCount == 4){
        //             tweenCheck = game.add.tween(checkLoE);
        //             tweenCheck.to({alpha:1}, 200, 'Linear', true, 0);
        //             tweenCheck.onComplete.add(function() {game.time.events.add(1000, this.crossOff)}, this);
        //         }
        //     }else if(game.input.y > 180 && game.input.y < 350){
        //         this.playError();
        //         // Title.setText("click");
        //     }else if(game.input.y > 400 && game.input.y < 450){
        //         this.playError();
        //         // Title.setText("click");
        //     }
        //     clickMechanic = 0;
        // }else{
        //     // Title.setText("none");
        // }
    },
    
    LoENext: function(){
        if(LoECount < LoEGroup.length-1 && !clicked){
            this.playText();
            clicked = true;
            var tweenLoE = game.add.tween(LoEGroup);
            LoECount++;
            if(LoECount == 2){
                answerGroup.visible = true;
            }else{
                answerGroup.visible = false;
            }
            if(currAspectRatio == 1){
                tweenLoE.to({x: LoEGroup.x-1000}, 500, 'Cubic', true);
            }else if(currAspectRatio == 0){
                tweenLoE.to({x: LoEGroup.x-700}, 500, 'Cubic', true);
            }
            tweenLoE.onComplete.add(this.resetButton, this);
        }
    },
    
    LoEBack: function(){
        if(LoECount > 0 && !clicked){
            this.playText();
            clicked = true;
            var tweenLoE = game.add.tween(LoEGroup);
            LoECount--;
            if(LoECount == 2){
                answerGroup.visible = true;
            }else{
                answerGroup.visible = false;
            }
            if(currAspectRatio == 1){
                tweenLoE.to({x: LoEGroup.x+1000}, 500, 'Cubic', true);
            }else if(currAspectRatio == 0){
                tweenLoE.to({x: LoEGroup.x+700}, 500, 'Cubic', true);
            }
            // tweenLoE.to({x: LoEGroup.x+1000}, 500, 'Cubic', true);
            tweenLoE.onComplete.add(this.resetButton, this);
        }
    },
    
    resetButton: function(){
        clicked = false;
    },
    
    LoEClick: function(){
        this.playSelect();
        if(deskCount == 1){
            tweenLine = game.add.tween(blackLine);
            tweenLine.to({alpha:1}, 200, 'Linear', true, 0);
            tweenLine.onComplete.add(function() {game.time.events.add(1000, this.crossOff)}, this);
        }else if(deskCount == 4){
            tweenCheck = game.add.tween(checkLoE);
            tweenCheck.to({alpha:1}, 200, 'Linear', true, 0);
            tweenCheck.onComplete.add(function() {game.time.events.add(1000, this.crossOff)}, this);
        }
    },
    
    crossOff: function(){
        game.state.start('Desk');
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
    
    playText: function(){
        music3 = game.add.audio('typeSelect');
        music3.loop = false;
        music3.play();
    },
};