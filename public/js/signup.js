const signup = async ( name, email, password ) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:5000/api/users/signup',
            data: {
                name,
                email,
                password
            }
        });
        console.log(res);
    }
    catch (err){
        console.log(err.response.data);
    }
};

const checkPassword = (password, passwordConfirm) => {
    return password === passwordConfirm;
};

document.querySelector('.form-signup').addEventListener('submit', e => {
    e.preventDefault();
    const name =  document.getElementById('inputName').value;
    const email =  document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const passwordConfirm = document.getElementById('inputPasswordConfirm').value;

    console.log(password, ' ', passwordConfirm);
    if(checkPassword(password, passwordConfirm))
        signup(name, email, password);
    else
        alert("Password does not match");
});