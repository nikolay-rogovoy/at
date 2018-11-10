import { FormControl, ValidatorFn, Validators } from '@angular/forms';
/**Нет никакой возможности вытащить данные из валидаторов*/
export class AppFormControl extends FormControl {

    /***/
    required: boolean;
    /***/
    minlength: number;
    /***/
    maxlength: number;

    /***/
    constructor(formState?: any,
        required?: boolean,
        minlength?: number,
        maxlength?: number,
        validators?: ValidatorFn[]) {
        super(formState, AppFormControl.getValidators(required,
            minlength, maxlength, validators));
            this.required = required;
            this.minlength = minlength;
            this.maxlength = maxlength;
    }

    /***/
    static getValidators(required?: boolean,
        minlength?: number,
        maxlength?: number,
        validators?: ValidatorFn[]): ValidatorFn[] {
        let allValidators: ValidatorFn[] = [];
        if (required) {
            allValidators.push(Validators.required);
        }
        if (minlength) {
            allValidators.push(Validators.minLength(minlength));
        }
        if (maxlength) {
            allValidators.push(Validators.maxLength(maxlength));
        }
        if (validators && validators.length) {
            allValidators.push(...validators);
        }
        return allValidators;
    }
}
