const Data = {
    getData() {
        return fetch(`http://localhost:8088/user`)
        .then(Response => Response.json())
    },
    postNewUser(newUser) {
        return fetch("http://localhost:8088/user", {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    },
}






export default Data