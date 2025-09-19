import { Injectable } from '@angular/core';
import { ReadMeDataModel } from '../../models/read-me-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadmedataService {
  readmeData$ = new BehaviorSubject<ReadMeDataModel | null>(null);
  public updateReadmeData(data: ReadMeDataModel): void {
    this.readmeData$.next(data);
  }
}
