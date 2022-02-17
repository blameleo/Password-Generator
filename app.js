
let textarea = document.getElementById("area1")
let textarea2 = document.getElementById("area2")
let textarea3 = document.getElementById("area3")
let textarea4 = document.getElementById("area4")

let passwordChar = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","?","£","$","%","^","&","*","@","#","_","+"]
//let charLength =  document.getElementById("charNumber").value
//document.getElementById("charNumber").value = charLength

function updateTextInput(val) {
    document.getElementById("charNumber").value = val;
}


function generate() {
    //document.getElementById("charNumber").value = document.getElementById("charRange").value
    let charLength =  document.getElementById("charNumber").value
    
    
    
    let password = ""
    let passwordTwo = ""
    let passwordThree = ""
    let passwordFour = ""
    for (let i = 0; i < charLength; i++) {
         let randomPasword = passwordChar[Math.floor(Math.random()*passwordChar.length)] 
         let randomPaswordtwo = passwordChar[Math.floor(Math.random()*passwordChar.length)]
         let randomPaswordthree = passwordChar[Math.floor(Math.random()*passwordChar.length)]
         let randomPaswordfour = passwordChar[Math.floor(Math.random()*passwordChar.length)]
        password += randomPasword
        passwordTwo += randomPaswordtwo
        passwordThree += randomPaswordthree
        passwordFour += randomPaswordfour
        textarea.textContent = password
        textarea2.textContent = passwordTwo
        textarea3.textContent = passwordThree
        textarea4.textContent = passwordFour
        
    }
   
    
}
 


