import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoutingCmp1Component } from './routing-cmp1-component/routing-cmp1-component';
import { RoutingCmp2Component } from './routing-cmp2-component/routing-cmp2-component';

@NgModule({
    declarations: [
        RoutingCmp1Component,
        RoutingCmp2Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'routing-cmp1-component', component: RoutingCmp1Component,
                children: [
                    { path: 'routing-cmp2-component', component: RoutingCmp2Component },
                    {
                        path: 'path_to_component', component: RoutingCmp2Component,
                        outlet: 'outlet1'
                    },
                ]
            }
        ]),
    ],
    providers: [
    ],
})
export class AppRoutingModule {
}
