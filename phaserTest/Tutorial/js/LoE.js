/* global
game, Phaser, position, convoText, deskCount
*/

var LoEState = function(){};

var LoE, Title, button1, button2, button3, clickMechanic, speechBubble1, gameText, blackLine, tweenLine, checkLoE, tweenCheck, music, music2;

LoEState.prototype = {
    create: function(){
        clickMechanic = 0;
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Find the elector on the List", {font:'30px Arial', fill:'#ffffff'});
        
        LoE = game.add.sprite(0, 0, 'imgLoE');
        blackLine = game.add.sprite(101, 375, 'LoELine');
        checkLoE = game.add.sprite(101, 365.5, 'LoECheck');
        checkLoE.alpha = 0;
        if(deskCount == 1){
            blackLine.alpha = 0;
            button1 = game.add.button(100, 460, 'button1', this.start, this, 1, 0, 2);
            button1.scale.setTo(0.25, 0.25);
            button2 = game.add.button(317.75, 460, 'button2', this.start, this, 1, 0, 2);
            button2.scale.setTo(0.25, 0.25);
            button3 = game.add.button(535.5, 460, 'button3', this.start, this, 1, 0, 2);
            button3.scale.setTo(0.25, 0.25);
            speechBubble1 = game.add.sprite(0, 60, 'speechBubble3');
            speechBubble1.anchor.setTo(1, 0);
            speechBubble1.scale.x *= -0.25;
            speechBubble1.scale.y *= 0.15;
            
            var style = { font: '20pt Arial', fill: '#ffffff', align: 'left', wordWrap: true, wordWrapWidth: 325, wordWrapHeight: 50 };
            for(var i = 0; i < convoText.length; i++){
                if(convoText[i].substr(0, 8) == "My name "){
                    gameText = game.add.text(60, 70, convoText[i], style);
                }
            }
        }else if(deskCount == 4){
            
        }
    },
    
    update: function(){
        if(game.input.activePointer.isDown){
            // Title.setText("down");
            clickMechanic = 1;
        }else if(clickMechanic == 1){
            if(game.input.y < 400 && game.input.y > 350){
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
            }else{
                this.playError();
                // Title.setText("click");
            }
            clickMechanic = 0;
        }else{
            // Title.setText("none");
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
};