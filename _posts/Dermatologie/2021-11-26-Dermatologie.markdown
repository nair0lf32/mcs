---
layout: default
title: Dermatologie
author: nairolf32
date: 2021-11-26 13:40:00 +0100
categories: Menu
permalink: /dermatologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies de la peau

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
