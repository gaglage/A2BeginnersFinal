import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { AutoGrowDirective } from './auto-grow.directive';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
