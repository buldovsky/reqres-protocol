
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {
        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

$(document).on('protocolFormError', function(e, Form, data, status, jqXHR){ 
    
    // отображаем ошибки формы
    Form.errors(data.errors)

    return [Form, data]
    
}).on('protocolFormSuccess', function(e, Form, data, status, jqXHR){ 

    // убираем все ошибки
    Form.errors(false)
    
    return [Form, data]

})

}));
