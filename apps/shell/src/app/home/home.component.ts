import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { GalleryFacade } from '@mf-app/shared/data-store';

@Component({
  selector: 'mf-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public cats: Observable<any> = this.galleryFacade.selectedCats$.pipe(
    map((selectedCats: any) => Array.from(selectedCats.values()))
  );
  constructor(private galleryFacade: GalleryFacade) {}
}
