const redis = require("redis");
const { promisify } = require("util");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const fibonacci = function (n) {
    console.log("fibonacci", n);
    if (n < 1) { return 0; }
    else if (n == 1 || n == 2) { return 1; }
    else if (n > 2) { return fibonacci(n - 1) + fibonacci(n - 2); }
};

// Memory Leak
const LeakingClass = function () {
}

const leakage = function (leaks, n) {
    console.log("leakage - function");
    for(var i=0; i < n; i++) {
        leaks.push(new LeakingClass());
    }
    console.log("leaks.length: ", leaks.length);
}

exports.controllerFunctions = async (body) => {
    console.log("body: ", body);
    const client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    });
    client.on("error", (error) => {
        console.error("error: ", error);
    });
    const getAsync = promisify(client.get).bind(client);
    let emoji = await getAsync(getRandomInt(100));
    console.log("emoji: ", emoji);
    // client.get("1", () => {});
    var leaks = [];
    leakage(leaks, body.leakage);
    var fiboResult = fibonacci(body.complexity);
    var response = {
        "message": "Here are the list of users ",
        "data": emoji
    };
    return response;
}