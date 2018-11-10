import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppControlComponent } from '../app-control-component';

/***/
@Component({
    selector: 'app-input-component',
    templateUrl: './input-component.html'
})
export class InputComponent extends AppControlComponent implements OnInit {

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
    }
}
