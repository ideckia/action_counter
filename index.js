class Counter {

    setup(props, server) {
        this.props = props;
        this.server = server;

        if (this.props == null) {
            this.props = {};
        }

        if (this.props.initial == null) {
            this.props.initial = 0;
        }

        if (this.props.increment == null) {
            this.props.increment = 1;
        }
    }

    init(initialState) {
        this.counter = Math.floor(this.props.initial);
        this.increment = Math.floor(this.props.increment);
        initialState.text = this.counter.toString();

        return Promise.resolve(initialState);
    }

    execute(currentState) {
        this.counter += this.increment;
        currentState.text = this.counter.toString();
        return Promise.resolve({ state: currentState });
    }

    onLongPress(currentState) {
        this.counter = Math.floor(this.props.initial);
        currentState.text = this.counter.toString();
        return Promise.resolve({ state: currentState });
    }

    toJson() {
        return { name: "counter", props: this.props };
    }

    getActionDescriptor() {
        return Promise.resolve({
            name: "counter",
            description: "A simple counter, up or down",
            props: [{
                name: "increment",
                type: "Int",
                defaultValue: "1",
                description: "Increment number"
            },
            {
                name: "initial",
                type: "Int",
                defaultValue: "0",
                description: "Initial value"
            }]
        });
    }
}

exports.IdeckiaAction = Counter;
