function songDecoder(song){
  song = song.replace(/WUB/g, " ").trim().replace(/ +/g, " ");
  return song;
}
console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
