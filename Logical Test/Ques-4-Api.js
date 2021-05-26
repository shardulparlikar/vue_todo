



let url = 'www.example.com/api/get/1 '
fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
