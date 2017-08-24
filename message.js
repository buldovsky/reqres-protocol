       
$(document).on('protocolMessageError', function(e, context, data, status, jqXHR){

    return [data.error]

    
}).on('protocolMessageSuccess', function(e, context, data, status, jqXHR){

    return [data.message]

    
}).on('protocolMessageNotice', function(e, context, data, status, jqXHR){

    return [data.notice]
    
})
