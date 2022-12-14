<template><div><h2 id="i-am-in-love-with-jekyll" tabindex="-1"><a class="header-anchor" href="#i-am-in-love-with-jekyll" aria-hidden="true">#</a> I am in Love with Jekyll</h2>
<p>Install --&gt; configure --&gt; Post --&gt; Done</p>
<h3 id="step1-installation" tabindex="-1"><a class="header-anchor" href="#step1-installation" aria-hidden="true">#</a> Step1: Installation</h3>
<p><code v-pre>~ $ gem install jekyll</code></p>
<p><code v-pre>~ $ jekyll new Name-of-your-site</code></p>
<p><code v-pre>~ $ cd Name-of-your-site</code></p>
<p><code v-pre>~/Name-of-your-site $ jekyll serve</code></p>
<p>Test installation</p>
<h4 id="now-browse-to-http-localhost-4000" tabindex="-1"><a class="header-anchor" href="#now-browse-to-http-localhost-4000" aria-hidden="true">#</a> =&gt; Now browse to <a href="http://localhost:4000" target="_blank" rel="noopener noreferrer">http://localhost:4000<ExternalLinkIcon/></a></h4>
<h3 id="step2-configuration" tabindex="-1"><a class="header-anchor" href="#step2-configuration" aria-hidden="true">#</a> Step2: configuration</h3>
<p>In <code v-pre>_config.yml or _config.yaml</code> in <code v-pre>Name-of-your-site</code> folder edit or add following lines:</p>
<p %="" endhighlight="" %="">{% highlight ruby %}
baseurl: /Name-of-your-site
name: Name-of-your-site
markdown: redcarpet
pygments: true</p>
<h3 id="step3-post" tabindex="-1"><a class="header-anchor" href="#step3-post" aria-hidden="true">#</a> Step3: Post</h3>
<p>In <code v-pre>_posts</code> folder create a .md file named as <code v-pre>yyyy-mm-dd-TitleOfPost</code> . In this file first few lines are called [YAML Front Matter] where we assign which layout to use..? ,what is the post title..?, what is the date..?, Which categories..?,what is tag..? For example:-</p>
<h2 %="" highlight="" ruby="" %="" id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h2 id="title-jekyll-up-and-runningcover-cover-jpgdate-2015-05-07-22-32-00categories-posts" tabindex="-1"><a class="header-anchor" href="#title-jekyll-up-and-runningcover-cover-jpgdate-2015-05-07-22-32-00categories-posts" aria-hidden="true">#</a> title: Jekyll Up And Running
cover: cover.jpg
date:   2015-05-07 22:32:00
categories: posts</h2>
<p %="" endhighlight="" %=""></p>
</div></template>


