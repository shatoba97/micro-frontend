import { CommonModule } from '@angular/common';
import { GalleryApiService } from './gallery-store/api/gallery-api.service';
import { GalleryEffects } from './gallery-store/state/gallery.effects';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [GalleryEffects]
})
export class SharedDataStoreModule {}
