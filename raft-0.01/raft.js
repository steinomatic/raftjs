var raft = (function() {

	//Private vars
	
	var me = {},
	temp = null,
	index = 0,
	index2 = 0;

	//Public vars

	me.callable_registry = [];
	me.callback_registry = [];
	me.linkage_registry = [];

	//Private functions

	function generate_registry_object (name, pointer) {

		return {
			name: name,
			pointer: pointer
		};

	}

	function generate_linkage_object (callback, callable) {

		return {
			callback: callback,
			callable: callable
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
		// if (name.constructor !== String, parameters.constructor !== Array) {
		// 	return false;
		// }
		//TODO: Figure out where parameter is getting de-array'd

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

		if (name.constructor !== String || pointer.constructor !== Function) {
			return false;
		}

		temp = generate_registry_object(name, pointer);

		for (index in me.callback_registry) {
			if (me.callback_registry[index].name === temp.name) {
				return false;
			}
		}

		me.callback_registry.push(temp);
		return true;

	}

	me.unregister_callback = function (name, pointer) {

		if (name.constructor !== String || pointer.constructor !== Function) {
			return false;
		}

		temp = [];

		for (index in me.callback_registry) {
			if (me.callback_registry[index].name !== name) {
				temp.push(me.callback_registry[index]);
			}
		}

		me.callback_registry = temp;

		return true;


	}



	me.fire_callback = function (name, params) {

		if (name.constructor !== String || params.constructor !== Array) {
			return false;
		}
		for (index in me.linkage_registry) {
			if (me.linkage_registry[index].callback === name) {
				params = me.fire_callable(me.linkage_registry[index].callable, params);
			}
		}


		return params;
	}


	//Functions related to linkages

	me.link = function (callback, callable) {

		if (callback.constructor !== String || callable.constructor !== String) {
			return false;
		}

		temp = generate_linkage_object(callback, callable);

		for (index in me.linkage_registry) {
			if (temp.callback === me.linkage_registry[callback] && temp.callable === me.linkage_registry[callable]) {
				return false;
			}
		}

		me.linkage_registry.push(temp);

		return true;
	}

	
	return me;

}());