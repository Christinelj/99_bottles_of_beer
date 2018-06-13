function printSong() {
    var entireLyrics = '';
    var nintyNineToThreeBottleLyrics = '';
    var twoAndNoBottleLyrics =  "2 bottles of beer on the wall, 2 bottles of beer.\n"+
    "Take one down and pass it around, 1 bottle of beer on the wall.\n"+
    '1 bottle of beer on the wall, 1 bottle of beer.\n' + 
    'Take one down and pass it around, no more bottles of beer on the wall.\n'+ 
    'No more bottles of beer on the wall, no more bottles of beer.\n'+
    'Go to the store and buy some more, 99 bottles of beer on the wall.'
    for (var i = 99; i > 2; i--) {
        nintyNineToThreeBottleLyrics += (i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\n'
            + 'Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.\n')
    }
    entireLyrics = nintyNineToThreeBottleLyrics + twoAndNoBottleLyrics;

    return entireLyrics;
}

module.exports = printSong;