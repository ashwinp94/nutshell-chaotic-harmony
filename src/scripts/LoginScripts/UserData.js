const Data = {
    getData() {
        return fetch(`http://localhost:8088/users`)
        .then(Response => Response.json())
    },
    postNewUser(newUser) {
        return fetch("http://localhost:8088/users", {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    },
}






export default Data