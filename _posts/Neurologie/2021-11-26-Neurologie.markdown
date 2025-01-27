---
layout: default
title: Neurologie
author: nairolf32
date: 2021-11-26 14:27:00 +0100
categories: Menu
permalink: /neurologie/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies médicales du système nerveux (cerveau, moelle épinière, nerfs, etc.)

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
