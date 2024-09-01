import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
console.log(import.meta.env.VITE_DRIZZLE_DATABASE_URL)

const sql = neon("postgresql://car-market-place_owner:oOeP6jlfM2La@ep-frosty-bird-a5tpwdha.us-east-2.aws.neon.tech/car-market-place?sslmode=require");
export const db = drizzle(sql,(schema));

