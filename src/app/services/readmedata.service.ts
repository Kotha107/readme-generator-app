import { Injectable } from '@angular/core';
import { ReadMeDataModel } from '../models/read-me-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadmedataService {
  readmeData$ = new BehaviorSubject<ReadMeDataModel |null >(null);
  public updateReadmeData(data: ReadMeDataModel): void {
    const currentData = this.readmeData$.getValue();
    this.readmeData$.next(data)
  
}
}