import { NgModule } from '@angular/core';
import { ReduxComponent } from './redux-component/redux-component';
import { RouterModule } from '@angular/router';
import { SimpleStorage } from './simple-storage';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SimpleTestReducer } from './simple-test-reducer';
import { TestReducer } from './store/test/test-reducer';
import { CommonModule } from '@angular/common';
import { TestEffects } from './store/test/test-effects';

@NgModule({
    declarations: [
        ReduxComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'redux-component', component: ReduxComponent }
        ]),
        StoreModule.forRoot({ tests: TestReducer }),
        EffectsModule.forRoot([TestEffects])
    ],
    providers: [
        TestEffects,
        { provide: SimpleStorage, useFactory: getTestStorage }
    ],
})
export class ReduxModule {
}

function getTestStorage() {
    return new SimpleStorage(SimpleTestReducer, 0);
}
