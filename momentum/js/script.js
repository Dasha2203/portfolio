const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')
const imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const quotesText = document.querySelector('.quotes-text');
const quotesAuthor = document.querySelector('.quotes-author')
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`)
// .then(answer=>answer.json())
// .then(json=>console.log(json))
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  }
  getWeather()

fetch('https://type.fit/api/quotes')
.then(answer=>answer.json())
.then(json => {
    quotes = json[Math.floor(Math.random()*json.length)];
    quotesText.textContent = quotes.text;
    quotesAuthor.textContent = quotes.author;
    console.log(json[Math.floor(Math.random()*json.length)])
})

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`
    setTimeout(showTime,1000)
}

function chooseImage(src) {
    return `url('../momentum/img/${src}/${imgs[Math.floor(Math.random()*imgs.length)]}')`
}

function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        //document.body.style.backgroundImage = chooseImage();
        document.body.style.backgroundImage =chooseImage('morning')
        setInterval(()=>document.body.style.backgroundImage =chooseImage('morning'),300000)
        greeting.textContent = 'Good Morning, '
    } else if (hour < 18) {
        document.body.style.backgroundImage =chooseImage('afternoon')
        setInterval(()=>document.body.style.backgroundImage =chooseImage('afternoon'),10000)
        greeting.textContent = 'Good Afternoon, '
    } else {
        document.body.style.backgroundImage =chooseImage('night')
        setInterval(()=>document.body.style.backgroundImage =chooseImage('night'),300000)
        greeting.textContent = 'Good Night, '
    }
}

function addZero(n) {
    return (parseInt(n,10)<10?'0':'') + n;
}

function getName() {
    if(localStorage.getItem('name')===null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name',e.target.innerText)
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus',e.target.innerText)
    }
}

// Get focus

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)

focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)
setBgGreet();
showTime();
getName();
getFocus();