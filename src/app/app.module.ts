import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorldComponent } from './core/components/world/world.component';
import { CellComponent } from './core/components/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
