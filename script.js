voltar();
let text = 'Trabalho de auditoria da Informação de Rander Gabriel Batista Teixeira';
const word = text.split("");
let quant = word.length;
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';



word.forEach((item, index) => {
    setTimeout(() => {
        document.querySelector('.apresentacao').innerHTML += item;

        quant--;

        if (quant == 0) {
            document.querySelector('.services').style.marginLeft = "0px";
            setInterval(() => {
                chama();
            }, 2000);

        }

    }, 100 * index);


})
function animeScroll() {
    const windowTop = window.pageYOffset + 600;
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);


        } else {
            element.classList.remove(animationClass);
        }


    })
}
function chama() {
    window.addEventListener('scroll', function () {
        animeScroll();
    })
}
function voltar(){
 document.querySelector("header").scrollIntoView();
}
