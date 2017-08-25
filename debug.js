/**
 * 
 * Прописываем протокол обработки Reqres JS форм (reqres-classes/form)
 * 
 */

(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {
        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {


$(document).on('protocolDebug', function(e, context, data, status, jqXHR){    

    alert(data.text)
    //alert(data.message + "\n\n" + data.file + ":" + data.line + "\n" + data.text) 
    console.log(arguments)

})


}));
