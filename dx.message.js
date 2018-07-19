

(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define([ "jquery", "devextreme", "jquery-protocol" ], factory );
    } else {
        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

    /**
     *
     * Прописываем реакцию на протоколы используя DevExtreme
     *
     */
    $(document).on('protocolFormSuccess', function(e, Form, data, status, jqXHR){

        DevExpress.ui.notify({
            message: data.message,                
            type:'success',
            width: 500,
            displayTime: 2000
        });            
        //return [Form, formresult]

    }).on('protocolFormError', function(e, Form, data, status, jqXHR){

        DevExpress.ui.notify({
            message:'Ошибка заполнения формы',                
            type:'error',
            width: 500,
            displayTime: 2000
        });            
        //return [Form, data]

    }).on('protocolMessageSuccess', function(e, context, data, status, jqXHR){

        DevExpress.ui.notify({
            message:data.message,
            type:'success',
            width: 500,
            displayTime: 2000
        });            
        //return [message]

    }).on('protocolMessageError', function(e, context, data, status, jqXHR){

        DevExpress.ui.notify({
            message: data.error,                
            type:'error',
            width: 500,
            displayTime: 2000
        });
        //return [error]

    }).on('protocolMessageNotice', function(e, context, data, status, jqXHR){

        DevExpress.ui.notify({
            message: data.notice,                
            type:'warning',
            width: 500,
            displayTime: 2000
        });            
        //return [notice]

    }).on('protocolMessageConfirm', function(e, context, data, status, jqXHR){

        /*
        // просим запрос на время остановиться и не отменять дефолтный обработчик
        jqXHR.wait(30)

            
        if(confirm(data.question)){

            if('headers' in jqXHR.requestOptions) jqXHR.requestOptions.headers = {}
            jqXHR.requestOptions.headers[data.header] = data.hash

            // выполянем запрос еще раз 
            $(jqXHR.requestOptions).done(function(){
                
	            // после выполнения подсовыаем результаты в предидущий обработчик, который у нас на паузе
                jqXHR.restore(arguments)
                
            })
            
            
        } else {
        
            // после выполнения подсовыаем результаты в предидущий обработчик, который у нас на паузе
            jqXHR.restore(arguments)
        
        }
		*/
        
    })


}));    
