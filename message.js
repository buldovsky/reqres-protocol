
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {
        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

       
$(document).on('protocolMessageError', function(e, context, data, status, jqXHR){

    return [data.error]

    
}).on('protocolMessageSuccess', function(e, context, data, status, jqXHR){

    return [data.message]

    
}).on('protocolMessageNotice', function(e, context, data, status, jqXHR){

    return [data.notice]
    
})


}));
