/* global
game, Phaser, position, convoText, deskCount
*/

var statementState = function(){};

var statementImg, Title, button1, button2, button3, clickMechanic, speechBubble1, gameText, blackLine, tweenLine, checkStatement, checkStatement2, tweenCheck;

statementState.prototype = {
    create: function(){
        clickMechanic = 0;
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Complete the Statement of the Vote", {font:'30px Arial', fill:'#ffffff'});
        
        statementImg = game.add.sprite(0, 100, 'imgStatement');
        checkStatement = game.add.sprite(101, 365.5, 'formCircle');
        checkStatement.anchor.setTo(0.5, 0.5);
        checkStatement2 = game.add.sprite(101, 365.5, 'formCircle');
        checkStatement2.anchor.setTo(0.5, 0.5);
        checkStatement2.alpha = 0;
        // checkStatement.alpha = 0;
    },
    
    update: function(){
        if(game.input.activePointer.isDown){
            // Title.setText("down");
            clickMechanic = 1;
        }else if(clickMechanic == 1){
            if(game.input.y < 310 && game.input.y > 250 && game.input.x > 40 && game.input.x < 100){
                checkStatement2.x = game.input.x;
                checkStatement2.y = game.input.y;
                checkStatement2.alpha = 1;
                checkStatement.alpha = 0;
                tweenCheck = game.add.tween(checkStatement);
                tweenCheck.to({x:0}, 2000, 'Linear', true, 0);
                tweenCheck.onComplete.add(this.crossOff, this);
            }
            clickMechanic = 0;
        }
        checkStatement.x = game.input.x;
        checkStatement.y = game.input.y;
    },
    
    crossOff: function(){
        game.state.start('Desk');
    }
};