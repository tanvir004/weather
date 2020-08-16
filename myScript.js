var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var lead = document.querySelector('.lead')
var icon = document.querySelector('.ico')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f2adf456f891e7a9617f32903727cf9f')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    // var disIcon = data['weather'][0]['icon'];
    var tempValue = data['main']['temp'];
    var celsius = tempValue-273.15;
    var celsiusRound = Math.round(celsius);
    var leadValue = data['weather'][0]['description'];
    document.querySelector('.name').innerHTML = nameValue;
    temp.innerHTML = celsiusRound;
    lead.innerHTML = leadValue;
    // icon.innerHTML = disIcon;
    console.log(data)
})
})
