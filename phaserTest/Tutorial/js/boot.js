/* global
game, Phaser, gameHeight, gameWidth
*/

var BootState = function(){};

BootState.prototype = {
    preload: function(){
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
    },
    
    create: function(){
        // if(game.device.desktop){
        //     alert('desktop')
        // }
        // this.scaleStage();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.state.start('Load');
        
    },
};

WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['VT323']
    }

};