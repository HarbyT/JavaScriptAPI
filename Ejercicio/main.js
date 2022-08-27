console.log("Holi H")

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3";
//aprender que usar los query parameters and selectors para poder modular la información de las API


//La siguiente función carga de manera asincrónica la api, la transforma a json y en constantes de imágenes asigna la información
//En una nueva url lo carga en img 
async function reload() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    }

reload();
 