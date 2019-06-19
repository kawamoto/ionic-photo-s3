import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 's3-image-viewer',
  templateUrl: 's3-image-viewer.html',
})
export class S3ImageViewerComponent {
  prefix = 'test2';
  items: Array<object> = [];

  constructor(protected amplifyService: AmplifyService) {
    this.getItems(this.prefix);
  }

  getItems(prefix) {
    this.amplifyService
      .storage()
      .list(prefix)
      .then(data => {
        this.items = data.map(item => {
          return { path: item.key };
        });
      });
  }
}
