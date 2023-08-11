const thirdSection = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="lg:container px-3">
        <div className="bg-white rounded-lg">
          <div className="grid md:grid-cols-2 py-6 px-6">
            <div>
              <span className="grid mb-2">Masih ada pertanyaan?</span>
              <span className="text-[#667085] mt-2">
                Tidak dapat menemukan jawaban yang Anda cari? Silahkan chat ke
                tim kami yang ramah.
              </span>
            </div>
            <div className="grid lg:place-content-end place-items-center">
              <button className="flex justify-center items-center gap-2 bg-[#12B76A] px-3 py-2 rounded-lg text-white">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default thirdSection;
