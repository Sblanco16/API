const contenedor = document.querySelector(".contenedor_card")
const menu = document.querySelector(".form-select")

const datos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await res.json()
    let albumes = "";
    let nombre = "";
    for (let i = 0; i < 12; i++) {
      albumes += `<div class="card">
            <img src="${data[i].thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text text-center">${data[i].title}</p>
            </div>
          </div>`

      nombre += `<option value="${data[i].title}">${data[i].title}</option>`
    }
    contenedor.innerHTML = albumes;
    menu.innerHTML = ` <option selected>Todo</option> ${nombre}`;
  } catch (error) {
    console.log(error)
  }
}

datos();

const Seleccionar = () => {
  if(menu.value === "Todo"){
    datos();
  }else{
    datosuno(menu.value);
  }
}

const datosuno = async (titulo) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await res.json()
    let albumes = "";
    const datos_titulo = data.filter((albumsolo) => albumsolo.title === titulo);
    contenedor.innerHTML = `
    <div class="card">
        <img src="${datos_titulo[0].thumbnailUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text text-center">${datos_titulo[0].title}</p>
      </div>
  </div>`;
  } catch (error) {
    console.log(error)
  }
}

