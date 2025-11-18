
const fotoGrid = document.querySelector(".foto-grid")

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(function (resp) {
        // console.log(resp); debug
        const fotoArray = resp.data
        console.log(fotoArray);
        let fotoStr = ""
        fotoArray.forEach(curFoto => {
            console.log(curFoto.url);
            fotoStr += ` <div class="card flex justify-content-center align-items-center">
                <div class="card-image">

                    <img class="pin" src="./img/pin.svg" alt="Pin">
                    <img src="${curFoto.url}">
                </div>
                <div class="card-title">
                    <h2>Accusamus Beatae Ad Facilis Cum Similique Qui Sunt</h2>
                </div>
            </div>`

        })
        // console.log(fotoStr); debug



        fotoGrid.innerHTML = fotoStr
    });

