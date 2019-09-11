'use strict';

const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const environments = {
        production: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                logging: false
        },
        development: {
                host: process.env.DEV_DB_HOST,
                user: process.env.DEV_DB_USER,
                password: process.env.DEV_DB_PASSWORD,
                database: process.env.DEV_DB_DATABASE,
                logging: console.log
        }
};

module.exports = environments[env];
