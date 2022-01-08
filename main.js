/*
const form1 = document.getElementById('form1')
const firstName = document.getElementById('firstName')
const phoneNumber = document.getElementById('phoneNumber')
const email = document.getElementById('email')
const donation = document.getElementById('donation')
const comment = document.getElementById('comment')
const errorElement = document.getElementById('error')

form.addEventListener ('submit', (e) => {
    e.preventDefault();

    validateInputs();

});

const setError = (element,message) => {
    const inputcontrol = element.parentalElement;
    const errorDisplay = inputcontrol.querySelect('error')

    errorDisplay.innerText = message;
    inputcontrol.classList.add('error')
    inputcontrol.classList.remove('success')
}

const setSuccess = element => {
    const inputcontrol = element.parentalElement;
    const errorDisplay = inputcontrol.querySelect('error')

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success')
    inputcontrol.classList.remove('error')
}


const validateInputs = () => {
    const firstName1Value = firstName1.ariaValueMax.trim();
    const email1Value = email1.ariaValueMax.trim();


    if(firstName1 === ''){
        setError(firstName1, 'PLEASE ENTER YOUR FULL NAME');
    } else{
        setSuccess(firstName1)
    }
};


document.link[0].onclick = function(e){
    e.preventdefault();
    let firstName = false;
    let email= false;

    if (firstName === false || email ===false){
        e.preventdefault();
    }
};


function Myfunction() {


    let x=document.getElementById("FirstName");

    window.alert(x.innerText);

    if(x.value=="") 
    {
        //Run this part if the condition is true
        //alert("The Full Name is empty");
        document.getElementById("Error").innerHTML="<font color=red>The First is Empty</font>";
    }
    else
    {
        //run this part if the condition is false
       // alert("The Full Name is OK");
        document.getElementById("Error").innerHTML="The First name is Ok";
    }
    
}
*/

let a = document.getElementById("FirstName");
let b = document.getElementById("email");
let c = document.getElementById("phoneNumber");
let d = document.getElementById("donation");
let e = document.getElementById("comment");





innerHtml.(a);






