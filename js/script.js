const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;


function girar(){
  //if (giros < 3) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  /*}else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }
*/

function premio(premios){ 

  Swal.fire({
    title: "-Premio-\n"+premios,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false
  }).then((result)=>{
    if (result.value == true) {
      giros = 0;
       document.querySelector('.elije').innerHTML = 'Ultimo premio: '+ premios;
       document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
    }
  })

  document.querySelector('.elije').innerHTML = 'El ganador se lleva: ' + premios; 
} 

 function calcular(rand) {

  const valores = ['Cafe 1820', 'Una Coca Cola de 2L', 'Arrocera', 'Frijoles Tio Pelon', 'Unas Galletas de Chocolate' ];

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  const random = Math.floor(Math.random() * valores.length);


  setTimeout(() => {
    premio(valores[random]); }, 5000);

}
}