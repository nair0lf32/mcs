---
layout: default
title: Infectiologie
author: nairolf32
date: 2021-11-26 14:19:00 +0100
categories: Menu
permalink: /infectiologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies infectieuses (Liées aux micro-organismes pathogènes: bactéries, virus, champignons, parasites)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
