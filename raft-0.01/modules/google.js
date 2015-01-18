var Google = (function (raft)
{
	
	var me = {};

	me = function() {
		raft.register_callable("Google.Googlify", me.Googlify);
	}

	me.Googlify = function(s) {
		return s.replace('UUGOOGLEWW', '<img src="https://www.google.com/images/srpr/logo11w.png" width="100" height="35" />');
	}
	
	return me;

}(raft))();