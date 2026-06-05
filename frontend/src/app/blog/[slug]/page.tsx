import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/data/articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) {
    return { title: 'Article introuvable — EOLIYA Ingénierie' };
  }
  return {
    title: `${article.title} — EOLIYA Ingénierie`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="article-hero">
        <div className="wrap">
          <div className="crumb rv">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span>{article.category}</span>
          </div>
          <div className="cat rv">{article.category}</div>
          <h1
            className="rv d1"
            dangerouslySetInnerHTML={{ __html: article.titleHtml }}
          />
          <div className="meta rv d2">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
            <span>Par l&apos;équipe EOLIYA</span>
          </div>
        </div>
      </section>

      {/* Corps */}
      <section className="article-body">
        <div className="wrap">
          <div className="col">
            <p className="lead rv">{article.lead}</p>
            {article.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="rv">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="rv">
                    {block.text}
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="rv"
                  dangerouslySetInnerHTML={{ __html: block.html }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="article-cta">
        <div className="wrap">
          <div className="col">
            <h2 className="rv">{article.ctaTitle}</h2>
            <Link href="/contact" className="btn rv d1">
              {article.ctaLabel} <i>→</i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
