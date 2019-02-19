import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from '../entities/product';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const _url: string = "/api/v1/product";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(_url)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  getProduct(id: number): Observable<Product> {
    const url = `${_url}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  
  addProduct (product): Observable<Product> {
    return this.http.post<Product>(_url, product, options).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {
    const url = `${_url}/${id}`;
    return this.http.put(url, product, options).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<Product> {
    const url = `${_url}/${id}`;
  
    return this.http.delete<Product>(url, options).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
