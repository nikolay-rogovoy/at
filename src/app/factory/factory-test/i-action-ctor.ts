import {IAction} from './i-action';

/***/
export interface IActionCtor {
    /***/
    new(): IAction;
}
