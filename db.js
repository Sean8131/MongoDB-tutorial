import { MongoClient } from 'mongodb';

let dbConnection;
let uri = 'mongodb+srv://seanselbyy:xgK8OweGM3jdOLRm@bookstore.sd6nnba.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore'

export function connectToDb(cb) {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            });
    };

    export function getDb() {
        return dbConnection;
    }