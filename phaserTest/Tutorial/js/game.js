/* global
BootState, LoadState, MenuState, PlayState, WinState, DeskState, LoEState, IDState, IssueState, CheckState, statementState
*/

var Phaser;
var game = new Phaser.Game (800, 600, Phaser.CANVAS, 'gameDiv');

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

game.state.start('boot');