import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ColorPickerComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ColorPickerComponent
     ],
    exports: [
        ColorPickerComponent
    ]
})
export class ColorPickerModule { }
