---
layout: page
title: Documentation
description: Contents
permalink: /docs/
---

# Documentation

Welcome to the {{ site.title }} Documentation pages! Here you can quickly jump to a 
particular page.

<div class="section-index">
    <hr class="panel-line">
    {% for docs_post in site.docs  %}        
    <div class="entry">
    <h5><a href="{{ docs_post.url | prepend: site.baseurl }}">{{ docs_post.title }}</a></h5>
    <p>{{ docs_post.description }}</p>
    </div>{% endfor %}
</div>

I am trying to make this work

<div class="section-index">
    <hr class="panel-line">
    {% assign sorted_docs = site.docs | sort: 'path' %}
    {% for docs_post in sorted_docs  %}        
    <div class="entry">
    <h5><a href="{{ docs_post.url | prepend: site.baseurl }}">{{ docs_post.title }}</a></h5>
    <p>{{ docs_post.description }}</p>
    </div>{% endfor %}
</div>




I am trying to make this work. Here:

<div class="section-index">
    <hr class="panel-line">
    {% assign folder_order = 'project,dataset' | split: ',' %}
    {% assign sorted_docs = site.docs | sort: 'path' %}
    {% assign sorted_docs_custom = "" | split: "," %}
    {% for folder in folder_order %}
        {% assign docs_in_folder = sorted_docs | where_exp:"item", "'//{{ folder }}//'" %}
        {% assign sorted_docs_custom = sorted_docs_custom | push: docs_in_folder %}
    {% endfor %}
    {% for docs_post in sorted_docs_custom %}
        <div class="entry">
        <h5><a href="{{ docs_post.url | prepend: site.baseurl }}">{{ docs_post.title }}</a></h5>
        <p>{{ docs_post.description }}</p>
        </div>
    {% endfor %}
</div>
