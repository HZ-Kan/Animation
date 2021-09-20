const keys={
    'Escape':0,
    'F1':1,
    'F2':2,
    'F3':3,
    'F4':4,
    'F5':5,
    'F6':6,
    'F7':7,
    'F8':8,
    'F9':9,
    'F10':10,
    'F11':11,
    'F12':12,
    'Backquote':13,
    'Digit1':14,
    'Digit2':15,
    'Digit3':16,
    'Digit4':17,
    'Digit5':18,
    'Digit6':19,
    'Digit7':20,
    'Digit8':21,
    'Digit9':22,
    'Digit0':23,
    'Minus':24,
    'Equal':25,
    'Backspace':26,
    'Tab':27,
    'KeyQ':28,
    'KeyW':29,
    'KeyE':30,
    'KeyR':31,
    'KeyT':32,
    'KeyY':33,
    'KeyU':34,
    'KeyI':35,
    'KeyO':36,
    'KeyP':37,
    'BracketLeft':38,
    'BracketRight':39,
    'Backslash':40,
    'CapsLock':41,
    'KeyA':42,
    'KeyS':43,
    'KeyD':44,
    'KeyF':45,
    'KeyG':46,
    'KeyH':47,
    'KeyJ':48,
    'KeyK':49,
    'KeyL':50,
    'Semicolon':51,
    "Quote":52,
    'Enter':53,
    'ShiftLeft':54,
    'KeyZ':55,
    'KeyX':56,
    'KeyC':57,
    'KeyV':58,
    'KeyB':59,
    'KeyN':60,
    'KeyM':61,
    'Comma':62,
    'Period':63,
    'Slash':64,
    'ShiftRight':65,
    'ControlLeft':66,
    'MetaLeft':67,
    'AltLeft':68,
    'Space':69,
    'AltRight':70,
    'MetaRight':71,
    'ControlRight':73
}
const keyboard = $(`.keyboard`);

// const key =$( keyboard.children('ul')[1]).children('li')[1];
const key =keyboard.children('ul').children('li');

window.addEventListener('keydown',(e)=>{
    key[keys[e.code]].style.boxShadow = `0 0 4px blue`;
    
    if(e.code=='F5' || e.code=='Tab' || e.code=='F12' || e.code=='F11' || e.code=='F10' || e.code=='F7' || e.code=='F6' || e.code=='F3' || e.code=='F1' || e.code=='AltLeft' || e.code=='AltRight'){
        e.preventDefault();
    }
    
});
window.addEventListener('keyup',(e)=>{
    key[keys[e.code]].style.boxShadow = ` 0 -6px 10px rgb(255,255,255),0 4px 15px rgba(0,0,0,.3)`;
});
