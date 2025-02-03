const dbconnect = require('./mongodb');

const main = async ()=>{
const db = await dbconnect();
const result = await db.updateOne( {name: 'ibrahim'}, { $set: {name:'muhammad ibrahim'}});
console.log(result);

}
main()

