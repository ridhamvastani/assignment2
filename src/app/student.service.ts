import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:8000/add-student'
  constructor(private http:HttpClient) { }

    addStudent(student:Student){
      return this.http.post(this.url,student);    
    }
    url01='http://localhost:8000'
    getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.url01);
    }
    deleteStudent(id:any)
    {
      return this.http.delete(`${this.url01}/delete/${id}`)      
    }
   
    getStudent(id :any) {
      return this
              .http
              .get(`${this.url01}/edit-student/${id}`);
      }
  
   updateStudent(Student:any){
       return this.http.put(`${this.url01}/edit-student/`+Student._id,Student)
   }

}
