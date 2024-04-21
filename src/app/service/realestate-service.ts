import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface ApiResult {
    page: number;
    results: any[];
    total_pages: number;
    total_results: number;
  }

@Injectable({
    providedIn: 'root',
  })

export class RealestateService {
    constructor(private http: HttpClient){}

    getRealestates(page=1): Observable<ApiResult>{
        return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
    }

    getRealestatesDetails(id: string): Observable<any>{
        return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
    }
}
