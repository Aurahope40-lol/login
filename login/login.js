const circleContainer=document.getElementById('circleContainer');
const numBars=50;
let activeBars=0;

for (let i=0;i<numBars;i++){
    const bar =document.createElement('div');
    bar.className='bar';
    bar.style.transform=
    'rotate(${(360 / numbers) * i}deg) translateY(-100px)';
circleContainer.appendChild(bar);
}
function animateBars(){
    const bars=document.querySelectorAll(".bar");
    setInterval(() =>{
        bars[activeBars % numbers].classList.add("active");

        if(activeBars>= numbers){
            bars[(activeBars-numbers)%
                numbers].classList.remove("active");
        }
        activeBars++;
    },100);
}
animateBars();

const tooglePassword=document.getElementById('tooglePassword');
const passwordInput=document.getElementById('password');

tooglePassword.addEventListener('click',function(){
    const type=passwordInput.getAttribute('type')==='password'?'text':'password';
passwordInput.setAttribute('type',type);
this.textContent=type==='password'?'':'';
document.getElementById('LoginForm').addEventListener('submit',function(s){
e.preventDefault();
alert('Login functionality would be implemented here!');
});
});