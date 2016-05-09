var Phaser;

var game = new Phaser.Game(640, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update});

function preload() {
    game.load.spritesheet('button', 'assets/button-start-spritesheet.png', 201, 71.6);
}

var button;
var colour;

function create() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    colour = true;
    
    button = game.add.button(game.world.centerX-100.5, 300, 'button', actionOnClick, this, 1, 0, 2);
    
    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
}

function up(){
    console.log('button up', arguments);
}

function over(){
    console.log('button over');
}

function out(){
    console.log('button out');
}

function actionOnClick(){
    colour =! colour;
}

function update(){
    if(colour){
        game.stage.backgroundColor = '#852963';
    }else{
        game.stage.backgroundColor = '#258369';
    }
}