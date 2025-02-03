const dbconnect= require('./mongodb')

let main = async () =>{
 let data = await dbconnect();
 data = await data.find().toArray();
 console.log(data)
}
main()

