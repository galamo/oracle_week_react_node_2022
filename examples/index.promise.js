console.log("Starting node js script")

function getApiData(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userName) return reject("Missing user name")
            resolve(["Aviel", "Aviv", "Stacy"])
        }, 3000);
    })
}

console.log(getApiData("userName"))


getApiData("Gal").then(resolveData).catch(rejectDataData)
getApiData().then(resolveData).catch(rejectDataData)

function resolveData(data) {
    console.log(data)
}
function rejectDataData(err) {
    console.log(err)
}
console.log("Finish node js script")
// Promise.all([getApiData("Gal"), getApiData("Gal")]).then(data => {
//     console.log(data)
// }).catch()