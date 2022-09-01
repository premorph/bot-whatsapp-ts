import 'dotenv/config'
import { MysqlConfig } from '~domain/config/mysql.config';
/**
 * Run
 */
export const Port = process.env.PORT;

/**
 * Database SQL/NoSql
 */
export const URI= process.env.DB_URI;

export const dbConfig: MysqlConfig={
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB,
}

/**
 * Facebook
 */
export const META_TOKEN =process.env.META_TOKEN;
export const META_ID_NUMBER =process.env.META_ID_NUMBER;

