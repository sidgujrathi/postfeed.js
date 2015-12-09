(function(window)
{
	'use strict';
	function define_Postfeed()
	{
		var Postfeed={};
		Postfeed.option={
			url:"http://staff.tumblr.com/rss",
			target:"body"
		};
		Postfeed.fetchPost=function()
		{
			
		}

		return Postfeed;
	
	}

	if(typeof(Postfeed) === 'undefined')
		{
    	    window.Postfeed = define_Postfeed();
    	}
    else{
        console.log("Postfeed already defined.");
    }
	
	
})(window);