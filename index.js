'use strict';

const dbCofing = require('./dotenv');

db.connect({
    host: dbCofing.host,
    user: dbCofing.user,
    password: dbCofing.password,
    database: dbCofing.database,
    logging: dbCofing.logging 
});
