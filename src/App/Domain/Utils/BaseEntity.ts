import * as uuid from 'uuid'

class BaseEntity{
    createdAt: Date
    updatedAt: Date

    setTimes(createdAt: Date, updatedAt: Date){
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static generateID(){
        return uuid.v4();
    }
}

export default BaseEntity;