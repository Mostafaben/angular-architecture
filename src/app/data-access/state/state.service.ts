import {Injectable} from '@angular/core';
import {Item} from "../../app.component";
import {BehaviorSubject, Observable} from "rxjs";

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
