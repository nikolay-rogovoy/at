import { Component, OnInit } from '@angular/core';
import { AddAction } from '../actions';
import { Storage } from '../storage';

/***/
@Component({
    selector: 'app-redux-component',
    templateUrl: './redux-component.html'
})
export class ReduxComponent implements OnInit {

    /***/
    value: number;

    /***/
    constructor(public storage: Storage<number>) {
        this.value = storage.getState();
    }

    /***/
    ngOnInit() {
    }

    /***/
    b1() {
        this.storage.dispatch(new AddAction(3));
    }
}
