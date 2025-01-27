---
layout: default
title: Fondamentaux
author: nairolf32
date: 2024-07-24 21:17:00 +0100
categories: Menu
permalink: /fondamentaux/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des fondamentaux de la médecine. regroupe des articles expliquant en détail les aspects physiopathologiques des maladies, les bases pharmacologiques de leur thérapeutique, etc.

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}

