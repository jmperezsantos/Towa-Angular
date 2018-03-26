import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookService } from './book.service';
import { AppRoutingModule } from './/app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookContainerComponent } from './book-container/book-container.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoteBookService } from './remote-book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    NewBookComponent,
    BookContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    RemoteBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
