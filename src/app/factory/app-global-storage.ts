import {IActionCtor} from './factory-test/i-action-ctor';

/***/
export function getAppGlobalStorage(): AppGlobalStorage {
    const globalScope: any = window;
    if (!globalScope.appGlobalStorage) {
        globalScope.appGlobalStorage = new AppGlobalStorage();
    }
    return globalScope.appGlobalStorage;
}

/***/
export class AppGlobalStorage {
    /***/
    actions: IActionItem[] = [];
}

/***/
export interface IActionItem {
    /***/
    name: string;
    /***/
    ctor: IActionCtor;
}
