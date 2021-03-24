const config = {
    PORT: 4000,
    DB_URI: 'mongodb://localhost/bikes',
    SALT_ROUNDS: 10,
    SECRET: 'SUPERSALTY',
    COOKIE_NAME: 'TOKEN',
};

module.exports = config;