
const axios = require("axios")
async function testClient() {
    const { data } = await axios("http://localhost:3333");
    console.log(data.message)
}


// testClient()
async function testClinetPostRequest() {
    const { data } = await axios.post("http://localhost:3333/create", {
        fullName: "12222",
        email: "email@gmai.com"
    });
}

testClinetPostRequest()