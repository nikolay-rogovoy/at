import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppControlComponent } from '../app-control-component';

/***/
@Component({
    selector: 'app-datetime-input-component',
    templateUrl: './datetime-input-component.html'
})
export class DatetimeInputComponent extends AppControlComponent implements OnInit {

    /***/
    @Input()
    formGroup: FormGroup;

    /***/
    @Input()
    property = '';

    /***/
    constructor() {
        super();
    }

    /***/
    ngOnInit() {
        this.onChanges();
    }

    /***/
    onChanges(): void {
        this.formGroup.get(this.property).valueChanges.subscribe(value => {
            if (value && this.formGroup.value.dt != new Date(value)) {
                console.log(new Date(value));
                this.formGroup.patchValue({ dt: new Date(value) }, { emitEvent: false });
            }
        });
    }
}
