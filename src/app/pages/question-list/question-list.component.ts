import { Component } from '@angular/core';
import { QuestionContainerComponent } from "../../components/question-container/question-container.component";

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [
    QuestionContainerComponent
  ],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export default class QuestionListComponent {

}
