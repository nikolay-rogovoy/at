import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FromComponent } from './from-component/from-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input-component/input-component';
import { FromTComponent } from './from-t-component/from-t-component';
import { InputTComponent } from './input-t-component/input-t-component';
import { CommonModule } from '@angular/common';
import { DatetimeInputComponent } from './datetime-input-component/datetime-input-component';

@NgModule({
    declarations: [
        InputComponent,
        DatetimeInputComponent,
        InputTComponent,
        FromComponent,
        FromTComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'from_component', component: FromComponent },
            { path: 'from_t_component', component: FromTComponent },
            { path: '**', component: FromComponent }
        ])
    ],
    providers: []
})
export class AppFormsModule {
}
