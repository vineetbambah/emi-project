
const simulator = document.querySelector('.simulator');
const circuits = [
    {name:'Maxwell Inductance Bridge',
src:'/res/mib.jpg'},
{name:'De Sauty Bridge',
src:'/res/logo.png'},
{name:'Schering Bridge',
src:'res/schering.jpg'},
{name:'Hay Bridge',
src:'res/hays.jpg'},
{name:'Owen Bridge',
src:'res/owens.jpg'}];
const circuitName = document.querySelector('.circuitName');
const circuitImage = document.querySelector('#circuitDiagram')

const scrollToSimulator = () => {
    simulator.scrollIntoView();
}

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let circuitIndex = 0;
circuitName.textContent=circuits[circuitIndex].name;
next.addEventListener('click' ,(e)=>{
    if(circuitIndex<circuits.length-1&&circuitIndex>=0){
        circuitIndex+=1;
    }
    else if(circuitIndex=circuits.length-1){
    circuitIndex=0;
    }
    circuitName.textContent=circuits[circuitIndex].name;
    circuitImage.src=circuits[circuitIndex].src;
})
previous.addEventListener('click' ,(e)=>{
    if(circuitIndex>0&&circuitIndex<=circuits.length-1){
        circuitIndex -=1;
    }
    else if(circuitIndex==0){
    circuitIndex=circuits.length-1;
    }
    circuitName.textContent=circuits[circuitIndex].name;
    circuitImage.src=circuits[circuitIndex].src;
})

const input = document.querySelector("#inputs")
const output = document.querySelector('#output')