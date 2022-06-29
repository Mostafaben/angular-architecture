import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {EditWrapperComponent} from "./edit-wrapper.component";


let routes: Route[] = [{
  path: "", component: EditWrapperComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
