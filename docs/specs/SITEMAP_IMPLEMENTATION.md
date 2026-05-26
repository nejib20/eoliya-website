# Sitemap Implementation Guide - EOLIYA Ingénierie

## Introduction

Ce document explique comment implémenter la génération dynamique de sitemaps XML pour le site EOLIYA Ingénierie avec Next.js App Router.

---

## 1. Structure Sitemaps

### 1.1 Sitemaps Multiples

Le site utilisera plusieurs sitemaps pour une organisation optimale:

1. **sitemap.xml** (index principal)
2. **sitemap-pages.xml** (pages statiques)
3. **sitemap-blog.xml** (articles blog)
4. **sitemap-realisations.xml** (projets)
5. **sitemap-images.xml** (images)

**Avantages:**
- Organisation claire
- Limite 50 000 URLs par sitemap respectée
- Mises à jour ciblées
- Meilleure crawlabilité

---

## 2. Implementation Next.js

### 2.1 Sitemap Principal (Index)

**Fichier:** `app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eoliya.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Services
    {
      url: `${baseUrl}/services/conseil-tce`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/relamping-led`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/luminaires-sur-mesure`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Autres pages statiques
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/conditions-generales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
```

---

### 2.2 Sitemap Blog Dynamique

**Fichier:** `app/sitemap-blog.ts`

```typescript
import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog'; // Votre fonction fetch articles

export default async function sitemapBlog(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://eoliya.com';

  // Récupérer tous les articles du blog
  const posts = await getAllBlogPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    // Page index blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Tous les articles
    ...blogUrls,
  ];
}
```

---

### 2.3 Sitemap Réalisations Dynamique

**Fichier:** `app/sitemap-realisations.ts`

```typescript
import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects'; // Votre fonction fetch projets

export default async function sitemapRealisations(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://eoliya.com';

  // Récupérer tous les projets
  const projects = await getAllProjects();

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/realisations/${project.slug}`,
    lastModified: new Date(project.updatedAt || project.completedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    // Page index réalisations
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Tous les projets
    ...projectUrls,
  ];
}
```

---

### 2.4 Sitemap Index (Regroupement)

**Fichier:** `app/sitemap-index.xml/route.ts`

```typescript
export async function GET() {
  const baseUrl = 'https://eoliya.com';

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-blog.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-realisations.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-images.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
```

---

### 2.5 Sitemap Images

**Fichier:** `app/sitemap-images.xml/route.ts`

```typescript
import { getAllBlogPosts } from '@/lib/blog';
import { getAllProjects } from '@/lib/projects';

export async function GET() {
  const baseUrl = 'https://eoliya.com';

  // Récupérer images blog
  const posts = await getAllBlogPosts();
  const blogImages = posts.flatMap((post) =>
    post.images?.map((img: any) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      image: {
        loc: img.url,
        caption: img.alt || post.title,
        title: img.title || post.title,
      },
    })) || []
  );

  // Récupérer images projets
  const projects = await getAllProjects();
  const projectImages = projects.flatMap((project) =>
    project.images?.map((img: any) => ({
      loc: `${baseUrl}/realisations/${project.slug}`,
      image: {
        loc: img.url,
        caption: img.alt || project.title,
        title: img.title || project.title,
      },
    })) || []
  );

  const allImages = [...blogImages, ...projectImages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allImages
    .map(
      (item) => `
  <url>
    <loc>${item.loc}</loc>
    <image:image>
      <image:loc>${item.image.loc}</image:loc>
      <image:caption>${escapeXml(item.image.caption)}</image:caption>
      <image:title>${escapeXml(item.image.title)}</image:title>
    </image:image>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
```

---

## 3. Configuration robots.txt

Le fichier `robots.txt` doit référencer les sitemaps:

**Fichier:** `public/robots.txt` (déjà créé)

```
# Sitemaps
Sitemap: https://eoliya.com/sitemap-index.xml
Sitemap: https://eoliya.com/sitemap.xml
Sitemap: https://eoliya.com/sitemap-blog.xml
Sitemap: https://eoliya.com/sitemap-realisations.xml
Sitemap: https://eoliya.com/sitemap-images.xml
```

---

## 4. Types TypeScript

**Fichier:** `types/sitemap.ts`

```typescript
export interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface ImageSitemapEntry {
  loc: string;
  image: {
    loc: string;
    caption?: string;
    title?: string;
    geoLocation?: string;
    license?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  images?: Array<{
    url: string;
    alt?: string;
    title?: string;
  }>;
}

export interface Project {
  slug: string;
  title: string;
  completedAt: string;
  updatedAt?: string;
  images?: Array<{
    url: string;
    alt?: string;
    title?: string;
  }>;
}
```

---

## 5. Utilitaires

**Fichier:** `lib/sitemap-utils.ts`

```typescript
/**
 * Formatte une date pour sitemap XML
 */
export function formatSitemapDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString();
}

/**
 * Valide une priorité sitemap (0.0 - 1.0)
 */
export function validatePriority(priority: number): number {
  return Math.min(1.0, Math.max(0.0, priority));
}

/**
 * Génère URL absolue
 */
export function getAbsoluteUrl(path: string, baseUrl: string = 'https://eoliya.com'): string {
  // Enlever trailing slash de baseUrl et leading slash de path si présent
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${cleanBase}/${cleanPath}`;
}

/**
 * Escape caractères XML
 */
export function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Détermine changeFrequency basé sur type de page
 */
export function getChangeFrequency(pageType: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  const frequencies: Record<string, any> = {
    homepage: 'daily',
    blog: 'daily',
    'blog-post': 'monthly',
    service: 'weekly',
    project: 'monthly',
    static: 'monthly',
    legal: 'yearly',
  };

  return frequencies[pageType] || 'monthly';
}

/**
 * Détermine priorité basé sur type de page
 */
export function getPriority(pageType: string): number {
  const priorities: Record<string, number> = {
    homepage: 1.0,
    service: 0.9,
    blog: 0.7,
    'blog-post': 0.7,
    project: 0.8,
    'project-index': 0.8,
    static: 0.6,
    legal: 0.3,
  };

  return priorities[pageType] || 0.5;
}
```

---

## 6. Tests

**Fichier:** `__tests__/sitemap.test.ts`

```typescript
import { describe, it, expect } from '@jest/globals';
import { formatSitemapDate, validatePriority, getAbsoluteUrl, escapeXml } from '@/lib/sitemap-utils';

describe('Sitemap Utils', () => {
  describe('formatSitemapDate', () => {
    it('should format date to ISO string', () => {
      const date = new Date('2026-05-26T10:00:00Z');
      expect(formatSitemapDate(date)).toBe('2026-05-26T10:00:00.000Z');
    });

    it('should handle string dates', () => {
      const dateString = '2026-05-26';
      const result = formatSitemapDate(dateString);
      expect(result).toContain('2026-05-26');
    });
  });

  describe('validatePriority', () => {
    it('should clamp priority between 0.0 and 1.0', () => {
      expect(validatePriority(0.5)).toBe(0.5);
      expect(validatePriority(1.5)).toBe(1.0);
      expect(validatePriority(-0.5)).toBe(0.0);
    });
  });

  describe('getAbsoluteUrl', () => {
    it('should generate absolute URL', () => {
      expect(getAbsoluteUrl('/services/tce')).toBe('https://eoliya.com/services/tce');
      expect(getAbsoluteUrl('services/tce')).toBe('https://eoliya.com/services/tce');
    });

    it('should handle trailing slashes', () => {
      expect(getAbsoluteUrl('/contact/', 'https://eoliya.com/')).toBe('https://eoliya.com/contact/');
    });
  });

  describe('escapeXml', () => {
    it('should escape XML special characters', () => {
      expect(escapeXml('Test & <tag>')).toBe('Test &amp; &lt;tag&gt;');
      expect(escapeXml('Quote "test"')).toBe('Quote &quot;test&quot;');
    });

    it('should handle empty string', () => {
      expect(escapeXml('')).toBe('');
    });
  });
});
```

---

## 7. Validation

### 7.1 Outils de Validation

**En ligne:**
- [Google Search Console](https://search.google.com/search-console) - Tester sitemap
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Sitemap Validator Tool](https://websiteseochecker.com/sitemap-validator/)

**Local:**
```bash
# Vérifier sitemap accessible
curl https://eoliya.com/sitemap.xml

# Valider XML
xmllint --noout sitemap.xml

# Vérifier toutes les URLs
grep -o '<loc>[^<]*</loc>' sitemap.xml | sed 's/<loc>//;s/<\/loc>//' | xargs -I {} curl -I -s {} | grep "HTTP/"
```

---

### 7.2 Checklist Validation

- [ ] Sitemap accessible: `https://eoliya.com/sitemap.xml`
- [ ] XML valide (pas d'erreurs parsing)
- [ ] Toutes les URLs accessibles (status 200)
- [ ] Toutes les URLs en HTTPS
- [ ] Pas de redirections dans sitemap
- [ ] Dates lastModified valides (ISO 8601)
- [ ] Priorités entre 0.0 et 1.0
- [ ] ChangeFrequency valeurs valides
- [ ] < 50 000 URLs par sitemap
- [ ] Taille fichier < 50MB (non-compressé)
- [ ] Encodage UTF-8
- [ ] Sitemap référencé dans robots.txt
- [ ] Soumis à Google Search Console
- [ ] Soumis à Bing Webmaster Tools

---

## 8. Soumission Moteurs de Recherche

### 8.1 Google Search Console

1. Accéder à [Google Search Console](https://search.google.com/search-console)
2. Sélectionner propriété `eoliya.com`
3. Menu "Sitemaps" (sidebar gauche)
4. Ajouter sitemaps:
   - `sitemap.xml`
   - `sitemap-blog.xml`
   - `sitemap-realisations.xml`
   - `sitemap-images.xml`
5. Cliquer "Envoyer"
6. Vérifier status "Réussite"

**Monitoring:**
- Pages découvertes vs soumises
- Erreurs d'exploration
- Couverture index

---

### 8.2 Bing Webmaster Tools

1. Accéder à [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Ajouter site `eoliya.com` (vérification via fichier XML)
3. Sitemaps > Soumettre un sitemap
4. Ajouter URL: `https://eoliya.com/sitemap.xml`
5. Soumettre

---

### 8.3 Ping Automatique (Optionnel)

**Fichier:** `lib/sitemap-ping.ts`

```typescript
/**
 * Ping moteurs de recherche après génération sitemap
 * À appeler après publication nouveau contenu
 */
export async function pingSearchEngines(sitemapUrl: string = 'https://eoliya.com/sitemap.xml') {
  const encodedUrl = encodeURIComponent(sitemapUrl);

  const pingUrls = [
    `https://www.google.com/ping?sitemap=${encodedUrl}`,
    `https://www.bing.com/ping?sitemap=${encodedUrl}`,
  ];

  const results = await Promise.allSettled(
    pingUrls.map((url) =>
      fetch(url).then((res) => ({
        url,
        status: res.status,
        ok: res.ok,
      }))
    )
  );

  console.log('Sitemap ping results:', results);
  return results;
}
```

**Utilisation:**
```typescript
// Après publication article blog
await createBlogPost(data);
await pingSearchEngines();
```

---

## 9. Maintenance

### 9.1 Régénération Automatique

**Next.js ISR:**
```typescript
// app/sitemap.ts
export const revalidate = 3600; // Régénérer toutes les heures
```

**On-demand Revalidation:**
```typescript
// app/api/revalidate-sitemap/route.ts
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // Vérifier secret token
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Régénérer sitemaps
    revalidatePath('/sitemap.xml');
    revalidatePath('/sitemap-blog.xml');
    revalidatePath('/sitemap-realisations.xml');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
```

**Appel webhook:**
```bash
curl -X POST "https://eoliya.com/api/revalidate-sitemap?secret=YOUR_SECRET"
```

---

### 9.2 Monitoring

**Script monitoring sitemap:**

```typescript
// scripts/check-sitemap.ts
import fetch from 'node-fetch';
import { parseString } from 'xml2js';

async function checkSitemap(url: string) {
  console.log(`Checking sitemap: ${url}`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Sitemap fetch failed: ${response.status}`);
  }

  const xml = await response.text();

  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      const urls = result.urlset?.url || [];
      console.log(`✓ ${urls.length} URLs found`);

      // Vérifier quelques URLs
      urls.slice(0, 5).forEach((entry: any) => {
        console.log(`  - ${entry.loc[0]}`);
      });

      resolve(urls);
    });
  });
}

async function main() {
  const sitemaps = [
    'https://eoliya.com/sitemap.xml',
    'https://eoliya.com/sitemap-blog.xml',
    'https://eoliya.com/sitemap-realisations.xml',
  ];

  for (const sitemap of sitemaps) {
    try {
      await checkSitemap(sitemap);
    } catch (error) {
      console.error(`✗ Error checking ${sitemap}:`, error);
    }
  }
}

main();
```

**Package.json script:**
```json
{
  "scripts": {
    "check-sitemap": "ts-node scripts/check-sitemap.ts"
  }
}
```

---

## 10. Troubleshooting

### Problèmes Courants

**1. Sitemap non accessible (404)**
- Vérifier fichier `app/sitemap.ts` existe
- Rebuild application
- Vérifier déploiement production

**2. URLs non indexées**
- Vérifier robots.txt n'est pas trop restrictif
- Vérifier pas de meta robots noindex
- Soumettre sitemap Google Search Console
- Attendre 24-48h après soumission

**3. Erreurs XML parsing**
- Valider XML avec xmllint
- Vérifier caractères spéciaux échappés
- Vérifier encodage UTF-8

**4. Sitemap trop volumineux**
- Diviser en plusieurs sitemaps
- Utiliser sitemap index
- Limiter 50 000 URLs par fichier

**5. Dates invalides**
- Utiliser format ISO 8601: `2026-05-26T10:00:00+00:00`
- Tester avec `new Date().toISOString()`

---

**Document créé par:** Nejib Aloui
**Date:** Mai 2026
**Version:** 1.0
**Dernière mise à jour:** 2026-05-26
