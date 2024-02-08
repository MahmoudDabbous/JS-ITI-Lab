fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
        displayUserData(data.users);
    })
    .catch(error => console.error('Error fetching user data:', error));

function displayUserData(users) {
    const userDataDiv = document.getElementById('data');

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <img src="${user.image}" alt="User Avatar" width="100">
            <p>Email: ${user.email}</p>
            <hr>
        `;
        userDataDiv.appendChild(userDiv);
    });
}