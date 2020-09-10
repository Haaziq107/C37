class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance


    });
  }

    static getPlayerInfo(){
      var playersRef=database.ref('players')
      playersRef.on("value",(data)=>{
        allPlayers=data.val();
        
      });
  }
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank=data.val();
    });
  }
  static updateCarsAtEnd(rankj){
    database.ref('/').update({
      CarsAtEnd:rank
    });
  }
}

  