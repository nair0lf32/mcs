---
layout: default
title: Cardiologie
author: nairolf32
date: 2021-10-09 13:25:00 +0100
categories: Menu
permalink: /cardiologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies du système cardiovasculaire (le cœur et les vaisseaux sanguins)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
