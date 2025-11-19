
const fotoGrid = document.querySelector(".foto-grid")


function myCreateElement4(
    tagnName,
    classList = [],
    content = [],
    callback = false
) {
    // Creo l'elemento
    const el = document.createElement(tagnName);

    // Aggiungo le classi
    if (classList.length > 0) {
        el.classList.add(...classList);
    }

    // Esegui la callback passando l'elemento
    if (callback) {
        callback(el);
    }

    // Contenuto
    if (Array.isArray(content)) {
        for (let i = 0; i < content.length; i++) {
            el.appendChild(content[i]);
        }
    } else if (content instanceof HTMLElement) {
        el.appendChild(content);
    } else if (typeof content === "string") {
        el.innerHTML = content;
    } else {
        console.error("Non posso aggiungere l'elemento");
    }
    return el;
}

function createPhotoCards(fotoArray) {
    fotoArray.forEach((curFoto, indice) => {
        const card4 = myCreateElement4("div", ["card"], [
            // card-image con pin e foto
            myCreateElement4("div", ["card-image"], [
                myCreateElement4("img", ["pin"], [], (el) => {
                    el.src = "./img/pin.svg";
                    el.alt = "Pin";
                }),
                myCreateElement4("img", ["img-fluid"], [], (el) => {
                    el.src = curFoto.url;
                    el.alt = "Immagine foto";
                    // Aggiungo dataset direttamente alla creazione
                    el.dataset.id = indice;
                    el.dataset.url = curFoto.url;
                })
            ]),


            // card-title con il div e l' h2 dentro
            myCreateElement4("div", ["card-title"], [
                myCreateElement4("div", ["card-subtitle"], curFoto.date),
                myCreateElement4("h2", [], curFoto.title)
            ])
        ]);
        card4.dataset.url = curFoto.url
        // attacco ogni card al fotoGrid
        fotoGrid.appendChild(card4);
    });
}

//   const carte = document.querySelectorAll("card")
// console.log(carte);
const overlay = document.querySelector(".copritutto");
const fotoModale = document.querySelector(".foto-modale");
const btnChiudi = document.querySelector(".btn-chiudi");

btnChiudi.addEventListener("click", function () {
    overlay.classList.add("nascosto");
});
overlay.addEventListener("click", function () {
    overlay.classList.add("nascosto");
});
fotoModale.addEventListener("click", function () {
    event.stopPropagation();
});



axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function (resp) {
        const fotoArray = resp.data;
        createPhotoCards(fotoArray);
        const scorriFoto = document.querySelectorAll(".card");

        scorriFoto.forEach((foto) => {
            foto.addEventListener("click", function () {
                overlay.classList.remove("nascosto");
                fotoModale.innerHTML = `<img src="${this.dataset.url}" alt="Foto">`;
            });
        });
    })































//   const carte = document.querySelectorAll("card")
// console.log(carte);
// ...existing code...
// fotoGrid.addEventListener("click", function (event) {
// if (event.target.classList.contains("img-fluid")) {
//     divNascosto.classList.remove("nascosto");
//     fotoModale.innerHTML = `<img src="${event.target.src}">`;
// }
// });
// Versione prima di creare createmyelement4
//         // console.log(resp); debug
//         const fotoArray = resp.data
//         console.log(fotoArray);
//         let fotoStr = ""
//         fotoArray.forEach(curFoto => {
//             console.log(curFoto.url);
//             fotoStr += ` <div class="card flex justify-content-center">
//                 <div class="card-image">
//                     <img class="pin" src="./img/pin.svg" alt="Pin">
//                     <img src="${curFoto.url}">
//                 </div>
//                 <div class="card-title">
//                     <div class="data">${curFoto.date}</div>
//                 <h2 class="titolo">${curFoto.title}</h2>
//                 </div>
//             </div>`
//         // console.log(fotoStr); debug
//         fotoGrid.innerHTML = fotoStr
//     });
