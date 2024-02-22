new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    controlArrows: false,
    
    navigation: true,
    navigationTooltips: ['About Me', 'Projects', 'Tools', 'Keep in Touch'],
    slidesNavigation:true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#Menu',
    loopBottom: false,
    


});


function openMenu()
{
    document.getElementById('container').style.right='0%';
    document.getElementById('Menu').style.opacity='1';
};

function closeMenu()
{   document.getElementById('container').style.right='-100%';
    document.getElementById('Menu').style.opacity='0';
}
