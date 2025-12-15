exports.handler = async function(event, context) {
    const licences = ["78423634", "12345678", "98765432"]; // Licences valides
    const id = event.queryStringParameters.id; // Actiona envoie ID machine

    if(licences.includes(id)){
        return {
            statusCode: 200,
            body: "OK"
        };
    } else {
        return {
            statusCode: 200,
            body: "KO"
        };
    }
};