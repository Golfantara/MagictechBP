const TestimoniSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-2 place-content-center md:hidden">
        <div className="aspect-video grid place-content-center">
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/tSXglcYp4Fc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <span className="grid">
              Webinar - indonesia berdamai dengan kanker
            </span>
            <span className="grid">
              How do you create compelling presentasions that how your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
        <div className="aspect-video grid place-content-center">
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/yXTiObI5rO8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <span className="grid">
              4 Jurus Alpha Mangostin menghadapi kanker
            </span>
            <span className="grid">
              Alpha Mangostin, dapat mengambil alih pengobatan mahal kanker
              selamana ini, kami menyebutnya dengan kemoterapi herbal
            </span>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden md:grid grid-cols-2 place-content-center">
        <div className="aspect-video grid place-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tSXglcYp4Fc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <span className="grid text-2xl font-semibold my-2">
              Webinar - indonesia berdamai dengan kanker
            </span>
            <span className="grid text-base text-[#667085]">
              How do you create compelling presentasions that how your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
        <div className="aspect-video grid place-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yXTiObI5rO8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <span className="grid text-2xl font-semibold my-2">
              4 Jurus Alpha Mangostin menghadapi kanker
            </span>
            <span className="grid text-base text-[#667085]">
              Alpha Mangostin, dapat mengambil alih pengobatan mahal kanker
              selamana ini, kami menyebutnya dengan kemoterapi herbal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniSection;
