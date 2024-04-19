import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriesAppartement} from "../model/appartementModel/categories-appartement.model";
import {Appartement} from "../model/appartementModel/appartement.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriesAppartementService {

 public _item: CategoriesAppartement = new CategoriesAppartement();
 public _items:Array<CategoriesAppartement>=new Array<CategoriesAppartement>();

  _appartemetsByCategories: Array<Appartement>=new Array<Appartement>();



  constructor(private http: HttpClient) { }

  public save(): Observable<number> {
    return this.http.post<number>("http://localhost:8081/api/categoriesAppartemen/", this.item);
  }

  public getAll():Observable<Array<CategoriesAppartement>>{
    return this.http.get<Array<CategoriesAppartement>>("http://localhost:8081/api/categoriesAppartemen/");
  }

  public delete(libelle:String):Observable<any>{
    return this.http.delete<number>(`http://localhost:8081/api/categoriesAppartemen/libelle/${libelle}`);
  }

  public  update(propritaire:CategoriesAppartement):Observable<any>{
    return this.http.put("http://localhost:8081/api/categoriesAppartemen/",propritaire)

  }

  get item(): CategoriesAppartement {
    return this._item;
  }

  set item(value: CategoriesAppartement) {
    this._item = value;
  }

  get items(): Array<CategoriesAppartement> {
    return this._items;
  }

  set items(value: Array<CategoriesAppartement>) {
    this._items = value;
  }


  get appartemetsByCategories(): Array<Appartement> {
    return this._appartemetsByCategories;
  }

  set appartemetsByCategories(value: Array<Appartement>) {
    this._appartemetsByCategories = value;
  }

}
