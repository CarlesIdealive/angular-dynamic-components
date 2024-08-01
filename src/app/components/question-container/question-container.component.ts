import { Component, ViewContainerRef } from '@angular/core';
import { TextComponent } from './../text/text.component';

@Component({
  selector: 'question-container',
  standalone: true,
  imports: [],
  templateUrl: './question-container.component.html',
  styleUrl: './question-container.component.css'
})
export class QuestionContainerComponent {

  constructor(private viewContainer: ViewContainerRef) { }
  loadContent() {
    this.viewContainer.createComponent(TextComponent);
  }

}
