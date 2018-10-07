import { Component, OnInit, ViewChild } from '@angular/core';
import { IFromEntity } from '../entitys/i-from-entity';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

/***/
@Component({
    selector: 'app-from-component',
    templateUrl: './from-component.html'
})
export class FromComponent implements OnInit {

    /***/
    @ViewChild('form')
    form: NgForm;

    /***/
    entity: IFromEntity = <IFromEntity>{};

    /***/
    formGroup = new FormGroup({
        name: new FormControl()
    });

    /***/
    constructor() {
    }

    /***/
    ngOnInit() {
        this.formGroup.setValue({name: 'asdasd'});
    }
}
