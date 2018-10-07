import {NgModule} from '@angular/core';
import {MyComponent} from './my-component/my-component';
import {RouterModule} from '@angular/router';
import {ActionService} from './factory-test/action-service';
import {Action1} from './factory-test/action1';
import {Action2} from './factory-test/action2';

@NgModule({
    declarations: [
        MyComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'my-component', pathMatch: 'full'},
            {path: 'my-component', component: MyComponent}
        ]),
    ],
    providers: [
        ActionService.create([Action1, Action2])
    ],
})
export class FactoryModule {
}
