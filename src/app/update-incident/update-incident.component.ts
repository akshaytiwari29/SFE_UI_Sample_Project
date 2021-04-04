import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../shared/incident/incident.service';
import { Incident } from '../incident';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-incident',
  templateUrl: './update-incident.component.html',
  styleUrls: ['./update-incident.component.css']
})
export class UpdateIncidentComponent implements OnInit {
  incident_id!: number;
  incident: Incident = new Incident();
  constructor(private incidentService: IncidentService,
    private route: ActivatedRoute,
    private router: Router) { this.route.params.subscribe( params => this.incident_id=params['incident_id'] );}

  ngOnInit(): void {
    //this.incident_id = this.route.snapshot.params['id'];
console.log("id is"+this.incident_id);
    this.incidentService.getIncidentById(this.incident_id).subscribe(data => {
      this.incident = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.incidentService.updateIncident(this.incident).subscribe( data =>{
      this.router.navigate(['/incident-list']);
    }
    , error => console.log(error));
    this.router.navigate(['/incident-list']);
  }
  
}
