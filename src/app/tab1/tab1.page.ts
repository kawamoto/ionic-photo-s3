import { Component, ViewChild } from '@angular/core';

import { S3AlbumComponent } from 'aws-amplify-angular/dist/src/components/storage/s3-album-component/s3-album.factory';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild(S3AlbumComponent) album: S3AlbumComponent;

  constructor() {}

  onImageUploaded(ev: object) {
    this.album.loadComponent();
  }
}
