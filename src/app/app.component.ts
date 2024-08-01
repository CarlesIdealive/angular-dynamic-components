import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuestionFactoryService } from './services/question-factory.service';
import { TextComponent } from './components/text/text.component';
import { Question } from './interfaces/question';

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

}
