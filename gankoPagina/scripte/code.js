let lasComidas  = document.querySelectorAll('.lasComidas');
let tituloPlatos= document.querySelectorAll('.tituloPlatos')

tituloPlatos.forEach((cadaTituloPlatos , i) =>{
    tituloPlatos[i].addEventListener('click' , ()=>{
        lasComidas.forEach((cadaLasComidas , i)=>{
            lasComidas[i].classList.remove('active');
        })
        lasComidas[i].classList.add('active');
    })
})