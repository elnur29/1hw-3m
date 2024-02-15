
const linkInput = document.getElementById('linkInput')
const emailInput = document.getElementById('emailInput')

linkInput.addEventListener('input',function(){
    if (isLinkValid(linkInput.value)){
        linkInput.classList.add('green')
        linkInput.classList.remove('red')
    } else{
        linkInput.classList.add('red')
        linkInput.classList.remove('green')
    }
})

emailInput.addEventListener('input',function(){
    if (isEmailValid(emailInput.value)){
        emailInput.classList.add('green')
        emailInput.classList.remove('red')
    } else {
        emailInput.classList.add('red')
        emailInput.classList.remove('green')
    }
})

function isLinkValid(link){
    const pattern =/^(http|https):\/\/[^ "]+$/;
    return pattern.test(link)
}

function isEmailValid(email){
    const pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email)
}