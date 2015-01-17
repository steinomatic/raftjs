var raft = (function() {

	//Private vars
	
	var me = {},
	temp = null,
	index = 0;

	//Public vars

	me.registry = [];

	//Private functions

	function generate_registry_object(name, pointer) {
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

	
	return me;

}());