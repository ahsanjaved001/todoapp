class UpdateUserDTO{
    public id: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(req){
        this.id = req.session.userID;
        this.name = req.body.name;
        this.email = req.body.email;
        this.password = req.body.password;
    }
}

export default UpdateUserDTO;