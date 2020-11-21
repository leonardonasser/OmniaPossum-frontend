import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export enum ErrorCode {
  ValidationError = 'VALIDATION_ERROR',
  FormValidationError = 'FORM_VALIDATION_ERROR',
  UnexpectedError = 'UNEXPECTED_ERROR',
  Unauthorized = 'UNAUTHORIZED',
}

export interface ApiError {
  message: string;
  code: ErrorCode;
  errors: {
    field?: string,
    message: string
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      return throwError(`Error: ${error.error.message}`);
    }

    // Server-side errors
    const apiError: ApiError = error.error;

    return throwError(apiError);
  }

  private createHttpParams(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).forEach(param => {
      if (params[param]) {
        httpParams = httpParams.set(param, params[param]);
      }
    });

    return httpParams;
  }

  public getFile(url: string, params = {}) {
    return this.httpClient
      .get(`${environment.apiUrl}/${url}`, { responseType: 'blob' })
      .pipe(catchError(error => this.handleError(error)));
  }

  public get<T>(url: string, params = {}) {
    return this.httpClient
      .get<T>(`${environment.apiUrl}/${url}`, {params: this.createHttpParams(params)})
      .pipe(catchError(error => this.handleError(error)));
  }

  public post<T>(url: string, payload: any) {
    return this.httpClient
      .post<T>(`${environment.apiUrl}/${url}`, payload)
      .pipe(catchError(error => this.handleError(error)));
  }

  public put<T>(url: string, payload?: any) {
    return this.httpClient
      .put<T>(`${environment.apiUrl}/${url}`, payload)
      .pipe(catchError(error => this.handleError(error)));
  }

  public delete(url: string, params = {}) {
    return this.httpClient
      .delete(`${environment.apiUrl}/${url}`, {params: this.createHttpParams(params)})
      .pipe(catchError(error => this.handleError(error)));
  }
}
