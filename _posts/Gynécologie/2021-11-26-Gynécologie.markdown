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

> Au sujet des pathologies gynécologiques (liées aux organes génitaux féminins) et obstétricales (liées à la grossesse et à l'accouchement)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
