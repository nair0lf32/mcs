---
layout: default
title: Cheat Sheets
permalink: /cheatsheets/
---

{% include search.html %}

{% for category in site.categories %}

  <ul id="myUL" class="ul">
    <h2>{{ category[0] }}</h2>
    {% for post in category[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
