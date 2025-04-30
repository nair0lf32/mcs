---
layout: default
title: Thérapeutique
author: nairolf32
date: 2025-04-29 16:54:00 +0100
categories: Menu
permalink: /therapeutique/
---

{% assign category = page.title %}

<h2>{{ category }}</h2>

> Au sujet des Médicaments et autres moyens de traitement en pratique médicale courante

> error "Attention"
> Les articles de cette section ne doivent pas servir à une automédication. Ils ne sont pas destinés à remplacer les conseils d'un professionnel de la santé qualifié. Consultez toujours un médecin ou un pharmacien avant de prendre des médicaments ou d'apporter des modifications à votre traitement.

{% for post in site.posts %}
{% if post.categories contains category %}
<li> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> </li>
{% endif %}
{% endfor %}
