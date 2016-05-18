/* global
BootState, LoadState, MenuState, PlayState, WinState, DeskState, LoEState, IDState, IssueState, CheckState, statementState, introRegOState
*/

var Phaser;
// var innerWidth = window.innerWidth;
// var innerHeight = window.innerHeight;
// var gameRatio = innerWidth/innerHeight;
// var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'gameDiv');
var gameWidth = 800;
var gameHeight = 600;
var game = new Phaser.Game (gameWidth, gameHeight, Phaser.CANVAS, 'gameDiv');

game.state.add('boot', BootState);
game.state.add('Load', LoadState);
game.state.add('Menu', MenuState);
game.state.add('Play', PlayState);
game.state.add('Win', WinState);
game.state.add('ID', IDState);
game.state.add('Desk', DeskState);
game.state.add('LoE', LoEState);
game.state.add('Issue', IssueState);
game.state.add('Check', CheckState);
game.state.add('Statement', statementState);
game.state.add('intro-rego', introRegOState);

game.state.start('boot');