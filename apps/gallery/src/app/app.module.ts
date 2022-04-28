/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryStoreModule } from '@mf-app/shared/data-store';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RemoteEntryModule } from './remote-entry/entry.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
