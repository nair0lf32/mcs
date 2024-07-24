---
layout: default
title: Auteurs
permalink: /authors/
---
<h1>Nos Auteurs: </h1>

<p> cliquez sur le pseudo pour voir la page de profil</p>

<ul>
  {% for author in site.authors %}
    <li>
      <p> <a href="{{ author.url | relative_url }}">{{ author.pseudonym }}</a> </p>
    </li>
  {% endfor %}
</ul>
