import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  // define a parameter called :status that could take any value (all, completed, active)
  { path: ':status', component: TodoComponent },
  { path: '**', redirectTo: '/all' }
];
@NgModule({
  // components
  declarations: [
    AppComponent,
    TodoComponent
  ],
  // routes and modules
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  // loaded components when app starts
  bootstrap: [AppComponent]
})
export class AppModule { }
