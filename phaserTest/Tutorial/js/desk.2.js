/* global
game, Phaser
*/

var DeskState = function(){};
// var buttonRegO, buttonPC, buttonDRO, buttonIO, buttonCPS, buttonGroup, buttonStart, music, music3, tween;
// var boolRegO, boolPC, boolDRO, boolIO, boolCPS;
// var animRegO, animPC, animDRO, animCPS, animIO;
// var nameRegO, nameDRO, namePC, nameCPS, nameIO;
// var spriteRegO, spritePC, spriteDRO, spriteCPS, spriteIO;
// var position;
// var nameLabel;

// var char4_3, char16_9;
// var desk4_3, desk16_9, desk9_16;
// var text4_3, text16_9, text9_16;
// var tempBool;

var form1, form2, form3, form4, form5, form6;
var changingRatio = false;

var char, desk, text;
var charLabel, deskLabel, textLabel;
var textGroup, charGroup, deskGroup;
var currAspectRatio;            // 0 = 4:3, 1 = 16:9, 2 = 9:16
var screenResolutions = [[800, 600], [1280, 720], [720, 1280]];
var charDimensions = [[0, 0],[0, 0],[-1000, -1000]];
var deskDimensions = [[0, 200],[0, 360],[0, 0]];
var textDimensions = [[0, 400],[800, 0],[0, 640]];
var scaleNum;
var textPadding = 10;
var elector;

var cursors;

var buttonArray = [];

var buttonSelect = -1;
var buttonLeftMechanic = 0;
var buttonRightMechanic = 0;
var buttonEnterMechanic = 0;

var line = [];

var letterIndex = 0;
var lineIndex = 0;
var lineCount = 0;

var letterDelay = 50;
var lineDelay = 25;

var waitForNext = false;

var style, style2;

var title;

// var content = [
//     "Hi! My name is... (what?), ", 
//     "My name is... (who?)",
//     "My name is... [scratches]",
//     "Slim Shady", 
//     "Hi! My name is... (what?)", 
//     "My name is... (who?)",
//     "My name is... [scratches]",
//     "Slim Shady", 
//     ];

var word = [];

var text1 = "Elector: Hi! My name is... (what?) My name is... (who?) My name is... [scratches] Slim Shady";
    
var textLine = ["", "", "", "", "", "", "", "", "", ""];
var textLine2 = ["", "", "", "", "", "", "", "", "", ""];


DeskState.prototype = {
    create: function(){
        // game.stage.backgroundColor = '#888888';
        // var screenRatio = window.innerWidth/ window.innerHeight;
        // if(screenRatio > 1.33){
        //     currAspectRatio = 1;
        // }else if(screenRatio < 1.33){
        //     currAspectRatio = 0;
        // }
        
        
        scaleNum = deskDimensions[0][1]/deskDimensions[1][1];
        
        // style = { font: '55pt VT323', fill: '#ffffff', wordWrap: true, wordWrapWidth: 800};
        
        // style2 = { font: '55pt Arial', fill: '#ffffff', wordWrap: true, wordWrapWidth: 480};
        
        charLabel = game.add.text(0 + textPadding, 0 + textPadding, 'Character Text', {font:'50px VT323', fill:'#ffffff'});
        deskLabel = game.add.text(0 + textPadding, 0 + textPadding, scaleNum, {font:'50px VT323', fill:'#ffffff'});
        textLabel = game.add.text(0 + textPadding, 0 + textPadding, '', {font:'75px VT323', fill:'#ffffff'});
        
        title = game.add.text(textPadding, deskDimensions[0][1]-35, 'asdf', {font:'25px VT323', fill:'#ffffff'});
        
        elector = game.add.sprite(500, 50, 'electorImg1');
        elector.scale.setTo(1*scaleNum, 1*scaleNum);
        desk = game.add.sprite(0, 0, 'desk');
        text = game.add.sprite(0, 0, 'textBox_4_3');
        char = game.add.sprite(0, 0, 'backgroundL');
        
        form1 = game.add.button(340, 30, 'form1', this.start, this, 1, 0, 2);
        form1.scale.setTo(0.3, 0.3);
        form2 = game.add.button(442, 30, 'form6', this.statementVote, this, 1, 0, 2);
        form2.scale.setTo(0.3, 0.3);
        form3 = game.add.button(550, 30, 'form1', this.start, this, 1, 0, 2);
        form3.scale.setTo(0.3, 0.3);
        form4 = game.add.button(600, 40, 'form1', this.start, this, 1, 0, 2);
        form4.scale.setTo(0.3, 0.3);
        form5 = game.add.button(650, 50, 'form1', this.start, this, 1, 0, 2);
        form5.scale.setTo(0.3, 0.3);
        form6 = game.add.button(100, 50, 'form2', this.LoE, this, 1, 0, 2);
        form6.scale.setTo(0.3, 0.3);
        
        charGroup = game.add.group();
        deskGroup = game.add.group();
        textGroup = game.add.group();
        
        charGroup.add(char);
        charGroup.add(elector);
        charGroup.add(charLabel);
       
        deskGroup.add(desk);
        deskGroup.add(form1);
        deskGroup.add(form2);
        deskGroup.add(form3);
        deskGroup.add(form4);
        deskGroup.add(form5);
        deskGroup.add(form6);
        deskGroup.add(deskLabel);
        deskGroup.add(title);
        
        charGroup.y = 0;
        deskGroup.y = 200;
        textGroup.y = 400;
        
        textGroup.add(text);
        textGroup.add(textLabel);
        
        cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'enter':Phaser.KeyCode.ENTER } );
        
        // if(currAspectRatio == 0){
            // this.breakText();
        // }else if(currAspectRatio == 1){
            // this.breakText2();
        // }
        // this.breakText2();
        // this.nextLine();
    },

    breakText: function(){
        textLine = ["", "", "", "", "", "", "", "", "", ""];
        word = text1.split(' ');
        var j = 0;
        for(var i = 0; i < textLine.length; i++){
            var lineCount = 0;
            while(lineCount < 26 && j < word.length){
                lineCount = textLine[i].length + word[j].length;
                if(lineCount < 26){
                    textLine[i] = textLine[i].concat(word[j] + " ");
                    j++;
                }
            }
        }
    },

    breakText2: function(){
        textLine = ["", "", "", "", "", "", "", "", "", ""];
        word = text1.split(' ');
        var j = 0;
        for(var i = 0; i < textLine.length; i++){
            var lineCount = 0;
            while(lineCount < 15 && j < word.length){
                lineCount = textLine[i].length + word[j].length;
                if(lineCount < 15){
                    textLine[i] = textLine[i].concat(word[j] + " ");
                    j++;
                }
            }
        }
    },
    
    nextLine: function(){
        if(lineIndex === textLine.length){
            return;
        }
        
        if(lineCount >= 2 && currAspectRatio == 0){
            textLabel.text = "";
            lineCount = 0;
        }else if(lineCount >= 4 && currAspectRatio == 1){
            textLabel.text = "";
            lineCount = 0;
        }
        
        line = textLine[lineIndex].split('');
        
        letterIndex = 0;
        
        game.time.events.repeat(letterDelay, line.length, this.nextLetter, this);
        
        lineIndex++;
        lineCount++;
        
        // if(lineIndex%2 != 0){
        //     textLabel.text = "";
        // }
    },
    
    nextLetter: function(){
        textLabel.text = textLabel.text.concat(line[letterIndex]);
        letterIndex++;
        this.playType();
        if(letterIndex === line.length){
            textLabel.text = textLabel.text.concat("\n");
            
            // if(lineIndex%2 != 0){
            //     game.time.events.add(lineDelay, this.nextLine, this);
            // }else{
            //     waitForNext = true;
            // }
            
            if(lineCount < 2 && currAspectRatio == 0){
                game.time.events.add(lineDelay, this.nextLine, this);
            }else if(lineCount < 4 && currAspectRatio == 1){
                game.time.events.add(lineDelay, this.nextLine, this);
            }else{
                waitForNext = true;
            }
        }
    },
    
    swapText: function(){
        
    },
    
    update: function(){
        var screenRatio = window.innerWidth/ window.innerHeight;

        deskLabel.setText(lineCount);
        // deskLabel.setText(textLine[0]);
        // textLabel.setText(buttonSelect);
        if(screenRatio > 1.33 && currAspectRatio != 1){
            game.scale.setGameSize(1280, 720);
            
            desk.scale.setTo(1, 1.8);
            deskGroup.x = deskDimensions[1][0];
            deskGroup.y = deskDimensions[1][1];
            text.loadTexture('textBox_16_9', 0);
            textGroup.x = textDimensions[1][0];
            textGroup.y = textDimensions[1][1];
            title.y = deskDimensions[1][1]-35;
            
            this.breakText2();
            textLabel.text = "";
            lineCount = 0;
            this.nextLine();
            if(currAspectRatio == 0){
                elector.scale.setTo(1, 1);
                elector.y = elector.y * (1/scaleNum);
            }
            
            game.world.bringToTop(charGroup);
            game.world.bringToTop(deskGroup);
            game.world.bringToTop(textGroup);
            
            currAspectRatio = 1;
        }
        else if(screenRatio < 1.33 && screenRatio > 0.5625 && currAspectRatio != 0){  
            game.scale.setGameSize(800, 600);
            
            desk.scale.setTo(1, 1);
            deskGroup.x = deskDimensions[0][0];
            deskGroup.y = deskDimensions[0][1];
            text.loadTexture('textBox_4_3', 0);
            textGroup.x = textDimensions[0][0];
            textGroup.y = textDimensions[0][1];
            title.y = deskDimensions[0][1]-35;
            this.breakText();
            textLabel.text = "";
            lineCount = 0;
            this.nextLine();
            if(currAspectRatio == 1){
                elector.scale.setTo(1*scaleNum, 1*scaleNum);
                elector.y = elector.y * scaleNum;
            }
            
            game.world.bringToTop(charGroup);
            game.world.bringToTop(deskGroup);
            game.world.bringToTop(textGroup);
            
            currAspectRatio = 0;
        }
        else if(screenRatio < 0.5625  && currAspectRatio != 2){  
            game.scale.setGameSize(720, 1280);
            
            desk.scale.setTo(0.9, 3.2);
            deskGroup.x = deskDimensions[2][0];
            deskGroup.y = deskDimensions[2][1];
            text.loadTexture('textBox_9_16', 0);
            textGroup.x = textDimensions[2][0];
            textGroup.y = textDimensions[2][1];
            
            game.world.sendToBack(charGroup);
            
            game.world.bringToTop(deskGroup);
            game.world.bringToTop(textGroup);
            
            currAspectRatio = 2;
        }
        
        if (cursors.left.isDown && waitForNext == true){
            buttonLeftMechanic = 1;
        }else if(buttonLeftMechanic == 1){
            waitForNext = false;
            // textLabel.text = "";
            // lineCount = 0;
            this.playSelect();
            this.nextLine();
            // buttonSelect++;
            // if(buttonSelect == buttonArray.length){
            //     buttonSelect = 0;
            // }
            // for(var i = 0; i < buttonArray.length; i++){
            //     if(i == buttonSelect){
            //         buttonArray[i].frame = 1;
            //     }else{
            //         buttonArray[i].frame = 0;
            //     }
            // }
            buttonLeftMechanic = 0;
            
            // buttonArray[buttonSelect].frame = 1;
            // buttonRegO.frame = 1;
            // buttonRegO.focus;
        }
        
        if (cursors.right.isDown){
            buttonRightMechanic = 1;
        }else if(buttonRightMechanic == 1){
            buttonSelect--;
            // if(buttonSelect < 0){
            //     buttonSelect = buttonArray.length-1;
            // }
            // for(var i = 0; i < buttonArray.length; i++){
            //     if(i == buttonSelect){
            //         buttonArray[i].frame = 1;
            //     }else{
            //         buttonArray[i].frame = 0;
            //     }
            // }
            buttonRightMechanic = 0;
            // buttonArray[buttonSelect].frame = 1;
            // buttonRegO.frame = 1;
            // buttonRegO.focus;
        }
        
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
        
        form1.events.onInputOver.add(this.overBookOath, this);
        form1.events.onInputOut.add(this.outForm, this);
        form2.events.onInputOver.add(this.overStatement, this);
        form2.events.onInputOut.add(this.outForm, this);
        form3.events.onInputOver.add(this.overRegCert, this);
        form3.events.onInputOut.add(this.outForm, this);
        form4.events.onInputOver.add(this.overCorrCert, this);
        form4.events.onInputOut.add(this.outForm, this);
        form5.events.onInputOver.add(this.overOathCert, this);
        form5.events.onInputOut.add(this.outForm, this);
        form6.events.onInputOver.add(this.overLoE, this);
        form6.events.onInputOut.add(this.outForm, this);
    },
    
    playType: function(){
        music = game.add.audio('typeSound');
        music.loop = false;
        // music.play();
    },
    
    playSelect: function(){
        music2 = game.add.audio('menuSelect');
        music2.loop = false;
        // music2.play();
    },
    
    outForm: function(){
        title.text = "";
        // formLarge.alpha = 0;
    },
    
    overLoE: function(){
        title.text = "List of Electors";
        // formLarge.alpha = 1;
    },
    
    overStatement: function(){
        title.text = "Statement of the Vote";
    },
    
    overRegCert: function(){
        title.text = "Registration Certificate";
    },
    
    overCorrCert: function(){
        title.text = "Correction Certificate";
    },
    
    overOathCert: function(){
        title.text = "Oath of Residence Certificate";
    },
    
    overBookOath: function(){
        title.text = "Book of Oaths";
    },
};