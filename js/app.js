var Bingo = Bingo || {};

Bingo.gridBase = 7;
Bingo.gridHeight = 7;
Bingo.width = 700;
Bingo.height = 700;

Bingo.createGrid = function() {
  var body = document.getElementsByTagName('main')[0];
  var grid = document.createElement('ul');
  body.appendChild(grid);
  for (var i = 0; i < Bingo.gridBase*Bingo.gridHeight; i++) {
    var tile = document.createElement('li');
    grid.appendChild(tile);
    tile.style.width = (Bingo.width/Bingo.gridBase) + 'px';
    tile.style.height = (Bingo.height/Bingo.gridHeight) + 'px';
    grid.appendChild(tile);
  }
};

document.addEventListener('DOMContentLoaded', Bingo.createGrid.bind(Bingo));
