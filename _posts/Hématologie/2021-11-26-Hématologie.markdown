---
layout: default
title: Hématologie
author: nairolf32
date: 2021-11-26 14:02:00 +0100
categories: Menu
permalink: /hematologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies du sang et des organes hématopoïétiques (la moelle osseuse, les ganglions lymphatiques, la rate)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
