document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApiData);

function getText() {
  fetch('test.txt')
    .then(function(res) {
      console.log(res);
      return res.text();
    })
    .then(function(data) {
      document.getElementById('output').innerHTML = data;
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}

function getApiData() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}
