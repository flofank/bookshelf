import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {FormsModule} from "@angular/forms";
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookService} from "./book.service";
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent, BooksComponent, BookDetailComponent, HeaderComponent, MessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    BookService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
