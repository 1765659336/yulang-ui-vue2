import{_ as s,c as n,o as a,a as l}from"./app.0aef8e55.js";const b=JSON.parse('{"title":"\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95ED\u5305\u7684\u6848\u4F8B","slug":"\u95ED\u5305\u7684\u6848\u4F8B","link":"#\u95ED\u5305\u7684\u6848\u4F8B","children":[]},{"level":2,"title":"\u95ED\u5305\u7684\u4F5C\u7528","slug":"\u95ED\u5305\u7684\u4F5C\u7528","link":"#\u95ED\u5305\u7684\u4F5C\u7528","children":[]},{"level":2,"title":"\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F","slug":"\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F","link":"#\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F","children":[{"level":3,"title":"Vue\u54CD\u5E94\u5F0F\u539F\u7406Object.defineProprty","slug":"vue\u54CD\u5E94\u5F0F\u539F\u7406object-defineproprty","link":"#vue\u54CD\u5E94\u5F0F\u539F\u7406object-defineproprty","children":[]},{"level":3,"title":"\u9632\u6296","slug":"\u9632\u6296","link":"#\u9632\u6296","children":[]},{"level":3,"title":"\u51FD\u6570\u67EF\u91CC\u5316","slug":"\u51FD\u6570\u67EF\u91CC\u5316","link":"#\u51FD\u6570\u67EF\u91CC\u5316","children":[]}]},{"level":2,"title":"\u6A21\u5757\u4E0E\u6A21\u5F0F","slug":"\u6A21\u5757\u4E0E\u6A21\u5F0F","link":"#\u6A21\u5757\u4E0E\u6A21\u5F0F","children":[]},{"level":2,"title":"\u73B0\u4EE3\u6A21\u5757\u5316\u673A\u5236","slug":"\u73B0\u4EE3\u6A21\u5757\u5316\u673A\u5236","link":"#\u73B0\u4EE3\u6A21\u5757\u5316\u673A\u5236","children":[]}],"relativePath":"Books/Dontknow/Chapterone/closure.md","lastUpdated":1667879025000}'),p={name:"Books/Dontknow/Chapterone/closure.md"},e=l(`<h1 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h1><h2 id="\u95ED\u5305\u7684\u6848\u4F8B" tabindex="-1">\u95ED\u5305\u7684\u6848\u4F8B <a class="header-anchor" href="#\u95ED\u5305\u7684\u6848\u4F8B" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u6309\u7406\u6765\u8BF4fn1()\u6267\u884C\u5B8C\u4E4B\u540E\u5F15\u64CE\u4F1A\u5783\u573E\u56DE\u6536\u6389fn1()\u51FD\u6570\uFF0C\u4F46\u662Ffn();\u4E5F\u5C31\u662Ffn2()\u6267\u884C\u7684\u65F6\u5019\u4F9D\u7136\u53EF\u4EE5\u8BBF\u95EE\u5230a\u7684\u503C\uFF0Cfn2\u4F9D\u7136\u6709\u5BF9fn1\u51FD\u6570\u5185\u90E8\u4F5C\u7528\u57DF\u7684\u5F15\u7528\uFF0C\u8FD9\u4E2A\u5F15\u7528\u5C31\u662F\u95ED\u5305\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u95ED\u5305\u7684\u4F5C\u7528" tabindex="-1">\u95ED\u5305\u7684\u4F5C\u7528 <a class="header-anchor" href="#\u95ED\u5305\u7684\u4F5C\u7528" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5728 foo() \u6267\u884C\u540E\uFF0C\u901A\u5E38\u4F1A\u671F\u5F85 foo() \u7684\u6574\u4E2A\u5185\u90E8\u4F5C\u7528\u57DF\u90FD\u88AB\u9500\u6BC1\uFF0C\u56E0\u4E3A\u6211\u4EEC\u77E5\u9053\u5F15\u64CE\u6709\u5783\u573E\u56DE\u6536\u5668\u7528\u6765\u91CA\u653E\u4E0D\u518D\u4F7F\u7528\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u7531\u4E8E\u770B\u4E0A\u53BB foo() \u7684\u5185\u5BB9\u4E0D\u4F1A\u518D\u88AB\u4F7F\u7528\uFF0C\u6240\u4EE5\u5F88\u81EA\u7136\u5730\u4F1A\u8003\u8651\u5BF9\u5176\u8FDB\u884C\u56DE\u6536\u3002\u800C\u95ED\u5305\u7684\u201C\u795E\u5947\u201D\u4E4B\u5904\u6B63\u662F\u53EF\u4EE5\u963B\u6B62\u8FD9\u4EF6\u4E8B\u60C5\u7684\u53D1\u751F\u3002\u4E8B\u5B9E\u4E0A\u5185\u90E8\u4F5C\u7528\u57DF\u4F9D\u7136\u5B58\u5728\uFF0C\u56E0\u6B64\u6CA1\u6709\u88AB\u56DE\u6536\uFF08var a = 2\u8FD8\u5728\uFF09\u3002\u8C01\u5728\u4F7F\u7528\u8FD9\u4E2A\u5185\u90E8\u4F5C\u7528\u57DF\uFF1F\u539F\u6765\u662F bar() \u672C\u8EAB\u5728\u4F7F\u7528\u3002\u62DC bar() \u6240\u58F0\u660E\u7684\u4F4D\u7F6E\u6240\u8D50\uFF0C\u5B83\u62E5\u6709\u6DB5\u76D6 foo() \u5185\u90E8\u4F5C\u7528\u57DF\u7684\u95ED\u5305\uFF0C\u4F7F\u5F97\u8BE5\u4F5C\u7528\u57DF\u80FD\u591F\u4E00\u76F4\u5B58\u6D3B\uFF0C\u4EE5\u4F9B bar() \u5728\u4E4B\u540E\u4EFB\u4F55\u65F6\u95F4\u8FDB\u884C\u5F15\u7528\u3002bar() \u4F9D\u7136\u6301\u6709\u5BF9\u8BE5\u4F5C\u7528\u57DF\u7684\u5F15\u7528\uFF0C\u800C\u8FD9\u4E2A\u5F15\u7528\u5C31\u53EB\u4F5C\u95ED\u5305\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u603B\u7ED3\uFF1A\u5728\u5176\u5B83\u4F5C\u7528\u57DF\u4FDD\u7559\u4E86\u5BF9\u51FD\u6570\u539F\u6709\u4F5C\u7528\u57DF\u7684\u8C03\u7528\uFF0C\u963B\u6B62\u4E86\u5783\u573E\u56DE\u6536\u673A\u5236\uFF0C\u8FD9\u5C31\u662F\u95ED\u5305\u7684\u4F5C\u7528 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u65E0\u8BBA\u4F7F\u7528\u4F55\u79CD\u65B9\u5F0F\u5BF9\u51FD\u6570\u7C7B\u578B\u7684\u503C\u8FDB\u884C\u4F20\u9012\uFF0C\u5F53\u51FD\u6570\u5728\u522B\u5904\u88AB\u8C03\u7528\u65F6\u90FD\u53EF\u4EE5\u89C2\u5BDF\u5230\u95ED\u5305\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E09\u79CD\u65B9\u5F0F\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1\u3001return fn(); \u5728\u5916\u90E8\u7528\u53D8\u91CF\u63A5\u53D7\uFF0C\u8C03\u7528\u53D8\u91CF\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u6240\u5728\u7684\u4F5C\u7528\u57DF\uFF08\u8BE6\u60C5\u89C1\u95ED\u5305\u7684\u6848\u4F8B\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;"> 2\u3001\u5728\u539F\u6709\u7684\u4F5C\u7528\u57DF\uFF0C\u5C06\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u5916\u90E8\u7684\u51FD\u6570\u5E76\u8C03\u7528\uFF08\u8BE6\u60C5\u89C1\u4E0B\u65B9\u4EE3\u7801\u7247\u6BB51\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;"> 3\u3001\u4E24\u79CD\u65B9\u5F0F\u7684\u7ED3\u5408\u4F53\uFF0C\u4F20\u9012\u51FD\u6570\u5F53\u7136\u4E5F\u53EF\u4EE5\u662F\u95F4\u63A5\u7684\u3002\u7528\u5916\u90E8\u53D8\u91CF\u63A5\u6536\u51FD\u6570\uFF0C\u518D\u5C06\u5916\u90E8\u53D8\u91CF\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570\uFF08\u8BE6\u60C5\u89C1\u4E0B\u65B9\u4EE3\u7801\u7247\u6BB52\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// \u5C06fn2\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9fn3\uFF0Cfn3\u8C03\u7528\u4F20\u9012\u8FDB\u6765\u7684\u51FD\u6570\uFF0C\u6240\u4EE5\u5C31\u662F\u5728fn3\u4F5C\u7528\u57DF\u4E2D\u8C03\u7528\u4E86fn1\u4F5C\u7528\u57DF\u4E2D\u7684\u51FD\u6570\uFF0C\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u8C03\u7528\u4E86\u5176\u5B83\u4F5C\u7528\u57DF\u4E2D\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fn3</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fn2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn3</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn3</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fn3</span><span style="color:#A6ACCD;">(fn)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u65E0\u8BBA\u901A\u8FC7\u4F55\u79CD\u624B\u6BB5\u5C06\u5185\u90E8\u51FD\u6570\u4F20\u9012\u5230\u6240\u5728\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u4EE5\u5916\uFF0C\u5B83\u90FD\u4F1A\u6301\u6709\u5BF9\u539F\u59CB\u5B9A\u4E49\u4F5C\u7528\u57DF\u7684\u5F15\u7528\uFF0C\u65E0\u8BBA\u5728\u4F55\u5904\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\u90FD\u4F1A\u4F7F\u7528\u95ED\u5305\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F" tabindex="-1">\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><h3 id="vue\u54CD\u5E94\u5F0F\u539F\u7406object-defineproprty" tabindex="-1">Vue\u54CD\u5E94\u5F0F\u539F\u7406Object.defineProprty <a class="header-anchor" href="#vue\u54CD\u5E94\u5F0F\u539F\u7406object-defineproprty" aria-hidden="true">#</a></h3><h3 id="\u9632\u6296" tabindex="-1">\u9632\u6296 <a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a></h3><h3 id="\u51FD\u6570\u67EF\u91CC\u5316" tabindex="-1">\u51FD\u6570\u67EF\u91CC\u5316 <a class="header-anchor" href="#\u51FD\u6570\u67EF\u91CC\u5316" aria-hidden="true">#</a></h3><h1 id="\u6A21\u5757" tabindex="-1">\u6A21\u5757 <a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a></h1><h2 id="\u6A21\u5757\u4E0E\u6A21\u5F0F" tabindex="-1">\u6A21\u5757\u4E0E\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5757\u4E0E\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">jQuery\u5185\u90E8\u6A21\u5757\u5B9E\u73B0\u7684\u539F\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">variable</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">variable</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">string</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">string</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 1,2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u73B0\u4EE3\u6A21\u5757\u5316\u673A\u5236" tabindex="-1">\u73B0\u4EE3\u6A21\u5757\u5316\u673A\u5236 <a class="header-anchor" href="#\u73B0\u4EE3\u6A21\u5757\u5316\u673A\u5236" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">AMD</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD</span></span>
<span class="line"><span style="color:#A6ACCD;">es6\u6A21\u5757\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,19),o=[e];function r(c,t,i,y,F,D){return a(),n("div",null,o)}const C=s(p,[["render",r]]);export{b as __pageData,C as default};
