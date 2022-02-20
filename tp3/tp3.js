const copi = document.getElementById('copi')

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumbers = "123456789".split('');
const dataSymbols = "!§:/;.,?%*£$^+=}°)]@{[('~".split('')
 const uppercase = document.getElementById('uppercase')
 const lowercase = document.getElementById('lowercase')
 const numbers = document.getElementById('numbers')
 const symbols = document.getElementById('symbols')




function generateMdp() {

    const data = [].concat(
        uppercase.checked ? dataUppercase : [],
        lowercase.checked ? dataLowercase : [],
        numbers.checked ? dataNumbers : [],
        symbols.checked ? dataSymbols : []
    )

    let passwordLenght = parseInt(document.getElementById('longpassword').value)

    // console.log(passwordLenght)
    
    let newPassword = '';

    if(data.length === 0){
        copi.innerHTML = "yayyyy mbammm!!  veuillez selectionner un critere";
        return
    }

    for(let i = 0 ; i < passwordLenght ; i++){
        newPassword += data[Math.floor(Math.random() * data.length)];
    }


   


    copi.innerHTML = newPassword 

    var btn = document.createElement("div")
    btn.innerHTML = ` <div class="btncopie" id="btncopie">
    <button>copie</button>
    </div>`
    copi.appendChild(btn) 
    const btncopie = document.getElementById('btncopie')

    btncopie.addEventListener('click',function () {

        alert("un petit probleme pour gerer le copie coler")
        
        // copi.select();
        // document.execCommand('copy')
    })


}