window.onload=function(){
    const itemBox=document.getElementsByClassName("item-box")[0];
    itemBox.addEventListener('click',boxAnimation,false);

    function boxAnimation(event){
        const rootSize=parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        const itemAtt=document.getElementById('item-att');
        const target=event&&event.target||boxAnimation.starTarget;
        if(target.tagName.toLowerCase()=='li'){
            boxAnimation.current=target;
            const parent=target.parentElement;
            const parentRect=parent.getBoundingClientRect();
            const Rect=target.getBoundingClientRect();
            boxAnimation.last&&(boxAnimation.last.style.color='#000');
            target.style.color='#fff';
            itemAtt.style.cssText=`
                width: ${Rect.width}px;
                height: ${Rect.height}px;
                left: ${(Rect.left-parentRect.left)}px;
            `
            boxAnimation.last=target;
        }
    }
    boxAnimation.starTarget=itemBox.children[0];
    boxAnimation();
    window.addEventListener('resize',debounce(function(e){
        boxAnimation.starTarget=boxAnimation.last;
        boxAnimation();
    },60))
    function debounce(callback,spaceTime){
        let timer=null;
        return function(...args){
            if(timer)clearTimeout(timer)
            timer =setTimeout(()=>{
                callback.apply(this,args);
            },spaceTime);
        }
    }
}