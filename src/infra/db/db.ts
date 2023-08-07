import pgPromise from "pg-promise";
import * as dotenv from 'dotenv';
dotenv.config();

const pgp = pgPromise();
const db_user = process.env.DATABASE_USER;
const db_password = process.env.DATABASE_PASSWORD;
const db_database = process.env.DATABASE_DB;

export const db = pgp({
    user: db_user,
    password: db_password,
    host: 'localhost',
    port: 5433,
    database: db_database
});