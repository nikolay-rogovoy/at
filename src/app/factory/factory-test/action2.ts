import {IAction} from './i-action';
import {MyAnnotation} from './my-annotation';

/***/
@MyAnnotation('Action2')
export class Action2 implements IAction {
    /***/
    perform() {
        console.log('Action2');
    }
}
