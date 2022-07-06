let anchors = document.getElementsByClassName('anchor');
let indexPoints = document.getElementsByClassName('indexPoint');

window.addEventListener("scroll", function() {
    for (let i = anchors.length - 1; i >= 0; i--) {
        if (window.scrollY > (anchors[i].offsetTop - 10)) {
            console.log("You've scrolled past the div "+i);
            for (let j = indexPoints.length - 1; j >= 0; j--) {
                removeDot(j);
            }

            addDot(i);

            break;
        }
    }

    //if scrolled to bottom
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        for (let i = indexPoints.length - 1; i >= 0; i--) {
            removeDot(i);
        }

        addDot(indexPoints.length - 1);
    }

});

function removeDot(dot) {
    indexPoints[dot].classList.remove('active');
    indexPoints[dot].getElementsByClassName('dot-inner')[0].classList.add('hidden');
    indexPoints[dot].getElementsByClassName('dot')[0].classList.remove('activePoint');
    indexPoints[dot].getElementsByClassName('indexDesc')[0].classList.remove('selected');
}

function addDot(dot) {
    indexPoints[dot].classList.add('active');
    indexPoints[dot].getElementsByClassName('dot-inner')[0].classList.remove('hidden');
    indexPoints[dot].getElementsByClassName('dot')[0].classList.add('activePoint');
    indexPoints[dot].getElementsByClassName('indexDesc')[0].classList.add('selected');
}