function peticion(objeto)
{

    var data = null;
    var xHttp = new XMLHttpRequest();
    var body = document.body;
    body.classList.add('precarga');
    
    xHttp.onreadystatechange = function () //Cambios del servidor
    {
        
        if ((this.readyState === 4) && (this.status === 200))
        {   
           try
           {
            data = JSON.parse(xHttp.responseText);
           
            objeto.respuesta(data);
            body.classList.remove('precarga');
           }catch (e)
           {
            console.log(this.responseText);
            console.log("Error");
          
           }
       }
    };
    //abrimos socket, cabecera y envio de datos.
    xHttp.open('POST', objeto.url, true);
    xHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xHttp.send(JSON.stringify(objeto.parametros));
}