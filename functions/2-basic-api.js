const items=[{name:'susan'},{name:'anna'}];

exports.handler= async(event,context,cb)=>{
    return {
        statusCode:200,
        body:JSON.stringify(items)
    }
}