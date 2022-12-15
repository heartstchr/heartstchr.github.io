import{_ as n,V as s,W as d,X as a,$ as e,a2 as i,a3 as r,E as o}from"./framework-0696632f.js";const l={},c=a("h3",{id:"step-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-1","aria-hidden":"true"},"#"),e(),a("em",null,"Step 1"),e(" :")],-1),h={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},u=r(`<h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> <em>Step 2</em> :</h3><p>Create a repository(it is Basically, a folder which will contain and track your project)</p><h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> <em>Step 3</em> :</h3><p>Create a folder in your local computer where you want to keep your project with the same name of repository in step2.</p><h3 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> <em>Step 4</em> :</h3><p>Through Terminal Dive into the folder you just created then run this command</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git clone &lt;Repo Path&gt; .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will copy and paste all the files or folder into your local system. where replace variable with <code>SSH clone URL or Http clone url</code> which you have to copy from <code>https://github.com/\\&lt;userName\\&gt;/\\&lt;repositoryName\\&gt;</code> bottom right of the page and dot signifies copy all files and folder of the repository in github to folder name same as repository in local system</p><h3 id="step-5" tabindex="-1"><a class="header-anchor" href="#step-5" aria-hidden="true">#</a> <em>Step 5</em> :</h3>`,9),p={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},m=r(`<h3 id="step-6" tabindex="-1"><a class="header-anchor" href="#step-6" aria-hidden="true">#</a> <em>Step 6</em> :</h3><p>Afer modifying any thingin in local folder named same as repository run</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git status 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will show you the file which you have added, deleted, modified</p><h3 id="step-7" tabindex="-1"><a class="header-anchor" href="#step-7" aria-hidden="true">#</a> <em>Step 7</em> :</h3><p>This will add your local changes</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git add .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>wait wait.. you will not get any this in online github repository.</p><h3 id="step-8" tabindex="-1"><a class="header-anchor" href="#step-8" aria-hidden="true">#</a> <em>Step 8</em> :</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git commit -m &#39;what ever message you want you can but it&#39;s beter to give what are the changes you made this may vary for different commit&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will commit all changes whit you just added in previous step.</p><h3 id="step-9" tabindex="-1"><a class="header-anchor" href="#step-9" aria-hidden="true">#</a> <em>step 9</em> :</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will finally push all the changes you made in local to github repository where origin is master branch.And</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git push origin gh-pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>this command push all the changes you made in local to github repository where origin is gh-pages branch. A github repository can have <code>branch:master or branch:gh-pages</code>.Every time you run this command it will ask you user credential which you signed in with. ###<em>Step 10</em> : For one time user credential run $ <code>git remote set-url origin git@github.com:&lt;Username&gt;/&lt;Project&gt;.git</code></p><h3 id="step-11" tabindex="-1"><a class="header-anchor" href="#step-11" aria-hidden="true">#</a> <em>step 11</em> :</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is actually fetch github repository and merge with local folder named as repository name . this will generate conflict if you haven&#39;t commited you local changes yet. To remove that conflict you can do manually or follow step 13 and step 14.</p><h3 id="step-12" tabindex="-1"><a class="header-anchor" href="#step-12" aria-hidden="true">#</a> <em>Step 12</em> :</h3><p>To see the file which is having the conflict run in terminal</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ grep -nr &quot;&lt;&lt;&lt;&lt;&lt;&quot; *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-13" tabindex="-1"><a class="header-anchor" href="#step-13" aria-hidden="true">#</a> <em>Step 13</em> :</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git reset HEAD #Reset in history 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-14" tabindex="-1"><a class="header-anchor" href="#step-14" aria-hidden="true">#</a> <em>Step 14</em> :</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git stash #To remove local changes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26);function g(v,b){const t=o("ExternalLinkIcon");return s(),d("div",null,[c,a("p",null,[e("Create an account in "),a("a",h,[e("Github"),i(t)])]),u,a("p",null,[e("Initially it will have three file .gitignore, LICENSE, "),a("a",p,[e("README.md"),i(t)]),e(" . Now, in this folder you can create, delete, modify your project.")]),m])}const f=n(l,[["render",g],["__file","2015-05-10-git-basic.html.vue"]]);export{f as default};
