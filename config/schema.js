import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  Tagline: varchar("tagline"),
  originalPrice: varchar("originalPrice"),
  sellingPrice: varchar("sellingPrice"),
  category: varchar("category"),
  condition: varchar("condition"),
  make: varchar("make"),
  model: varchar("model"),
  Year: varchar("Year"),
  driveType: varchar("driveType"),
  fuelType: varchar("fuelType"),
  mileage: varchar("mileage"),
  engineSize: varchar("engineSize"),
  Color: varchar("Color"),
  door: varchar("door"),
  vin: varchar("vin"),
  listingDescription: varchar("listingDescription"),
  features: json("features"),
  createdBy:varchar('createdBy').notNull(),
  postedOn:varchar('postedOn')
});

export const CarImages = pgTable("carImages",{
  id: serial("id").primaryKey(),
  imageUrl:varchar("imageUrl").notNull(),
  carListingId:integer("carListingId").notNull().references(()=>CarListing.id)
})