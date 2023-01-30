import { appState } from "../AppState.js";
import { CreatePlayerService } from "../Services/CreatePlayerService.js";
import { getFormData } from "../Utils/FormHandler.js";
// try to use intellisense as much as possible for these imports
// NOTE make sure .js is at the end of the file


// NOTE this is just the definition of your controller, you MUST go to app.js to create one for your app to use.
export class CreaturesController {
  drawCreatures() {
    // get creatures from appstate
    let players = appState.players
    console.log('drawing creatures', players);
    // create empty placeholder
    let names = ''
    // itterate over creatures and add their names to name place holder
    players.forEach(player => names += player.HTMLTemplate)
    // set all names to the dom
    document.getElementById('playerTag').innerHTML = names
  }

  // createCreature() {
  //   window.event.preventDefault() // fancy little magic, that keeps the form from refreshing the page.
  //   const form = window.event.target // target pulls the html where the even originated from
  //   console.log('Creating Creature', form);
  //   // create object to store data
  //   // form/what you input is named / value inputed by user
  //   // let creatureData = {
  //   //   name: form.name.value,
  //   //   level: form.level.value,
  //   //   health: form.health.value
  //   // }
  //   // NOTE old-school way above
  //   //NOTE the getFormData is imported from the utility file
  //   let creatureData = getFormData(form)
  //   creaturesService.createCreature(creatureData)
  //   console.log(creatureData);
  //   this.drawCreatures()
  // }


  // NOTE the constructor runs when the NEW keyword is used to create a controller (or on load)
  constructor() {
    console.log('contsructor ran');
    this.drawPlayers()
  }

}