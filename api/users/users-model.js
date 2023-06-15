const uuidv4 = require("uuid");

const idGenerator = () => {
    return uuidv4.v4();
}

const allUsers = [];

const defaultUSers = [
    { id: idGenerator(), username: "Ali", password: "8754" },
    { id: idGenerator(), username: "Ayşe", password: "4516" },
    { id: idGenerator(), username: "Ahmet", password: "3542" },
    { id: idGenerator(), username: "Mehmet", password: "4578" },
    { id: idGenerator(), username: "Hakan", password: "5462" },
    { id: idGenerator(), username: "Haluk", password: "4542" },
    { id: idGenerator(), username: "Selçuk", password: "8255" },
]

allUsers.forEach(user => { allUsers.push(user) });

function getAllUsers() {
    return allUsers;
}

function insert(user) {
    user.id = idGenerator();
    allUsers.push(user);
    return user;
}

function findUser(user, password) {
    let existUser = allUsers.find((user) => {
        user.username == username && user.password == password
    })
    return existUser;
}

module.exports = {
    getAllUsers,
    insert,
    findUser
}