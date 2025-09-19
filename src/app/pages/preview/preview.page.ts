import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { ReadmedataService } from 'src/app/services/readmeData/readmedata.service';
import { ReadMeDataModel } from 'src/app/models/read-me-data.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, FormsModule],
})
export class PreviewPage implements OnInit {
  private readmedataService = inject(ReadmedataService);
  public readmeData: ReadMeDataModel | null = null;

  constructor() {}

  ngOnInit() {
    this.readmedataService.readmeData$.subscribe((data) => {
      if (data) {
        this.readmeData = data;
      }
    });
  }
}
