const botones = {
    btnToCrearCuentaPage: './src/pages/crear-cuenta.html',
    btnIngresar: './src/pages/dashboard/inicio.html',
    btnCerrarSesion: '../../../index.html',
    iconToLoginPage: '../../../index.html',
    solicitarInforme: './informe-online.html',
    formInformeOnlineHacer: './informe-online-preview.html'
};

Object.entries(botones).forEach(([id, url]) => {
    const btn = document.querySelector(`#${id}`);
    if (btn) {
        btn.onclick = () => window.location.href = url;
    }
});

// Menu mobile
document.addEventListener("DOMContentLoaded", () => {
    const btnMenuMobile = document.querySelector('#btnMenuMobile');
    const menuSidebar = document.querySelector('#menuSidebar');

    if (btnMenuMobile && menuSidebar) {
        btnMenuMobile.addEventListener('click', () => {
            menuSidebar.classList.toggle('hidden');
        });
    }
});

// Icon volver
document.addEventListener("DOMContentLoaded", () => {
    const iconToPrevPage = document.querySelector('#iconToPrevPage');

    if (iconToPrevPage) {
        iconToPrevPage.addEventListener('click', () => {
            window.history.back();
        });
    }
});



/* GRAFICOS
doc: https://www.chartjs.org/docs/latest/charts/doughnut.html */

/*
const graficoInforme = document.getElementById('graficoInforme').getContext('2d');

const labels = ['Valor 1', 'Valor 2'];
const dataValues = [100, 200];
const colors = ['#4F8AFF', '#31c08d'];

new Chart(graficoInforme, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            data: dataValues,
            backgroundColor: colors,
            borderColor: 'transparent',
        }]
    }
});
*/

document.addEventListener("DOMContentLoaded", function () {

    /* graficoInformeCredito */
    const graficoInformeCredito = document.getElementById('graficoInformeCredito');
    if (graficoInformeCredito) {
        new Chart(graficoInformeCredito, {
            type: 'doughnut',
            data: {
                labels: ['Valor 1 $980.000', 'Valor 2 $1.120.000'],
                datasets: [{
                    data: [980000, 1120000],
                    backgroundColor: ['#4F8AFF', '#31c08d'],
                    borderColor: 'transparent',
                }]
            }
        });
    }

    /* graficoInformeFiltrarAprobar */
    const graficoInformeFiltrarAprobar = document.getElementById('graficoInformeFiltrarAprobar');
    if (graficoInformeFiltrarAprobar) {
        new Chart(graficoInformeFiltrarAprobar, {
            type: 'doughnut',
            data: {
                labels: ['Agosto', 'Septiembre', 'Octubre'],
                datasets: [{
                    data: [100, 100, 100],
                    backgroundColor: ['#4F8AFF', '#31c08d', '#2B649E'],
                    borderColor: 'transparent',
                }]
            }
        });
    }

});
