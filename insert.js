const dbconnected =require('./mongodb');

const insert = async ()=>{
 const db =await dbconnected()
const result = await db.insertOne(
{name: 'ismail',age: 20,gender: 'male',city: 'fsd',}
);

if(result.acknowledged) {
    console.log("this data will be inserted♥");
    
    
} else {
    console.log("this data will be not inserted because some issues");
    
}

}
insert();