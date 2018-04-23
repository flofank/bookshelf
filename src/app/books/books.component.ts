import {Component, OnInit} from '@angular/core';
import {BOOKS} from "../data/mock-books";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = BOOKS;

  constructor() {
  }

  ngOnInit() {
  }

}
