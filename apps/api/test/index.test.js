const { default: axios } = require("axios")
const { expect } = require("chai")




describe("Testing suite API", () => {
    it("Create Country", async () => {
        try {
            const { data } = await axios.post("http://localhost:4000/countries", {
                countryName: "Israel"
            })
            console.log(data)
            expect(data.data.countryName).to.be.equal("Israel")
        } catch (error) {
            throw new Error("Error with testing")
        }
    })
    it("Create Country Failed", async () => {
        try {
            const { data } = await axios.post("http://localhost:4000/countries", {
                countryName: 11
            })
            throw new Error("Error with testing")
        } catch (error) {
            expect(error.response.status).to.be.equal(500)
        }
    })
})