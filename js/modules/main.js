const container = document.querySelector('#container-semillero');
import {semilleroCard} from '../modules/semilleroCard.js';
import {formatearFecha} from '../modules/formatofecha.js';
const facebook = document.querySelector('#facebook');
const instagram = document.querySelector('#instagram');
console.log(facebook);
console.log(container);
document.addEventListener('DOMContentLoaded', () => {
    let url = 'https://caidhu.herokuapp.com/semillero/user';
    fetch(url)
        .then(response => response.json())
        .then(data => colocarSemillero(data))
        .catch(err => console.log(err));
    
    const colocarSemillero = (data) => {
        data.forEach(semillero => {
            const {title,imageURL,description,fecha} = semillero;
            const newDate = fecha.split('T')[0];
            // ejemplo 5 de Agosto de 2022
            //console.log(newDate[2]);
            //console.log(formatearFecha(newDate[2],newDate[1],newDate[0]));
            semilleroCard(container,imageURL,newDate,title,description);
        });
    }
})


facebook.addEventListener('click',()=>{
    window.open('https://www.facebook.com/Caidhu','Caidhu Facebook');
})

instagram.addEventListener('click',()=>{
    window.open('https://www.instagram.com/caidhu2022/','Caidhu Instagram');
})



