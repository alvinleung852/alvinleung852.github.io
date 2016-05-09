/* global
game
*/

var LoadState = function(){};

LoadState.prototype = {
    preload: function(){
        var loadingLabel = game.add.text(80, 150, 'loading...', {font:'30px Courier', fill:'#ffffff'});
        
        game.load.image('player', 'assets/yellow.png');
        game.load.image('win', 'assets/grey.png');
        game.load.spritesheet('button', 'assets/button-start-spritesheet.png', 201, 71.67)
        game.load.spritesheet('PC', 'assets/images/PollWorkers/PC_spritesheet.png', 490, 487);
        game.load.spritesheet('CPS', 'assets/images/PollWorkers/CPS_spritesheet.png', 490, 487);
        game.load.spritesheet('DRO', 'assets/images/PollWorkers/DRO_spritesheet.png', 490, 487);
        game.load.spritesheet('IO', 'assets/images/PollWorkers/IO_spritesheet.png', 490, 487);
        game.load.spritesheet('RegO', 'assets/images/PollWorkers/RegO_spritesheet.png', 490, 487);
        game.load.image('regO', 'assets/images/regO3.png');
        game.load.audio('menuSelect', 'assets/sfx/menu-select.mp3');
        game.load.audio('menuError', 'assets/sfx/menu_error.wav');
        game.load.audio('arcadeSong', 'assets/sfx/arcade-loop.wav');
        // game.load.atlasJSONHash('bot', 'assets/images/running_bot.png', 'assets/images/running_bot.json');
        // game.load.spritesheet('mummy', 'assets/images/metalslug_mummy37x45.png', 37, 45, 18);
        // game.load.spritesheet('monster', 'assets/images/metalslug_monster39x40.png', 39, 40, 16);
        // game.load.spritesheet('explosion', 'assets/images/explosion.png', 64, 64, 25);
        game.load.spritesheet('regoIdle', 'assets/images/PollWorkers/sprites-regO.png', 144, 144, 5);
        game.load.spritesheet('regoSpawn', 'assets/images/PollWorkers/sprites-regO2.png', 144, 144, 5);
        game.load.spritesheet('pcIdle', 'assets/images/PollWorkers/sprites-pc.png', 144, 144, 5);
        game.load.spritesheet('pcSpawn', 'assets/images/PollWorkers/sprites-pc2.png', 144, 144, 5);
        game.load.spritesheet('droIdle', 'assets/images/PollWorkers/sprites-dro.png', 144, 144, 5);
        game.load.spritesheet('droSpawn', 'assets/images/PollWorkers/sprites-dro2.png', 144, 144, 5);
        game.load.spritesheet('cpsIdle', 'assets/images/PollWorkers/sprites-cps.png', 144, 144, 5);
        game.load.spritesheet('cpsSpawn', 'assets/images/PollWorkers/sprites-cps2.png', 144, 144, 5);
        game.load.spritesheet('ioIdle', 'assets/images/PollWorkers/sprites-io.png', 144, 144, 5);
        game.load.spritesheet('ioSpawn', 'assets/images/PollWorkers/sprites-io2.png', 144, 144, 5);
        game.load.image('RegOName', 'assets/images/PollWorkers/RegO_name.png');
        game.load.image('DROName', 'assets/images/PollWorkers/DRO_name.png');
        game.load.image('PCName', 'assets/images/PollWorkers/PC_name.png');
        game.load.image('CPSName', 'assets/images/PollWorkers/CPS_name.png');
        game.load.image('IOName', 'assets/images/PollWorkers/IO_name.png');
        game.load.image('background', 'assets/images/background.png');
        game.load.image('backgroundL', 'assets/images/background_light.png');
        
        game.load.image('desk', 'assets/images/Desk/desk.png');
        
        game.load.image('electorImg1', 'assets/images/Desk/elector1.png');
        game.load.image('electorImg2', 'assets/images/Desk/elector2.png');
        
        game.load.image('speechBubble1', 'assets/images/Desk/speechBubble1.png');
        game.load.image('speechBubble2', 'assets/images/Desk/speechBubble2.png');
        game.load.image('speechBubble3', 'assets/images/Desk/speechBubble3.png');
        game.load.image('speechBubble4', 'assets/images/Desk/speechBubble4.png');
        // game.load.image('form1', 'assets/images/Desk/form1.png');
        game.load.spritesheet('form1', 'assets/images/Desk/form3.png', 348, 490);
        game.load.spritesheet('form2', 'assets/images/Desk/form5.png', 496, 354);
        game.load.spritesheet('form6', 'assets/images/Desk/form6.png', 348, 490);
        game.load.spritesheet('nextButton', 'assets/images/Desk/nextButton.png', 92, 90);
        
        game.load.image('imgLoE', 'assets/images/Desk/LoE.png');
        game.load.image('imgStatement', 'assets/images/Desk/statementVote.png');
        game.load.image('LoELine', 'assets/images/Desk/blackLine.png');
        game.load.image('LoECheck', 'assets/images/Desk/LoECheck.png');
        game.load.image('formCircle', 'assets/images/Desk/formCircle.png');
        game.load.spritesheet('button1', 'assets/images/Desk/button1.png', 658, 500);
        game.load.spritesheet('button2', 'assets/images/Desk/button2.png', 658, 500);
        game.load.spritesheet('button3', 'assets/images/Desk/button3.png', 658, 500);
        
        game.load.image('ID1', 'assets/images/Desk/ID1.png');
        game.load.image('ID2', 'assets/images/Desk/ID2.png');
        game.load.image('ID3', 'assets/images/Desk/ID3.png');
        
        game.load.spritesheet('buttonYes', 'assets/images/Desk/buttonYes.png', 658, 500);
        game.load.spritesheet('buttonNo', 'assets/images/Desk/buttonNo.png', 658, 500);
        
        game.load.spritesheet('issue1', 'assets/images/Issue/issue1_spritesheet.png', 1000, 509);
        game.load.spritesheet('issue2', 'assets/images/Issue/issue2_spritesheet.png', 987, 410, 30);
        game.load.spritesheet('issue3', 'assets/images/Issue/issue3_spritesheet.png', 488, 469, 30);
        game.load.spritesheet('issue4', 'assets/images/Issue/issue4_spritesheet.png', 417, 512, 30);
        game.load.spritesheet('issue5', 'assets/images/Issue/issue5_spritesheet.png', 883, 529, 30);
        
        game.load.spritesheet('buttonNext', 'assets/images/Issue/buttonNext.png', 172, 281);
        game.load.spritesheet('buttonBack', 'assets/images/Issue/buttonBack.png', 172, 281);
        
        game.load.spritesheet('regO_pose1', 'assets/images/PollWorkers/RegO_Pose1_2.png', 494, 863, 6);
        game.load.spritesheet('regO_pose2', 'assets/images/PollWorkers/RegO_Pose2_1.png', 499, 891, 24);
        
        game.load.json('elector1', 'json/elector1.json');
        game.load.json('elector2', 'json/elector2.json');
    },
    
    create: function(){
        game.state.start('Menu');
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;
        // this.scale.setScreenSize(true);
    }
};