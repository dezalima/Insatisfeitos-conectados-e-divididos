const inf = document.querySelector('#info-leticia');

let j = true;
function grapsLet() {
    let canvas = inf.offsetTop;
    let top = window.pageYOffset;


    if (top > canvas - 400) {
        j = false;
        const cv = document.createElement('script');

        const conteudo = `         var ctx = document.getElementById('leticia-grap1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Haddad', 'Bolsonaro'],
                datasets: [{
                    label: 'WHATSAPP',
                    data: [35, 60, 63],
                    backgroundColor: '#EC417D',
                    borderColor: '#FF045C',
                    borderWidth: 1,
                    categoryPercentage:  0.6,
                }]
            },
            options: {
                title: {
                    display: true,
                    text: ['PORCENTAGEM DE ELEITORES', 'QUE SÓ SE INFORMAM VIA WHATSAPP'],
                    fontSize: 24,
                    fontColor: '#868686',
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontStyle: 'normal'
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            offsetGridLines: true
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: 'rgba(173, 169, 170)',
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuad'
                }
            }

        });
        // var ctx = document.getElementById('leticia-grap2').getContext('2d');
        // var myChart = new Chart(ctx, {
        //     type: 'pie',
        //     data: {
        //         labels: ['Pró-Haddad', 'Pró-Bolsonaro', 'Grupos mistos'],
        //         datasets: [{

        //             data: [9.19, 13.6, 77.21],
        //             backgroundColor: [
        //                 '#FF045C',
        //                 '#0060D0',
        //                 '#868686'
        //             ]
        //         }]
        //     },
        //     options: {
        //         aspectRatio: 1,
        //         title: {
        //             display: true,
        //             text: ['QUANTIDADE DE GRUPOS', 'PARA CADA CANTIDATO'],
        //             fontSize: 24,
        //             fontColor: '#868686',
        //             fontFamily: "'Source Sans Pro', sans-serif",
        //             fontStyle: 'normal'
        //         },
        //         legend: {
        //             position: 'bottom'
        //         },
        //         tooltips: {
        //             backgroundColor: 'rgba(173, 169, 170)',
        //         },
        //         animation: {
        //             duration: 2000,
        //             easing: 'easeInOutQuad'
        //         },
        //         plugins: {
        //             labels: {
        //                 render: 'percentage',
        //                 fontColor: '#fff',
        //                 precision: 0,
        //                 fontSize: 16

        //             }
        //         }
        //     }
        // });
    `;
        cv.innerHTML = conteudo;
        inf.appendChild(cv);
    }
}

function validaLet() {
    if (j == true) {
        grapsLet();
    }
}

window.addEventListener('scroll', validaLet);