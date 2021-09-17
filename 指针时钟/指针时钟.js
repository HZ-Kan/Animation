var clock = document.querySelector('.clock');
var hour = document.querySelector('.hour');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
function loop(){
    var time = new Date();
    var rhour = time.getHours();
    var rmin = time.getMinutes();
    var rsec = time.getSeconds();
    var rmillisec = time.getMilliseconds();
    hour.style.transform = 'translateX(-50%) rotate('+(rhour*30+rmin*0.5)+'deg)';
    min.style.transform = 'translateX(-50%) rotate('+rmin*6+'deg)';
    sec.style.transform = 'translateX(-50%) rotate('+(rsec*6+rmillisec*0.006)+'deg)';
    rhour = rhour<10 ? '0'+rhour : rhour;
    rmin = rmin<10 ? '0'+rmin : rmin;
    rsec = rsec<10 ? '0'+rsec : rsec;
    clock.innerHTML = rhour+':'+rmin+":"+rsec;
}
setInterval(loop,10)
