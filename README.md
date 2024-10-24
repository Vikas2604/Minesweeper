# Minesweeper Game

A simple web-based Minesweeper game built using HTML, CSS, and JavaScript. This project is a beginner-friendly implementation of the classic Minesweeper game, where the goal is to uncover all the cells on the grid that do not contain mines.

## Features

- 10x10 grid game board.
- 15 randomly placed bombs.
- Left-click to reveal a cell.
- If a bomb is clicked, the game is over.
- Reveal numbers that indicate how many adjacent cells contain bombs.
- Automatically reveal adjacent cells if a blank (0) is uncovered.
- "Reset Game" button to restart the game.
- Simple UI using HTML and CSS.

## How to Play

- The goal is to uncover all cells without clicking on a bomb.
- Numbers indicate how many bombs are adjacent to that cell.
- Click on a cell to reveal it:
  - If the cell contains a number, it shows how many bombs are nearby.
  - If the cell contains a bomb, the game is over.
  - If the cell is blank (no nearby bombs), adjacent cells are revealed automatically.
- Win the game by revealing all non-bomb cells.

## Demo

You can run the game locally by opening the `index.html` file in your browser or host it on a server.

## Installation

To run this Minesweeper game locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Vikas2604/minesweeper-game.git
2. Navigate to the project folder:
   ```bash
   cd minesweeper-game
3. Open index.html in your web browser to play the game.

## Project Structure
   ```bash
minesweeper-game/
│
├── index.html      # The main HTML file for the game
├── style.css       # The CSS file for styling the game
└── script.js       # The JavaScript logic for the game
```
## Technologies Used
1. HTML: For the game structure and layout.
2. CSS: For styling the game grid and cells.
3. JavaScript: For game logic, bomb placement, and user interaction.
