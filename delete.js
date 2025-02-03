const dbconnect = require('./mongodb')

const main = async () =>{
    const db = await dbconnect();
    const data = await db.deleteOne({name: 'muhammad ibrahim'})
    console.log(data);
    
}
main()
