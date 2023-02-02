export async function handler(event) {
    console.log(event);
    const response = {
        statusCode: 200,
        body: "hello",
    }
    return response
}

handler("bshad");
