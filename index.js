const MongoClient = require('mongodb').MongoClient

const url= `mongodb+srv://DataUser:DaemonDB@cluster0.iz83r.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(url, function(err, client) {

    if (err) {
        console.log(`it did not`)
    } else {
        console.log(`connection worked`)
    }

    const db = client.db(`sample_mflix`);
    const moviesCol = db.collection("movies")

    const result = moviesCol.find({}). toArray(function(err, docs) {

        //console.log(err)

        if (err) {
            console.log(`movies?`)
        } else {
            console.log(docs[23000])
        }
        client.close()

    })
    console.log(`I Wait for noone!`)
})