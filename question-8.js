// Question #8: Fetching User List from Server

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const newUsers = users.map(user => user.name);
    console.log(newUsers);
  })
  .catch(error => console.error('Error fetching users:', error));

 
