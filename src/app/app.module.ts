import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AppComponent } from './app.component';
import { OrderByPipe } from './orderBy.pipe';
import { GenreFilterPipe } from './genreFilter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './app.modal';

@NgModule({
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [
    AppComponent,
    ModalComponent,
    FilterPipe,
    OrderByPipe,
    GenreFilterPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
