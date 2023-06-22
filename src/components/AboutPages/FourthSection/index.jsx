import React from "react";
import teamData from "../TeamData";

const FourthSection = () => {
  return (
    <div>
      <div className="lg:container px-3 pb-12">
        <div className="pb-12">
          <span className="grid text-merah text-base font-semibold text-center">
            Kenali Tim Kami
          </span>
          <span className="grid text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Meet our team
          </span>
          <span className="grid text-[#667085] text-xl text-center">
            Kami selalu bekerja keras menciptakan produk dan pelayanan terbaik
            untuk
            <span className="grid">masyarakat Indonesia.</span>
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-content-center gap-3 lg:gap-6 place-items-center">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="grid place-content-center place-items-center"
            >
              <img src={member.picture} />
              <span className="grid text-center max-w-[100px] md:max-w-full">
                {member.name}
              </span>
              <span className="grid text-center">{member.position}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
