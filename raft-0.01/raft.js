var raft = (function() {

	//Private vars
	
	var me = {},
	temp = null,
	index = 0;

	//Public vars

	me.callable_registry = [];
	me.callback_registry = [];

	//Private functions

	function generate_registry_object (name, pointer) {

		return {
			name: name,
			pointer: pointer
		};

	}

	//Public functions

	//Functions related to callables

	me.register_callable = function (name, pointer) {

		if (name.constructor !== String || pointer.constructor !== Function) {
			return false;
		}

		temp = generate_registry_object(name, pointer);

		for (index in me.callable_registry) {
			if (me.callable_registry[index].name === temp.name) {
				return false;
			}
		}

		me.callable_registry.push(temp);
		return true;
	}

	me.unregister_callable = function (name) {

		//Don't care if it exists just remove anyway

		if (name.constructor !== String) {
			return false;
		}

		temp = [];

		for (index in me.callable_registry) {
			if (me.callable_registry[index].name !== name) {
				temp.push(me.callable_registry[index]);
			}
		}

		me.callable_registry = temp;

		return true;

	}


	me.fire_callable = function (name, parameters) {

		if (name.constructor !== String, parameters.constructor !== Array) {
			return false;
		}

		for (index in me.callable_registry) {
			if (me.callable_registry[index].name === name) {
				return me.callable_registry[index].pointer(parameters);
			}
		}

		return false;

	}


	me.get_callable_list = function () {

		temp = [];

		for (index in me.callable_registry) {
			temp.push(me.callable_registry[index].name);
		}

		return temp;

	}


	//Functions related to callbacks

	me.register_callback = function (name, pointer) {



	}



	me.on_callback_fired = function (name, params) {

	}

	
	return me;

}());