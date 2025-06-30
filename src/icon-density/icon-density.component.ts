import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon-density',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatButtonModule, MatIconModule],
  templateUrl: './icon-density.component.html',
  styleUrls: ['./icon-density.component.scss']
})
export class IconDensityComponent {

}
