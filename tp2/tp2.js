const demo = document.getElementById('demo')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const gauche = document.getElementById('gauche')
const droite = document.getElementById('droite')
const a = document.querySelectorAll('a')
var tab = [
    'mon premier',
    'mon deuxieme',
    'mon troisieme',
    'mon quatrieme',
]



for(let i = 0;i<a.length;i++)
{
    a[i].addEventListener('click', function () {
        a[i].classList.toggle('active')
        // a[i].setAttribute('class','active')


        //  btn1.addEventListener('click',function () {
        //      console.dir(a[i])
        //     droite.appendChild(a[i])   
        // })

        // btn2.addEventListener('click',function () {
        //     console.dir(a[i])
        //     gauche.appendChild(a[i])   
        // })


        
    })
}


 btn1.addEventListener('click',function () {
            const a_gauche = gauche.querySelectorAll('a')
            a_gauche.forEach(function(a) {
                if(a.className=='active'){
                    a.className = ""
                    droite.appendChild(a)
                }
            })
        })


        btn2.addEventListener('click',function () {
            const a_droite = droite.querySelectorAll('a')
            a_droite.forEach(function(a) {
                if(a.className=='active'){
                    a.className = ""
                    gauche.appendChild(a)
                }
            })
        })