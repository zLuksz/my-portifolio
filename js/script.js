function ativaLetra(eLemento) {
    const arrTexto = eLemento.innerHTML.split('');
    eLemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            eLemento.innerHTML += Letra;
        }, 75 * i);
    });
}
const titulo = document.querySelector('.digitando');
ativaLetra(titulo);


const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
})