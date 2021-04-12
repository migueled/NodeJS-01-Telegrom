const user = 'root';
const pass = 'Showstooper01';
const host = 'cluster0.nwhy7.mongodb.net';
const database = 'telegrom';

const config = {
    dbUrl: process.env.DB_URL || `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.PUBLIC_ROUTE || 'files'
};

module.exports = config;