import { Component, Input } from '@angular/core';
import { QuestionText } from '../../../interfaces/questionText';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() question?: QuestionText;
}
