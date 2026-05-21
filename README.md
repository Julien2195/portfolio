# Portfolio Julien Lemaitre

Site statique HTML/CSS pur — freelance n8n & automatisation IA.

## Statut

**v1 — livrée et déployée le 20 mai 2026.**

- ✅ Home one-page avec hero, 3 cas d'usage en preview, principes, packages, footer
- ✅ 3 pages cas d'usage détaillées (~1500-2000 mots chacune) avec Schema TechArticle + FAQPage
- ✅ Blog initialisé avec 1er article pillar (n8n vs Make vs Zapier, ~3000 mots) + TOC sticky
- ✅ Mentions légales (LCEN art. 6)
- ✅ SEO technique complet : Schema.org, sitemap, robots, OG, Twitter Card, canonical, favicon, OG image
- ✅ Audit SEO + brand-review passés, quick wins appliqués
- ✅ Déployé sur Vercel — site live : [julienlemaitre.fr](https://julienlemaitre.fr/)
- ✅ Domaine julienlemaitre.fr branché (DNS OVH → A 76.76.21.21 et CNAME www → cname.vercel-dns.com)
- ✅ Google Search Console + Bing Webmaster (sitemap soumis)
- ✅ Umami Analytics (cloud.umami.is) — RGPD friendly sans cookies
- ✅ Google Business Profile Lyon (catégorie Service de conseil informatique)
- ✅ Profil Malt enrichi (3 portfolios cas + SmartTravely en réalisation supplémentaire, 11 compétences, URL site dans description)
- ✅ Profil Codeur créé (reste privé sans abonnement Pro — décision : utiliser les emails d'alerte pour la veille, pas postuler)
- ⏳ Post LinkedIn d'annonce + recommandations Malt/LinkedIn (à la charge de Julien)
- ⏳ Articles blog 2, 3, 4 (à écrire par Julien lui-même, pas en IA)

## Activités annexes (hors site)

- **Workflow n8n veille missions** : projet séparé `/Users/jlemaitr/Documents/dev/n8n-veille-freelance/` — parse les emails Codeur, scoring IA via OpenRouter Gemini 2.0 Flash, log Google Sheets, notifications Gmail. ~0.15 €/mois. Testé, prêt à activer dès que les vrais emails Codeur arrivent.
- **Phase prospection Vedène** : déplacement 2 semaines en Vaucluse, 14 cibles qualifiées via export Apollo (5 directs + 4 réseaux + 5 warm), méthode Mom Test, mix LinkedIn DM + appels téléphone. Objectif : 1 diagnostic vendu (250 € HT) = voyage rentabilisé.
- ⏳ Articles 2 à 4 du blog (10 workflows / coût automatisation / Claude dans n8n) — à rédiger par Julien

Stratégie de contenu actée : ne pas continuer à générer des articles via IA, écrire les suivants avec sa vraie voix. Voir conversation Claude associée.

## Structure

```
portfolio/
├── index.html                      # Page principale (one-page)
├── cas/
│   ├── qualification-leads-n8n.html
│   ├── generation-contenus-reseaux-sociaux.html
│   └── sequence-emails-relance-n8n.html
├── assets/
│   ├── article.css                 # CSS commun aux pages cas
│   ├── og-image.png                # Image Open Graph (1200×630)
│   ├── workflow-1-leads.png
│   ├── workflow-2-contenus.png
│   └── workflow-3-emails.png
├── favicon.svg
├── favicon-32.png
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── vercel.json
└── README.md
```

## Avant de déployer — à faire impérativement

Le domaine canonical utilisé partout dans le code est `julienlemaitre.fr`.
Si tu prends un autre domaine, remplace-le **dans tous les fichiers** :

```bash
cd /Users/jlemaitr/Documents/dev/portfolio
# Remplace julienlemaitre.fr par ton vrai domaine (sans https://)
grep -rl 'julienlemaitre.fr' . --include='*.html' --include='*.xml' --include='*.txt' --include='*.webmanifest' \
  | xargs sed -i '' 's/julienlemaitre\.fr/TON-DOMAINE.fr/g'
```

Vérifie aussi :
- **Email** : `j.lemaitre24@gmail.com` (présent dans index, footer, mailto, JSON-LD). Remplace si tu utilises un email pro.
- **Téléphone** : `+33620531046` / `06 20 53 10 46`
- **SIRET** : `990 293 003 00010`
- **Lien Malt** : `https://malt.fr/profile/julienlemaitre`

## Déploiement Vercel

### Première fois

1. Crée un compte sur [vercel.com](https://vercel.com) (connexion via GitHub conseillée).
2. Initie un dépôt Git local et pousse sur GitHub :
   ```bash
   cd /Users/jlemaitr/Documents/dev/portfolio
   git init
   git add .
   git commit -m "Site portfolio initial"
   gh repo create julienlemaitre-site --private --source=. --push
   ```
3. Sur Vercel : **Add New → Project → Import** le repo GitHub.
4. **Framework Preset : Other**. Aucune build command, aucun output directory à configurer (HTML statique pur).
5. Clique **Deploy**. Le site est en ligne en moins d'une minute sur une URL `*.vercel.app`.

### Connecter ton domaine

1. Achète le domaine (Gandi, OVH, Cloudflare Registrar, etc.).
2. Dans le projet Vercel : **Settings → Domains → Add** ton domaine.
3. Vercel te donne les enregistrements DNS à configurer chez ton registrar (généralement un `A` vers `76.76.21.21` et un `CNAME` pour `www`).
4. Propagation DNS : 5 min à 24h. Le certificat HTTPS est généré automatiquement.

### Déploiements suivants

Chaque `git push` sur la branche principale redéploie automatiquement. Pas besoin de toucher à Vercel.

## Checklist SEO post-go-live

À faire dans la semaine qui suit la mise en ligne :

- [ ] **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)) — ajouter la propriété, soumettre `sitemap.xml`
- [ ] **Bing Webmaster Tools** ([bing.com/webmasters](https://www.bing.com/webmasters)) — soumettre le sitemap (Bing alimente DuckDuckGo + ChatGPT search)
- [ ] **Google Business Profile** — créer une fiche "Lyon" pour le SEO local, même sans local physique
- [ ] **Test Rich Results** ([search.google.com/test/rich-results](https://search.google.com/test/rich-results)) — vérifier que la FAQ et le Person s'affichent
- [ ] **PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev)) — viser 95+ sur les 4 axes
- [ ] **Analytics** — Plausible (~9 €/mois, RGPD friendly) ou Google Analytics 4 (gratuit, plus invasif)
- [ ] Mettre à jour le lien dans le profil **Malt**
- [ ] Mettre à jour le lien dans la bio **LinkedIn**
- [ ] Mettre à jour la signature email avec le lien

## Pour aller plus loin sur le SEO

Le site one-page + 3 pages cas est un bon point de départ, mais pour vraiment ranker sur "freelance n8n" et "workflow automation", il te faut **du contenu**. Suggestions :

- Article : « n8n vs Make vs Zapier : lequel choisir en 2026 »
- Article : « Combien coûte vraiment l'automatisation d'un process commercial »
- Article : « Comment intégrer Claude (Anthropic) dans n8n »
- Article : « 10 workflows n8n pour PME qu'on peut copier-coller »

Chacun de ces articles peut ranker indépendamment et drainer du trafic qualifié vers tes cas d'usage.

## Ajouter une page cas d'usage

1. Copie un fichier existant dans `cas/` (par exemple `qualification-leads-n8n.html`).
2. Modifie : `<title>`, `meta description`, OG, canonical, breadcrumb, JSON-LD (TechArticle + FAQPage), contenu de la prose.
3. Ajoute l'URL dans `sitemap.xml`.
4. Ajoute un bloc article dans `index.html` section `#cas` + un lien `case-link`.
5. Push, Vercel redéploie.

## Regénérer les assets

Les PNG favicon + og-image ont été générés via PIL (Python). Pour les regénérer après modification du SVG ou de la baseline :

```bash
# Réutiliser le script inline dans le README de l'historique Claude
# ou écrire un scripts/generate-assets.py si tu veux pérenniser
```

## Notes

- Toutes les pages chargent les fonts Google (Inter + JetBrains Mono). Si tu veux self-host pour des perfs et un RGPD plus propre, télécharge les `.woff2` et serve-les depuis `/assets/fonts/`.
- L'obfuscation Cloudflare des emails (`/cdn-cgi/l/email-protection`) du HTML d'origine a été retirée — Vercel n'a pas d'équivalent natif. Les `mailto:` sont en clair. Si tu commences à recevoir trop de spam, on peut ajouter un script JS de décodage côté client.
- Le CSP dans `vercel.json` est restrictif. Si tu ajoutes plus tard un script externe (Plausible, Calendly, etc.), il faudra le whitelister dans `script-src`.
