import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AddStudentComponent } from './components/add-student/add-student';

export const routes: Routes = [
  { path: '', component: HomeComponent },          // Home page
  { path: 'add-student', component: AddStudentComponent } // Add Student page
];
