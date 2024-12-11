const promise = new Promise((resolve, reject) => {
    let a = true
    if (a) {
        resolve("Fix the issue")
    } else {
        reject("Doesn't resolve the issue")
    }
})

promise.then((val) => {
    console.log(val);
    
})
.catch((err) => {
    console.log(err);
    
})
.finally(() => console.log("waiting")
)