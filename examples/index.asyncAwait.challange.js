console.log("14")
init1();
init2();
console.log("1")
// 14 77 33 1 61 | 22
async function init1() {
    try {
        console.log("77")
        const result1 = await getApiData("Gal")
        console.log("61")
    } catch (error) {
        console.log("async operation failed")
    }
}
async function init2() {
    try {
        console.log("33")
        const result1 = await getApiData("Gal")
        console.log("22")
    } catch (error) {
        console.log("async operation failed")
    }
}
function getApiData(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userName) return reject("Missing user name")
            resolve(["Aviel", "Aviv", "Stacy"])
        }, 1000);
    })
}

// Promise.all([getApiData("Gal"), getApiData("Gal")]).then(data => {
//     console.log(data)
// }).catch()