import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    /***/
    title = 'at';

    /***/
    constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    }
    /***/
    gotoRoutingCmp1Component() {
        this.router.navigate(
            ['routing-cmp1-component', { p1: 'foo1', p2: 'bar1' }, 'routing-cmp2-component', { p1: 'foo2', p2: 'bar2' }],
        { queryParams: { q_p1: 'foo', q_p2: 'bar' } });
    }
}
