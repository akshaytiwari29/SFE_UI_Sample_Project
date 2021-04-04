import { Injectable } from '@angular/core';
import { Incident } from '../../incident';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class IncidentService {
  incident_id!: number;
  //private baseURL="http://localhost:8080/eCare/v4/";
  private baseURL=environment.baseUrl;
  constructor(private httpClient: HttpClient) {
  }

  getAllIncidents(): Observable<Incident[]> {
   // return this.http.get('http://localhost:8080/eCare/v4/eCare-incidents/');
   return this.httpClient.get <Incident[]>(this.baseURL+'eCare-incidents/',{ responseType: 'json' });
  }
 
  createIncident(incident: Incident): Observable<Object>{
    return this.httpClient.post(this.baseURL+'add-incident/', incident, { responseType: 'text' });
  }

  getIncidentById(id: number): Observable<Incident>{
    return this.httpClient.get<Incident>(this.baseURL+'eCare-incident/incident_id/'+id);
  }

  updateIncident(incident: Incident): Observable<Object>{
    
    this.incident_id=incident.incident_id;
    let data = {'incident_id': incident.incident_id,'customer_name': incident.customer_name,'customer_requestid': incident.customer_requestid,'issue_Description': incident.issue_Description};
    //const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    console.log(data);
    return this.httpClient.put(this.baseURL+'update-incident/incident_id/'+this.incident_id, data,{ responseType: 'text' });
  }

  deleteIncident(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL+'delete-incident/incident_id/'+id,{ responseType: 'text' });
  }

}
