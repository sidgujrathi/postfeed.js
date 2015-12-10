(function(window)
{
	'use strict';
	function define_Postfeed()
	{
		var Postfeed={};
		Postfeed.option={
			url:"http://staff.tumblr.com/rss",
			target:"body",
			headline:"h2",
			post_count:3
		};
		Postfeed.fetchPost=function()
		{
			alert("Configurations are "+JSON.stringify(Postfeed));
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
