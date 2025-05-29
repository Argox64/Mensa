const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const { Client } = require('pg');
require('dotenv').config();

(async () => {
  const sql = readFileSync('./prisma/init_extfunc.sql', 'utf-8');
  const client = new Client({ connectionString: process.env.DATABASE_URL });

  try {
    await client.connect();
    console.log('✅ Connected to DB. Creating extensions...');

    console.log('🚀 Running Prisma migration...');
    execSync('npx prisma migrate dev', { stdio: 'inherit' });
    await client.query(sql);
    console.log('✅ FUNCTIONS AND INDEXES created.');
  } catch (err) {
    console.error('❌ Error during setup:', err);
  } finally {
    await client.end();
  }
})();