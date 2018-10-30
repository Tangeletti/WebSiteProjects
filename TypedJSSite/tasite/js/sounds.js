  // Audio files are royalty-free from http://www.soundjay.com/typewriter-sounds.html.
        var carriageReturnSound = new Howl({
            src: ['audio/return.mp3']
        });
        var keystrokeSound = new Howl({
            src: ['audio/key.mp3']
        });
       
       
function playSound (character) {
    carriageReturnSound.pause();
    keystrokeSound.pause();

    if (character == "\n") {
        carriageReturnSound.currentTime = 0;
        carriageReturnSound.play();
    } else if (character != " ") {
        keystrokeSound.currentTime = 0;
        keystrokeSound.play();
    }
}

$(function () {
    var typewriter = new Typewriter($("#typewriter"));
    typewriter.setCaret("");
    typewriter.setCaretPeriod(0);
    typewriter.setDelay(500, 100);
    typewriter.setCharacterCallback(playSound);
    animate(typewriter);
});

var poem = [
    "Do YOU need help with a website,\n"
     "Maybe you need some help with marketing?,\n"
     "Don't worry..,\n"
    <"You came to the right place..,\n"
];

function animate(typewriter) {
    sequence = [];

    for (var i in poem) {
        sequence.push({
            text: poem[i],
            delayAfter: 1500,
        });
    }

    typewriter.playSequence(sequence);
}