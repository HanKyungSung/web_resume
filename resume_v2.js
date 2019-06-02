jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
    width:jQuery(this).attr('data-percent')
    },1500);
});

function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function moveToView(destination)
{
    var element = document.getElementById(destination);
    element.scrollIntoView();
}
