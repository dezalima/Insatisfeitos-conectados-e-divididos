const icons = document.querySelectorAll('[data-icons]');
const sessoes = document.querySelectorAll('[data-sessao]');
const f = document.querySelector('#footer')


function exibir() {
    let first = sessoes[0].offsetTop;
    let second = sessoes[1].offsetTop;
    let third = sessoes[2].offsetTop;
    let fourth = sessoes[3].offsetTop;
    let fifth = sessoes[4].offsetTop;
    let fim = f.offsetTop;

    let top = window.pageYOffset;

    // Primeiro
    if (top > first && top < second) {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'first') {
                element.classList.add('icons_border')
            } else {
                element.classList.remove('icons_border')
            }
        });
    } else {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'first') {
                element.classList.remove('icons_border')
            }
        });
    }
 // Segundo
    if (top > second && top < third) {
        icons.forEach(element => {
            let valor = element.dataset.icons;

            if (valor == 'second') {
                element.classList.add('icons_border')
            } else {
                element.classList.remove('icons_border')
            }
        });
    } else {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'second') {
                element.classList.remove('icons_border')
            }
        });
    }
 // Terceiro
    if (top > third && top < fourth) {
        icons.forEach(element => {
            let valor = element.dataset.icons;

            if (valor == 'third') {
                element.classList.add('icons_border')
            } else {
                element.classList.remove('icons_border')
            }
        });
    } else {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'third') {
                element.classList.remove('icons_border')
            }
        });
    }
  // Quarto
    if (top > fourth && top < fifth) {
        icons.forEach(element => {
            let valor = element.dataset.icons;

            if (valor == 'fourth') {
                element.classList.add('icons_border')
            } else {
                element.classList.remove('icons_border')
            }
        });
    } else {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'fourth') {
                element.classList.remove('icons_border')
            }
        });
    }
    // Quinto
    if (top > fifth && top < fim-600) {
        icons.forEach(element => {
            let valor = element.dataset.icons;

            if (valor == 'fifth') {
                element.classList.add('icons_border')
            } else {
                element.classList.remove('icons_border')
            }
        });
    } else {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'fifth') {
                element.classList.remove('icons_border')
            }
        });
    }
    // Sexto
    if (top > fim-600){
        icons.forEach(element => {
            let valor = element.dataset.icons;

            if (valor == 'sixth') {
                element.classList.add('icons_border')
            } else {
                element.classList.remove('icons_border')
            }
        });
    } else {
        icons.forEach(element => {
            let valor = element.dataset.icons;
            if (valor == 'sixth') {
                element.classList.remove('icons_border')
            }
        });
    }
}
window.addEventListener('scroll', exibir);

