
import { Resolver,Query } from "type-graphql";
import { hotels } from "./hotelOrm";

@Resolver()
export default class HotelResolver{
@Query(()=>[hotels])
async hotell() {
const output = await hotels.find();
return output;
}
}