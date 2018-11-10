import { Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppFormControl } from './app-form-control';

/***/
export class AppControlComponent {

    /***/
    title: string;

    /***/
    allowSetNull = true;

    /***/
    readonly = false;

    /***/
    property: string;

    /***/
    formGroup: FormGroup;

    /***/
    @Output()
    changed = new EventEmitter<any>();

    /***/
    genChanged(value) {
        this.changed.emit(value);
    }

    /***/
    isNull(): boolean {
        return this.formGroup.value[this.property] == null;
    }

    /***/
    setNull() {
        let param = {};
        param[this.property] = null;
        this.formGroup.patchValue(param);
    }

    /***/
    getControl(): AppFormControl {
        return <AppFormControl>this.formGroup.controls[this.property];
    }

    /***/
    get isRequiredError(): boolean {
        let control = this.getControl();
        if (control && control.errors) {
            return control.errors.required;
        } else {
            return false;
        }
    }

    /***/
    get isMinlengthError(): boolean {
        let control = this.getControl();
        if (control && control.errors) {
            return control.errors.minlength;
        } else {
            return false;
        }
    }

    /***/
    get minlengthSize(): number {
        let control = this.getControl();
        if (control) {
            return control.minlength;
        } else {
            return 0;
        }
    }

    /***/
    get maxlengthSize(): number {
        let control = this.getControl();
        if (control) {
            return control.maxlength;
        } else {
            return 0;
        }
    }

    /***/
    get isMaxlengthError(): boolean {
        let control = this.getControl();
        if (control && control.errors) {
            return control.errors.maxlength;
        } else {
            return false;
        }
    }

    /***/
    get isTouched(): boolean {
        let control = this.getControl();
        if (control) {
            return control.touched;
        } else {
            return false;
        }
    }
}
