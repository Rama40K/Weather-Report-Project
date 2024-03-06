var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "bcdd7941212b946a7ee6c2e90962a759"
function convertion(val)
{
	return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=' +apik)
	.then(res => res.json())

	.then(data =>
	{
		var nameval = data['name']
		var descrip = data['weather']['0']['description']
		var tempature = data['main']['temp']
		var wndspeed = data['wind']['speed']


		city.innerHTML=`weather of <span>${nameval}<span>`
		temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
		description.innerHTML = `sky Conditions: <span>${descrip}<span>`
		wind.innerHTML = `wind speed: <span>${wndspeed} km/h<span>`
	})

	.catch(err => alert('You entered wrong city name'))

})