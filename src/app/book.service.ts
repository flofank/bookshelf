import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from './model/book';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {
  private booksUrl = 'api/books';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the books
    this.log('fetched books');
    return this.http.get<Book[]>(this.booksUrl).pipe(tap(books => this.log('fetched books')),
      catchError(this.getErrorHandler('getBooks', [])));
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => this.log(`fetched book id=${id}`)),
      catchError(this.getErrorHandler<Book>(`getBook id=${id}`))
    );
  }

  updateBook(book: Book) {
    return this.http.put(this.booksUrl, book, httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}`)),
      catchError(this.getErrorHandler<any>('updateBook'))
    );
  }

  addBook(book: Book) {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      tap((book: Book) => this.log(`added book w/ id=${book.id}`)),
      catchError(this.getErrorHandler<Book>('addBook'))
    );
  }

  deleteBook(book: Book | number) {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted book id=${id}`)),
      catchError(this.getErrorHandler<Book>('deleteBook'))
    );
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(`api/books/?title=${term}`).pipe(
      tap(_ => this.log(`found books matching "${term}"`)),
      catchError(this.getErrorHandler<Book[]>('searchBooks', []))
    );
  }

  /** Log a BookService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BookService: ' + message);
  }

  private getErrorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
