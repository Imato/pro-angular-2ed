export class Model {
    user;
    items;

    constructor() {
        this.user = 'Imato';
        this.items = [new TodoItem('Buy Flowers', false),
        new TodoItem('Get Shoes', false),
        new TodoItem('Collect Tickets', false),
        new TodoItem('Call Joe', false)];
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.done = done;
        this.action = action;
    }
}
