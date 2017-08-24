/**
 * 
 * Прописываем протокол обработки Reqres JS форм (reqres-classes/form)
 * 
 */
$(document).on('protocolDebug', function(e, context, data, status, jqXHR){    

    alert(data.text)
    //alert(data.message + "\n\n" + data.file + ":" + data.line + "\n" + data.text) 
    console.log(arguments)

})