
const simulator = document.querySelector('.simulator');
const input = document.querySelector('#inputs')
const output = document.querySelector('#output')
const inputDivs = document.querySelectorAll('#inputs > div')
const outputDivs = document.querySelectorAll('#output > div')
const mibOuts = outputDivs[0].querySelectorAll('h1')
const mibIns = inputDivs[0].querySelectorAll('input')
const dsOuts = outputDivs[1].querySelectorAll('h1')
const dsIns = inputDivs[1].querySelectorAll('input')
const schOuts = outputDivs[2].querySelectorAll('h1')
const schIns = inputDivs[2].querySelectorAll('input')
const oOuts = outputDivs[3].querySelectorAll('h1')
const oIns = inputDivs[3].querySelectorAll('input')
const mibRes = mibOuts[0]
const mibInd = mibOuts[1]
const dsCap = dsOuts[0]
const schRes = schOuts[0]
const schCap = schOuts[1]
const oInd = oOuts[0]
const oRes = oOuts[1]
const calculates = simulator.querySelectorAll('button')
const mibC =calculates[2]
const dsC =calculates[3]
const schC =calculates[4]
const owC =calculates[5]
let ml2 = mibIns[0]
let mr2 = mibIns[1]
let mr3 = mibIns[2]
let mr4 = mibIns[3]
let dc2 = dsIns[0]
let dr3 = dsIns[1]
let dr4 = dsIns[2]
let sc2 = schIns[0]
let sc3 = schIns[1]
let sc4 = schIns[2]
let sr3 = schIns[3]
let sr4 = schIns[4]
let oc2 = oIns[0]
let oc4 = oIns[1]
let or2 = oIns[2]
let or3 = oIns[3]
function showDiv(index,divs) {
    divs.forEach((div, i) => {
      if (i === index) {
        div.classList.remove('hidden');
      } else {
        div.classList.add('hidden');
      }
    });
  }
const circuits = [
    {name:'Maxwell Inductance Bridge',
src:'/res/mib.jpg',},
{name:'De Sauty Bridge',
src:'/res/desauty.gif',},
{name:'Schering Bridge',
src:'res/schering.jpg',},
{name:'Owen Bridge',
src:'res/owens.jpg',}];
const circuitName = document.querySelector('.circuitName');
const circuitImage = document.querySelector('#circuitDiagram')

const scrollToSimulator = () => {
    simulator.scrollIntoView();
}

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let circuitIndex = 0;
circuitName.textContent=circuits[circuitIndex].name;
showDiv(circuitIndex,inputDivs)
showDiv(circuitIndex,outputDivs)
next.addEventListener('click' ,(e)=>{
    if(circuitIndex<circuits.length-1&&circuitIndex>=0){
        circuitIndex+=1;
    }
    else if(circuitIndex=circuits.length-1){
    circuitIndex=0;
    }
    circuitName.textContent=circuits[circuitIndex].name;
    circuitImage.src=circuits[circuitIndex].src;
    showDiv(circuitIndex,inputDivs)
    showDiv(circuitIndex,outputDivs)
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
    showDiv(circuitIndex,inputDivs)
    showDiv(circuitIndex,outputDivs)
})



let sr1 = (sr3*sc4)/sc2
let sc1 = (sr4/sr3)*sc2
let ol1 = or2*or3*oc4
let or1 = (oc4/oc2)*or3


mibC.addEventListener('click',(e)=>{
    let mr1 = (mr3.value*mr2.value)/mr4.value
    let ml1 = (mr3.value/mr4.value)*ml2.value
    mibRes.textContent='R1: '+ mr1
    mibInd.textContent='L1: ' + ml1
})
dsC.addEventListener('click',(e)=>{
    let dc1 = (dr4/dr3)*dc2
    dsCap = 'C1: ' + dc1 
})
schC.addEventListener('click',(e)=>{
    let sr1 = (sr3*sc4)/sc2
let sc1 = (sr4/sr3)*sc2
schRes='r1: '+sr1
    schCap = 'C1: ' + sc1 
})
owC.addEventListener('click',(e)=>{
    let ol1 = or2*or3*oc4
let or1 = (oc4/oc2)*or3
oInd = 'L1: ' + ol1
    oRes = 'R1: ' + or1
})
