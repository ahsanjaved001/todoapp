class CreateTodoDTO {
    public userID: string;
    public name: string;
    public description: string;

    constructor(req){
        this.userID = req.session.userID;
        this.name = req.body.name;
        this.description = req.body.description;
    }
}

export default CreateTodoDTO;