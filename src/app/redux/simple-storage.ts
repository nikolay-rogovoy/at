import { Injectable } from '@angular/core';
import { Reducer } from './reducer';
import { Observable, Subject } from 'rxjs';

/***/
@Injectable()
export class SimpleStorage<T> {
    /***/
    get changed(): Observable<void> {
        return this._changed;
    }
    /***/
    _changed = new Subject<void>();
    /***/
    private state: T;
    /***/
    constructor(private reducer: Reducer<T>, initialState: T) {
        this.state = initialState;
    }
    /***/
    getState(): T {
        return this.state;
    }
    /***/
    dispatch(action: IAction): void {
         this.reducer(this.state, action).subscribe((state: T) => {
            this.state = state;
            this._changed.next(null);
        });
    }
}
