import Card from "../layouts";
import cardData from "../cardData";

const secondSection = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="lg:container px-3">
        <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 lg:gap-y-8 lg:grid-cols-3 py-6 md:py-8 lg:py-12">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default secondSection;
