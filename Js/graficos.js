const info = document.querySelector('#info-stephanie');

let i = true;
function graps() {
    let canvas = info.offsetTop;
    let top = window.pageYOffset;


    if (top > canvas - 400) {
        i = false;
        const cv = document.createElement('script');

        const conteudo = `  var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Mais de 35 anos', 'Raça/Cor branca',[["Remuneração mensal"], "acima de 5 salários minimos"], 'Manifestantes de direita', 'Muito Antipetistas', 'Sexo masculino'],
                datasets: [{
                    data: [78, 66, 54, 76, 88, 65],
                    backgroundColor: '#77B1D5',
                    borderColor: '#0060D0',
                    borderWidth: 1,
                    categoryPercentage:  0.6,
                }]
            },
            options: {
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
    `;
        cv.innerHTML = conteudo;
        info.appendChild(cv);
    }
}

function valida() {
    if (i == true) {
        graps();
    }
}
window.addEventListener('scroll', valida);