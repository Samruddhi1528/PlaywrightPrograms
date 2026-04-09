//Promise
getToken()
    .then(function (token){
        return getUser(token);
    })
    .then(function (user){
        return getUser(token);
    })