
const login = async ( email, password ) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/users/login',
            data: {
                email,
                password
            }
        });
        if (res.data.message === 'success')
            window.location = "http://localhost:3000/todo";
        console.log(res);
    }
    catch (err){
        console.log(err.response.data);
    }
};

document.querySelector('.form-login').addEventListener('submit', e => {
    e.preventDefault();
    const email =  document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    login(email, password);
});