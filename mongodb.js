const {MongoClient} =require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)

 async function dbconnect() {
    const data = await client.connect()
    db = data.db('ecomerce');
    return db.collection('products');
}

module.exports = dbconnect;