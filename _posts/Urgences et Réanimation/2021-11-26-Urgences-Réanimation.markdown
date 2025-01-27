---
layout: default
title: Urgences et Réanimation
author: nairolf32
date: 2021-11-26 14:45:00 +0100
categories: Menu
permalink: /urgences-reanimation/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des urgences médicales et détresses vitales

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
