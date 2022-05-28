# MedicalCheatSheets

A simple static jekyll blog about medical pathologies, with small cheat sheets
as posts or articles. the blog is written in **French** and articles are added gradually.


The blog includes a progressive web app (pwa) functionality for offline reading (working on it):

- Data is precached in the browser using [workbox](https://developers.google.com/web/tools/workbox/).

- Updating to get latest articles can be done when network is available (online)

- The app can be installed via the browser prompt.

- if any problem is faced when installing or updating just **clean your browser cache** and retry

Any contribution will be possible when license is added.

## Usage
`git clone` the repository, then install the dependencies with:

`bundle install`

You need to run it everytime there is changes in the dependancies

Next, run the server with:

`bundle exec jekyll serve`

The server will make the project available at: http://127.0.0.1:4000/MedicalCheatSheets/ 

<!-- TODO:
- add contributing, code of conduct, license support ressources...
-->
