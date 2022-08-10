export const semilleroCard = (contenedor, imagen, fecha, titulo, descripcion) => {
    contenedor.innerHTML += `
    <div class="blog-col">
        <img src="${imagen}" alt="blog1" class="img-responsive" id="imagenId" style="width: 400px; height:259px;" />
        <span>${fecha}</span>
        <h3>${titulo}</h3>
        <a href="#">${descripcion}</a>
    </div>
    `
};