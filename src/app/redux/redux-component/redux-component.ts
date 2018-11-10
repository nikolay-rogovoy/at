import { Component, OnInit } from '@angular/core';
import { Store, STORE_FEATURES, _FEATURE_REDUCERS, combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddAction } from '../actions';
import { SimpleStorage } from '../simple-storage';
import { AddTest } from '../store/test/test-action';
import TestListState from '../store/test/test-list-state';
import TestState from '../store/test/test-state';
import { StoreFeature } from '@ngrx/store/src/models';
import { TestReducer } from '../store/test/test-reducer';
import { testSelector } from '../store/test/selectors';

/***/
@Component({
    selector: 'app-redux-component',
    templateUrl: './redux-component.html',
    providers: [
        {
            provide: STORE_FEATURES,
            multi: true,
            useValue: <StoreFeature<any, any>>{
                key: 'component',
                reducerFactory: combineReducers,
                metaReducers: [],
                initialState: {},
            },
        },
        { provide: _FEATURE_REDUCERS, multi: true, useValue: { tests: TestReducer } },
    ]
})
export class ReduxComponent implements OnInit {

    /***/
    testListState$: Observable<TestListState>;

    /***/
    value: number;

    /***/
    constructor(public simpleStorage: SimpleStorage<number>,
        public store: Store<AppState>) {
        this.value = simpleStorage.getState();
        simpleStorage.changed.subscribe(() => {
            this.value = simpleStorage.getState();
        });
    }

    /***/
    ngOnInit() {
        this.testListState$ = this.store.select(testSelector);
        this.testListState$.subscribe(x => console.log(x.testStates));
    }

    /***/
    b1() {
        this.simpleStorage.dispatch(new AddAction(3));
    }
    /***/
    b2() {
        this.store.dispatch(new AddTest(<TestState>{ id: 1, name: 'asdasd', selected: false }));
    }
}

/***/
export interface AppState {
    /***/
    test: IReduxModule;
    /***/
    component: IReduxModule;
}

/***/
export interface IReduxModule {
    /***/
    tests: TestListState;
}
