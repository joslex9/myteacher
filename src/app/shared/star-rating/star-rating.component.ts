import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() value: number = 4.8;
  stars = [0,1,2,3,4];

  isFilled(i: number): boolean {
    return i + 1 <= Math.round(this.value);
  }
}
