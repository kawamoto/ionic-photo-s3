import { Component, Output, EventEmitter } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 's3-image-uploader',
  templateUrl: 's3-image-uploader.html',
})
export class S3ImageUploaderComponent {
  prefix = 'test2';
  file = null;
  path = '';
  @Output()
  uploaded: EventEmitter<object> = new EventEmitter<object>();

  constructor(protected amplifyService: AmplifyService) {}

  pick(evt) {
    const file = evt.target.files[0];
    if (!file) {
      return;
    }

    this.path = `${this.prefix}/${file.name}`;
    this.file = file;
  }

  uploadFile() {
    this.amplifyService
      .storage()
      .put(this.path, this.file)
      .then(result => {
        this.uploaded.emit(result);
      })
      .finally(() => {
        this.completeFileUpload();
      });
  }

  completeFileUpload() {
    this.file = null;
    this.path = '';
  }
}
