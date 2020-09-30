let cities = {
    Riga: 'Rīga'
}

var obj = {}
var weather = document.getElementById('weather')

fetch('http://127.0.0.1/api/inbox/')
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

    function callback(data){
        obj = data
        var out = `<p class="city">${cities[data.geoip.city] || data.geoip.city}</p><p class="temperture">${data.weather.currTemp}&#8451;</p><p class="windspeed">${data.weather.windSpeed}m/s</p><p class="wind">${data.weather.windDir}</p><p class="symbol">${data.weather.icoSymbol}</p>`
        weather.innerHTML = out
      
}  


var majasdObj = [
    {name: 'Ann', notes: [3, 5, 8]},
    {name: 'Jeanny', notes: [4, 6, 9]},
    {name: 'John', notes: [2, 7, 9]},
    {name: 'Max', notes: [1, 5, 9]},
  ]

  
     var out = ''
  out += `<h3>${majasdObj[0].name}</h3>`;
  out += `<ul>`;
  out += `<li>Note 1: ${majasdObj[0].notes[0]}</li>`;
  out += `<li>Note 2: ${majasdObj[0].notes[1]}</li>`;
  out += `<li>Note 3: ${majasdObj[0].notes[2]}</li>`;
  out += `</ul>`;
  out += `<h3>${majasdObj[1].name}</h3>`;
  out += `<ul>`;
  out += `<li>Note 1: ${majasdObj[1].notes[0]}</li>`;
  out += `<li>Note 2: ${majasdObj[1].notes[1]}</li>`;
  out += `<li>Note 3: ${majasdObj[1].notes[2]}</li>`;
  out += `</ul>`;
  out += `<h3>${majasdObj[2].name}</h3>`;
  out += `<ul>`;
  out += `<li>Note 1: ${majasdObj[2].notes[0]}</li>`;
  out += `<li>Note 2: ${majasdObj[2].notes[1]}</li>`;
  out += `<li>Note 3: ${majasdObj[2].notes[2]}</li>`;
  out += `</ul>`;
  out += `<h3>${majasdObj[3].name}</h3>`;
  out += `<ul>`;
  out += `<li>Note 1: ${majasdObj[3].notes[0]}</li>`;
  out += `<li>Note 2: ${majasdObj[3].notes[1]}</li>`;
  out += `<li>Note 3: ${majasdObj[3].notes[2]}</li>`;
  out += `</ul>`;

  document.getElementById('majasd').innerHTML = out