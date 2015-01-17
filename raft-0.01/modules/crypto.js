var Crypto = (function (raft)
{
	
	var me = {};

	me = function() {
		raft.register_callable("Crypto.Encrypt", me.Encrypt);
		raft.register_callable("Crypto.Decrypt", me.Decrypt);
	}

	me.Encrypt = function(s) {

		s = s[0];

		//Courtesy of http://stackoverflow.com/q/617647/113419
			
	    return (s ? s : this).split('').map(function(_)
	     {
	        if (!_.match(/[A-za-z]/)) return _;
	        c = Math.floor(_.charCodeAt(0) / 97);
	        k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
	        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
	     }).join('');
 
	}

	me.Decrypt = me.Encrypt;

	return me;

}(raft))();