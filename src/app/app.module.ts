import { HikeRepositoryService } from './services/hike-repository.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginationModule,
    FormsModule
  ],
  providers: [HikeRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
