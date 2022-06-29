import {Injectable} from '@angular/core';
import {StateService} from "../state/state.service";
import {Observable} from "rxjs";
import {Item} from "../../app.component";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private listState: StateService) {
  }


  getList(): Observable<Item[]> {
    return this.listState.listGetter;
  }

  addItem(value: Item) {
    this.listState.listSetter = ([...this.listState.listSnapshot, value])
  }


}
