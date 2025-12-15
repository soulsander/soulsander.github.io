exports.handler = async (event) => {
    const licences = [
        "1234",
        "5678",
        "9999"
    ];

    const id = event.queryStringParameters.id;

    if (licences.includes(id)) {
        return {
            statusCode: 200,
            body: "OK"
        };
    }

    return {
        statusCode: 200,
        body: "KO"
    };
};
