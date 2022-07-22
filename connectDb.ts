import * as dotenv from "dotenv";
import { createConnection } from "typeorm"; 
import {hotels} from "./hotelOrm";

dotenv.config();

createConnection ({
url: process.env.DATABASE_URL,
entities: [hotels],
type: "postgres",
extra: {
    ssl: {
      rejectUnauthorized: false
    }
}
});