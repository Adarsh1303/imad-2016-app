console.log('Loaded!');

var element = document.getElementById("image-madi");

var marginleft=0;

function moveRight()
{
    marginleft=marginleft + 1;
    element.style.marginLeft = marginleft + 'px';
}

element.onclick = function(){
    var interval = setInterval(moveRight,50);
}

