/* global
game, Phaser
*/

var MenuState = function(){};
var buttonRegO, buttonPC, buttonDRO, buttonIO, buttonCPS, buttonGroup, buttonStart, music, music3, tween;
var boolRegO, boolPC, boolDRO, boolIO, boolCPS;
var animRegO, animPC, animDRO, animCPS, animIO;
var nameRegO, nameDRO, namePC, nameCPS, nameIO;
var spriteRegO, spritePC, spriteDRO, spriteCPS, spriteIO;
var position;

MenuState.prototype = {
    create: function(){
        game.stage.backgroundColor = '#888888';
        game.add.tileSprite(0, 0, 800, 600, 'background');
        
        buttonGroup = game.add.group();
        
        var nameLabel = game.add.text(40, 40, 'Character Select', {font:'50px Arial', fill:'#ffffff'});
        // button = game.add.button(0, 0, 'button', this.start, this, 1, 0, 2);

        buttonRegO = game.add.button(game.world.centerX+27.5, 320, 'RegO', this.addRegO, this, 1, 0, 2);
        buttonRegO.width = 135;
        buttonRegO.height = 135;
        buttonGroup.add(buttonRegO);
        buttonPC = game.add.button(game.world.centerX+245, 200, 'PC', this.addPC, this, 1, 0, 2);
        buttonPC.width = 135;
        buttonPC.height = 135;
        buttonGroup.add(buttonPC);
        buttonDRO = game.add.button(game.world.centerX+100, 200, 'DRO', this.addDRO, this, 1, 0, 2);
        buttonDRO.width = 135;
        buttonDRO.height = 135;
        buttonGroup.add(buttonDRO);
        buttonIO = game.add.button(game.world.centerX+172.5, 320, 'IO', this.addIO, this, 1, 0, 2);
        buttonIO.width = 135;
        buttonIO.height = 135;
        buttonGroup.add(buttonIO);
        buttonCPS = game.add.button(game.world.centerX-45.5, 200, 'CPS', this.addCPS, this, 1, 0, 2);
        buttonCPS.width = 135;
        buttonCPS.height = 135;
        buttonGroup.add(buttonCPS);
        // this.playBGM();
    }, 
    
    start: function(){
        this.playSelect();
        game.state.start('Desk');
        
    },
    
    addRegO: function(){
        if(!boolRegO){
            this.destroyAnim();
            spriteRegO = game.add.sprite(-11, 99.5, 'regO_pose1');
            // spriteRegO.anchor.setTo(1, 0);
            spriteRegO.scale.x *= .75;
            spriteRegO.scale.y *= .75;
            animRegO = spriteRegO.animations.add('run');
            animRegO.onComplete.add(this.loopRegO, this);
            animRegO.play(24, false);
            buttonRegO.setFrames(1, 1, 1);
            boolRegO = true;
            nameRegO = game.add.sprite(-400, 400, 'RegOName');
            nameRegO.width = 400;
            nameRegO.height = 35;
            tween = game.add.tween(nameRegO);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            buttonStart = game.add.button(450, 500, 'button', this.start, this, 1, 0, 2);
            this.resetWorker("boolRegO");
            position = "RegO";
        }
        this.playSelect();
    },
    
    addPC: function(){
        if(!boolPC){
            this.destroyAnim();
            spritePC = game.add.sprite(-145, -100, 'pcSpawn', 5);
            spritePC.anchor.setTo(1, 0);
            spritePC.scale.x *= -5;
            spritePC.scale.y *= 5;
            animPC = spritePC.animations.add('run');
            animPC.onComplete.add(this.loopPC, this);
            animPC.play(10, false);
            buttonPC.setFrames(1, 1, 1);
            boolPC = true;
            namePC = game.add.sprite(-400, 400, 'PCName');
            namePC.width = 400;
            namePC.height = 35;
            tween = game.add.tween(namePC);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            buttonStart = game.add.button(450, 500, 'button', this.start, this, 1, 0, 2);
            this.resetWorker("boolPC");
            position = "PC";
        }
        this.playSelect();
    },
    
    addDRO: function(){
        if(!boolDRO){
            this.destroyAnim();
            spriteDRO = game.add.sprite(-145, -100, 'droSpawn', 5);
            spriteDRO.anchor.setTo(1, 0);
            spriteDRO.scale.x *= -5;
            spriteDRO.scale.y *= 5;
            animDRO = spriteDRO.animations.add('run');
            animDRO.onComplete.add(this.loopDRO, this);
            animDRO.play(10, false);
            buttonDRO.setFrames(1, 1, 1);
            boolDRO = true;
            nameDRO = game.add.sprite(-400, 400, 'DROName');
            nameDRO.width = 400;
            nameDRO.height = 35;
            tween = game.add.tween(nameDRO);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            buttonStart = game.add.button(450, 500, 'button', this.start, this, 1, 0, 2);
            this.resetWorker("boolDRO");
            position = "DRO";
        }
        this.playSelect();
    },
    
    addCPS: function(){
        if(!boolCPS){
            this.destroyAnim();
            spriteCPS = game.add.sprite(-145, -100, 'cpsSpawn', 5);
            spriteCPS.anchor.setTo(1, 0);
            spriteCPS.scale.x *= -5;
            spriteCPS.scale.y *= 5;
            animCPS = spriteCPS.animations.add('run');
            animCPS.onComplete.add(this.loopCPS, this);
            animCPS.play(10, false);
            buttonCPS.setFrames(1, 1, 1);
            boolCPS = true;
            nameCPS = game.add.sprite(-400, 400, 'CPSName');
            nameCPS.width = 400;
            nameCPS.height = 35;
            tween = game.add.tween(nameCPS);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            buttonStart = game.add.button(450, 500, 'button', this.start, this, 1, 0, 2);
            this.resetWorker("boolCPS");
            position = "CPS";
        }
        this.playSelect();
    },
    
    addIO: function(){
        if(!boolIO){
            this.destroyAnim();
            spriteIO = game.add.sprite(-145, -100, 'ioSpawn', 5);
            spriteIO.anchor.setTo(1, 0);
            spriteIO.scale.x *= -5;
            spriteIO.scale.y *= 5;
            animIO = spriteIO.animations.add('run');
            animIO.onComplete.add(this.loopIO, this);
            animIO.play(10, false);
            buttonIO.setFrames(1, 1, 1);
            boolIO = true;
            nameIO = game.add.sprite(-400, 400, 'IOName');
            nameIO.width = 400;
            nameIO.height = 35;
            tween = game.add.tween(nameIO);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            buttonStart = game.add.button(450, 500, 'button', this.start, this, 1, 0, 2);
            this.resetWorker("boolIO");
            position = "IO";
        }
        this.playSelect();
    },
    
    playSelect: function(){
        music = game.add.audio('menuSelect');
        music.loop = false;
        // music.play();
    },
    
    playBGM: function(){
        music3 = game.add.audio('arcadeSong');
        music3.loop = true;
        // music3.play();
    },
    
    update: function(){
        game.world.bringToTop(buttonGroup);
    },
    
    resetWorker: function(bool){
        if(bool == "boolRegO"){
            boolPC = false;
            boolDRO = false;
            boolIO = false;
            boolCPS = false;
            buttonPC.setFrames(1, 0, 2);
            buttonDRO.setFrames(1, 0, 2);
            buttonIO.setFrames(1, 0, 2);
            buttonCPS.setFrames(1, 0, 2);
        }else if(bool == "boolPC"){
            boolRegO = false;
            boolDRO = false;
            boolIO = false;
            boolCPS = false;
            buttonRegO.setFrames(1, 0, 2);
            buttonDRO.setFrames(1, 0, 2);
            buttonIO.setFrames(1, 0, 2);
            buttonCPS.setFrames(1, 0, 2);
        }else if(bool == "boolDRO"){
            boolRegO = false;
            boolPC = false;
            boolIO = false;
            boolCPS = false;
            buttonRegO.setFrames(1, 0, 2);
            buttonPC.setFrames(1, 0, 2);
            buttonIO.setFrames(1, 0, 2);
            buttonCPS.setFrames(1, 0, 2);
        }else if(bool == "boolCPS"){
            boolRegO = false;
            boolDRO = false;
            boolIO = false;
            boolPC = false;
            buttonRegO.setFrames(1, 0, 2);
            buttonDRO.setFrames(1, 0, 2);
            buttonIO.setFrames(1, 0, 2);
            buttonPC.setFrames(1, 0, 2);
        }else if(bool == "boolIO"){
            boolRegO = false;
            boolDRO = false;
            boolPC = false;
            boolCPS = false;
            buttonRegO.setFrames(1, 0, 2);
            buttonDRO.setFrames(1, 0, 2);
            buttonPC.setFrames(1, 0, 2);
            buttonCPS.setFrames(1, 0, 2);
        }
    },
    
    //Destory animation
    destroyAnim: function(){
        if(boolRegO){
            animRegO.destroy();
            spriteRegO.destroy();
            nameRegO.destroy();
            buttonStart.destroy();
        }
        
        if(boolPC){
            animPC.destroy();
            spritePC.destroy();
            namePC.destroy();
            buttonStart.destroy();
        }
        
        if(boolDRO){
            animDRO.destroy();
            spriteDRO.destroy();
            nameDRO.destroy();
            buttonStart.destroy();
        }
        
        if(boolCPS){
            animCPS.destroy();
            spriteCPS.destroy();
            nameCPS.destroy();
            buttonStart.destroy();
        }
        
        if(boolIO){
            animIO.destroy();
            spriteIO.destroy();
            nameIO.destroy();
            buttonStart.destroy();
        }
    },
    
    //Loop functions
    loopRegO: function(){
        spriteRegO.loadTexture('regO_pose2', 0);
        spriteRegO.x = -15;
        spriteRegO.y = 79;
        spriteRegO.animations.add('idle');
        spriteRegO.animations.play('idle', 24, true);
        // spriteRegO.destroy();
        // spriteRegO = game.add.sprite(0, 100, 'regO_pose2', 0);
        // spriteRegO.anchor.setTo(1, 0);
        // spriteRegO.scale.x *= .75;
        // spriteRegO.scale.y *= .75;
        // animRegO = spriteRegO.animations.add('run');
        // animRegO.play(24, true);
    },
    
    loopPC: function(){
        spritePC.loadTexture('pcIdle', 0);
        spritePC.animations.add('idle');
        spritePC.animations.play('idle', 5, true);
    },
    
    loopDRO: function(){
        spriteDRO.loadTexture('droIdle', 0);
        spriteDRO.animations.add('idle');
        spriteDRO.animations.play('idle', 5, true);
    },
    
    loopCPS: function(){
        spriteCPS.loadTexture('cpsIdle', 0);
        spriteCPS.animations.add('idle');
        spriteCPS.animations.play('idle', 5, true);
    },
    
    loopIO: function(){
        spriteIO.loadTexture('ioIdle', 0);
        spriteIO.animations.add('idle');
        spriteIO.animations.play('idle', 5, true);
    }
};