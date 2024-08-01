import { Component, Input } from '@angular/core';
import { QuestionText } from '../../interfaces/questionText';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() question?: QuestionText;
}
