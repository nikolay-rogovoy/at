import {Component, OnInit} from '@angular/core';
import {getAppGlobalStorage} from '../app-global-storage';
import {ActionService} from '../factory-test/action-service';

/***/
@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.html'
})
export class MyComponent implements OnInit {
    /***/
    constructor(public actionService: ActionService) {
    }

    /***/
    ngOnInit() {
        this.actionService.getActions().forEach(x => {
            const action = new x.ctor();
            action.perform();
        });
    }
}
