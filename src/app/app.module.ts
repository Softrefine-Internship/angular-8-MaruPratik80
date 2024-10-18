import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SalaryPipe } from './salary.pipe';
import { FormsModule } from '@angular/forms';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [AppComponent, SalaryPipe, PaginationPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
