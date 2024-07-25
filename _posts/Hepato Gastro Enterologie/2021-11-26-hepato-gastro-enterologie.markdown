---
layout: default
title: Hépato-gastro-enterologie
author: nairolf32
date: 2021-11-26 15:02:00 +0100
categories: Menu
permalink: /hepatogastroenterologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies du tube digestif et des glandes annexes (foie, pancréas, voies biliaires)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
