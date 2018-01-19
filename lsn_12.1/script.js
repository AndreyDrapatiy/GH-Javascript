var carousels = document.getElementsByClassName('carousel');
var currentWidth;

function detectItemWidth() {
    currentWidth = document.getElementsByClassName('carousel')[0].offsetWidth;
    return currentWidth;
}
function setImageWidth() {
    for (var image = document.getElementsByTagName('img'), j = 0, lj = image.length; j < lj; j++) {
        image[j].setAttribute('width', currentWidth + 'px');
    }
}

    detectItemWidth();
    setImageWidth();



[].forEach.call(carousels, function (c) {


    var next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        content = c.getElementsByClassName('content')[0],
        imgs = content.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = currentWidth;



    function switchImg () {
        content.style.left = -width * currentImageIndex + 'px';
    }



    next.addEventListener('click', function () {
        currentImageIndex++;

        if (currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    });

    prev.addEventListener('click', function () {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
    });

    switchImg();
});



function drag(thisElem) {
    event.stopPropagation();


    thisElem.addEventListener('mousedown', dragStart);

    function dragStart() {
        document.addEventListener('mousemove', mouseMove);  // Эта функция работает на событиях мыши
        document.addEventListener('mouseup', moveEnd);      // Завершение  общее
    }


    function mouseMove(e) {
        thisElem.style.marginLeft = Math.max(e.pageX, thisElem.parentNode.clientWidth - thisElem.clientWidth) + 'px';
    }


    function moveEnd(e) {
        document.onmousemove = thisElem.onmouseup = null;
        document.removeEventListener('mousemove', mouseMove);
    }
}




