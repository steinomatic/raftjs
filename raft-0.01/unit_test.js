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

function foo() {
	console.log("Foo");
}

assert_true(raft.register_callback("foo", foo));
assert_false(raft.register_callback("foo", foo));