/* global
game, Phaser, position, convoText, deskCount
*/

var statementState = function(){};

var statementImg, Title, button1, button2, button3, clickMechanic, speechBubble1, gameText, blackLine, tweenLine, checkStatement, checkStatement2, tweenCheck, music, music2;

var currAspectRatio;            // 0 = 4:3, 1 = 16:9, 2 = 9:16

var cursors;

var buttonArray = [];

var buttonSelect = -1;
var buttonLeftMechanic = 0;
var buttonRightMechanic = 0;
var buttonEnterMechanic = 0;

var waitForNext = false;
var statementCorrect;
var buttonClick;

statementState.prototype = {
    create: function(){
        
        clickMechanic = 0;
        currAspectRatio = 5;
        statementCorrect = false;
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Complete the Statement of the Vote", {font:'30px VT323', fill:'#ffffff'});
        
        statementImg = game.add.sprite(640, 700, 'imgStatement');
        statementImg.anchor.setTo(0.5, 0.5);
        
        buttonClick = game.add.button(500, 500, 'clickArea_1_1', this.clickArea, this, 1, 0, 2);
        buttonClick.scale.setTo(0.5, 0.5);
        buttonClick.anchor.setTo(0.5, 0.5);
        buttonClick.alpha = 0.1;
        
        
        checkStatement = game.add.sprite(101, 365.5, 'formCircle');
        checkStatement.anchor.setTo(0.5, 0.5);
        // checkStatement2 = game.add.sprite(101, 365.5, 'formCircle');
        // checkStatement2.anchor.setTo(0.5, 0.5);
        // checkStatement2.alpha = 0;
        // checkStatement.alpha = 0;
        
        cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'enter':Phaser.KeyCode.ENTER } );
    },
    
    update: function(){
        var screenRatio = window.innerWidth/ window.innerHeight;
        // deskLabel.setText(lineIndex + ", " + arrayNum2 + ", " + currLine);
        // deskLabel.setText(currLine + ", " + content.length);
        // deskLabel.setText(electorID.x + ", " + electorID.y);
        // deskLabel.setText(game.width);
        // deskLabel.setText(textLine[0]);
        // textLabel.setText(buttonSelect);
        // Title.setText(LoECount + ", " + LoEGroup.x);
        
        // if(waitForNext && !convoEnd){
        //     nextButton.visible = true;
        // }else{
        //     nextButton.visible = false;
        // }
        
        if(screenRatio > 1.33 && currAspectRatio != 1){
            game.scale.setGameSize(1280, 720);
            
            statementImg.x = 640;
            statementImg.y = 700;
            
            currAspectRatio = 1;
        }
        else if(screenRatio < 1.33 && screenRatio > 0.5625 && currAspectRatio != 0){  
            game.scale.setGameSize(800, 600);
            
            statementImg.x = 400;
            statementImg.y = 700;
            
            currAspectRatio = 0;
        }
        else if(screenRatio < 0.5625  && currAspectRatio != 2){  
            game.scale.setGameSize(720, 1280);
            
            statementImg.x = 360;
            statementImg.y = 700;
            
            currAspectRatio = 2;
        }
        
        //On left arrow
        if (cursors.left.isDown && waitForNext == true){
            buttonLeftMechanic = 1;
        }else if(buttonLeftMechanic == 1){
            
            
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
            
            buttonLeftMechanic = 0;
        }
        
        //On right arrow
        if (cursors.right.isDown){
            buttonRightMechanic = 1;
        }else if(buttonRightMechanic == 1){
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
            buttonRightMechanic = 0;
        }
        
        //On enter key
        if(cursors.enter.isDown){
            buttonEnterMechanic = 1;
        }else if(buttonEnterMechanic == 1){
            switch(buttonSelect){
                case 0:
                    this.addRegO();
                    break;
                case 1:
                    this.addPC();
                    break;
                case 2:
                    this.addDRO();
                    break;
                case 3:
                    this.addIO();
                    break;
                case 4:
                    
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
        //     if(game.input.y < 310 && game.input.y > 250 && game.input.x > 40 && game.input.x < 100){
        //         this.playSelect();
        //         checkStatement2.x = game.input.x;
        //         checkStatement2.y = game.input.y;
        //         checkStatement2.alpha = 1;
        //         checkStatement.alpha = 0;
        //         tweenCheck = game.add.tween(checkStatement);
        //         tweenCheck.to({x:0}, 2000, 'Linear', true, 0);
        //         tweenCheck.onComplete.add(this.crossOff, this);
        //     }else{
        //         this.playError();
        //     }
        //     clickMechanic = 0;
        // }
        if(!statementCorrect){
            checkStatement.x = game.input.x;
            checkStatement.y = game.input.y;
        }
    },
    
    clickArea: function(){
        this.playSelect();
        statementCorrect = true;
        checkStatement.x = game.input.x;
        checkStatement.y = game.input.y;
        // checkStatement2.alpha = 1;
        // checkStatement.alpha = 0;
        tweenCheck = game.add.tween(checkStatement);
        tweenCheck.to({x:buttonClick.x, y:buttonClick.y}, 0, 'Linear', true, 0);
        tweenCheck.onComplete.add(this.crossOff, this);
    },
    
    crossOff: function(){
        // alert('asdf');
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
};