import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {BookService} from "../book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor(private bookService: BookService) {
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.getBooks();
  }

}
