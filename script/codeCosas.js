const hacheDos = document.querySelectorAll('.hacheDos');
const pe = document.querySelectorAll('.pe');



//click en hacheDos y que pe tenga clase active 

hacheDos.forEach((cadaHacheDos , i)=>{
    hacheDos[i].addEventListener('click',()=>{
            pe.forEach((cadaPe,i)=>{
                pe[i].classList.remove('active');
            })
            pe[i].classList.add('active');
    })
})
