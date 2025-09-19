import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReadmedataService } from '../services/readmeData/readmedata.service';
import { ReadMeDataModel, skillModel } from '../models/read-me-data.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RouterModule, ReactiveFormsModule, CommonModule],
})
export class HomePage {
  private readmedataService = inject(ReadmedataService);
  private formbuilder = inject(FormBuilder);
  private router = inject(Router);

  public isSubmitted: boolean = false;
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

  public readMeForm = this.formbuilder.group({
    titlePrefix: 'Hi 👋 , ',
    name: ['', Validators.required],
    subtitle: 'A passionate frontend developer from Bangladesh',
    currentWork: '🔭 I’m currently working on',
    curentWorkProject: ['', Validators.required],
    collaboration: '👯 I’m looking to collaborate on',
    collaborationProject: ['', Validators.required],
    funFact: '⚡ Fun fact',
    funFactProject: '',
    skills: new FormControl<skillModel[]>([]),
  });

  onSubmit(): void {
    this.isSubmitted = true;

    this.readmedataService.updateReadmeData(
      this.readMeForm.value as ReadMeDataModel
    );

    if (this.readMeForm.valid) {
      this.router.navigate(['/preview']);
    }
  }
  onSkillChange(event: Event, skill: skillModel) {
    const checkbox = event.target as HTMLInputElement;
    const selectedSkills: skillModel[] =
      this.readMeForm.get('skills')?.value || [];
    if (checkbox.checked) {
      this.readMeForm.patchValue({ skills: [...selectedSkills, skill] });
    } else {
      this.readMeForm.patchValue({
        skills: selectedSkills.filter(
          (skillIndex) => skillIndex.name !== skill.name
        ),
      });
    }
  }
  public isSkillSelected(skillName: string): boolean {
    const selectedSkills = this.readMeForm.get('skills')?.value;
    if (!selectedSkills) {
      return false;
    }
    return selectedSkills.some((s) => s.name === skillName);
  }
}
