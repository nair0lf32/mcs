---
layout: default
title: Chirurgie Viscérale
author: nairolf32
date: 2021-11-26 13:36:00 +0100
categories: Menu
permalink: /chirurgieviscerale/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies chirurgicales de des
viscères (abdominaux et quelques exceptions)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
