---
layout: default
title: "Rhumatologie"
author: "nair0lf32"
date: 2021-09-09 17:27:53 +0100
categories: Rhumatologie
permalink: /rhumatologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>
{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
