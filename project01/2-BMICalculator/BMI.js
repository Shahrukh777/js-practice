const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    BMI = (weight/((height*height)/10000)).toFixed(2)
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height."
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight."
    }
    else if(BMI < 18.6){
        result.innerHTML = BMI.toString() + " You are Underwight."
    }
    else if(BMI >= 18.6 && BMI <= 24.9){
        result.innerHTML = BMI.toString() + " Your weight is Normal."
    }
    else if(BMI > 24.9){
        result.innerHTML = BMI.toString() + " You are Overwight."
    }
})
