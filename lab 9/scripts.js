function validate(){
   
    var name =form.name.value;
    if (name.length==0){
        alert("Вы не ввели Имя");
       return false;
    }
    var password=form.password.value;
    if (password.length==0){
      alert("Вы не ввели password");
        return false;
    }
    var state = form.state.value;
    if(state.length==0){
        alert("Укажите пол");
        return false;
     }
    var email =form.email.value;
    if (email.length==0){
        alert("Будь ласка, введіть ваш email.");
       return false;
    }
    var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!check.test(email)){
                  alert("Неправильно введена єлектронна пошта");
                  email.focus();
                  email.select();
                  return false;
              }
                  var check2 = /^[А-ЯЁ][а-яё][0-9]*$/;
                  if(!check2.test(adress)){
                      alert("Введіть почту ще раз");
                      adress.focus();
                      adress.select();
                      return false;
                  }
    var text = form.text.value;
    if (text.length==0){
        alert("Наппишіть, будь ласка, коментар");
        return false;
     }
    var number=form.number.value;
    if (number.length==0){
        alert("Введіть ваш номер телефона.");
        return false;
    }
    var numberCheck = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      if(!numberCheck.test(number)){
          alert("Невірно");
          number.focus();
          number.select();
          return false;
            }
        }
    var date =form.date.value;
    if(date==""){
        alert("Введіть ваш рік народження.")
        form.age.focus();
        return false;
    }  
    var name_pattern=/[a-z-.]/i;
    a = name.indexOf(name_pattern);
    if(a>1){
        alert("Вы ввели запрещенный символ");
        return false;
    }
 }