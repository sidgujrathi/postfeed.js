# Postfeed.js

Postfeed.js is a simple Javascript library for fetching blog posts and embed them into your own website. It focuses on Title, Content within blog posts i source blog. Currently it is only supports "Tumblr" blogs.

## Installation

Clone the GitHub repository and use postfeed.js to add into your ```<script></script>``` tag

```
$ git clone https://github.com/sidgujrathi/postfeed.js.git
```
Now add postfeed.js to your website src folder and add to your webpage

```<script src="postfeed.js"></script>```

## Usage

Postfeed.js requires a couple of configuration options for end blog you want to fetch. The following example demonstrates how to configure it manually.

```
<script>
	Postfeed.option = {
		url:"http://blog.siddharthgujrathi.com",
		target:"target-div-id"
	}
</script>
```
By deafault ```Postfeed.option.url and Postfeed.option.target``` are set to ```http://staff.tumblr.com``` and ```<body/>```  

Optionally you can set following options for configuration.
```
Postfeed.option = {
		headline:"h1", //How you want to put blog post title as. 
		post_count:"3" //Number of blog post you want to fetch.
	}
```

## License 

Postfeed.js is distributed under the [MIT](https://github.com/sidgujrathi/postfeed.js/blob/master/LICENSE) license.
