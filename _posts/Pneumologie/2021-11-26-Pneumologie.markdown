---
layout: default
title: Pneumologie
author: nairolf32
date: 2021-11-26 14:36:00 +0100
categories: Menu
permalink: /pneumologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies médicales de l'appareil respiratoire (poumons, bronches, plèvre, etc.)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
