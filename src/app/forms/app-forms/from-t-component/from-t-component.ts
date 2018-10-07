import { Component, OnInit, ViewChild } from '@angular/core';
import { IFromEntity } from '../entitys/i-from-entity';
import { NgForm } from '@angular/forms';

/***/
@Component({
    selector: 'app-from-t-component',
    templateUrl: './from-t-component.html'
})
export class FromTComponent implements OnInit {

    /***/
    @ViewChild('form')
    form: NgForm;

    /***/
    entity: IFromEntity = <IFromEntity>{ name: 'name', comment: 'com' };

    /***/
    constructor() {
    }

    /***/
    ngOnInit() {
    }
}
