const hexs = [...document.getElementsByClassName("test")];
const users = [];

for (let i = 0; i < hexs.length; i++) {
    users.push({
        numUser: i + 1,
        id: Math.floor(Math.random()*100 + 1)
    })
}

users.forEach((user, i) => {
    hexs[i].innerText = `usuario: ${user.numUser}, id: ${user.id}`;
});
