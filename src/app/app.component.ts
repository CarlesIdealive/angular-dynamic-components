import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuestionFactoryService } from './services/question-factory.service';
import { TextComponent } from './components/text/text.component';
import { Question } from '../interfaces/question';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedQuestionType : string = '';
  questions: Question[] = [];
  @ViewChild('activityContainer', { read: ViewContainerRef }) container: any;

  constructor(private questionFactoryService: QuestionFactoryService) {}

 createQuestion() {
    const question = this.questionFactoryService.createQuestion(this.selectedQuestionType);
    this.questions.push(question);
    const activityComponent = this.getQuestionComponent(this.selectedQuestionType);
    const componentRef = this.container.createComponent(activityComponent);
    componentRef.instance.question = question;
  }


  private getQuestionComponent(type: string) {
    const componentMap: { [key: string]: any; } = {
      'text': TextComponent,
      'longtext': TextComponent
    };
    return componentMap[type] || null;
  }

}
