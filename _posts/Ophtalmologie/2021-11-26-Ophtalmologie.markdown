---
layout: default
title: Ophtalmologie
author: nairolf32
date: 2021-11-26 14:35:00 +0100
categories: Menu
permalink: /ophtalmologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies des yeux

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
