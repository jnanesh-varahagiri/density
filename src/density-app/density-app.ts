import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonOverviewExample } from 'src/button-example/button-overview-example';
import { CheckboxOverviewExample } from 'src/checkbox-example/checkbox-overview-example';
import { IconButtonOverviewExample } from 'src/icon-button-example/icon-button-overview-example';
import { InputOverviewExample } from 'src/input-example/input-overview-example';
import { RadioNgModelExample } from 'src/radio-example/radio-ng-model-example';
import { TableBasicExample } from 'src/table-example/table-basic-example';

/**
 * @title Density of components
 */
@Component({
  selector: 'density-app',
  templateUrl: 'density-app.html',
  styleUrls: ['density-app.scss'],
  standalone: true,
  imports: [
    ButtonOverviewExample,
    IconButtonOverviewExample,
    CheckboxOverviewExample,
    InputOverviewExample,
    RadioNgModelExample,
    TableBasicExample,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class DensityApp {
  selected = '';
}
