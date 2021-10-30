class RemoveUserDTO{
    public id: string;
    public role: string;

    constructor(req){
        this.id = req.params.id;
        this.role = req.session.role;
    }
}

export default RemoveUserDTO;