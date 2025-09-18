import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RouterModule, ReactiveFormsModule],
})
export class HomePage {
  private fb = inject(FormBuilder);
  public readMeForm = this.fb.group({
    titlePrefix: 'Hi 👋',
    name: '',
    subtitle: 'A passionate frontend developer from Bangladesh',
    currentWork: '🔭 I’m currently working on',
    curentWorkProject: '',
    collaboration: '👯 I’m looking to collaborate on',
    collaborationProject: '',
    funFact: '⚡ Fun fact',
    funFactProject: '',
    skills: [] as string[]  ,
  });
  public skills = [
    { name: 'C', svgPath: 'assets/icons/c.svg' },
    { name: 'C++', svgPath: 'assets/icons/cplusplus-original.svg' },
    { name: 'C#', svgPath: 'assets/icons/csharp.svg' },
    { name: 'Go', svgPath: 'assets/icons/go.svg' },
    { name: 'Java', svgPath: 'assets/icons/java.svg' },
    { name: 'JavaScript', svgPath: 'assets/icons/javascript.svg' },
    { name: 'TypeScript', svgPath: 'assets/icons/typescript.svg' },
    { name: 'PHP', svgPath: 'assets/icons/php.svg' },
  ];
  constructor() {}
  onSubmit(): void {
    console.log(this.readMeForm.value);
  }
}
