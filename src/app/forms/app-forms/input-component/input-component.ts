import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

/***/
@Component({
    selector: 'app-input-component',
    templateUrl: './input-component.html'
})
export class InputComponent implements OnInit {

    /***/
    @Input()
    formGroup: FormGroup;

    /***/
    @Input()
    entity = {};

    /***/
    @Input()
    property = '';

    /***/
    constructor() {
    }

    /***/
    ngOnInit() {
    }
}
