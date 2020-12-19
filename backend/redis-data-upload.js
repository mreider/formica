const redis = require("redis");
const { promisify } = require("util");
require('dotenv').config()

var emoji = require('emoji.json');

(async()=>{
    const client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    });
    client.on("error", (error) => {
        console.error("error: ", error);
    });

    console.log("length: ", emoji.length);
    for(let i=0; i<emoji.length; i++) {
        client.set(i, JSON.stringify(emoji[i]), redis.print);
    }
})();