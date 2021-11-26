---
layout: default
title: Gynécologie
author: nairolf32
date: 2021-11-26 13:55:00 +0100
categories: Menu
permalink: /gynecologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>
{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
