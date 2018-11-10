import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionMainComponent } from './change-detection-main-component/change-detection-main-component';

@NgModule({
    declarations: [
        ChangeDetectionMainComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'change-detection-main-component', component: ChangeDetectionMainComponent,
            }
        ]),
    ],
    providers: [
    ],
})
export class AppChangeDetectionModule {
}
