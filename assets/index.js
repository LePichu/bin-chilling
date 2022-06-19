fetch(`${window.location.href}/test.json`).then(x => {
    return x.json()
}).then(x => console.log(x))