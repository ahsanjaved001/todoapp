class FetchAllUserDTO{
    public role: string;

    constructor(req) {
        this.role = req.session.role;
    }
}

export default FetchAllUserDTO;