import { Action } from '@ngrx/store';
import TestState from './test-state';

/***/
export const GET_TEST = '[Test] GET_TEST';
/***/
export const GET_TESTS = '[Test] GET_TESTS';
/***/
export const GET_TESTS_ERROR = '[Test] GET_TESTS_ERROR';
/***/
export const ADD_TEST = '[Test] ADD_TEST';

/***/
export class GetTests implements Action {
    readonly type = GET_TESTS;
}

/***/
export class GetTestsError implements Action {
    readonly type = GET_TESTS_ERROR;
}

/***/
export class GetTest implements Action {
    /***/
    readonly type = GET_TEST;
    /***/
    constructor(public payload: number) { }
}

/***/
export class AddTest implements Action {
    /***/
    readonly type = ADD_TEST;
    /***/
    constructor(public payload: TestState) { }
}

/***/
export type All = GetTest | GetTests | GetTestsError | AddTest;
