import Card from "../layouts";
import cardData from "../cardData";
import { useState } from "react";

const secondSection = () => {
  const [openCard, setOpenCard] = useState([]);
  const toggleCard = (index) => {
    if (openCard.includes(index)) {
      setOpenCard((prev) => prev.filter((item) => item !== index));
    } else {
      setOpenCard((prev) => [...prev, index]);
    }
  };

  return (
    <div className="bg-[#F9FAFB]">
      <div className="lg:container px-3">
        <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 lg:gap-y-8 lg:grid-cols-3 py-6 md:py-8 lg:py-12">
          {cardData.map((card, index) => (
            <Card
              key={`${card.id}-${openCard.includes(index)}`} // Corrected this line
              title={card.title}
              description={card.description}
              detailedDescription={card.detailedDescription}
              isOpen={openCard.includes(index)}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default secondSection;
