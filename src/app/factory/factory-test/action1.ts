import {IAction} from './i-action';
import {MyAnnotation} from './my-annotation';

/***/
@MyAnnotation('Action1')
export class Action1 implements IAction {
    /***/
    perform() {
        console.log('Action1');
    }
}
