import { AppState } from "../../redux-component/redux-component";

export function testSelector(appState: AppState) {
    return appState.component.tests;
}