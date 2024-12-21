import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  private baseUrl = `${environment.apiUrl}api/boards`;

  constructor(private http: HttpClient) {}

  getBoards(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createBoard(title: string, description: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { title, description });
  }

  deleteBoard(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
