import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { IncidentEditComponent } from './incident-edit/incident-edit.component';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {
    path: 'incident-list',
    component: IncidentsListComponent
  },
  { path: '', redirectTo: '/incident-list', pathMatch: 'full' },
  {path: 'create-incident', component: CreateIncidentComponent}, 
  {path: 'update-incident/:incident_id', component: UpdateIncidentComponent}, 
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
 /* {path: 'update-incident', children: [
    { path: ':incident_id', component: UpdateIncidentComponent }
  ]
}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


