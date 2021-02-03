module.exports = {
    "development": {
        'DATABASE_URI': process.env.DATABASE_URI,
        'secret': '12345-67890-09876-54321',
        'session': 'IT254',
        'GOOGLE_MAPS_APIKEY': process.env.GOOGLE_MAPS_APIKEY,
        'GOOGLE_OAUTH2_CLIENT_ID': process.env.GOOGLE_OAUTH2_CLIENT_ID,
        'GOOGLE_OAUTH2_CLIENT_SECRET': process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
    },
    "test": {},
    "production": {
        'DATABASE_URI': process.env.DATABASE_URI,
        'secret': '12345-67890-09876-54321',
        'session': 'IT254',
        'GOOGLE_MAPS_APIKEY': process.env.GOOGLE_MAPS_APIKEY,
        'GOOGLE_OAUTH2_CLIENT_ID': process.env.GOOGLE_OAUTH2_CLIENT_ID,
        'GOOGLE_OAUTH2_CLIENT_SECRET': process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
    }
}