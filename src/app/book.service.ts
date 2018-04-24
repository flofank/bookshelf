import {Injectable} from '@angular/core';
import {BOOKS} from "./data/mock-books";
import {Book} from "./model/book";

@Injectable()
export class BookService {

  getBooks(): Book[] {
    return BOOKS;
  }

}
