import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Item} from "../interfaces/item.interface";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private list$ = new BehaviorSubject<Item[]>([]);

  constructor() {
  }

  get listSnapshot(): Item[] {
    return this.list$.value
  }

  get listGetter(): Observable<Item[]> {
    return this.list$.asObservable()
  }

  set listSetter(value: Item[]) {
    this.list$.next(value);
  }

}
