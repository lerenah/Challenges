document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  // Spinners
  xhr.onprogress = function() {
    console.log('READY STATE', xhr.readyState);
  };

  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
      console.log(this.responseText);
    }
  };

  xhr.onerror = function() {
    console.log('Request error...');
  };
  // xhr.onreadystatechange = function() {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };
  xhr.send();
}
