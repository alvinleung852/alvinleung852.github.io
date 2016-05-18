/* global
game, Phaser
*/

var MenuState = function(){};
var buttonRegO, buttonPC, buttonDRO, buttonIO, buttonCPS, buttonGroup, buttonStart, music, music3, tween;
var boolRegO, boolPC, boolDRO, boolIO, boolCPS;
var animRegO, animPC, animDRO, animCPS, animIO;
var nameRegO, nameDRO, namePC, nameCPS, nameIO, namePos;
var spriteRegO, spritePC, spriteDRO, spriteCPS, spriteIO;
var position;
var nameLabel;

// var char4_3, char16_9;
// var desk4_3, desk16_9, desk9_16;
// var text4_3, text16_9, text9_16;
// var tempBool;
// var char, desk, text;
// var charLabel, deskLabel, textLabel;
// var textGroup, charGroup, deskGroup;
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

var charSelected;
var backgroundImg;

MenuState.prototype = {
    create: function(){
        game.stage.backgroundColor = '#888888';
        
        backgroundImg = game.add.sprite(0, 0, 'background');
        // game.add.tileSprite(0, 0, 800, 600, 'background');
        
        buttonSelect = -1
        
        currAspectRatio = 0;
        charSelected = 0;
        
        // scaleNum = deskDimensions[0][1]/deskDimensions[1][1];
        
        buttonGroup = game.add.group();
        buttonGroup.x = game.world.centerX-50;
        buttonGroup.y = game.world.centerY-100;
        
        nameLabel = game.add.text(40, 40, 'Character Select', {font:'50px Arial', fill:'#ffffff'});
        
        //Add character select buttons
        buttonRegO = game.add.button(75, 125, 'RegO', this.addRegO, this, 1, 0, 2);
        buttonRegO.scale.setTo(0.3, 0.3);
        buttonGroup.add(buttonRegO);
        buttonPC = game.add.button(300, 0, 'PC', this.addPC, this, 1, 0, 2);
        buttonPC.scale.setTo(0.3, 0.3);
        buttonGroup.add(buttonPC);
        buttonDRO = game.add.button(150, 0, 'DRO', this.addDRO, this, 1, 0, 2);
        buttonDRO.scale.setTo(0.3, 0.3);
        buttonGroup.add(buttonDRO);
        buttonIO = game.add.button(225, 125, 'IO', this.addIO, this, 1, 0, 2);
        buttonIO.scale.setTo(0.3, 0.3);
        buttonGroup.add(buttonIO);
        buttonCPS = game.add.button(0, 0, 'CPS', this.addCPS, this, 1, 0, 2);
        buttonCPS.scale.setTo(0.3, 0.3);
        buttonGroup.add(buttonCPS);
        
        this.playBGM();
        
        //Add start buttons and hide
        buttonStart = game.add.button(223.5, 350, 'button', this.start, this, 1, 0, 2);
        buttonStart.anchor.setTo(0.5, 1);
        buttonStart.visible = false;
        
        //Add buttons to button array
        buttonArray.push(buttonCPS);
        buttonArray.push(buttonDRO);
        buttonArray.push(buttonPC);
        buttonArray.push(buttonRegO);
        buttonArray.push(buttonIO);
        
        // cursors = game.input.keyboard.createCursorKeys();
        cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'enter':Phaser.KeyCode.ENTER } );
    }, 
    
    update: function(){
        // nameLabel.setText(buttonSelect);
        
        var screenRatio = window.innerWidth/ window.innerHeight;
        
        if(charSelected == 1){
            buttonStart.visible = true;
            buttonGroup.add(buttonStart);
            buttonArray.push(buttonStart);
            charSelected = 2;
        }
        
        if(screenRatio > 1.33 && currAspectRatio != 1){  
            game.scale.setGameSize(1280, 720);
            
            //Adjust onscreen elements
            buttonGroup.scale.setTo(1.25, 1.25);
            buttonGroup.x = game.world.centerX-50;
            buttonGroup.y = game.world.centerY-200;
            backgroundImg.loadTexture('background2');
            if(charSelected == 2){
                namePos.scale.setTo(0.25, 0.25);
                namePos.x = 0;
                namePos.y = 400;
            }
            
            currAspectRatio = 1;
        }
        else if(screenRatio < 1.33 && screenRatio > 0.5625 && currAspectRatio != 0){    
            game.scale.setGameSize(800, 600);
            
            //Adjust onscreen elements
            buttonGroup.scale.setTo(1, 1);
            buttonGroup.x = game.world.centerX-50;
            buttonGroup.y = game.world.centerY-100;
            backgroundImg.loadTexture('background');
            if(charSelected == 2){
                namePos.scale.setTo(0.25, 0.25);
                namePos.x = 0;
                namePos.y = 400;
            }
            
            currAspectRatio = 0;
        }
        else if(screenRatio < 0.5625  && currAspectRatio != 2){  
            game.scale.setGameSize(720, 1280);
            
            //Adjust onscreen elements
            buttonGroup.scale.setTo(1.25, 1.25);
            buttonGroup.x = 100;
            buttonGroup.y = 700;
            backgroundImg.loadTexture('background3');
            if(charSelected == 2){
                namePos.scale.setTo(0.4, 0.4);
                namePos.x = 0;
                namePos.y = 550;
            }
            
            currAspectRatio = 2;
        }
        
        //If right arrow pressed
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
        
        //If left arrow pressed
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
        
        //If enter key pressed
        if(cursors.enter.isDown){
            buttonEnterMechanic = 1;
        }else if(buttonEnterMechanic == 1){
            switch(buttonSelect){
                case 0:
                    this.addCPS();
                    break;
                case 1:
                    this.addDRO();
                    break;
                case 2:
                    this.addPC();
                    break;
                case 3:
                    this.addRegO();
                    break;
                case 4:
                    this.addIO();
                    break;
                case 5:
                    this.start();
                    break;
            }
            buttonEnterMechanic = 0;
        }
        
        //On mouse over button
        buttonRegO.events.onInputOver.add(this.overRegO, this);
        buttonPC.events.onInputOver.add(this.overPC, this);
        buttonDRO.events.onInputOver.add(this.overDRO, this);
        buttonIO.events.onInputOver.add(this.overIO, this);
        buttonCPS.events.onInputOver.add(this.overCPS, this);
        
        //On mouse out of button
        buttonRegO.events.onInputOut.add(this.outButton, this);
        buttonPC.events.onInputOut.add(this.outButton, this);
        buttonDRO.events.onInputOut.add(this.outButton, this);
        buttonIO.events.onInputOut.add(this.outButton, this);
        buttonCPS.events.onInputOut.add(this.outButton, this);
        
        game.world.bringToTop(buttonGroup);
    },
    
    start: function(){
        // alert('start');
        this.playSelect();
        // game.state.start('intro-rego');
        if(position == "RegO"){
            game.state.start('intro-rego');
        }else if(position == "IO"){
            game.state.start('Statement');
        }else if(position == "DRO"){
            game.state.start('LoE');
        }
    },
    
    outButton: function(){
        buttonRegO.frame = 0;
        buttonPC.frame = 0;
        buttonDRO.frame = 0;
        buttonIO.frame = 0;
        buttonCPS.frame = 0;
        buttonStart.frame = 0;
    },
    
    overRegO: function(){
        // buttonRegO.frame = 0;
        buttonPC.frame = 0;
        buttonDRO.frame = 0;
        buttonIO.frame = 0;
        buttonCPS.frame = 0;
        buttonStart.frame = 0;
    },
    
    overPC: function(){
        buttonRegO.frame = 0;
        // buttonPC.frame = 0;
        buttonDRO.frame = 0;
        buttonIO.frame = 0;
        buttonCPS.frame = 0;
        buttonStart.frame = 0;
    },
    
    overDRO: function(){
        buttonRegO.frame = 0;
        buttonPC.frame = 0;
        // buttonDRO.frame = 0;
        buttonIO.frame = 0;
        buttonCPS.frame = 0;
        buttonStart.frame = 0;
    },
    
    overIO: function(){
        buttonRegO.frame = 0;
        buttonPC.frame = 0;
        buttonDRO.frame = 0;
        // buttonIO.frame = 0;
        buttonCPS.frame = 0;
        buttonStart.frame = 0;
    },
    
    overCPS: function(){
        buttonRegO.frame = 0;
        buttonPC.frame = 0;
        buttonDRO.frame = 0;
        buttonIO.frame = 0;
        // buttonCPS.frame = 0;
        buttonStart.frame = 0;
    },
    
    addRegO: function(){
        // alert('rego');
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
            if(currAspectRatio == 2){
                namePos = game.add.sprite(-400, 550, 'RegOName');
                namePos.scale.setTo(0.4, 0.4);
            }else{
                namePos = game.add.sprite(-400, 400, 'RegOName');
                namePos.scale.setTo(0.25, 0.25);
            }
            tween = game.add.tween(namePos);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            this.resetWorker("boolRegO");
            position = "RegO";
            if(charSelected == 0){
                charSelected  = 1;
            }
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
            if(currAspectRatio == 2){
                namePos = game.add.sprite(-400, 550, 'PCName');
                namePos.scale.setTo(0.4, 0.4);
            }else{
                namePos = game.add.sprite(-400, 400, 'PCName');;
                namePos.scale.setTo(0.25, 0.25);
            }
            tween = game.add.tween(namePos);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            this.resetWorker("boolPC");
            position = "PC";
            if(charSelected == 0){
                charSelected  = 1;
            }
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
            if(currAspectRatio == 2){
                namePos = game.add.sprite(-400, 550, 'DROName');
                namePos.scale.setTo(0.4, 0.4);
            }else{
                namePos = game.add.sprite(-400, 400, 'DROName');
                namePos.scale.setTo(0.25, 0.25);
            }
            tween = game.add.tween(namePos);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            this.resetWorker("boolDRO");
            position = "DRO";
            if(charSelected == 0){
                charSelected  = 1;
            }
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
            if(currAspectRatio == 2){
                namePos = game.add.sprite(-400, 550, 'CPSName');
                namePos.scale.setTo(0.4, 0.4);
            }else{
                namePos = game.add.sprite(-400, 400, 'CPSName');
                namePos.scale.setTo(0.25, 0.25);
            }
            tween = game.add.tween(namePos);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            this.resetWorker("boolCPS");
            position = "CPS";
            if(charSelected == 0){
                charSelected  = 1;
            }
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
            if(currAspectRatio == 2){
                namePos = game.add.sprite(-400, 550, 'IOName');
                namePos.scale.setTo(0.4, 0.4);
            }else{
                namePos = game.add.sprite(-400, 400, 'IOName');
                namePos.scale.setTo(0.25, 0.25);
            }
            tween = game.add.tween(namePos);
            tween.to({x:0}, 200, 'Cubic', true, 0);
            this.resetWorker("boolIO");
            position = "IO";
            if(charSelected == 0){
                charSelected  = 1;
            }
        }
        this.playSelect();
    },
    
    playSelect: function(){
        music = game.add.audio('menuSelect');
        music.loop = false;
        music.play();
    },
    
    playBGM: function(){
        music3 = game.add.audio('arcadeSong');
        music3.loop = true;
        // music3.play();
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
            namePos.destroy();
        }
        
        if(boolPC){
            animPC.destroy();
            spritePC.destroy();
            namePos.destroy();
        }
        
        if(boolDRO){
            animDRO.destroy();
            spriteDRO.destroy();
            namePos.destroy();
        }
        
        if(boolCPS){
            animCPS.destroy();
            spriteCPS.destroy();
            namePos.destroy();
        }
        
        if(boolIO){
            animIO.destroy();
            spriteIO.destroy();
            namePos.destroy();
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