new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    controlArrows: false,
    sectionsColor: [ '#6C2EF2','#6E43F0','#6E56F0','#7663F2'],
    navigation: true,
    navigationTooltips: ['Home', 'Projects', 'Tools', 'Keep in Touch'],
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
