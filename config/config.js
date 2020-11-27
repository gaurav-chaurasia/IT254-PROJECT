module.exports = {
    "development": {
        'DATABASE_URI': "mongodb+srv://gkc:gkc@atlas@complete-backend.yxayo.mongodb.net/IT254?retryWrites=true&w=majority",
        'secret': '12345-67890-09876-54321',
        'session': 'IT254',
        'GOOGLE_MAPS_APIKEY': process.env.GOOGLE_MAPS_APIKEY,
    },
    "test": {},
    "production": {}
}