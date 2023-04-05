---
layout: page
title: Project
description: Index page
permalink: /project/
---

# Project

Welcome to the {{ site.title }} project page! Here you can quickly jump to a 
particular page.

<div class="section-index">
    <hr class="panel-line">
    {% for doc_post in site.docs.project  %}        
    <div class="entry">
    <h5><a href="{{ doc_post.url | prepend: site.baseurl }}">{{ doc_post.title }}</a></h5>
    <p>{{ doc_post.description }}</p>
    </div>{% endfor %}
</div>
