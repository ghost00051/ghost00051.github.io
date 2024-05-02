const images = document.querySelectorAll('.slider-obj');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].style.display = 'none';
    images[index].style.display = 'block';
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);


const button = document.getElementById("up");
const div = document.getElementById("sliderDiv");
const barNav = document.getElementsByTagName("BODY")[0];



button.addEventListener("click", function () {
    div.classList.toggle("up");
    barNav.classList.toggle("up")
});






const elements = [
    { id: 'element', listId: 'drop-down', imgId: 'side__img', path: '/new-page.html' },
    { id: 'company', listId: 'drop', imgId: 'img__second', path: '/new-page.html' },
    { id: 'catalog', listId: 'dropping', imgId: 'img__third', path: '/new-page.html' },
];

elements.forEach(({ id, listId, imgId, path }) => {
    const element = document.getElementById(id);
    const list = document.getElementById(listId);
    const img = document.getElementById(imgId);

    let timer;

    element.addEventListener('click', () => {
        list.classList.add('appear');
        img.classList.add('appear');

        clearTimeout(timer);
        timer = setTimeout(() => {
            list.classList.remove('appear');
            img.classList.remove('appear');
        }, 7000);
    });

    element.addEventListener('dblclick', (event) => {
        event.preventDefault();
        window.location.pathname = path;
    });
});





const stokis = [document.getElementById("god_first_stoks"), document.getElementById("second__stoks")]
const stokis2 = document.getElementById("first_stoks");
const marker2 = document.getElementById("marker-2");


let currentStoks = 0;

window.addEventListener('load', () => {
    const screenWidth = getComputedStyle(document.querySelector('head')).width;
    doSmthIfEqual(screenWidth);
})

window.addEventListener('resize', () => {
    const screenWidth = getComputedStyle(document.querySelector('head')).width;
    doSmthIfEqual(screenWidth);
});

function doSmthIfEqual(size) {
    if (size === '1920px') {
        setInterval(() => {
            stokis[currentStoks].classList.toggle('myclass');
            currentStoks = (currentStoks + 1) % stokis.length;
            stokis.forEach(div => div.classList.toggle('myclass', div == stokis[currentStoks]));
            marker2.classList.toggle('myclass')
        }, 5000);
    } else {
        setInterval(() => {
            stokis2.classList.toggle('myclass');
            marker2.classList.toggle('myclass');
        }, 5000);
    };
}



const burgerButton = document.getElementById("burger__button");
const panels = [
    document.getElementById("map__god"),
    document.getElementById("second__nav"),
    document.getElementById("navigation__bar"),
    document.getElementById("telefon"),
    document.getElementById("comunacation")
];

burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("x-ray");
    panels.forEach(panel => panel.classList.toggle("x-ray"));
});



