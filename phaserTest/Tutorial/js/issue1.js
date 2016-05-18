/* global
game, Phaser, position, electorNum
*/

var IssueState = function(){};

var ID, buttonNext, buttonBack, Title;
// var electorNum = 0;
var convoCount;
var issueText = [];
var issueText0, issueText1, issueText2, issueText3, issueText4, ballotText;
var tweenText, tweenText2, tweenText3, tweenText4, tweenText5;
var issue1Anim, issue2Anim, issue3Anim, issue4Anim, issue5Anim;
var animIssue1, animIssue2, animIssue3, animIssue4, animIssue5;
var clicked;
var music, music2;

var buttonSelect = -1;
var buttonLeftMechanic = 0;
var buttonRightMechanic = 0;
var buttonEnterMechanic = 0;

var currAspectRatio;
var screenResolutions = [[800, 600], [1280, 720], [720, 1280]];
var cursors;

var buttonArray = [];

IssueState.prototype = {
    create: function(){
        clicked = false;
        convoCount = 0;
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Issue a ballot", {font:'40px VT323', fill:'#ffffff'});
        
        buttonNext = game.add.button(screenResolutions[1][0] - 100, game.height/2, 'buttonNext', this.answerYes, this, 1, 0, 2);
        buttonNext.scale.setTo(0.5, 0.5);
        buttonBack = game.add.button(14, game.height/2, 'buttonBack', this.answerNo, this, 1, 0, 2);
        buttonBack.scale.setTo(0.5, 0.5);
        
        buttonArray.push(buttonNext);
        buttonArray.push(buttonBack);
        
        issueText[0] = "Remove a ballot from the booklet. Leave the counterfoil attached.";
        issueText[1] = "Make sure your initials are on the back.";
        issueText[2] = "Fold it once toward the left to hide the circles.";
        issueText[3] = "Fold it a second time toward the left.";
        issueText[4] = "Make sure counterfoil is visible and give the ballot to the elector.";
        var style = { font: '30pt VT323', fill: '#EEEEEE', align: 'left', wordWrap: true, wordWrapWidth: 500, wordWrapHeight: 50 };
        
        issueText0 = game.add.text(150, 120, issueText[0], style);
        issueText1 = game.add.text(800, 120, issueText[1], style);
        issueText2 = game.add.text(800, 120, issueText[2], style);
        issueText3 = game.add.text(800, 120, issueText[3], style);
        issueText4 = game.add.text(800, 120, issueText[4], style);
        
        issue1Anim = game.add.sprite(150, 200, 'issue1');
        issue1Anim.scale.x *= .5;
        issue1Anim.scale.y *= .5;
        animIssue1 = issue1Anim.animations.add('run');
        issue1Anim.animations.play('run', 24, false);
        game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim1, this);
        
        issue2Anim = game.add.sprite(150, 200, 'issue2');
        issue2Anim.scale.x *= .5;
        issue2Anim.scale.y *= .5;
        issue2Anim.alpha = 0;
        animIssue2 = issue2Anim.animations.add('run');
        
        issue3Anim = game.add.sprite(350, 200, 'issue3');
        issue3Anim.scale.x *= .5;
        issue3Anim.scale.y *= .5;
        issue3Anim.alpha = 0;
        animIssue3 = issue3Anim.animations.add('run');
        
        issue4Anim = game.add.sprite(350, 200, 'issue4');
        issue4Anim.scale.x *= .5;
        issue4Anim.scale.y *= .5;
        issue4Anim.alpha = 0;
        animIssue4 = issue4Anim.animations.add('run');
        
        issue5Anim = game.add.sprite(200, 200, 'issue5');
        issue5Anim.scale.x *= .5;
        issue5Anim.scale.y *= .5;
        issue5Anim.alpha = 0;
        animIssue5 = issue5Anim.animations.add('run');
        
        cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'enter':Phaser.KeyCode.ENTER } );
    },
    
    update: function(){
        var screenRatio = window.innerWidth/ window.innerHeight;
        // deskLabel.setText(lineIndex + ", " + arrayNum2 + ", " + currLine);
        // deskLabel.setText(currLine + ", " + content.length);
        // deskLabel.setText(content.length);
        // deskLabel.setText(game.width);
        // deskLabel.setText(textLine[0]);
        // textLabel.setText(buttonSelect);
        
        if(screenRatio > 1.33 && currAspectRatio != 1){
            game.scale.setGameSize(1280, 720);
            buttonNext.x = screenResolutions[1][0] - 100;
            buttonNext.y = game.height/2 - 70.25;
            buttonNext.scale.setTo(0.5, 0.5);
            buttonBack.x = 14;
            buttonBack.y = game.height/2 - 70.25;
            buttonBack.scale.setTo(0.5, 0.5);
            
            currAspectRatio = 1;
        }
        else if(screenRatio < 1.33 && screenRatio > 0.5625 && currAspectRatio != 0){  
            game.scale.setGameSize(800, 600);
            
            buttonNext.x = screenResolutions[0][0] - 100;
            buttonNext.y = game.height/2 - 70.25;
            buttonNext.scale.setTo(0.5, 0.5);
            buttonBack.x = 14;
            buttonBack.y = game.height/2 - 70.25;
            buttonBack.scale.setTo(0.5, 0.5);
            
            currAspectRatio = 0;
        }
        else if(screenRatio < 0.5625  && currAspectRatio != 2){  
            game.scale.setGameSize(720, 1280);
            
            buttonNext.x = screenResolutions[2][0] - 272;
            buttonNext.y = 960 - 140.5;
            buttonNext.scale.setTo(1, 1);
            buttonBack.x = 100;
            buttonBack.y = 960 - 140.5;
            buttonBack.scale.setTo(1, 1);
            
            currAspectRatio = 2;
        }
        
        //On left arrow
        if (cursors.left.isDown){
            buttonLeftMechanic = 1;
        }else if(buttonLeftMechanic == 1){
            // this.answerNo();
            
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
            // this.answerYes();
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
                    this.answerYes();
                    break;
                case 1:
                    this.answerNo();
                    break;
            }
            buttonEnterMechanic = 0;
        }
    },
    
    playAnim1: function(){
        issue1Anim.animations.play('run', 24, false);
    },
    
    playAnim2: function(){
        issue2Anim.animations.play('run', 24, false);
    },
    
    playAnim3: function(){
        issue3Anim.animations.play('run', 24, false);
    },
    
    playAnim4: function(){
        issue4Anim.animations.play('run', 24, false);
    },
    
    playAnim5: function(){
        issue5Anim.animations.play('run', 24, false);
    },
    
    answerYes: function(){
        if(convoCount < 4 && clicked == false){
            this.playSelect();
            game.time.events.removeAll();
            clicked = true;
            var temp;
            var temp2;
            var temp3;
            var temp4;
            switch(convoCount){
                case 0:
                    temp = game.add.tween(issueText0);
                    temp2 = game.add.tween(issueText1);
                    temp3 = game.add.tween(issue1Anim);
                    temp4 = game.add.tween(issue2Anim);
                    issue2Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim2, this);
                    break;
                case 1:
                    temp = game.add.tween(issueText1);
                    temp2 = game.add.tween(issueText2);
                    temp3 = game.add.tween(issue2Anim);
                    temp4 = game.add.tween(issue3Anim);
                    issue3Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim3, this);
                    break;
                case 2:
                    temp = game.add.tween(issueText2);
                    temp2 = game.add.tween(issueText3);
                    temp3 = game.add.tween(issue3Anim);
                    temp4 = game.add.tween(issue4Anim);
                    issue4Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim4, this);
                    break;
                case 3:
                    temp = game.add.tween(issueText3);
                    temp2 = game.add.tween(issueText4);
                    temp3 = game.add.tween(issue4Anim);
                    temp4 = game.add.tween(issue5Anim);
                    issue5Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim5, this);
                    break;
            }
             
            temp.to({x:-500}, 100, 'Cubic', true);
            temp3.to({alpha:0}, 100, 'Cubic', true);
            temp4.to({alpha:1}, 100, 'Cubic', false);
            temp2.to({x:150}, 100, 'Cubic', false);
            
            temp.chain(temp2);
            temp3.chain(temp4);
            convoCount++;
            temp2.onComplete.add(this.resetButton, this);
        }else{
            game.state.start('Desk');
        }
    },
    
    answerNo: function(){
        if(convoCount > 0 && clicked == false){
            this.playSelect();
            game.time.events.removeAll();
            clicked = true;
            var temp;
            var temp2;
            var temp3;
            var temp4;
            convoCount--;
            switch(convoCount){
                case 0:
                    temp = game.add.tween(issueText1);
                    temp2 = game.add.tween(issueText0);
                    temp3 = game.add.tween(issue1Anim);
                    temp4 = game.add.tween(issue2Anim);
                    issue1Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim1, this);
                    break;
                case 1:
                    temp = game.add.tween(issueText2);
                    temp2 = game.add.tween(issueText1);
                    temp3 = game.add.tween(issue2Anim);
                    temp4 = game.add.tween(issue3Anim);
                    issue2Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim2, this);
                    break;
                case 2:
                    temp = game.add.tween(issueText3);
                    temp2 = game.add.tween(issueText2);
                    temp3 = game.add.tween(issue3Anim);
                    temp4 = game.add.tween(issue4Anim);
                    issue3Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim3, this);
                    break;
                case 3:
                    temp = game.add.tween(issueText4);
                    temp2 = game.add.tween(issueText3);
                    temp3 = game.add.tween(issue4Anim);
                    temp4 = game.add.tween(issue5Anim);
                    issue4Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim4, this);
                    break;
            }
             
            temp.to({x:800}, 100, 'Cubic', true);
            temp3.to({alpha:1}, 100, 'Cubic', false);
            temp4.to({alpha:0}, 100, 'Cubic', true);
            temp2.to({x:150}, 100, 'Cubic', false);
            
            temp.chain(temp2);
            temp4.chain(temp3);
            temp2.onComplete.add(this.resetButton, this);
        }else{
            this.playError();
        }
    },
    
    resetButton: function(){
        clicked = false;
    },
    
    playSelect: function(){
        music = game.add.audio('menuSelect');
        music.loop = false;
        // music.play();
    },
    
    playError: function(){
        music2 = game.add.audio('menuError');
        music2.loop = false;
        // music2.play();
    },
    
};