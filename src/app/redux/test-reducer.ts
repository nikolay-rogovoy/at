import { Observable, of } from 'rxjs/index';

/***/
export function TestReducer(state: number, action: IAction): Observable<number> {
    switch (action.type) {
        case 'add':
            return of(state + action.payload);
        case 'minus':
            return of(state - action.payload);
        default:
            return of(state);
    }
}
