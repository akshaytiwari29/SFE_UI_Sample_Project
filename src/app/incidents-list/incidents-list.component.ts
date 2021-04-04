import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IncidentService } from '../shared/incident/incident.service';
import { Incident } from '../incident';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidents-list',
  templateUrl: './incidents-list.component.html',
  styleUrls: ['./incidents-list.component.css']
})
export class IncidentsListComponent implements OnInit {
  incidents: Incident[] = [];
  constructor(private incidentService: IncidentService,private router: Router,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  //  this.incidentService.getAllIncidents().subscribe(data => {
  //    this.incidents = data;
      
 // });
 this.getIncidents();
}
getIncidents(){
    this.incidentService.getAllIncidents().subscribe((data: any) => {
      this.incidents = data;
    });
  }
/*
  const getIncidentById =  ( incident_id: number) => {
    this.router.navigate(['incident-details', incident_id]);
  }
*/
updateIncident(incident_id : number) {
  
    this.router.navigate(['update-incident', incident_id]);
    this.getIncidents();
  }

 
deleteIncident(incident_id: number) {

  alert("delete me!");
  this.incidentService.deleteIncident(incident_id).subscribe(data => {
    console.log(data);
    this.getIncidents();
    
  })
  this.getIncidents();
  this.router.navigate(['/incident-list']);
}
}
