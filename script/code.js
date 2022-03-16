const grande = document.querySelector('.grande');
const boton  = document.querySelectorAll('.boton');

boton.forEach ( (cadaBoton , i) =>{
    boton[i].addEventListener ('click' , ()=>{
        let position = i;
        let operacion = i * (-100/14);

        grande.style.transform = `translateX( ${operacion}% )`;
        
        boton.forEach((cadaBoton , i) =>{
            boton[i].classList.remove('active');
        })
        boton[i].classList.add('active');
    })
})