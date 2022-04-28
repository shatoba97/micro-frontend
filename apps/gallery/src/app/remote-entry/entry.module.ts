import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { GalleryStoreModule } from '@mf-app/shared/data-store';
import { NgModule } from '@angular/core';
import { RemoteEntryComponent } from './entry.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
