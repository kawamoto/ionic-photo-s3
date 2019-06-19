import { Component, OnInit, Input } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 's3-image',
  templateUrl: 's3-image.html',
})
export class S3ImageComponent implements OnInit {
  url: string;
  @Input() item: { path: string };

  constructor(protected amplifyService: AmplifyService) {}

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    console.log(this.item);
    console.log(this.item.path);
    this.amplifyService
      .storage()
      .get(this.item.path)
      .then(url => {
        this.url = url;
      });
  }
}
