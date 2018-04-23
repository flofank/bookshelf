import {Component, OnInit} from '@angular/core';
import {BOOKS} from '../data/mock-books';
import {Book} from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = BOOKS;
  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
