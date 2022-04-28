import { Component } from '@angular/core';
import { GalleryFacade } from '@mf-app/shared/data-store'

@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cats = this.galleryFacade.allGallery$ as any;
    selectedCats = this.galleryFacade.selectedCats$;
    constructor(private galleryFacade: GalleryFacade) {}
    toggleSelectCat(cat: any) {
        this.galleryFacade.toggleSelectCat(cat);
    }
    isSelected(catId: any) {
        return this.galleryFacade.isCatSelected(catId);
    }
}
