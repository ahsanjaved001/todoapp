class RemoveTodoDTO{
    public id: string;
    public userID: string;

    constructor(req){
        this.id = req.params.id;
        this.userID = req.session.userID;
    }
}

export default RemoveTodoDTO;