import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICrudOperations } from "../definitions/ICrudOperations";

export abstract class CrudService<T, ID> implements ICrudOperations<T, ID> {

    constructor(
      protected _http: HttpClient,
      protected _base: string
    ) {}
  
    /**
     * Function which allows to store/save a new record to the database.
     * @param t
     * @returns 
     */
    save(t: T): Observable<T> {
      return this._http.post<T>(`${this._base}`, t);
    }
    
    /**
     * Function which allows to update a database entry.
     * @param id 
     * @param t 
     * @returns 
     */
    update(id: ID, t: T): Observable<T> {
      return this._http.put<T>(`${this._base}/${id}`, t, {});
    }
  
    /**
     * Function which allows to find a specific record.
     * @param id 
     * @returns 
     */
    findOne(id: ID): Observable<T> {
      return this._http.get<T>(`${this._base}/${id}`);
    }
    
    /**
     * Function which allows to find all the records.
     * @returns 
     */
    findAll(): Observable<T[]> {
      return this._http.get<T[]>(`${this._base}`)
    }
  
    /**
     * Function which allows to delete a record.
     * @param id 
     * @param t 
     * @returns 
     */
    delete(id: ID,t:T): Observable<T> {
      return this._http.delete<T>(`${this._base}/${id}`,{body:t});
    }
  
  }