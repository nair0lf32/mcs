---
layout: default
title: Rhumatologie
date: 2021-09-09 17:27:53 +0100
categories: Menu
permalink: /rhumatologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies rhumatismales et des maladies articulaires

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}

{% endfor %}
