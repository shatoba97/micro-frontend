import * as fromGallery from './state/gallery.reducer';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GalleryApiService } from './api/gallery-api.service';
import { GalleryEffects } from './state/gallery.effects';
import { GalleryFacade } from './state/gallery.facade';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromGallery.GALLERY_FEATURE_KEY,
      fromGallery.reducer
    ),
    EffectsModule.forFeature([GalleryEffects]),
  ],
  providers: [GalleryApiService, GalleryFacade],
})
export class GalleryStoreModule {}
