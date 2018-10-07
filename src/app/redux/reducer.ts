import { Observable } from 'rxjs/index';

/***/
export type Reducer<T> = (state: T, action: IAction) => Observable<T>;
