import React from "react";
import articles from "@/components/ArtikelPages/ArtikelPagesData";
import { useParams } from "react-router";

const ArtikelDetail = () => {
  const { id } = useParams();
  const article = articles[Number(id)];

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div className="md:container px-3 pt-12">
      <h1>{article.title}</h1>
      <p>{article.fieldArticles}</p>
    </div>
  );
};

export default ArtikelDetail;
