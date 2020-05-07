var
    natureModule    = document.getElementById('nature'),
    classModule     = document.getElementById('class'),
    calmModule      = document.getElementById('calm'),
    urbanModule     = document.getElementById('urban'),

    moduleArray     = [natureModule, classModule, calmModule, urbanModule],

    app             = document.getElementById('app'),

    body            = document.getElementsByTagName('body')[0],

    xButton         = document.getElementById('x-button-app'),

    screenCover     = document.getElementById('screen-cover')
;

for(i = 0; i < moduleArray.length; i++){

    moduleArray[i].addEventListener('click', function(){

        screenCover.classList.remove('hide-slow');
        screenCover.style.opacity = 0;
        screenCover.style.display = 'flex';
        setTimeout(function(){
            screenCover.style.opacity = 1;
            body.style.overflowY = 'hidden';
            screenCover.classList.add('show-slow');
        }, 10);


        app.classList.remove('hide-slow');
        app.style.opacity = 0;
        app.style.display = 'flex';
        setTimeout(function(){
            app.style.opacity = 1;
            app.classList.add('show-slow');
        }, 500);

    });

};



xButton.addEventListener('click', function(){

    setTimeout(function(){

        screenCover.classList.add('hide-slow');
        screenCover.classList.remove('show-slow');
        screenCover.style.opacity = 0;
        setTimeout(function(){
            body.style.overflowY = 'initial';
            screenCover.style.display = 'none';
        }, 500);

    }, 500);


    app.classList.add('hide-slow');
    app.classList.remove('show-slow');
    app.style.opacity = 0;
    setTimeout(function(){
        app.style.display = 'none';
    }, 750);
});