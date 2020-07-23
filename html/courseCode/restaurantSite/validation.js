function validateEntry(field){
    return (field == "") ? "No entry was entered.\n" : "";
    
}

function validateName(field){
    //return (field == "") ? "No Forename was entered.\n" : "";
    if (field == "") return "a valid forename was not entered\n";
    else if(/[0-9]/.test(field)){
        return "No numbers allowed in the name fields.\n";
    }
    return "";
}

function validatePhone(field){
    //return (field = "") ? "No age was entered. \n" : "";
    if (field == "") return "A valid value was not entered.\n";
    else if(/[a-zA-Z]/.test(field)){
        return "Only 0-9 characters allowed.\n";
    }
    return "";
}


function validateSubmit(form){
    fail = validateName(form.firstName.value);
    fail = validateEntry(form.Email.value)
    fail += validatePhone(form.phoneNumber.value);

    if(fail == ""){
        return true;
    }else{
        alert("You have failed to enter a valid value in all the boxes");
        return false;
    }
}
