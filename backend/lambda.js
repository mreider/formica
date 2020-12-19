const functionsList = require("./functions.js");

exports.LamdaFunction = async (event) => {
    try {
        console.log("process.env.PORT: ", process.env.PORT);
        const props = JSON.parse(event.body);
        var response = await functionsList.controllerFunctions(props);
        return {
            statusCode: 200,
            body: JSON.stringify(
            response,
            null,
            2
            ),
        };        
    } catch (error) {
        console.error("error: ", error);
        return {
            statusCode: 500,
            body: JSON.stringify(
            error,
            null,
            2
            ),
        };
    }
}