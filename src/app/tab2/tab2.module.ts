import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { S3ImageUploaderComponent } from './s3-image-uploader/s3-image-uploader.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
  ],
  declarations: [Tab2Page, S3ImageUploaderComponent],
})
export class Tab2PageModule {}
