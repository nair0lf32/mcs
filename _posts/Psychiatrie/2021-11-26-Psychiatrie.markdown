---
layout: default
title: Psychiatrie
author: nairolf32
date: 2021-11-26 14:43:00 +0100
categories: Menu
permalink: /psychiatrie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies mentales, des troubles psychiques et comportementaux

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
