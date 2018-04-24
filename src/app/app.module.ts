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
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  declarations: [
    AppComponent, BooksComponent, BookDetailComponent, HeaderComponent, MessagesComponent, DashboardComponent, BookSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [
    BookService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
