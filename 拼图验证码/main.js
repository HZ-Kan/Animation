let shouldMove =false;
const captcha = document.querySelector('#captcha');
const handle = document.querySelector('#handle');
const button = document.querySelector('#handle span');
const reset = document.querySelector('.reset');

button.addEventListener('mousedown',(e)=>{
    shouldMove =true;
});

window.addEventListener('mousemove',(e)=>{
    if(shouldMove){
        const offsetLeft = handle.getBoundingClientRect().left;
        const buttonWidth = button.getBoundingClientRect().width;
        captcha.style.setProperty('--moved',`${e.clientX - offsetLeft - buttonWidth / 2 }px`);
    }
});

window.addEventListener('mouseup',(e)=>{
    if(shouldMove){
        const finalOffset = e.clientX - handle.getBoundingClientRect().left;
        //判断滑块是否滑动到误差范围内
        if(finalOffset>=430&&finalOffset<=450){
            captcha.classList.add('passed');
        }else{
            //验证失败，则会返回到原点
            captcha.style.setProperty('--moved',`0px`);
        }
        shouldMove = false;
    }
});
reset.addEventListener('click',()=>{
    captcha.classList.remove('passed');
    captcha.style.setProperty('--moved','0px');
});