import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

/***/
@Component({
    selector: 'app-routing-cmp2-component',
    templateUrl: './routing-cmp2-component.html'
})
export class RoutingCmp2Component implements OnInit {

    matrixParams: IParam[] = [];

    queryParams: IParam[] = [];

    /***/
    constructor(public router: Router, public route: ActivatedRoute) {
    }

    /***/
    ngOnInit() {
        this.route.params.subscribe(
            (params) => {
                this.matrixParams = [];
                Object.keys(params).forEach((key) => {
                    this.matrixParams.push({ name: key, value: params[key] });
                });
            }
        );
        this.route.queryParams.subscribe(
            (params) => {
                this.queryParams = [];
                Object.keys(params).forEach((key) => {
                    this.queryParams.push({ name: key, value: params[key] });
                });
            }
        );
    }
}

/***/
interface IParam {
    /***/
    name: string;
    /***/
    value: any;
}
