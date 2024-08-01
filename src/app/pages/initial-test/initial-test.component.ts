import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Question } from '../../interfaces/question';
import { QuestionFactoryService } from '../../services/question-factory.service';
import { TextComponent } from '../../components/text/text.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-initial-test',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './initial-test.component.html',
  styleUrl: './initial-test.component.css'
})
export default class InitialTestComponent {
  selectedQuestionType: string = '';
  questions: Question[] = [];
  @ViewChild('questionContainer', { read: ViewContainerRef }) container: any;

  constructor(private questionFactoryService: QuestionFactoryService) {
  }

  createQuestion() {
    //Crea les dades
    const question = this.questionFactoryService.createQuestion(this.selectedQuestionType);
    this.questions.push(question);
    //Crea el Component
    const questionComponent = this.getQuestionComponent(this.selectedQuestionType);
    const componentRef = this.container.createComponent(questionComponent);
    componentRef.instance.question = question;  //Input dades
    componentRef.changeDetectorRef.detectChanges(); //Ciclo de deteccion de cambios
  }


  private getQuestionComponent(type: string) {
    const componentMap: { [key: string]: any; } = {
      'text': TextComponent,
      'longtext': TextComponent
    };
    return componentMap[type] || null;
  }

}
