const user = '';
const pass = '';
const host = '';
const database = '';

const config = {
    dbUrl: process.env.DB_URL || `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.PUBLIC_ROUTE || 'files'
};

module.exports = config;