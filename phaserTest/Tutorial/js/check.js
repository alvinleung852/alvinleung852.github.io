/* global
game, Phaser, position, electorNum
*/

var CheckState = function(){};
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

// var form1, form2, form3, form4, form5, form6;
// var changingRatio = false;

var char, desk, text;
var charLabel, deskLabel, textLabel;
var textGroup, charGroup, deskGroup, overlayGroup;
var currAspectRatio;            // 0 = 4:3, 1 = 16:9, 2 = 9:16
// var screenResolutions = [[800, 600], [1280, 720], [720, 1280]];
// var charDimensions = [[0, 0],[0, 0],[-1000, -1000]];
var deskDimensions = [[0, 200],[0, 360],[0, 0]];
var textDimensions = [[0, 400],[800, 0],[0, 640]];
// var scaleNum;
var textPadding = 10;
// var elector;

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

var issue1Anim, issue2Anim, issue3Anim, issue4Anim, issue5Anim;
var animIssue1, animIssue2, animIssue3, animIssue4, animIssue5;

// var style, style2;

var title;

var content = [
    "Check your initials are on the back of the ballot", 
    "Compare counterfoil number against stub. Make sure they are the same",
    "Take off counterfoil and tear it up",
    "Put counterfoil in plastic bag",
    "Give ballot to elector to put in the box",
    ""
    ];

var word = [];

// var text1 = "Elector: Hi! My name is... (what?) My name is... (who?) My name is... [scratches] Slim Shady";
    
// var text1 = "Bacon ipsum dolor amet chuck ball tip bacon, kevin brisket picanha drumstick tail ground round. Chicken tongue kevin pork belly doner, pork loin turkey biltong pork chop ham salami pastrami tri-tip. Brisket ground round shank leberkas, cow tongue jowl capicola. Swine shankle hamburger tenderloin ground round boudin strip steak. Pork chuck beef spare ribs capicola. Tongue t-bone meatball ball tip strip steak pig shoulder leberkas biltong alcatra.";

var textLine = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var textLine2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var textLine3 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var arrayNum1 = 0;
var arrayNum2 = 0;
var arrayNum3 = 0;
var currLine = 0;

var numLines4_3 = 2;
var numLines16_9 = 8;
var numLines9_16 = 6;

// var electorNum = 1;
// var sub_val;

var music, music2, music3;

// var extraAnimVar = 0;

var nextButton;

var convoEnd = false;

var nextButtonTween; 

// var deskCount = 0;

// var electorID, electorID2;

var clicked;
var convoCount;

var overNext = false;

CheckState.prototype = {
    create: function(){
        // game.stage.backgroundColor = '#888888';
        // var screenRatio = window.innerWidth/ window.innerHeight;
        // if(screenRatio > 1.33){
        //     currAspectRatio = 1;
        // }else if(screenRatio < 1.33){
        clicked = false;
        convoCount = 0;
        currAspectRatio = 5;
        // }
        currLine = 0;
        arrayNum1 = 0;
        arrayNum2 = 0;
        arrayNum3 = 0;
        // extraAnimVar = 0;
        word = [];
        convoEnd = false;
        waitForNext = false;
        buttonArray = [];
        buttonSelect = -1;
        
        content = [
            "Check your initials are on the back of ballot", 
            "Compare counterfoil number against stub. Make sure they are the same",
            "Take off counterfoil and tear it up",
            "Put counterfoil in plastic bag",
            "Give ballot to elector to put in the box",
            ""
        ];
        
        // deskCount=2;
        // nextButton = game.add.sprite(480 - 60, 720 - 80, 'nextButton3');
        nextButton = game.add.button(480 - 60, 720 - 80, 'nextButton3', this.nextButtonRun, this, 1, 0, 2);
        nextButton.scale.setTo(0.2, 0.2);
        nextButton.alpha = 0;
        
        nextButtonTween = game.add.tween(nextButton).to({alpha:1}, 750, "Linear", true, 0, -1);
        nextButtonTween.yoyo(true, 0);
        
        
        // scaleNum = deskDimensions[0][1]/deskDimensions[1][1];
        
        // style = { font: '55pt VT323', fill: '#ffffff', wordWrap: true, wordWrapWidth: 800};
        
        // style2 = { font: '55pt Arial', fill: '#ffffff', wordWrap: true, wordWrapWidth: 480};
        
        // charLabel = game.add.text(0 + textPadding, 0 + textPadding, 'Character Text', {font:'50px VT323', fill:'#ffffff'});
        deskLabel = game.add.text(0 + textPadding, 0 + textPadding, "Check returned ballot", {font:'50px VT323', fill:'#ffffff'});
        textLabel = game.add.text(0 + textPadding, 0 + textPadding, '', {font:'75px VT323', fill:'#ffffff'});
        
        title = game.add.text(textPadding, deskDimensions[0][1]-35, '', {font:'25px VT323', fill:'#ffffff'});
        
        // switch(electorNum){
        //     case 1:
        //         elector = game.add.sprite(500, 50, 'electorImg1');
        //         break;
        //     case 2:
        //         elector = game.add.sprite(500, 50, 'electorImg2');
        //         break;
            
        // }
        
        
        
        // elector.scale.setTo(1*scaleNum, 1*scaleNum);
        desk = game.add.sprite(0, 0, 'desk');
        text = game.add.sprite(0, 0, 'textBox_4_3');
        // char = game.add.sprite(0, 0, 'backgroundL');
        
        // form1 = game.add.button(340, 30, 'form1', this.start, this, 1, 0, 2);
        // form1.scale.setTo(0.3, 0.3);
        // form2 = game.add.button(442, 30, 'form6', this.statementVote, this, 1, 0, 2);
        // form2.scale.setTo(0.3, 0.3);
        // form3 = game.add.button(550, 30, 'form1', this.start, this, 1, 0, 2);
        // form3.scale.setTo(0.3, 0.3);
        // form4 = game.add.button(600, 40, 'form1', this.start, this, 1, 0, 2);
        // form4.scale.setTo(0.3, 0.3);
        // form5 = game.add.button(650, 50, 'form1', this.start, this, 1, 0, 2);
        // form5.scale.setTo(0.3, 0.3);
        // form6 = game.add.button(100, 50, 'form2', this.LoE, this, 1, 0, 2);
        // form6.scale.setTo(0.3, 0.3);
        
        // charGroup = game.add.group();
        deskGroup = game.add.group();
        textGroup = game.add.group();
        overlayGroup = game.add.group();
        
        // charGroup.add(char);
        // charGroup.add(elector);
        // charGroup.add(charLabel);
       
        deskGroup.add(desk);
        // deskGroup.add(form1);
        // deskGroup.add(form2);
        // deskGroup.add(form3);
        // deskGroup.add(form4);
        // deskGroup.add(form5);
        // deskGroup.add(form6);
        deskGroup.add(deskLabel);
        deskGroup.add(title);
        
        // charGroup.y = 0;
        deskGroup.y = 0;
        textGroup.y = 400;
        overlayGroup.x = 0;
        overlayGroup.y = 0;
        
        textGroup.add(text);
        textGroup.add(textLabel);
        textGroup.add(nextButton);
        
        cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.UP, 'down': Phaser.KeyCode.DOWN, 'left': Phaser.KeyCode.LEFT, 'right': Phaser.KeyCode.RIGHT, 'enter':Phaser.KeyCode.ENTER } );
        
        // buttonArray.push(form1);
        // buttonArray.push(form2);
        // buttonArray.push(form3);
        // buttonArray.push(form4);
        // buttonArray.push(form5);
        // buttonArray.push(form6);
        buttonArray.push(nextButton);
        
        // this.loadElectorInfo(deskCount);
        // this.checkText();
        this.breakText();
        this.breakText2();
        this.breakText3();
        
        
        
        issue1Anim = game.add.sprite(150, 100, 'issue1');
        issue1Anim.scale.x *= .5;
        issue1Anim.scale.y *= .5;
        animIssue1 = issue1Anim.animations.add('run');
        issue1Anim.animations.play('run', 24, false);
        game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim1, this);
        
        issue2Anim = game.add.sprite(150, 100, 'issue2');
        issue2Anim.scale.x *= .5;
        issue2Anim.scale.y *= .5;
        issue2Anim.alpha = 0;
        animIssue2 = issue2Anim.animations.add('run');
        
        issue3Anim = game.add.sprite(350, 100, 'issue3');
        issue3Anim.scale.x *= .5;
        issue3Anim.scale.y *= .5;
        issue3Anim.alpha = 0;
        animIssue3 = issue3Anim.animations.add('run');
        
        issue4Anim = game.add.sprite(350, 100, 'issue4');
        issue4Anim.scale.x *= .5;
        issue4Anim.scale.y *= .5;
        issue4Anim.alpha = 0;
        animIssue4 = issue4Anim.animations.add('run');
        
        issue5Anim = game.add.sprite(200, 100, 'issue5');
        issue5Anim.scale.x *= .5;
        issue5Anim.scale.y *= .5;
        issue5Anim.alpha = 0;
        animIssue5 = issue5Anim.animations.add('run');
        
        overlayGroup.add(issue1Anim);
        overlayGroup.add(issue2Anim);
        overlayGroup.add(issue3Anim);
        overlayGroup.add(issue4Anim);
        overlayGroup.add(issue5Anim);
    },

    //Read in JSON file and load array
    // loadElectorInfo: function(param){
    //     var phaserJSON;
    //     switch(electorNum){
    //         case 1:
    //             phaserJSON = game.cache.getJSON('elector1');
    //             break;
    //         case 2:
    //             phaserJSON = game.cache.getJSON('elector2');
    //             break;
    //     }
        
    //     var size = 0;
    //     // var electorAppearParam = 0;
    //     for(var i in phaserJSON){
    //         // var key = i;
    //         var val = phaserJSON[i];
    //         size++;
    //         var temp = 0;
    //         for (var j in val){
    //             // var sub_key = j;
    //             sub_val = val[j];
    //             if(size == param){
    //                 content[temp] = sub_val;
    //                 temp++;
    //             }
    //         }
    //     }
    // },

    //Break text up for 4x3 ratio
    breakText: function(){
        
        textLine = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        // word = text1.split(' ');
        word = content[currLine].split(' ');
        
        var j = 0;
        for(var i = 0; i < textLine.length; i++){
            var lineCount = 0;
            while(lineCount < 25 && j < word.length){
                lineCount = textLine[i].length + word[j].length;
                if(lineCount < 25){
                    textLine[i] = textLine[i].concat(word[j] + " ");
                    j++;
                }
            }
        }
        
        //Find end of sentence
        for(var k = 0; k < textLine.length; k++){
            if(textLine[k] != ""){
                arrayNum1++;
            }   
        }
    },
    
    //Break text up for 16x9 ratio
    breakText2: function(){
        textLine2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        // word = text1.split(' ');
        word = content[currLine].split(' ');
        var j = 0;
        for(var i = 0; i < textLine2.length; i++){
            var lineCount = 0;
            while(lineCount < 15 && j < word.length){
                lineCount = textLine2[i].length + word[j].length;
                if(lineCount < 15){
                    textLine2[i] = textLine2[i].concat(word[j] + " ");
                    j++;
                }
            }
        }
        
        //Find end of sentence
        for(var k = 0; k < textLine2.length; k++){
            if(textLine2[k] != ""){
                arrayNum2++;
            }   
        }
    },
    
    //Break text up for 9x16 ratio
    breakText3: function(){
        textLine3 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        // word = text1.split(' ');
        word = content[currLine].split(' ');
        var j = 0;
        for(var i = 0; i < textLine3.length; i++){
            var lineCount = 0;
            while(lineCount < 23 && j < word.length){
                lineCount = textLine3[i].length + word[j].length;
                if(lineCount < 23){
                    textLine3[i] = textLine3[i].concat(word[j] + " ");
                    j++;
                }
            }
        }
        
        //Find end of sentence
        for(var k = 0; k < textLine3.length; k++){
            if(textLine3[k] != ""){
                arrayNum3++;
            }   
        }
    },
    
    //Check text file for extra animation controls
    // checkText: function(){
    //     if(content[currLine].substr(0,8) == "/elecIn;"){
    //         content[currLine] = content[currLine].replace("/elecIn;", "");
    //         extraAnimVar = 1;
    //         this.extraAnim(extraAnimVar);
    //     }else if(content[currLine].substr(0,9) == "/elecOut;"){
    //         content[currLine] = content[currLine].replace("/elecOut;", "");
    //         extraAnimVar = 2;
    //         this.extraAnim(extraAnimVar);
    //     }else if(content[currLine].substr(0,8) == "/showID;"){
    //         content[currLine] = content[currLine].replace("/showID;", "");
    //         extraAnimVar = 3;
    //         this.extraAnim(extraAnimVar);
    //     }else if(content[currLine].substr(0,11) == "/goToCheck;"){
    //         content[currLine] = content[currLine].replace("/goToCheck;", "");
    //         // game.state.start('Check');
    //     }else{
    //         extraAnimVar = 0;
    //     }
    // },
    
    // extraAnim: function(param){
    //     var tweenElector2;
    //     switch (param){
    //         case 0:
                
    //             break;
    //         //Animate elector in
    //         case 1:
    //             elector.x = 800;
    //             tweenElector2 = game.add.tween(elector);
    //             tweenElector2.to({x:500}, 0, 'Cubic', true, 0);
    //             break;
    //         //Animate elector out
    //         case 2:
    //             elector.x = 500;
    //             tweenElector2 = game.add.tween(elector);
    //             tweenElector2.to({x:800}, 0, 'Cubic', true, 0);
    //             break;
    //         //Animate in ID
    //         case 3:
    //             if(currAspectRatio == 1){
    //                 electorID = game.add.sprite(200, 360, 'ID1');
    //                 electorID.scale.setTo(0.2, 0.2);
    //                 charGroup.add(electorID);
    //                 var tweenID = game.add.tween(electorID).to({y: 200}, 750, "Linear", true);
    //                 tweenID.onComplete.add(this.idAnim, this);
    //                 electorID2 = game.add.sprite(200, 200, 'ID1');
    //                 electorID2.scale.setTo(0.2, 0.2);
    //                 electorID2.alpha = 0;
    //                 overlayGroup.add(electorID2);
    //             }else if(currAspectRatio == 0){
    //                 electorID = game.add.sprite(200, 200, 'ID1');
    //                 electorID.scale.setTo(0.2, 0.2);
    //                 charGroup.add(electorID);
    //                 var tweenID = game.add.tween(electorID).to({y: 75}, 750, "Linear", true);
    //                 tweenID.onComplete.add(this.idAnim, this);
    //                 electorID2 = game.add.sprite(200, 75, 'ID1');
    //                 electorID2.scale.setTo(0.2, 0.2);
    //                 electorID2.alpha = 0;
    //                 overlayGroup.add(electorID2);
    //             }else if(currAspectRatio == 2){
    //                 electorID = game.add.sprite(300, -100, 'ID1');
    //                 electorID.scale.setTo(0.2, 0.2);
    //                 // charGroup.add(electorID);
    //                 var tweenID = game.add.tween(electorID).to({y: 200}, 750, "Linear", true);
    //                 tweenID.onComplete.add(this.idAnim, this);
    //                 electorID2 = game.add.sprite(300, 200, 'ID1');
    //                 electorID2.scale.setTo(0.2, 0.2);
    //                 electorID2.alpha = 0;
    //                 overlayGroup.add(electorID2);
    //             }
    //             break;
    //     }
    // },
    
    // idAnim: function(){
    //     // alert('hi');
    //     electorID.alpha = 0;
    //     electorID2.alpha = 1;
    //     if(currAspectRatio == 1){
    //         var tweenID2 = game.add.tween(electorID2).to({x:0, y:0}, 750, "Linear", true, 2000);
    //         var tweenID3 = game.add.tween(electorID2.scale).to({x: 1, y:1}, 750, 'Linear', true, 2000);
    //         tweenID3.onComplete.add(this.idAnim2, this);
    //     }else if(currAspectRatio == 0){
    //         var tweenID2 = game.add.tween(electorID2).to({x:0, y:-100}, 750, "Linear", true, 2000);
    //         var tweenID3 = game.add.tween(electorID2.scale).to({x: 1, y:1}, 750, 'Linear', true, 2000);
    //     }else if(currAspectRatio == 2){
    //         var tweenID2 = game.add.tween(electorID2).to({x:0, y:0}, 750, "Linear", true, 2000);
    //         var tweenID3 = game.add.tween(electorID2.scale).to({x: 0.9, y:0.9}, 750, 'Linear', true, 2000);
    //     }
    //     tweenID3.onComplete.add(this.idAnim2, this);
    // },
    
    // idAnim2: function(){
    //     game.state.start('ID');
    // },
    
    //Get next line for 4x3
    nextLine: function(){
        if(lineIndex === arrayNum1){
            // textLine = ["", "", "", "", "", "", "", "", "", ""];
            // this.nextLine();
            if(currLine == content.length-1){
                convoEnd = true;
            }else{
                convoEnd = false;
            }
            waitForNext = true;
            return;
        }
        // else if(lineCount == numLines4_3){
        //     alert("end");
        //     waitForNext = true;
        //     return;
        // }
        
        if(lineCount >= numLines4_3 && currAspectRatio == 0){
            textLabel.text = "";
            lineCount = 0;
        }
        // else if(lineCount >= numLines16_9 && currAspectRatio == 1){
        //     textLabel.text = "";
        //     lineCount = 0;
        // }
        
        line = textLine[lineIndex].split('');
        
        letterIndex = 0;
        
        game.time.events.repeat(letterDelay, line.length, this.nextLetter, this);
        
        // game.time.events.repeat(0, line.length, this.tempFunction, this);

        lineIndex++;
        lineCount++;
        
        // if(lineIndex%2 != 0){
        //     textLabel.text = "";
        // }
    },
    
    //Get next letter for 4x3
    nextLetter: function(){
        textLabel.text = textLabel.text.concat(line[letterIndex]);
        letterIndex++;
        this.playType();
        // deskLabel.setText("jkl;");
        if(letterIndex === line.length){
            textLabel.text = textLabel.text.concat("\n");
            
            // if(lineIndex%2 != 0){
            //     game.time.events.add(lineDelay, this.nextLine, this);
            // }else{
            //     waitForNext = true;
            // }
            
            if(lineCount < numLines4_3 && currAspectRatio == 0){
                game.time.events.add(lineDelay, this.nextLine, this);
            }
            // else if(lineCount < numLines16_9 && currAspectRatio == 1){
            //     game.time.events.add(lineDelay, this.nextLine, this);
            // }
            else{
                if(lineIndex === arrayNum1 && currLine == content.length-1){
                    convoEnd = true;
                }else{
                    convoEnd = false;
                }
                waitForNext = true;
            }
        }
    },
    
    //Get next line for 16x9
    nextLine2: function(){
        if(lineIndex === arrayNum2){
            if(currLine == content.length-1){
                convoEnd = true;
            }else{
                convoEnd = false;
            }
            waitForNext = true;
            return;
        }
        
        if(lineCount >= numLines16_9 && currAspectRatio == 1){
            textLabel.text = "";
            lineCount = 0;
        }
        
        line = textLine2[lineIndex].split('');
        
        letterIndex = 0;
        game.time.events.repeat(letterDelay, line.length, this.nextLetter2, this);
        
        lineIndex++;
        lineCount++;
    },
    
    //Get next letter for 16x9
    nextLetter2: function(){
        textLabel.text = textLabel.text.concat(line[letterIndex]);
        letterIndex++;
        this.playType();
        if(letterIndex === line.length){
            textLabel.text = textLabel.text.concat("\n");
            if(lineCount < numLines16_9 && currAspectRatio == 1){
                game.time.events.add(lineDelay, this.nextLine2, this);
            }else{
                if(lineIndex === arrayNum2 && currLine == content.length-1){
                    convoEnd = true;
                }else{
                    convoEnd = false;
                }
                waitForNext = true;
            }
        }
    },
    
    //Get next line for 9x16
    nextLine3: function(){
        //No more lines
        if(lineIndex === arrayNum3){
            if(currLine == content.length-1){
                convoEnd = true;
            }else{
                convoEnd = false;
            }
            waitForNext = true;
            return;
        }
        
        //Reset text box for more lines
        if(lineCount >= numLines9_16 && currAspectRatio == 2){
            textLabel.text = "";
            lineCount = 0;
        }
        
        line = textLine3[lineIndex].split('');
        
        letterIndex = 0;
        game.time.events.repeat(letterDelay, line.length, this.nextLetter3, this);
        
        lineIndex++;
        lineCount++;
    },
    
    //Get next letter for 9x16
    nextLetter3: function(){
        textLabel.text = textLabel.text.concat(line[letterIndex]);
        letterIndex++;
        this.playType();
        if(letterIndex === line.length){
            textLabel.text = textLabel.text.concat("\n");
            if(lineCount < numLines9_16 && currAspectRatio == 2){
                game.time.events.add(lineDelay, this.nextLine3, this);
            }else{
                if(lineIndex === arrayNum3 && currLine == content.length-1){
                    convoEnd = true;
                }else{
                    convoEnd = false;
                }
                waitForNext = true;
            }
        }
    },
    
    loadNextLine: function(){
        lineIndex = 0;
        arrayNum1 = 0;
        arrayNum2 = 0;
        arrayNum3 = 0;
        currLine++;
        textLabel.text = "";
        lineCount = 0;
        // this.checkText();
        this.breakText();
        this.breakText2();
        this.breakText3();
        if(currAspectRatio == 0){
            this.nextLine();
        }else if(currAspectRatio == 1){
            this.nextLine2();
        }else if(currAspectRatio == 2){
            this.nextLine3();
        }
        if(convoCount < 4){
            // this.playSelect();
            // game.time.events.removeAll();
            clicked = true;
            // var temp;
            // var temp2;
            var temp3;
            var temp4;
            switch(convoCount){
                case 0:
                    // temp = game.add.tween(issueText0);
                    // temp2 = game.add.tween(issueText1);
                    temp3 = game.add.tween(issue1Anim);
                    temp4 = game.add.tween(issue2Anim);
                    issue2Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim2, this);
                    break;
                case 1:
                    // temp = game.add.tween(issueText1);
                    // temp2 = game.add.tween(issueText2);
                    temp3 = game.add.tween(issue2Anim);
                    temp4 = game.add.tween(issue3Anim);
                    issue3Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim3, this);
                    break;
                case 2:
                    // temp = game.add.tween(issueText2);
                    // temp2 = game.add.tween(issueText3);
                    temp3 = game.add.tween(issue3Anim);
                    temp4 = game.add.tween(issue4Anim);
                    issue4Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim4, this);
                    break;
                case 3:
                    // temp = game.add.tween(issueText3);
                    // temp2 = game.add.tween(issueText4);
                    temp3 = game.add.tween(issue4Anim);
                    temp4 = game.add.tween(issue5Anim);
                    issue5Anim.animations.play('run', 24, false);
                    game.time.events.loop(Phaser.Timer.SECOND*4, this.playAnim5, this);
                    break;
            }
             
            // temp.to({x:-500}, 100, 'Cubic', true);
            temp3.to({alpha:0}, 100, 'Cubic', true);
            temp4.to({alpha:1}, 100, 'Cubic', false);
            // temp2.to({x:150}, 100, 'Cubic', false);
            
            // temp.chain(temp2);
            temp3.chain(temp4);
            convoCount++;
            // temp2.onComplete.add(this.resetButton, this);
        }else{
            game.state.start('Desk');
        }
    },
    
    update: function(){
        var screenRatio = window.innerWidth/ window.innerHeight;
        // deskLabel.setText(buttonSelect + ", " + waitForNext);
        // deskLabel.setText(currLine + ", " + content.length);
        // deskLabel.setText(electorID.x + ", " + electorID.y);
        // deskLabel.setText(game.width);
        // deskLabel.setText(textLine[0]);
        // textLabel.setText(buttonSelect);
        
        if(waitForNext && !convoEnd){
            nextButton.visible = true;
        }else{
            nextButton.visible = false;
        }
        
        if(buttonSelect == 0 || overNext){
            nextButtonTween.pause();
            nextButton.alpha = 1;
        }else{
            nextButton.alpha = 0;
            nextButtonTween.resume();
        }
        
        if(screenRatio > 1.33 && currAspectRatio != 1){
            game.scale.setGameSize(1280, 720);
            
            desk.scale.setTo(1, 3.6);
            // deskGroup.x = deskDimensions[1][0];
            // deskGroup.y = deskDimensions[1][1];
            text.loadTexture('textBox_16_9', 0);
            textGroup.x = textDimensions[1][0];
            textGroup.y = textDimensions[1][1];
            title.y = deskDimensions[1][1]-35;
            nextButton.x = 480 - 60;
            nextButton.y = 720 - 80;
            
            overlayGroup.scale.setTo(1.25, 1.25);
            overlayGroup.x = -100;
            overlayGroup.y = 100;
            
            textLabel.text = "";
            lineCount = 0;
            lineIndex = 0;

            // this.extraAnim(extraAnimVar);
            this.nextLine2();

            // if(currAspectRatio == 0 || currAspectRatio == 5){
            //     elector.scale.setTo(1, 1);
            //     elector.y = elector.y * (1/scaleNum);
            // }
            
            // game.world.bringToTop(charGroup);
            game.world.bringToTop(deskGroup);
            game.world.bringToTop(textGroup);
            game.world.bringToTop(overlayGroup);
            
            currAspectRatio = 1;
        }
        else if(screenRatio < 1.33 && screenRatio > 0.5625 && currAspectRatio != 0){  
            game.scale.setGameSize(800, 600);
            
            desk.scale.setTo(1, 2);
            // deskGroup.x = deskDimensions[0][0];
            // deskGroup.y = deskDimensions[0][1];
            text.loadTexture('textBox_4_3', 0);
            textGroup.x = textDimensions[0][0];
            textGroup.y = textDimensions[0][1];
            title.y = deskDimensions[0][1]-35;
            nextButton.x = 800 - 60;
            nextButton.y = 200 - 80;
            
            overlayGroup.scale.setTo(1, 1);
            overlayGroup.x = 0;
            overlayGroup.y = 0;
            
            textLabel.text = "";
            lineCount = 0;
            lineIndex = 0;
            
            // this.extraAnim(extraAnimVar);
            this.nextLine();

            // if(currAspectRatio == 1){
            //     elector.scale.setTo(1*scaleNum, 1*scaleNum);
            //     elector.y = elector.y * scaleNum;
            // }
            
            // game.world.bringToTop(charGroup);
            game.world.bringToTop(deskGroup);
            game.world.bringToTop(textGroup);
            game.world.bringToTop(overlayGroup);
            
            currAspectRatio = 0;
        }
        else if(screenRatio < 0.5625  && currAspectRatio != 2){  
            game.scale.setGameSize(720, 1280);
            
            desk.scale.setTo(0.9, 3.2);
            // deskGroup.x = deskDimensions[2][0];
            // deskGroup.y = deskDimensions[2][1];
            text.loadTexture('textBox_9_16', 0);
            textGroup.x = textDimensions[2][0];
            textGroup.y = textDimensions[2][1];
            nextButton.x = 720 - 60;
            nextButton.y = 640 - 80;
            
            overlayGroup.scale.setTo(1.1, 1.1);
            overlayGroup.x = -50;
            overlayGroup.y = 50;
            
            textLabel.text = "";
            lineCount = 0;
            lineIndex = 0;
            
            // this.extraAnim(extraAnimVar);
            this.nextLine3();
            
            
            // game.world.sendToBack(charGroup);
            game.world.bringToTop(deskGroup);
            game.world.bringToTop(textGroup);
            game.world.bringToTop(overlayGroup);
            
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
        else{
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
        else{
            buttonRightMechanic = 0;
        }
        
        //On enter key
        if(cursors.enter.isDown){
            buttonEnterMechanic = 1;
        }else if(buttonEnterMechanic == 1 && waitForNext){
            switch(buttonSelect){
                case 0:
                    this.nextButtonRun();
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
            // buttonSelect = -1;
        }
        else{
            buttonEnterMechanic = 0;
        }
        
        // form1.events.onInputOver.add(this.overBookOath, this);
        // form1.events.onInputOut.add(this.outForm, this);
        // form2.events.onInputOver.add(this.overStatement, this);
        // form2.events.onInputOut.add(this.outForm, this);
        // form3.events.onInputOver.add(this.overRegCert, this);
        // form3.events.onInputOut.add(this.outForm, this);
        // form4.events.onInputOver.add(this.overCorrCert, this);
        // form4.events.onInputOut.add(this.outForm, this);
        // form5.events.onInputOver.add(this.overOathCert, this);
        // form5.events.onInputOut.add(this.outForm, this);
        // form6.events.onInputOver.add(this.overLoE, this);
        // form6.events.onInputOut.add(this.outForm, this);
        nextButton.events.onInputOver.add(this.overNext, this);
        nextButton.events.onInputOut.add(this.outNext, this);
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
    
    nextButtonRun: function(){
        waitForNext = false;
        this.playText();
        
        if(lineIndex === arrayNum1){
            // alert('asdf');
            this.loadNextLine();
        }
        else if(lineIndex === arrayNum2){
            // alert('asdf');
            this.loadNextLine();
        }
        else if(lineIndex === arrayNum3){
            // alert('asdf');
            this.loadNextLine();
        }
        else if(currAspectRatio == 0){
            this.nextLine();
        }
        else if(currAspectRatio == 1){
            this.nextLine2();
        }
        else if(currAspectRatio == 2){
            this.nextLine3();
        }
    },
    
    overNext: function(){
        nextButtonTween.pause();
        nextButton.alpha = 1;
        buttonSelect = -1;
        overNext = true;
    },
    
    outNext: function(){
        nextButton.alpha = 0;
        nextButtonTween.resume();
        overNext = false;
    },
    
    playType: function(){
        music = game.add.audio('typeSound');
        music.loop = false;
        music.play();
    },
    
    playSelect: function(){
        music2 = game.add.audio('menuSelect');
        music2.loop = false;
        music2.play();
    },
    
    playText: function(){
        music3 = game.add.audio('typeSelect');
        music3.loop = false;
        music3.play();
    },
    
    // outForm: function(){
    //     title.text = "";
    // },
    
    // overLoE: function(){
    //     title.text = "List of Electors";
    // },
    
    // overStatement: function(){
    //     title.text = "Statement of the Vote";
    // },
    
    // overRegCert: function(){
    //     title.text = "Registration Certificate";
    // },
    
    // overCorrCert: function(){
    //     title.text = "Correction Certificate";
    // },
    
    // overOathCert: function(){
    //     title.text = "Oath of Residence Certificate";
    // },
    
    // overBookOath: function(){
    //     title.text = "Book of Oaths";
    // },
    
    // LoE: function(){
    //     game.state.start('LoE');
    // },
};