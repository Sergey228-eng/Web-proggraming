function validateForm(){
    var password = document.forms["MyForm"]["pass"].value;
    var correct_password = "Parol12345";
    var radquery = document.querySelector('label');
    var inppass = document.getElementById('passw');
    var rad1 = document.getElementById("radio1");
    var rad2 = document.getElementById("radio2");
    if(rad1.checked){
        console.log("Radiobutton1 is checked");
        radquery.style.color = 'red';
    }else if(rad2.checked){
        radquery.style.color = 'green';
        console.log("Radiobutton2 is checked");
    }

    var check1 = document.getElementById("c1");
        var check2 = document.getElementById("c2");
        var check3 = document.getElementById("c3");
        if(!check1.checked && !check2.checked && !check3.checked){
            alert("Checkboxes не нажаты");
            return false;
        }
        else if(check1.checked && check2.checked){
        console.log("Checkbox1 and Checkbox2 are checked");
            }
        else if(check1.checked && check3.checked){
        console.log("Checkbox1 and Checkbox3 are checked");
            }
        else if(check2.checked && check3.checked){
        console.log("Checkbox2 and Checkbox3 are checked");
            }
        else if(check1.checked && check2.checked && check3.checked){
            console.log("Checkbox1, Checkbox2 and Checkbox3 are checked");
            }
        else if(check1.checked){
        console.log("Checkbox1 is checked");
            }
        else if(check2.checked){
        console.log("Checkbox2 is checked");
            }
        else if(check3.checked){
        console.log("Checkbox3 is checked");
            }

    if(password == ""){
            alert("Необходимо ввсети пароль");
           inppass.style.border = "1px solid red";
            inppass.style.color = "red";
            return false;
        }
        else if(password != correct_password){
            alert("Неверный пароль");
            inppass.style.border = "1px solid red";
            return false;
        } 
};