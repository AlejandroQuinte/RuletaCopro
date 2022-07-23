const ruleta = document.querySelector('#ruleta');

var girando = true;


giros = 0;

const valores = ['Cafe 1820', 'Una Coca Cola de 2L', 'Arrocera', 'Frijoles Tio Pelon', 'Unas Galletas de Chocolate'];

const column = document.querySelector('#columnaValue');
//column.className = 'text-primary';


for (let i = 0; i < valores.length; i++) {
  const tr = document.createElement("tr");
  tr.textContent = valores[i];
  tr.id = valores[i].replace(/ /g, "");
  //tr.className = 'text-primary';
  column.appendChild(tr);
}

ruleta.addEventListener('click', girar);

function girar() {
  //si esta girando no hace nada
  if (girando) {
    girando = false;

    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').textContent = 'TURNOS: ' + giros;

    function premio(premios) {

      Swal.fire({
        title: "-Premio-\n" + premios,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value == true) {
          girando = true;
          giros = 0;
          document.querySelector('.elije').textContent = 'Ultimo premio: ' + premios; 

        }
      }) 
    }

    function calcular(rand) {

      const valores = ['Cafe 1820', 'Una Coca Cola de 2L', 'Arrocera', 'Frijoles Tio Pelon', 'Unas Galletas de Chocolate'];

      valor = rand / 360;
      valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
      ruleta.style.transform = "rotate(" + rand + "deg)";

      const random = Math.floor(Math.random() * valores.length);


      setTimeout(() => {
        premio(valores[random]);

        //Una vez que salga el premio, se puede cambio el color de la letra
        var ganado = document.querySelector(`#${valores[random].replace(/ /g, "")}`);
        
        ganado.className = 'texto-ganado'; 

      }, 5000);

    }
  }


}