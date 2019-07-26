---
layout: page
title: Documentation
permalink: /docs/
---

# Documentation

Welcome to the {{ site.title }} Documentation pages! Here you can quickly jump to a 
particular page.

{% for post in site.docs  %}
<ul>
<li class="c-archives__item">
  <a href="{{ post.url | prepend: site.baseurl }}"><h4>{{ post.title }}</h4></a>
  </li>
</ul>
{% endfor %}
