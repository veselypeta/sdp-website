import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

let db: JsonDB;

export const getDB: () => JsonDB = () => {
    if (db) {
        return db;
    }
    db = new JsonDB(new Config('build/db/sdp-db', true, false, '/'));
    return db;
};
