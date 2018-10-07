
/***/
export class AddAction implements IAction {
    /***/
    public type = 'add';
    /***/
    constructor(public payload: any) {
    }
}
