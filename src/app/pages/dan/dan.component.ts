import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dan',
  templateUrl: './dan.component.html',
  styleUrls: ['./dan.scss'],
  imports: [UpperCasePipe, RouterModule]
})
export class DanComponent {
  title: string = 'página de dan';
}
