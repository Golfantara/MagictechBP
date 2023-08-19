import { Link } from "react-router-dom";
import articles from "../ArtikelPages/ArtikelPagesData";
const ArtikelComponents = () => {
  const displayArticles = articles.slice(0, 3);
  return (
    <div className="md:container px-3">
      <span className="grid text-center my-6 text-xl md:text-3xl lg:text-4xl font-semibold">
        Artikel dan wawasan
      </span>
      <span className="grid text-center text-base my-4 text-[#667085] md:text-lg lg:text-xl">
        Temukan manfaat kesehatan yang luar biasa dari penggunaan herbal alami
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayArticles.map((article, index) => (
          <Link
            key={index}
            to={`/artikel/${index}`}
            className="full-shadow p-6 rounded-lg"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-lg"
            />
            <h1 className="text-sm text-merah font-semibold py-3">
              {article.label}
            </h1>
            <h2 className="text-2xl font-semibold py-3">{article.title}</h2>
            <p className="text-base text-gray-500">{article.description}</p>
            <div className="flex items-center mt-4">
              <img
                src={article.authorImage}
                alt={article.authorName}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-col">
                <p className="ml-2 text-gray-900">{article.authorName}</p>
                <p className="ml-2 text-gray-500">{article.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtikelComponents;
