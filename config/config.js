module.exports = {
    "development": {
        'DATABASE_URI': process.env.DATABASE_URI,
        'secret': '12345-67890-09876-54321',
        'session': 'IT254',
        'GOOGLE_MAPS_APIKEY': process.env.GOOGLE_MAPS_APIKEY,
    },
    "test": {},
    "production": {}
}