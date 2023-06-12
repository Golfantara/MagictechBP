const TestimoniSection = () => {
  return (
    <div className="md:container px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="https://source.unsplash.com/random" alt="" />
          <div className="my-2 md:my-4">
            <span className="grid text-2xl font-semibold">
              Webinar - Indonesia berdamai dengan kanker
            </span>
            <span className="grid text-base text-[#667085]">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
        <div>
          <img src="https://source.unsplash.com/random" alt="" />
          <div className="my-2 md:my-4">
            <span className="grid text-2xl font-semibold">
              4 Jurus Alpha Mangostin menghadapi kanker
            </span>
            <span className="grid text-base text-[#667085]">
              Alpha Mangostin, dapat mengambil alih pengobatan mahal Kanker
              selama ini, kami menyebutnya dengan kemoterapi herbal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniSection;
