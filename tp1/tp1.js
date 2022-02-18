const demo = document.getElementById('demo')
const clickk = document.getElementById('clickk')
let tab = [];





let i = 0;
clickk.addEventListener('click', function () {
    //creer la division
    
    var par = document.createElement("div")
    par.setAttribute('id', `di_${i}`)


  
    par.innerHTML = `<div class="area1" id="area1" >
    <i class="fa fa-edit"   onclick="edit(${i})" style="font-size:42px;color:black"></i>
    <i class="fa fa-trash-o"  onclick="test(${i})" style="font-size:40px;color:black"></i>
    
</div>
<div class="area2" id="area2" >
    <textarea name="num1" id="area2_${i}" cols="45" rows="28"></textarea>
</div>`
i++
demo.appendChild(par)   

const area1 = document.getElementById('area1')
const area2 = document.getElementById('area2')
area1.addEventListener('dblclick', function () {
   
    
})






})  

function test(n) {
    document.getElementById('di_'+n).remove()
   
    
}

function edit(n) {
    let area2 = document.getElementById('area2_'+n)
    area2.toggleAttribute('disabled')
    area2.focus()
    console.log(area2)
    
}
 



