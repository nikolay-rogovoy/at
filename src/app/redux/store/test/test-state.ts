import TestModel from '../../models/test-model';

/***/
export default class TestState extends TestModel {
    constructor(
        public id: number,
        public name: string,
        public selected: boolean
    ) {
        super(id, name);
    }
}
