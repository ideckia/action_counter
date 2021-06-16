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
	
	init() {
		this.counter = Math.floor(this.props.initial);
		this.increment = Math.floor(this.props.increment);
	}
	
	execute(currentState) {
		return new Promise((resolve, _) => {
			this.counter += this.increment;
			currentState.text = this.counter.toString();
			resolve(currentState);
		});
	}
	
	toJson() {
		return { name : "counter", props : this.props};
	}
	
	getActionDescriptor() {
		return {
			name : "Counter",
			props : [{
				name : "increment",
				type : "Int",
				defaultValue : "1",
				description : "Increment number"
			},
			{
				name : "initial",
				type : "Int",
				defaultValue : "0",
				description : "Initial value"
			}]
		};
	}
}

exports.IdeckiaAction = Counter;
