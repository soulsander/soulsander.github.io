exports.handler = async (event) => {
    const licences = [
        "783462953",
        "554649131",
        "984946543",
        "645674275",
        "575984461",
        "984654953",
        "565167212",
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
