# Xinyi Zhu — Personal Website

Bilingual personal portfolio for Xinyi Zhu, built with Jekyll and deployed through GitHub Pages.

- English homepage: <https://yiliazhuxyxy.github.io/>
- Chinese homepage: <https://yiliazhuxyxy.github.io/?lang=cn>
- English projects: <https://yiliazhuxyxy.github.io/projects/>
- Chinese projects: <https://yiliazhuxyxy.github.io/projects/?lang=cn>

## Current content

The homepage includes:

- About Me
- Education and honors
- Work experience
- Publications
- Selected projects

The projects page contains the complete project list, including links to source code, videos, posters, and design or demo documents where available.

## Repository structure

- `_data/profile.yml` — English and Chinese profile content, education, experience, publications, and projects
- `_data/navigation.yml` — navigation labels and routes
- `_includes/` — shared navigation, footer, bilingual helper, and page components
- `_layouts/` — page layouts
- `assets/css/global.css` — site-specific styles
- `assets/js/language.js` — language selection and `?lang=cn` URL handling
- `assets/images/` — portrait, school logos, and publication artwork
- `output/` — project PDF and poster attachments
- `index.html` — homepage
- `projects.html` — full projects page
- `favicon.png` — shared favicon for every page

## Content and language settings

Most website content is maintained in `_data/profile.yml`.

- Use paired fields such as `name` / `name_cn` and `details` / `details_cn` for bilingual content.
- Set `selected: true` on a project to display it in the homepage's Selected Projects section.
- `bilingual_enabled: true` enables the language switch and Chinese URLs.
- English is the default language; append `?lang=cn` to open the Chinese version directly.

## Local preview

Ruby and Bundler are required.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/>. Changes pushed to `main` are deployed automatically by GitHub Pages.
