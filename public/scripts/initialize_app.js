var
    natureModule    = document.getElementById('nature'),
    classModule     = document.getElementById('class'),
    calmModule      = document.getElementById('calm'),
    urbanModule     = document.getElementById('urban'),

    moduleArray     = [natureModule, classModule, calmModule, urbanModule],

    app             = document.getElementById('app'),

    body            = document.getElementsByTagName('body')[0];

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

