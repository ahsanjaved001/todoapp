import PaginationOptions from "./PaginationOptions";

class TodoPaginatedCollection<T> {
    items: T[]
    totalItems: number
    perPage: number
    currentPage: number
    
    constructor(paginationOptions: PaginationOptions, totalItems: number, items: T[]){
        this.perPage = paginationOptions.perpage;
        this.currentPage = paginationOptions.currentPage;
        this.totalItems = totalItems;
        this.items = items;
    }

    hasNext(): boolean {
        return false
    }
    hasPrev(): boolean {
        return false
    }
}

export default TodoPaginatedCollection;