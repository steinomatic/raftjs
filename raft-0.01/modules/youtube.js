
    var Youtube = (function (raft)
{
	
	var me = {};

	me = function() {
		raft.register_callable("Youtube.embedvid", me.embedvid);
	}
    var myId = watch?v=zbYf5_S7oJo; //get from text
    
    if (match && match[2].length == 11) {
        return match[2];
    } else {
    
    } 
  
	me.embedvid = function(s) {
		return s.replace('UUYOUTUBEWW', '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
    + myId + '" frameborder="0" allowfullscreen></iframe>');
	}
	//[[]]
	return me;

}(raft))();

