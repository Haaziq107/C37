class Form {
  constructor() {
    this.title = createElement('h2')
    this.input= createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset=createButton('reset');
  }
  hide(){
    this.title.hide();
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    }
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWith/2,20);

    this.input.position(displayWidth/2-60,displayHeight/2-100);
    this.button.position(displayWidth/2-40,displayHeight/2-50);
    this.reset.position(displayWidth-100,30)

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70,displayHeight/4)
    });
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      Player.updateCarsAtEnd(0);
    })
  }
}
