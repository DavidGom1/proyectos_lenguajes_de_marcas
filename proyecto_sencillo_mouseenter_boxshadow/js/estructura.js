let num = 0;
let toogle = false;
const color_sombra = 'rgba(236, 0, 0, 0.5)';
const tiempo_animacion = 200;

window.onload = function (){
    document.querySelector("h1").style.color = "rgb(31, 32, 32)";
    console.log("Hola mundo");
    const div_contenedor = document.getElementById('contenedor');


    window.onclick = function (){
        num++;
        if(num == 5){
        document.querySelector("h1").style.color = "blue";
        }
        console.log("click " + num);
    }

    div_contenedor.addEventListener('mouseenter', function (){

            const animation = div_contenedor.animate([
                {boxShadow : `0 0 0 0 ${color_sombra}`},
                {boxShadow : `0 0 10px 10px ${color_sombra}`}
            ], {
                duration: tiempo_animacion,
                iterations: 1
                }
            );
            animation.onfinish = () => {
                div_contenedor.style.boxShadow = `0 0 10px 10px  ${color_sombra}`;
            }
        }
    );
div_contenedor.addEventListener('mouseleave', function (){
            const animation = div_contenedor.animate([
                {boxShadow : `0 0 10px 10px ${color_sombra}`},
                {boxShadow : `0 0 0 0 ${color_sombra}`}
            ], {
                duration: tiempo_animacion,
                iterations: 1
                }
            );
            animation.onfinish = () => {
                div_contenedor.style.boxShadow = `0 0 0 0  ${color_sombra}`;
            }
        }
    );
}