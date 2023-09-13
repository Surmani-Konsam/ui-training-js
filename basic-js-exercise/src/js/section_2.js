//create players 11 in an array
const cricketPlayers = [
  "Sachin",
  "Dhoni",
  "Dravid",
  "Ganguly",
  "Virat",
  "Shikhar",
  "Pandiya",
  "Ganguly",
  "Rohit",
  "Yuvraj",
  "Irfan",
];

//1. checking the length of the array via expressive function;
function findNumberOfPlayers(players) {
  return players.length;
}

//2. first player got injured remove him from the list
function removePlayer(players) {
  for (let i = 1; i <= players.length; i++) {
    if (i === 1) {
      let playerRemoved = players.shift();
      //   console.log(
      //     `${playerRemoved} is removed from the list of players. Players remaining : ${players.length}`
      //   );
      //   console.log(`players are : ${players}`);
    }
  }
  return players;
}

//3. add another player
function playerRemovedThanAdded(cricketPlayerName) {
  let newCricketPlayers = removePlayer(cricketPlayers);
  //   console.log("length of arrived cricket players ", newCricketPlayers.length);
  newCricketPlayers.unshift(cricketPlayerName);
  //   console.log(
  //     `player added : ${cricketPlayerName} length of the team now : ${newCricketPlayers.length}`
  //   );
  return newCricketPlayers;
}

//4. sorted cricket players name
function sortedCricketPlayerName() {
  let sortedCricketPlayers = playerRemovedThanAdded("Siraj").sort();
  // console.log('players are : ',sortedCricketPlayers.sort());
  return sortedCricketPlayers;
}



/* 7. The cricket board wants to print the names of all players in uppercase and store it in a different
 location for printing jerseys. Do not modify the existing players list.*/
function cricketPlayersInUpperCase(cricketPlayers) {
  const uppercaseSortedPlayers = cricketPlayers.map((players) =>
    players.toUpperCase()
  );
  return uppercaseSortedPlayers;
}

console.log(cricketPlayersInUpperCase(sortedCricketPlayerName()));



//6. Display all the Players name and assign a random jersey number. For example. MS Dhoni-7

//To generate random jerseynumber
function myRandomJerseyNumber() {
    const arr = [];
    while (arr.length < 11) {
      let candidateInt = Math.floor(Math.random() * 11) + 1;
      //if the candidateInt is not found
      if (arr.indexOf(candidateInt) === -1) {
        arr.push(candidateInt);
      }
    }
    return arr;
  }

//return object of key value pairs. key being the player name the value being the random number assigned to them.
function returnObjectWithName(){
    const emptyObject = {}
    for(let i = 0;i<11;i++){
        emptyObject[`${sortedCricketPlayerName()[i]}`] = myRandomJerseyNumber()[i];
        
    }
    return emptyObject;
}

console.log(returnObjectWithName());