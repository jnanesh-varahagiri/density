import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-density',
  standalone: true,
  imports: [CommonModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './button-density.component.html',
  styleUrls: ['./button-density.component.scss']
})
export class ButtonDensityComponent {

}
