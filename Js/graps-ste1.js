const inff = document.querySelector('#info-ste');

let st = true;

function grapsSt() {
    let canvas = inff.offsetTop;
    let top = window.pageYOffset;


    if (top > canvas - 400) {
        st = false;
        const cv = document.createElement('script');

        const conteudo = `        
        var ctx = document.getElementById('grap-1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Homens', 'Mulheres'],
                datasets: [{

                    data: [54, 46],
                    backgroundColor: [
                        '#cdd3f3',
                        '#86888b',
                    ]
                }]
            },
            options: {
                aspectRatio: 1,
                title: {
                    display: true,
                    text: ['Homens e Mulheres'],
                    fontSize: 24,
                    fontColor: '#212529',
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontStyle: 'normal'
                },
                legend: {
                    position: 'bottom'
                },
                tooltips: {
                    backgroundColor: 'rgba(173, 169, 170)',
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuad'
                },
                plugins: {
                    labels: {
                        render: 'percentage',
                        fontColor: '#fff',
                        precision: 0,
                        fontSize: 18

                    }
                }
            }
        });
        var ctx = document.getElementById('grap-2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Pró-Impeachment', 'Contra o Impeachment'],
                datasets: [{

                    data: [51.3, 48.1],
                    backgroundColor: [
                        '#77B1D5',
                        '#FF9ABE'
                    ]
                }]
            },
            options: {
                aspectRatio: 1,
                title: {
                    display: true,
                    text: ['Ensino Superior'],
                    fontSize: 24,
                    fontColor: '#212529',
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontStyle: 'normal'
                },
                legend: {
                    position: 'bottom'
                },
                tooltips: {
                    backgroundColor: 'rgba(173, 169, 170)',
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuad'
                },
                plugins: {
                    labels: {
                        render: 'percentage',
                        fontColor: '#fff',
                        precision: 0,
                        fontSize: 18
                    }

                }
            }
        });
    `;
        cv.innerHTML = conteudo;
        inff.appendChild(cv);
    }
}

function validaSte() {
    if (st == true) {
        grapsSt();
    }
}

window.addEventListener('scroll', validaSte);