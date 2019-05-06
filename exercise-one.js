let song = ['hello darkness', 'my old friend', 'I have come to', 'talk to you again', 'because a vision'];
song.push('softly creeping');

console.log(song);

song.splice(2,1);

console.log(song);

let lyrics = song.join(', ');
console.log(lyrics);
