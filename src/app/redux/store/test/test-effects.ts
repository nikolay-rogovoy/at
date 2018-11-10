import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../../redux-component/redux-component';
import * as TestActions from './test-action';
import TestListState from './test-list-state';

@Injectable()
export class TestEffects {
    constructor(
        private actions: Actions,
        private store: Store<AppState>
    ) { }

    @Effect()
    addTest$ = this.actions.ofType(TestActions.ADD_TEST).pipe(
        withLatestFrom<TestActions.AddTest, TestListState>(this.store.select(appState => appState.tests)),
        switchMap(([action, testListState]) => {
            console.log('ADD_TEST effect');
            return of(new TestActions.AddTestSync(action.payload));
        })
    );
}
