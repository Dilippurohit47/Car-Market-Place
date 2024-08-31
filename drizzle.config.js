/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url:"postgresql://car-market-place_owner:oOeP6jlfM2La@ep-frosty-bird-a5tpwdha.us-east-2.aws.neon.tech/car-market-place?sslmode=require",
    }
  };