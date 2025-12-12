import { Injectable } from '@angular/core';

export interface Student {
  name: string;
  class: string;
  gender: string;
  hasHobby: boolean;
  hobby: string;
  favoriteSubject: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      name: 'Rohan Sharma',
      class: '8',
      gender: 'Male',
      hasHobby: true,
      hobby: 'Cricket',
      favoriteSubject: 'Math'
    },
    {
      name: 'Priya Mehta',
      class: '7',
      gender: 'Female',
      hasHobby: false,
      hobby: '',
      favoriteSubject: 'Science'
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(s: Student): void {
    this.students.push(s);
  }
}
