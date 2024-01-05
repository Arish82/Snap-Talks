const getsender = (userlogged, users) => {
    return userlogged._id===users[0]._id?users[1]:users[2];
}

export {getsender};