const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

console.log(images);

//variabili
const carosello = document.getElementById('carosel');
console.log(carosello);
const title = document.getElementById('title');
console.log(title);
const description = document.getElementById('description');
console.log(description);

//carosel 

for (i = 0; i < images.length; i++){
    const imgCarosel = document.createElement('img');
    imgCarosel.src = `${images[i].url}`;
    imgCarosel.classList.add('carosel-img');
    
    if(i === 0) {
        imgCarosel.classList.add('active');
    }

    carosello.append(imgCarosel);
}


let immagineCorrente = 0;
//carosello immagini
const immagineCarosello = document.querySelectorAll('.carosel-img');
//bottoni
const successiva = document.getElementById('up-button');
const precedente = document.getElementById('down-button');


function next() {
    immagineCarosello[immagineCorrente].classList.remove('active');
    immagineCorrente++;

    if (immagineCorrente === images.length) {
    immagineCorrente = 0;
    }

    immagineCarosello[immagineCorrente].classList.add('active');
    
    
}


function previous() {
    immagineCarosello[immagineCorrente].classList.remove('active');
    

    if (immagineCorrente === 0) {
    immagineCorrente = images.length;
    }

    immagineCorrente--;

    immagineCarosello[immagineCorrente].classList.add('active');
    
    
}


//evento click sul bottone succesivo
successiva.addEventListener('click', function () {
    next();
});
//evento click sul bottone precedente
precedente.addEventListener('click', function () {
    previous();
});

//intervallo che mi cambia le immiagini ogni 3 s
const automatico = setInterval(next, 3000);