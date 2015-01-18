function assert_equal(value1, value2) {
	if (value1 !== value2) {
		throw new Error("Assertion Failed");
	}
}


function assert_true(value) {
	if (!value) {
		throw new Error("Assertion Failed");
	}
}

function assert_false(value) {
	if (value) {
		throw new Error("Assertion Failed");
	}
}

function foo(params) {
	return "foobar";
}

function bar(params) {
	raft.fire_callback("bar", []);
}

assert_true(raft.register_callable("foo", foo));
assert_false(raft.register_callable("foo", foo));
assert_false(raft.register_callable(27, foo));
assert_false(raft.register_callable("nope", "test"));
assert_equal(raft.callable_registry.length, 1);
assert_equal(raft.fire_callable("foo", []), "foobar");
assert_true(raft.register_callback("bar", bar));
assert_true(raft.link("bar", "foo"));
bar("");

//cleanup
assert_true(raft.unregister_callable("foo")); 