var
    toggler     = document.getElementById('toggler'),
    menuScreen  = document.getElementById('MenuScreenDiv'),
    xButton     = document.getElementById('xButton')
;

// dims the page and shows the menu
toggler.addEventListener('click', function(){
    menuScreen.classList.remove('hide');
    menuScreen.style.display = 'flex';
    setTimeout(function(){
        menuScreen.style.opacity = '1';
        menuScreen.classList.add('show');
    }, 10);
});

// dims the menu and shows the page
xButton.addEventListener('click', function(){
    menuScreen.classList.add('hide');
    menuScreen.classList.remove('show');
    menuScreen.style.opacity = '0';
    setTimeout(function(){
        menuScreen.style.display = 'none';
    }, 300);
});

