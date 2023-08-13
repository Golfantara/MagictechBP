import articles from "./ArtikelPagesData";
const ArtikelComponents = () => {
  return (
    <div className="md:container px-3 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="full-shadow p-6 rounded-lg">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtikelComponents;
