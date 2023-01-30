import { Player } from "../Models/Player.js"

class CreatePlayerService{
  createPlayer(){
    let newPlayer = new Player(playerData.name, player.points)
    appState.players.push(newPlayer)
  }
}
