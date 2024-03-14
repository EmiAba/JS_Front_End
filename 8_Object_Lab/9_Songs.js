function solve(input) {
    class Song {
      constructor(name, time) {
        this.name = name;
        this.time = time;
      }
    }
  
    const collections = {}; // Collections of songs by type
    const allSongs = [];
  
    const numberOfSongs = parseInt(input.shift(), 10);
  
    for (let i = 0; i < numberOfSongs; i++) {
      const [typeList, name, time] = input.shift().split("_");
  
      if (!collections[typeList]) {
        collections[typeList] = [];
      }
  
      const song = new Song(name, time);
      collections[typeList].push(song);
      allSongs.push(song);
    }
  
    const typeList = input.shift();
  
    if (typeList === "all") {
      allSongs.forEach(song => console.log(song.name)); // Improved to print song names
    } else if (collections[typeList]) { // Check if the typeList exists before iterating
      collections[typeList].forEach(song => console.log(song.name));
    } else {
      console.log("No songs found for the given type list."); // Handle case where no songs match the given typeList
    }
  }
  
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
