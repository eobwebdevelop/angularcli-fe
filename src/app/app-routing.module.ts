import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DutiesListComponent } from './components/duties-list/duties-list.component';
import { AddDutyComponent } from './components/add-duty/add-duty.component';
import { DutyDetailsComponent }  from './components/duty-details/duty-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'duties', pathMatch: 'full' },
  { path: 'duties', component: DutiesListComponent },
  { path: 'add', component: AddDutyComponent },
  { path: 'duties/:id', component: DutyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
