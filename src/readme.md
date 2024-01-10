Tic-Tac-Toe

Let's just go over the entire project,
You are able to play the game and 
As you play it updates the score on top as well as the current player
And once you are done, you can click on the reset button to reset the entire scoreboard

The game board is a 3x3 grid initially filled with empty cells.
It has two players, assigned symbols 'X' and 'O'
Start with the first player as 'X'.

1. Player Makes a Move:
When a player clicks on an empty cell, it marked the cell with the current player's symbol ('X' or 'O').

2. Check for a Win:
After each move, it checked if the current player has achieved a winning combination.
Winning combinations can be in rows, columns, or diagonals.

3. Switch Players:
After each move, switch to the next player. (ternary operator)

4. Game Over:
The game is over when a player wins.