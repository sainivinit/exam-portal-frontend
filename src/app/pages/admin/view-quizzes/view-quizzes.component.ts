import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {



  quizzes=[
    {
      qId:21,
      title:"Loading....",
      description:'Loading...',
      maxMarks:'Loading...',
      numberOfQuestions:'loading....',
      active:'',
      category:{
        title:'Loading.....',
      },
    
   
    }
  ]
  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.getQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !","Error to loading data",'error');
      }
    )
  }

}