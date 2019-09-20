import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ModuleMapLoaderModule,
    BrowserModule,


  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  providers: [
    Title
  ]
})
export class AppServerModule {}
