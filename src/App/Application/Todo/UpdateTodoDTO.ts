class UpdateTodoDTO {
    public id: string;
    public userID: string;
    public name: string;
    public description: string;

    constructor(req) {
        this.id = req.params.id;
        this.userID = req.session.userID;
        this.name = req.body.name;
        this.description = req.body.description;
    }
}

export default UpdateTodoDTO;