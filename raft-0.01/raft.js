var raft = (function() {

	//Private vars
	
	var me = {},
	temp = null,
	index = 0;

	//Public vars

	me.registry = [];

	//Private functions

	function generate_registry_object (name, pointer) {
		return {
			name: name,
			pointer: pointer
		};
	}

	//Public functions

	me.register_callback = function (name, pointer) {

		if (name.constructor !== String || pointer.constructor !== Function) {
			return false;
		}

		temp = generate_registry_object(name, pointer);

		for (index in me.registry) {
			if (me.registry[index].name === temp.name) {
				return false;
			}
		}

		me.registry.push(temp);
		return true;
	}


	me.fire_callback = function (name, parameters) {

		if (name.constructor !== String, parameters.constructor !== Array) {
			return false;
		}

		for (index in me.registry) {
			if (me.registry[index].name === name) {
				return me.registry[index].pointer(parameters);
			}
		}

		return false;

	}


	me.get_callback_list = function () {

		temp = [];

		for (index in me.registry) {
			temp.push(me.registry[index].name);
		}

		return temp;

	}

	
	return me;

}());