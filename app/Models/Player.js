export class Player{
  constructor(name, points){
    this.name = name
    this.points = points
  }

  get HTMLTemplate() {

    return `<div id="playerTag">
            <div class="row">
              <div class="col-7">
                <div class="card">
                  <h1>${player.name}</h1>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <h1>${player.points}</h1>
                </div>
              </div>
            </div>
          </div>`
  }
}