
    var Youtube = (function (raft)
{
	
	var me = {};

	me = function() {
		raft.register_callable("Youtube.convert", me.Youtubify);
	}
    var myId = ; //get from text
        if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
	me.Youtubify = function(s) {
		return s.replace('UUWW', '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
    + myId + '" frameborder="0" allowfullscreen></iframe>');
	}
	//[[]]
	return me;

}(raft))();