import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Role {
  role_id: number;
  role: string;
  club: string;
  date: string;
  status: string;
  interested: string[];
}

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private apiUrl = 'http://127.0.0.1:5000/roles'; // Flask API URL

  constructor(private http: HttpClient) { }

  // Get all roles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // Add a new role
  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  // Show interest in a role
  showInterest(roleId: number, name: string): Observable<Role> {
    return this.http.post<Role>(`${this.apiUrl}/${roleId}/interest`, { name });
  }
}
