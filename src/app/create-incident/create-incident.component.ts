import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../shared/incident/incident.service';
import { Incident } from '../incident';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {
  incident: Incident = new Incident();
  constructor(private incidentService: IncidentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveIncident(){
    this.incidentService.createIncident(this.incident).subscribe( data =>{
      console.log(data);
      this.goToIncidentList();
    },
    error => console.log(error));
    this.goToIncidentList();
  }

  goToIncidentList(){
    this.router.navigate(['/incident-list']);
   
  }
  
  onSubmit(){
    console.log(this.incident);
    this.saveIncident();
  }
}
