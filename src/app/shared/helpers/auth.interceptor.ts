import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    request = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa("meshapi:meTu9eip")}` // i had to hardcode the username and password here :);
        }
      });
    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
            let message = "oops, something went wrong"
            if (err.status === 401) {
              alert("unauthorized") // this could have been a toast, but to save time, i have to use alert;
            }

            message = err.error.message || err.error.title  || message; //this taylor makes the error message because it get to the event subscriber.
            return throwError(message);
        })
    )
  }
}