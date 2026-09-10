# Xinyi Zhu — Personal Website

Personal academic and engineering portfolio built with Jekyll and deployed through GitHub Pages.

## Structure

- `_data/profile.yml`: profile, education, experience, publication, project, and bilingual content
- `_data/navigation.yml`: site navigation
- `_includes/widgets/`: active homepage and project components
- `assets/`: active styles, scripts, logos, portrait, and publication image
- `output/`: project PDF and poster attachments
- `index.html`: homepage
- `projects.html`: full projects page

## Language support

Chinese content is retained but temporarily disabled. Set `bilingual_enabled: true` in `_data/profile.yml` to restore the language switch and `?lang=cn` URLs.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```
