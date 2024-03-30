function attachGradientEvents() {
    const gradientElement=document.getElementById('gradient');
        const resultElement=document.getElementById('result');


        gradientElement.addEventListener('mousemove', (event)=>{
                //console.log(`event`);

        const currentWidth=event.offsetX; //dstance from the start
        const elementWidth=event.target.clientWidth; //inside length of the element

        const progress=Math.floor((currentWidth / elementWidth)*100);

resultElement.textContent=`${progress}%`;



        })




}