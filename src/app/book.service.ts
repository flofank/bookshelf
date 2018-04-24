import {Injectable} from '@angular/core';
import {Book} from "./model/book";
import {BOOKS} from "./data/mock-books";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";

@Injectable()
export class BookService {

  constructor(private messageService: MessageService) {
  }

  getBooks(): Observable<Book[]> {
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }

}
