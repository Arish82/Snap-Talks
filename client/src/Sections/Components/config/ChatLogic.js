const getsender = (userlogged, users) => {
    // console.log(users, userlogged);
    // console.log(userlogged._id===users[0]._id?users[1]:users[0]);
    return userlogged && userlogged._id===users[0]._id?users[1]:users[0];
}

export {getsender};