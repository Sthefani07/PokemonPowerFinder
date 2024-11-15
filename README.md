# Pokémon Finder ✨


![alt text](image.png)

Welcome to **Pokémon Finder**, a fun and interactive web application where users can find out which Pokémon matches their personality. Every time the user clicks the "Find Your Pokémon!" button, a random Pokémon appears along with its name, ability, and a special message, "This is the Pokémon that most resembles you!" The app is styled with a unique "mystical, sophisticated pink aesthetic," blending elegance with a touch of magic.

## Features

- **Random Pokémon Generator**: Every click on the button displays a different Pokémon, fetched randomly.
- **Pokémon Information**: See the Pokémon’s name, main ability, and an image.
- **Personalized Message**: A fun message accompanies each Pokémon, enhancing user interaction.

## Tech Stack

- **React**: JavaScript library for building the user interface.
- **PokéAPI**: A RESTful API that provides Pokémon data for each request.


## Setup
npm install
npm run dev

## Code Structure
API Call: The main function fetchData in API.js handles fetching a random Pokémon from the PokéAPI.
Components:
PokemonDisplay.js: Contains the logic and layout for displaying Pokémon data.
App.js: Renders the main application structure.
Usage
Click the "Find Your Pokémon!" button, and a random Pokémon will appear on the screen. The Pokémon’s name, primary ability, and image will be displayed, along with a message that reads, "This is the Pokémon that most resembles you!"



Acknowledgments
PokéAPI: For providing the Pokémon data.
React: For making the UI development intuitive and efficient.