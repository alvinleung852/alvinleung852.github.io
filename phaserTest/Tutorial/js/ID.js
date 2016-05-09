/* global
game, Phaser, position, electorNum
*/

var IDState = function(){};

var ID, buttonNo, buttonYes, Title;
// var electorNum = 1;
var music, music2;

IDState.prototype = {
    create: function(){
        game.stage.backgroundColor = '#634326';
        Title = game.add.text(20, 20, "Acceptable ID?", {font:'30px Arial', fill:'#ffffff'});
        
        switch(electorNum){
            case 1:
                ID = game.add.sprite(0, 0, 'ID1');
                break;
            case 2:
                ID = game.add.sprite(0, 0, 'ID2');
                break;
            case 3:
                ID = game.add.sprite(0, 0, 'ID3');
                break;
        }
        
        buttonYes = game.add.button(200, 460, 'buttonYes', this.answerYes, this, 1, 0, 2);
        buttonYes.scale.setTo(0.25, 0.25);
        buttonNo = game.add.button(435.5, 460, 'buttonNo', this.answerNo, this, 1, 0, 2);
        buttonNo.scale.setTo(0.25, 0.25);
    },
    
    update: function(){

    },
    
    answerYes: function(){
        switch(electorNum){
            case 1:
                this.playSelect();
                game.state.start('Issue');
                break;
            case 2:
                this.playError();
                alert("wrong");
                break;
            case 3:
                this.playSelect();
                alert("correct");
                break;
        }
    },
    
    answerNo: function(){
        switch(electorNum){
            case 1:
                this.playError();
                alert("wrong");
                break;
            case 2:
                this.playSelect();
                game.state.start('Issue');
                break;
            case 3:
                this.playError();
                alert("wrong");
                break;
        }
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