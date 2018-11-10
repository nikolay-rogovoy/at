import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddAction } from '../actions';
import { SimpleStorage } from '../simple-storage';
import { AddTest } from '../store/test/test-action';
import TestListState from '../store/test/test-list-state';
import TestState from '../store/test/test-state';

/***/
@Component({
    selector: 'app-redux-component',
    templateUrl: './redux-component.html'
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
        this.testListState$ = this.store.select(testListState => testListState.tests);
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
    tests: TestListState;
}
