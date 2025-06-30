import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ButtonDensityComponent } from "../button-density/button-density.component";

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    ButtonDensityComponent,

  ],
})
export class ButtonOverviewExample {
  selected = '';
  options = [...Array(4).keys()].map((x) => -x);
}
