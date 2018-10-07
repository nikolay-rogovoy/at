import {Injectable} from '@angular/core';
import {IActionCtor} from './i-action-ctor';
import {getAppGlobalStorage, IActionItem} from '../app-global-storage';

/***/
@Injectable()
export class ActionService {
    /***/
    constructor(private actions: IActionCtor[] = []) {
        console.log('ActionService ->', actions);
    }

    /***/
    static create(actions: IActionCtor[]) {
        return {provide: ActionService, useFactory: () => new ActionService(actions)};
    }

    /***/
    getActions(): IActionItem[] {
        return getAppGlobalStorage().actions;
    }
}
