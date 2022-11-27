console.log("Starting node js script")

function getApiData(callback) {
    setTimeout(() => {
        callback(["Aviel", "Aviv", "Stacy"])
    }, 3000);
}
function getApiDataSync() {
    console.log(111)
}
getApiDataSync()
getApiData((usersArray) => {
    console.log(usersArray)
})

console.log("Finish node js script")



// function a() {
//     this  // function has this context
// }
// const b = () => {
//     this // no this inside arrow function using the upper scope
// }
