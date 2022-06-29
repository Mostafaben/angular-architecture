import {Component, OnInit} from '@angular/core';
import {StateService} from "../state/state.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$ = this.state.listGetter;

  constructor(private state: StateService) {
  }

  ngOnInit(): void {
  }

}
