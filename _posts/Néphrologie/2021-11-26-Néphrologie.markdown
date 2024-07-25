---
layout: default
title: Néphrologie
author: nairolf32
date: 2021-11-26 14:29:00 +0100
categories: Menu
permalink: /nephrologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies médicales des reins

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
