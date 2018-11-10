import { Component, OnInit, ViewChild } from '@angular/core';
import { IFromEntity } from '../entitys/i-from-entity';
import { FormGroup } from '@angular/forms';
import { AppFormControl } from '../app-form-control';

/***/
@Component({
    selector: 'app-from-component',
    templateUrl: './from-component.html'
})
export class FromComponent implements OnInit {

    /***/
    entity: IFromEntity = <IFromEntity>{};

    /***/
    formGroup = new FormGroup({
        name: new AppFormControl('def_value', true, 5, 10),
        dt: new AppFormControl(new Date(), true, 5, 10)
    });

    /***/
    constructor() {
    }

    /***/
    ngOnInit() {
        this.formGroup.setValue({ name: 'asdasd', dt: new Date() });
    }

    /***/
    submitForm() {
        console.log(this.formGroup.value);
    }
}
