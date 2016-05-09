/* global
game, Phaser, position, electorNum
*/

var CheckState = function(){};

var ID, buttonNext, buttonBack, Title;
// var electorNum = 2;
var convoCount;
var issueText = [];
var issueText0, issueText1, issueText2, issueText3, issueText4, ballotText;
var tweenText, tweenText2, tweenText3, tweenText4, tweenText5;
var issue1Anim, issue2Anim, issue3Anim, issue4Anim, issue5Anim;
var animIssue1, animIssue2, animIssue3, animIssue4, animIssue5;
var clicked;
var music, music2;

CheckState.prototype = {
    create: function(){
        clicked = false;
        convoCount = 0;
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Check the returned ballot", {font:'30px Arial', fill:'#ffffff'});
        
        buttonNext = game.add.button(700, 250, 'buttonNext', this.answerYes, this, 1, 0, 2);
        buttonNext.scale.setTo(0.5, 0.5);
        buttonBack = game.add.button(14, 250, 'buttonBack', this.answerNo, this, 1, 0, 2);
        buttonBack.scale.setTo(0.5, 0.5);
        
        issueText[0] = "Check your initials are on the back of ballot";
        issueText[1] = "Compare counterfoil number against stub. Make sure they are the same";
        issueText[2] = "Take off counterfoil and tear it up";
        issueText[3] = "Put counterfoil in plastic bag";
        issueText[4] = "Give ballot to elector to put in the box";
        var style = { font: '20pt Arial', fill: '#DDDDDD', align: 'left', wordWrap: true, wordWrapWidth: 500, wordWrapHeight: 50 };
        
        issueText0 = game.add.text(150, 120, issueText[0], style);
        issueText1 = game.add.text(800, 120, issueText[1], style);
        issueText2 = game.add.text(800, 120, issueText[2], style);
        issueText3 = game.add.text(800, 120, issueText[3], style);
        issueText4 = game.add.text(800, 120, issueText[4], style);
        
        issue1Anim = game.add.sprite(200, 200, 'issue1');
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
    },
    
    update: function(){

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
                    issue2Anim.animations.play('run', 24, false);
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
        music.play();
    },
    
    playError: function(){
        music2 = game.add.audio('menuError');
        music2.loop = false;
        music2.play();
    },
    
};