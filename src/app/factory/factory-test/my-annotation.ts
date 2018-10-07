import {IActionCtor} from './i-action-ctor';
import {getAppGlobalStorage} from '../app-global-storage';

/***/
export function MyAnnotation(name: string): Function {
    return function (ctor: IActionCtor, propertyName: string) {
        console.log(`MyAnnotation ->`, ctor, name);
        getAppGlobalStorage().actions.push({name, ctor});
    };
}

