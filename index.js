const path = require('path');

class Counter {

    setup(props, core) {
        this.props = props;
        this.core = core;
        this.localizedTexts = core.data.getLocalizations(path.join(__dirname, 'loc'));

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

    getActionDescriptor() {
        const locale = this.core.data.getCurrentLocale();
        return Promise.resolve({
            name: "counter",
            description: this.localizedTexts.tr(locale, "action_description"),
            props: [{
                name: "increment",
                type: "Int",
                defaultValue: "1",
                description: this.localizedTexts.tr(locale, "prop_increment")
            },
            {
                name: "initial",
                type: "Int",
                defaultValue: "0",
                description: this.localizedTexts.tr(locale, "prop_initial")
            }]
        });
    }
}

exports.IdeckiaAction = Counter;
