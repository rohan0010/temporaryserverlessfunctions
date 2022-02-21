// domain/.netlify/functions/1-hello

// exports.handler=(event,context,cb)=>
// {
// cb(null,{statusCode:200,body:'Hello World!'})
// }
exports.handler=async(event,context)=>{
return{
    statusCode:200,
    body:'I am Rohan'
}
}