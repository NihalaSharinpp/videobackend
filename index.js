

//import jsonserver
const jsonserver=require('json-server')

//create jsonsever

const server= jsonserver.create()

const router=jsonserver.router("db.json")


//create middle ware act as a parser

const middleware=jsonserver.defaults()

//  create port

const PORT=process.env.PORT ||4000

// middleware use in server
server.use(middleware)
server.use(router)

// to run server


server.listen(PORT,()=>{
    console.log("media player server started at port:"+PORT);
})
