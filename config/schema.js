import { serial, varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const CarListing  = pgTable('carListing',{
    id:serial('id').primaryKey,
    listingTitle:varchar("listingTitle").notNull,
    Tagline:varchar("tagline"),
    originalPrice:varchar("originalPrice"),
    sellingPrice:varchar("sellingPrice"),
    category:varchar("category"),
    condition:varchar("condition"),
    make:varchar("make"),
    model:varchar("model"),
    Year:varchar("Year"),
    driveType:varchar("driveType"),
    fuelType:varchar("fuelType"),
    mileage:varchar("mileage"),
    engineSize:varchar("engineSize"),
    Color:varchar("Color"),
    door:varchar("door"),
    vin:varchar("vin"),
    listingDescription:varchar("listingDescription"),

})