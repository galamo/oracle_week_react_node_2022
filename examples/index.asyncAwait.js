
console.log("Starting node js script")
init();
init();

console.log("Finish node js script")

function getApiData(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userName) return reject("Missing user name")
            resolve(["Aviel", "Aviv", "Stacy"])
        }, 1000);
    })
}


async function init() {
    try {
        const result1 = await getApiData("Gal")
        console.log(result1)
        console.log("do something after response")
    } catch (error) {
        console.log("async operation failed")
    }
}

// Promise.all([getApiData("Gal"), getApiData("Gal")]).then(data => {
//     console.log(data)
// }).catch()