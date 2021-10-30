import * as uuid from 'uuid'

class BaseEntity{
    createdAt: Date
    updatedAt: Date

    setDates(createdAt: Date, updatedAt: Date){
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static generateID(){
        return uuid.v4();
    }
}

export default BaseEntity;