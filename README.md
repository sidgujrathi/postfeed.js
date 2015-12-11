# Postfeed.js

Postfeed.js is a simple Javascript library for fetching blog posts and embed them into your own website. It focuses on Title and Content within blog posts in the source blog. Currently it only supports "Tumblr" blogs.

## Installation

Clone the GitHub repository and use postfeed.js to add into your ```<script></script>``` tag

```
$ git clone https://github.com/sidgujrathi/postfeed.js.git
```
Now add postfeed.js file to your website root folder and include it in your HTML page

```<script src="postfeed.js"></script>```

## Usage

Postfeed.js requires a couple of configurations to be done in order to fetch the blog posts from the source blog. The following example demonstrates how to configure it manually.

```
<script>
	Postfeed.options = {
		url:"http://blog.siddharthgujrathi.com",
		target:"target-div-id"
	}
</script>
```
By default ```Postfeed.options.url and Postfeed.options.target``` are set to ```http://staff.tumblr.com``` and ```<body/>``` respectively.

Optionally you can set following options for configuration.
```
Postfeed.options = {
		headline:"h1", //How you want to put blog post title as. 
		post_count:"3" //Number of blog post you want to fetch.
	}
```

## License 

Postfeed.js is distributed under the [MIT](https://github.com/sidgujrathi/postfeed.js/blob/master/LICENSE) license.
