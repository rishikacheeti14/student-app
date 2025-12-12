import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudentComponent {
  form: FormGroup;

  classes = ['6', '7', '8', '9'];
  subjects = ['Math', 'Science', 'English', 'Social'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favoriteSubject: ['']
    });
  }

  get name() {
    return this.form.get('name');
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.studentService.addStudent(this.form.value);
    this.router.navigate(['/']);  
  }
}

