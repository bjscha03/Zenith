const{neon}=require("@neondatabase/serverless");
const sql=neon("postgresql://neondb_owner:npg_PTrh89sHkjzd@ep-late-cake-aikuykk7-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require");
(async()=>{try{
await sql`CREATE TABLE IF NOT EXISTS contact_inquiries(id SERIAL PRIMARY KEY,first_name TEXT NOT NULL,last_name TEXT NOT NULL,email TEXT NOT NULL,role TEXT,message TEXT,created_at TIMESTAMPTZ DEFAULT NOW())`;console.log("t1");
await sql`CREATE TABLE IF NOT EXISTS schedule_calls(id SERIAL PRIMARY KEY,name TEXT NOT NULL,company_name TEXT,who_you_are TEXT,phone TEXT,email TEXT NOT NULL,company_size TEXT,created_at TIMESTAMPTZ DEFAULT NOW())`;console.log("t2");
await sql`CREATE TABLE IF NOT EXISTS brochure_requests(id SERIAL PRIMARY KEY,first_name TEXT NOT NULL,last_name TEXT NOT NULL,email TEXT NOT NULL,company TEXT,brochure_type TEXT,created_at TIMESTAMPTZ DEFAULT NOW())`;console.log("t3");
await sql`CREATE TABLE IF NOT EXISTS newsletter_subscribers(id SERIAL PRIMARY KEY,email TEXT NOT NULL UNIQUE,created_at TIMESTAMPTZ DEFAULT NOW())`;console.log("t4");
console.log("done")}catch(e){console.error(e);process.exit(1)}})();
