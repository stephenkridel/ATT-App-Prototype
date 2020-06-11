var playButton  = document.getElementById('play-button'),
    playIcon    = document.getElementsByClassName('big play icon')[0],
    pauseIcon   = document.getElementsByClassName('big pause icon')[0],
    xButton     = document.getElementById('x-button-app'),

    /*
    natureSound = new Howl({
        src: ['assets/nature.mp3']
    }),
    */

    natureSound = new Audio('assets/nature.mp3'),

    onOffTracker = 0
;

var 
    DisplayPlay = function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    },

    DisplayPause = function() {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
;

playButton.addEventListener('click', function(){

    if(onOffTracker === 0){

        natureSound.play();
        onOffTracker = 1;
        DisplayPause();

    } else if(onOffTracker === 1){

        natureSound.pause();
        onOffTracker = 0;
        DisplayPlay();

    };
    
});

xButton.addEventListener('click', function(){

    natureSound.load();
    onOffTracker = 0;
    displayPlay();

});
