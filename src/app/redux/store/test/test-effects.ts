import { Injectable } from '@angular/core';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';
import { ADD_TEST } from './test-action';
import { of } from 'rxjs';
import * as TestActions from './test-action';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux-component/redux-component';

@Injectable()
export class TestEffects {
    constructor(
        private actions: Actions,
        private store: Store<AppState>
    ) { }

    @Effect()
    getTest$ = this.actions.ofType(ADD_TEST).pipe(
        switchMap((action: TestActions.AddTest) => {
            return withLatestFrom(this.store)
            .pipe();
            return of(action.payload);
        }),
        map((ss) => {
            return TestActions
        })
    );

}
