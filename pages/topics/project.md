---
layout: page
title: Project
description: Index page
permalink: /project/
---

# Project

Welcome to the {{ site.title }} page! Here you can quickly jump to a 
particular page.


<div class="section-index">
  <hr class="panel-line">
  {% for docs_post in site.docs %}
    {% if docs_post.path contains '/project/' %}
      <div class="entry">
        <h5><a href="{{ docs_post.url | prepend: site.baseurl }}">{{ docs_post.title }}</a></h5>
        <p>{{ docs_post.description }}</p>
      </div>
    {% endif %}
  {% endfor %}
</div>
