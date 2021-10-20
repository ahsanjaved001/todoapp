const updateTodo = async (id, name, description) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `http://localhost:3000/api/todo/${id}`,
            data: {
                name,
                description
            }
        });
        if (res.data.status === 'success')
            window.location = "http://localhost:3000/todo";
        else
            window.location = `http://localhost:3000/todo/edit/${id}`;
    }
    catch (err) {
        console.log(err.response.data);
    }
};

const deleteTodo = async id => {
    const res = await axios.delete(`http://localhost:3000/api/todo/${id}`);
    if (res.data.status === 'success')
        window.location = "http://localhost:3000/todo";
    else
        alert('Unable to delete todo');
};

const addTodo = async (name, description) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/todo/',
            data: {
                name,
                description
            }
        });
        if (res.data.status === 'success')
            window.location = "http://localhost:3000/todo";
        else
            window.location = "http://localhost:3000/todo/new/";
    }
    catch (err) {
        console.log(err.response.data);
    }
};

try {
    document.querySelector('.update-todo').addEventListener('submit', e => {
        e.preventDefault();
        const id = document.getElementById('inputId').value;
        const name = document.getElementById('inputName').value;
        const description = document.getElementById('inputDescription').value;

        updateTodo(id, name, description);
    });
} catch (err) {
    document.querySelector('.form-todo').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('inputName1').value;
        const description = document.getElementById('inputDescription1').value;

        addTodo(name, description);
    });
}