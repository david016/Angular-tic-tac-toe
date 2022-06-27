import { Component, Input, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: string | null = null;
}
