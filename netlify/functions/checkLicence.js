exports.handler = async (event) => {
    const licences = [
        "78346293",
        "55464931",
        "98494543",
        "64564275",
        "57584461",
        "98654953",
        "55167212",
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
