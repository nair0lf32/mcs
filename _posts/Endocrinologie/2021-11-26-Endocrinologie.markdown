---
layout: default
title: Endocrinologie
author: nairolf32
date: 2021-11-26 13:45:00 +0100
categories: Menu
permalink: /endocrinologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies endocriniennes (liées aux glandes endocrines et leurs hormones), et du métabolisme en général

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
