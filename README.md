# MedicalCheatSheets (MCS)

A simple static [Jekyll](https://jekyllrb.com/) blog about medical pathologies, with short posts or articles. The blog is written in **French** and articles are added gradually. The blog includes a progressive web app (pwa) functionality for offline reading (working on it):

- Data is pre-cached in the browser using [workbox](https://developers.google.com/web/tools/workbox/).
- Updating to get latest articles can be done when network is available (online)
- The app can be installed via the browser prompt.
- if any problem is faced when installing or updating just **clean your browser cache** and retry

Any contribution will be possible when license is added.

## Usage

- `git clone` the repository
- Install the dependencies with `bundle install`
- Run the server with `bundle exec Jekyll serve`
- `bundle exec jekyll build` to build the project

The server will make the project available at: `http://127.0.0.1:4000/mcs/`

**Important note**: As this is not a regular Jekyll setup but using `github-pages`plugin instead,
you might have conflicts issues with your ruby version and the plugin versions (gh-pages doesn't support ruby > 2.7) which results in a nightmare especially when you are trying to setup on Linux. Here is a temporary (I wish) workaround:

- Use a ruby version manager (I chose [rbenv](https://github.com/rbenv/rbenv))
- Switch to `ruby 2.7.0` for this project
- If you used rbenv too make sure you have the latest version or at least latest version
of `ruby-build` (to avoid an `OpenSSl` version conflict too *sigh)

The blog is deployed on [Github Pages](https://pages.github.com/) using a github action workflow. The workflow is available in the `.github/workflows/jekyll.yml` folder. Also this project uses many jekyll plugins as dependencies and you can check the `Gemfile` for the list of plugins used. The most important ones are:

- [github-metadata](https://github.com/jekyll/github-metadata) for github pages
- [spaceship](https://github.com/jeffreytse/jekyll-spaceship) for tables, formulas, and other markdown enhancements
- [Premonition](https://github.com/lazee/premonition) for nice looking alerts
- [glossary-tooltips](https://github.com/erikw/jekyll-glossary_tooltip) for glossary tooltips

<!-- TODO:
- add contributing, code of conduct, license support resources...
-->
