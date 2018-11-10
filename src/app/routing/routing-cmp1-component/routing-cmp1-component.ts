import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

/***/
@Component({
    selector: 'app-routing-cmp1-component',
    templateUrl: './routing-cmp1-component.html'
})
export class RoutingCmp1Component implements OnInit {

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

    /***/
    showOutlet() {
        // queryParams теряются не смотря на relativeTo
        this.route.queryParams.subscribe((queryParams) => {
            const outlets = {};
            outlets[`outlet1`] = ['path_to_component', { p1: 'foo3', p2: 'bar3' }];
            // Конфиг навигации
            const navigate = { outlets: outlets };
            this.router.navigate([navigate], { relativeTo: this.route, queryParams: queryParams });
        });
    }
    /***/
    disableOutlet() {
        this.route.queryParams.subscribe((queryParams) => {
            const outlets = {};
            outlets[`outlet1`] = null;
            const navigate = { outlets: outlets };
            this.router.navigate([navigate], { relativeTo: this.route, queryParams: queryParams });
        });
    }
}

/***/
interface IParam {
    /***/
    name: string;
    /***/
    value: any;
}
