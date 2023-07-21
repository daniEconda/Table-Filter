import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
