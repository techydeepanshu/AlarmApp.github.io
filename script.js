console.log("this is alarm app");

let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');
let setbtn = document.getElementById('setbtn');
let pasbtn = document.getElementById('pasbtn');
let time = document.getElementById('time');
hour.value = '00';
minutes.value = '00';
second.value = '00';
var audio = new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');

function ringNow() {
    audio.play();
}

function pauseNow() {
    audio.pause();
    time.innerHTML = "";

}

hour.addEventListener('blur', () => {
    console.log('hour activate');
    // const regh = /[0-1][0-2]{2}$/;
    const regh = /0[0-9]|1[0-2]/;
    // hour.addEventListener('click',()=>{hour.value='';})
    // hour.value='';
    let number = hour.value;
    if (regh.test(number)) {
        console.log("everything right");
        hour.classList.remove('is-invalid');
    } else {
        console.log("gonna wrong");
        hour.classList.add('is-invalid');
    }
})


minutes.addEventListener('blur', () => {
    console.log('minutes activate');
    // const regh = /[0-1][0-2]{0,1}/;
    // const regh = /[0-59]{2}$/;
    const regh = /[0-5]?[0-9]/;
    let number = minutes.value;
    if (regh.test(number)) {
        console.log("everything right");
        minutes.classList.remove('is-invalid');
    } else {
        console.log("gonna wrong");
        minutes.classList.add('is-invalid');
    }
})



second.addEventListener('blur', () => {
    console.log('second activate');
    // const regh = /[0-1][0-2]{0,1}/;
    const regh = /[0-59]{2}$/;

    let number = second.value;
    if (regh.test(number)) {
        console.log("everything right");
        second.classList.remove('is-invalid');
    } else {
        console.log("gonna wrong");
        second.classList.add('is-invalid');
    }
})

setbtn.addEventListener('click', (e) => {
    console.log(`hour : ${hour.value}  minutes : ${minutes.value}`);
    // totaltime = ((hour.value) * 60 * 60 * 1000) + ((minutes.value) * 60 * 1000);
    // console.log(totaltime);
    let a = new Date();
    // let newdate = Date(`${a.getFullYear()}-${a.getMonth()}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}:${a.getUTCSeconds()}`);
    let newdate = new Date(`${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${hour.value}:${minutes.value}:${second.value}`);
    console.log(newdate);

    timeToalarm = newdate - a;
    if (timeToalarm > 0) {


        console.log(timeToalarm);
        let vt = new Date(timeToalarm);
        // console.log(vt);

        let hor = Math.floor(timeToalarm / 3600000);
        let min = Math.floor(timeToalarm / 60000);
        let sec = ((timeToalarm % 60000) / 1000).toFixed(0);
        vt.setSeconds(sec);
        vt.setMinutes(min);
        vt.setHours(hor);
        console.log(min, sec);

        if (timeToalarm >= 0) {

            setTimeout(() => {
                console.log('alarm running');
                ringNow();
            }, timeToalarm);
        }

        let inter = setInterval(RemTime, 1000);
        function RemTime() {
            if (vt.getMinutes() != 0 || vt.getUTCSeconds() != 0) {
                console.log('Remtime function is running');

                // sec--;
                // if(sec==-1){
                //     sec=59;
                // }else{

                sec = vt.getUTCSeconds();
                vt.setSeconds(--sec);
                console.log(`second remain : ${vt.getUTCSeconds()}`);
                time.innerHTML = `${vt.getHours()}:${vt.getMinutes()}:${vt.getUTCSeconds()}`;
                // }
            } else {


                console.log('setInterval finished');
                clearInterval(inter);
                // time.innerHTML = `<img src='https://i.gifer.com/McRx.gif'/>`
                time.innerHTML = `<img src='https://i.pinimg.com/originals/ef/30/98/ef30980ca9bb487bfa3f5901145ee175.gif'/>`

            }
        }
    }else{
        time.innerHTML=`Please Enter Valid Time <img src="undraw_Playful_cat_re_bxiu.png" />`;
    }

})


pasbtn.addEventListener('click', pauseNow);
console.log(hour.value, minutes.value, second.value);
