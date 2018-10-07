import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer, NgForm } from '@angular/forms';
import { IFromEntity } from '../entitys/i-from-entity';

/***/
@Component({
    selector: 'app-input-t-component',
    templateUrl: './input-t-component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
},
)
export class InputTComponent implements OnInit {

    /***/
    @Input()
    entity = <IFromEntity>{};

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
