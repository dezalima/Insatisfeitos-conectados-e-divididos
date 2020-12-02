const linha = document.querySelectorAll('.linha');
const title = document.querySelectorAll('[data-title]');
const s = document.querySelectorAll('[data-sessao]');


setTimeout(function(){ 
    const l = document.querySelectorAll('.linha1');
    const t = document.querySelector('.title-banner');
    
    l[0].classList.add('linha-total1')
    l[1].classList.add('linha-total1')
    t.classList.add('icons_opacity');
}, 1000);

function linhas() {
    let second = s[1].offsetTop;
    let third = s[2].offsetTop;
    let fourth = s[3].offsetTop;
    let fifth = s[4].offsetTop;
    let top = window.pageYOffset;
    const espaco = 1000;

    if (
        (top >= second-100 && top < second+espaco)|| 
        (top> third-100 && top < third+espaco) ||
        (top> fourth-100 && top < fourth+espaco) ||
        (top> fifth-100 && top < fifth+espaco)) {
        linha.forEach(element => {
            element.classList.add('linha-total');
        });

        title.forEach(titulo => {
            titulo.classList.add('icons_opacity');
        });
    }
    else {
        linha.forEach(element => {
            element.classList.remove('linha-total');
        });
        title.forEach(titulo => {
            titulo.classList.remove('icons_opacity');
        });
    }
}
window.addEventListener('scroll', linhas);
