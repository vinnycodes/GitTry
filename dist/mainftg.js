
// JS Smooth Scrolling

$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -50
      },
      800
    );
  }
});

$('#arrow a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -50
      },
      800
    );
  }
});

// SENDS EMAIL OF FORM SUBMISSION

const init = function(){
    document.getElementById('button-send').addEventListener('click', send);
}


const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    //or the click will travel to the form and the form will submit
    let fails = validate();
    //IF we wanted to do some async things then use a Promise with .then and .catch
    if(fails.length === 0){
        //good to go
        document.getElementById('form-user').submit();
    }else{
        //there are some errors to display
        //bad user
        //let err = document.querySelector('.error');
        //let input = err.querySelector('input');
        //err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}

const validate = function(ev){
    //let valid = true;
    let failures = [];
    //checkbox (or radio buttons grouped by name)
    let chk = document.getElementById('input-alive');
    // .checked .value
    if(!chk.checked){
        //valid = false;
        //chk.parentElement.classList.add('error');
        //chk.parentElement.setAttribute('data-errormsg', 'Must be alive to submit.');
        failures.push({input: 'input-alive', msg: 'Must be alive to submit.'})
    }

    //select
    let select = document.getElementById('input-age');
    // .selectedIndex  .options  .length   .selectedValue  .value
    if( select.selectedIndex === 0 ){
        failures.push({input:'input-age', msg:'Too young'})
    }

    //inputs for text, email, tel, color, number...
    let firstname = document.getElementById('input-firstname');
    let lastname = document.getElementById('input-lastname');
    let email = document.getElementById('input-email');
    //.value, .defaultValue, length of value
    if( firstname.value === ""){
        failures.push({input:'input-firstname', msg:'Required Field'})
    }
    if( lastname.value === ""){
        failures.push({input:'input-lastname', msg:'Required Field'})
    }
    if( email.value === ""){
        failures.push({input:'input-email', msg:'Required Field'})
    }
    if( subject.value === ""){
        failures.push({input:'input-subject', msg:'Required Field'})
    }

    //return a boolean || an object with details about the failures
    return failures;
}

// document.addEventListener('DOMContentLoaded', init);
