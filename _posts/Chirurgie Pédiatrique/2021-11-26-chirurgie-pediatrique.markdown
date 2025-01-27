---
layout: default
title: Chirurgie Pédiatrique
author: nairolf32
date: 2021-11-26 13:30:00 +0100
categories: Menu
permalink: /chirurgiepediatrique/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des pathologies chirurgicales de l'enfant

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
