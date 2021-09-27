---
layout: default
title: Cheat Sheets
permalink: /cheatsheets/
---

{% include search.html %}

{% for category in site.categories %}

  <h2>{{ category[0] }}</h2>
  <ul id="myUL" class="ul">
    {% for post in category[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
