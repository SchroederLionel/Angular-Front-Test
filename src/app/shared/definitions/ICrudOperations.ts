import { Observable } from "rxjs";

export interface ICrudOperations<T,ID> {
    save(t:T):Observable<T>;
    update(id:ID,t:T):Observable<T>;
    findOne(id:ID,t:T):Observable<T>;
    findAll():Observable<T[]>;
    delete(id:ID,t:T):Observable<any>;
}