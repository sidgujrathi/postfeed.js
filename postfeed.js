(function(window)
{
	'use strict';
	function define_Postfeed()
	{
		var Postfeed={};
		var url="http://staff.tumblr.com/rss";
		Postfeed.fetchPost=function()
		{
			
		}
	
		if(typeof(Postfeed) === 'undefined')
		{
    	    window.Postfeed = define_Postfeed();
    	}
    else{
        console.log("Postfeed already defined.");
    }
	}
	
	
})(window);