import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-list/post-create/post-create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PostListComponent, PostCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
