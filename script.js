const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();

    hr.style.transform = `rotateZ(${hh * 30 + (mm / 2)}deg)`;
    mn.style.transform = `rotateZ(${mm * 6 + (ss / 10)}deg)`;
    sc.style.transform = `rotateZ(${ss * 6}deg)`; 
   
    
    let hour = document.querySelector('#hour');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#ampm');

    if (hh > 12) {
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }

    let h = (hh < 10) ? "0" + hh : hh
    let m = (mm < 10) ? "0" + mm : mm
    let s = (ss < 10) ? "0" + ss : ss

    hour.innerHTML = h + ":";
    minutes.innerHTML = m + ":";
    seconds.innerHTML = s + "&nbsp;";
}, 1000);
