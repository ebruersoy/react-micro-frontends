# react-micro-frontends

This project uses module federation as a micro front-end approach. 
There are two tabs:
- By Episodes: Shows Characters of Rick and Morty By episodes. Every 20 episodes are loaded lazily by scrolling. In each episode, every 6 Characters are shown by Load More button.
- By Location: Shows Residents of Rick and Morty By locations. Every 20 location are loaded lazily by scrolling. In each location, every 6 residents are shown by Load More button.

- [Rick and Morty API details](https://rickandmortyapi.com/documentation/#rest)

# how to start

In each project, run "npm start".

```shell
npm start
```

To open homepage: http://localhost:9000/

# modules
There are 6 modules in this project:
- home: For home page. Imports navbar. 
- NavBar: for navigation. Imports Episode and Location.
- Episode: for episode page. Imports CharactersPage and Api.
- Location: for location page. Imports CharactersPage and Api.
- Character: for character page. Imports Api.
- Api: for fetching API data.
