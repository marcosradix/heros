import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MarvelHerosComponent } from './marvel-heros/marvel-heros.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DcComicsComponent } from './dc-comics/dc-comics.component';
import {RouterModule, Routes } from '@angular/router';

const routerList : Routes = [
  {path:"", component: DcComicsComponent},
  {path: "marvels", component: MarvelHerosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MarvelHerosComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routerList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
