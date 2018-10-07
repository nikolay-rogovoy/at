import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FromComponent } from './from-component/from-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input-component/input-component';
import { FromTComponent } from './from-t-component/from-t-component';
import { InputTComponent } from './input-t-component/input-t-component';

@NgModule({
    declarations: [
        InputComponent,
        InputTComponent,
        FromComponent,
        FromTComponent
    ],
    imports: [
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
