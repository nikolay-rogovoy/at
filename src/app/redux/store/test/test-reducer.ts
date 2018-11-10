import * as TestActions from './test-action';
import TestState from './test-state';
import TestListState from './test-list-state';

/***/
export type Action = TestActions.All;

/***/
const defaultTestStates: TestState[] = [
];

/***/
const defaultState: TestListState = <TestListState>{
    testStates: defaultTestStates
};

export function TestReducer(state: TestListState = defaultState, action: Action) {
    switch (action.type) {
        case TestActions.GET_TEST:
            return { ...state, testStates: [...state.testStates.filter(x => x.id === action.payload)] };
        case TestActions.GET_TESTS:
            return state;
        case TestActions.GET_TESTS_ERROR:
            return state;
        case TestActions.ADD_TEST_SYNC:
            return { ...state, testStates: [...state.testStates, action.payload] };
        default:
            return state;
    }
}
