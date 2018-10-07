import { NgModule } from '@angular/core';
import { ReduxComponent } from './redux-component/redux-component';
import { RouterModule } from '@angular/router';
import { Storage } from './storage';
import { TestReducer } from './test-reducer';

@NgModule({
    declarations: [
        ReduxComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'redux-component', component: ReduxComponent }
        ]),
    ],
    providers: [
        {provide: Storage, useFactory: getTestStorage}
    ],
})
export class ReduxModule {
}

function getTestStorage() {
    return new Storage(TestReducer, 0);
}
