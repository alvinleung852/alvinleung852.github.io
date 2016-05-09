/* global
game, Phaser
*/

var BootState = function(){};

BootState.prototype = {
    create: function(){
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('Load');
        
    }
};