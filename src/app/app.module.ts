import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { NotfoundComponent } from './notfound/notfound.component';
//import { IncidentEditComponent } from './incident-edit/incident-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    IncidentsListComponent,
    CreateIncidentComponent,
    UpdateIncidentComponent,
    NotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
