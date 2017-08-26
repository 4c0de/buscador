   
     
function recibir(param) {
     var body = document.body;
     var wrapper = document.querySelector('#texto');
     var encontrado=false;
     
     //removemos la clase de animacion
     body.classList.remove('precarga');
     
    //ocultamos los elementos
     ocultar();

        
    wrapper.innerHTML="";
    peticion(
            {
                url: 'php.php',
                parametros:
                        {
                            buscador: param
                        },
                respuesta: function (respuesta)
                {
                 
                   //recorremos los datos.
                    var contador=0;
                    for (var i = 0; i < respuesta.data.length; i++) {
                        var r=respuesta.data[i];
                      
                        if (r === param) {
                            contador++;
                            encontrado = true;
                           
                            
                        }
                    }
                    if (encontrado){
                             //mostramos los elementos que ocultamos anteriormente
                              mostrar();
                             wrapper.innerHTML =contador+" Registro/s encontrados de: "+param;
                             
                             
                    }else{
                        //mostramos los elementos que ocultamos anteriormente
                          mostrar();
                          wrapper.innerHTML =" No existe";
                    }
                    
                }
            }
    );

    function ocultar(){

         var oculta = document.querySelectorAll('.ocultar');
         for(var i=0, max=oculta.length; i<max; i++ ){
         oculta[i].style.display='none';
        }

    }
    function mostrar(){

         var muestra = document.querySelectorAll('.ocultar');
         for(var i=0, max=muestra.length; i<max; i++ ){
         muestra[i].style.display='inherit';
        }

    }

}





 