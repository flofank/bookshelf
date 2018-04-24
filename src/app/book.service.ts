import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from './model/book';
import { BOOKS } from './data/mock-books';
import { MessageService } from './message.service';

@Injectable()
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the books
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    // TODO: send the message _after_ fetching the book
    this.messageService.add(`BookService: fetched book id=${id}`);
    return of(BOOKS.find(book => book.id === id));
  }
}
