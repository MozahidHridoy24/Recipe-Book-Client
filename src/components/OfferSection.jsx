import React from "react";

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      title: "20% Off on All Vegan Recipes",
      description:
        "Enjoy a special discount on all vegan recipe books this month. Healthy and tasty!",
      validTill: "July 31, 2025",
    },
    {
      id: 2,
      title: "Free Shipping on Orders Over $50",
      description:
        "Get your recipe books and kitchen accessories delivered for free on orders above $50.",
      validTill: "August 15, 2025",
    },
    {
      id: 3,
      title: "Buy One, Get One Free - Spices Pack",
      description:
        "Buy any spice pack and get another one absolutely free. Limited time offer!",
      validTill: "July 20, 2025",
    },
    {
      id: 4,
      title: "30% Off on New Summer Recipes",
      description:
        "Celebrate summer with fresh new recipes! Get 30% off on all newly added summer dishes.",
      validTill: "August 10, 2025",
    },
  ];

  return (
    <section className="py-12 bg-base-200 text-base-content px-6 mt-1">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
          Special Offers
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="border border-orange-300 rounded-xl p-6 shadow-xl hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                {offer.title}
              </h3>
              <p className="mb-4 ">{offer.description}</p>
              <p className="text-sm  italic">Valid Till: {offer.validTill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
