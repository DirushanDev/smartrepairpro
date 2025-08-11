import React, { useState } from 'react';

const categories = [
  "Burgers",
  "Kebab Rolls",
  "Biryani Dishes",
  "BBQ Steak",
  "BBQ Chicken",
  "Lamb Chops",
  "BBQ King Prawns",
  "Chef Specials",
  "Tawa",
  "Curry",
  "Sizzlers and Grills",
  "Sides",
  "Drinks",
];


const allItems = [
  // Burgers
  { title: "Angus Beef Burger", price: "£5.5", category: "Burgers", image: "/fishfry.jpeg" },
  { title: "Lamb Burger", price: "£5.5", category: "Burgers", image: "/burger.jpg" },
  { title: "Grilled Chicken Burger", price: "£5", category: "Burgers", image: "/burger.jpg" },
  { title: "Zinger Burger", price: "£5", category: "Burgers", image: "/burger.jpg" },
  { title: "Steak Burger", price: "£6.5", category: "Burgers", image: "/burger.jpg" },

  // Kebab Rolls
  { title: "Chicken Kebab (2pc) ", price: "£6", category: "Kebab Rolls", image: "/kebab.jpg" },
  { title: "Lamb Kebab (2pc)", price: "£6.5", category: "Kebab Rolls", image: "/kebab.jpg" },
  { title: "Chicken Tikka Regular", price: "£6.5", category: "Kebab Rolls", image: "/kebab.jpg" },
  { title: "Chicken Tikka Large", price: "£9", category: "Kebab Rolls", image: "/kebab.jpg" },
  { title: "Mix Kebab Regular", price: "£7.5", category: "Kebab Rolls", image: "/kebab.jpg" },
  { title: "Mix Kebab Large", price: "£10.5", category: "Kebab Rolls", image: "/kebab.jpg" },

  // Biryani Dishes
  { title: "Chicken Biryani", price: "£8", category: "Biryani Dishes", image: "/biryani.jpg" },
  { title: "Lamb Biryani", price: "£9", category: "Biryani Dishes", image: "/biryani.jpg" },
  { title: "Prawn Biryani", price: "£11", category: "Biryani Dishes", image: "/biryani.jpg" },
  { title: "Vegetable Biryani", price: "£7.5", category: "Biryani Dishes", image: "/biryani.jpg" },

  // BBQ Steak
  { title: "Tomahawk Approx 450g", price: "£30", category: "BBQ Steak", image: "/steak.jpg" },
  { title: "Rib Eye Approx 300g", price: "£27", category: "BBQ Steak", image: "/steak.jpg" },
  { title: "Sirloin Approx 300g", price: "£24.5", category: "BBQ Steak", image: "/steak.jpg" },
  { title: "T-Bone Approx 300g", price: "£23.5", category: "BBQ Steak", image: "/steak.jpg" },
  { title: "Rump Approx 300g", price: "£18", category: "BBQ Steak", image: "/steak.jpg" },
  { title: "Fillet Mignon Approx 300g", price: "£35", category: "BBQ Steak", image: "/steak.jpg" },
  { title: "Chicken Steak", price: "£10", category: "BBQ Steak", image: "/steak.jpg" },

  // BBQ Chicken
  { title: "BBQ Chicken (1/4)", price: "£7.5", category: "BBQ Chicken", image: "/chicken.jpg" },
  { title: "BBQ Chicken (1/2)", price: "£9.5", category: "BBQ Chicken", image: "/chicken.jpg" },
  { title: "BBQ Chicken (Full)", price: "£14.5", category: "BBQ Chicken", image: "/chicken.jpg" },
  { title: "BBQ Chicken (1/4)", price: "£6", desc: "on its own", category: "BBQ Chicken", image: "/chicken.jpg" },
  { title: "BBQ Chicken (1/2)", price: "£8", desc: "on its own", category: "BBQ Chicken", image: "/chicken.jpg" },
  { title: "BBQ Chicken (Full)", price: "£13", desc: "on its own", category: "BBQ Chicken", image: "/chicken.jpg" },

  // Lamb Chops
  { title: "Premium Lamb Chops (3pc)", price: "£24", category: "Lamb Chops", image: "/lamb.jpg" },
  { title: "Lamb Chops (5pc)", price: "£15", category: "Lamb Chops", image: "/lamb.jpg" },

  // BBQ King Prawns
  { title: "BBQ King Prawns (10pc)", price: "£18", category: "BBQ King Prawns", image: "/prawns.jpg" },
  { title: "BBQ King Prawns (20pc)", price: "£36", category: "BBQ King Prawns", image: "/prawns.jpg" },

  // Chef Specials
  { title: "Lamb Karahi", price: "£12", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Butter Chicken Curry", price: "£11.5", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chicken Tikka Masala", price: "£12", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chicken Jalfrezi", price: "£11", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Paneer Jalfrezi", price: "£8.5", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Paneer Karahi", price: "£8", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Zambian King Prawns (10pc)", price: "£15", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chilli Garlic Prawns (10pc)", price: "£12", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Crispy Chicken Indo-Chinese", price: "£7.5", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Crispy Beef Indo-Chinese", price: "£8.5", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chilli Panner Indo-Chinese", price: "£7", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chicken Shashlik (5pc)", price: "£8", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Paneer Shashlik (5pc)", price: "£7", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Methi Chicken", price: "£12", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Methi Lamb", price: "£13", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chilli Garlic Paneer", price: "£8.5", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Half Chicken Karahi", price: "£12", desc: "Pre-Order minimum 1 hour", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Full Chicken Karahi", price: "£20", desc: "Pre-Order minimum 1 hour", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Lamb Karahi", price: "(1Kg) - £36", halfprice: "0.5Kg) - £23", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chicken Karahi Boneless", price: "(1Kg) - £27", halfprice: "(0.5Kg) - £18", category: "Chef Specials", image: "/chef.jpg" },
  { title: "Chicken Tikka Karahi Boneless", price: "(1Kg) - £34", halfprice: "(0.5Kg) - £20", category: "Chef Specials", image: "/chef.jpg" },

  // Sizzlers and Grills
  { title: "Lamb Seekh Kebab (5pc)", price: "£5", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Chicken Seekh Kebab (5pc)", price: "£4.5", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Kebab Mix ", price: "£11", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Chicken Wings (10pc)", price: "£8", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Chicken Tikka", price: "£7", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Peri Peri Chicken (Half)", price: "£7", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Peri Peri Chicken (Full)", price: "£11", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Karmos Chicken (Half)", price: "£7", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Karmos Chicken (Full)", price: "£11", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Tandoori Chicken (Half)", price: "£7", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Tandoori Chicken (Full)", price: "£11", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Mix Grill Regular 2 People", price: "£20", category: "Sizzlers and Grills", image: "/grill.jpg" },
  { title: "Mix Grill Large 4 People", price: "£37", category: "Sizzlers and Grills", image: "/grill.jpg" },

  // Tawa
  { title: "Chicken Regular", price: "£12.5", category: "Tawa", image: "/curry.jpg" },
  { title: "Chicken Large", price: "£24", category: "Tawa", image: "/curry.jpg" },
  { title: "Lamb Regular", price: "£13.5", category: "Tawa", image: "/curry.jpg" },
  { title: "Lamb Large", price: "£26", category: "Tawa", image: "/curry.jpg" },
  { title: "Prawn Regular", price: "£15", category: "Tawa", image: "/curry.jpg" },
  { title: "Prawn Large", price: "£28", category: "Tawa", image: "/curry.jpg" },
  { title: "Paneer Regular", price: "£10", category: "Tawa", image: "/curry.jpg" },
  { title: "Paneer Large", price: "£18", category: "Tawa", image: "/curry.jpg" },


  // Curry
  { title: "Chicken Madras", price: "£11", category: "Curry", image: "/curry.jpg" },
  { title: "Chicken Karahi", price: "£11", category: "Curry", image: "/curry.jpg" },
  { title: "Chilli Chicken Karahi", price: "£12", category: "Curry", image: "/curry.jpg" },
  { title: "Lamb Vindaloo", price: "£12", category: "Curry", image: "/curry.jpg" },
  { title: "Keema Lamb Curry", price: "£12", category: "Curry", image: "/curry.jpg" },
  { title: "Prawn Karahi", price: "£13", category: "Curry", image: "/curry.jpg" },
  { title: "Mix Vegetable Curry", price: "£8", category: "Curry", image: "/curry.jpg" },
  { title: "Tarka Daal", price: "£7", category: "Curry", image: "/curry.jpg" },
  { title: "Paya", price: "£8", desc: "Ask For Availability", category: "Curry", image: "/curry.jpg" },
  { title: "Beja", price: "£9.5", desc: "Ask For Availability", category: "Curry", image: "/curry.jpg" },


  // Sides
  { title: "Fried Egg", price: "£2", category: "Sides", image: "/fries.jpg" },
  { title: "Garlic Bread (3pc)", price: "£3", category: "Sides", image: "/fries.jpg" },
  { title: "Chips Plain", price: "£3.5", category: "Sides", image: "/fries.jpg" },
  { title: "Chilli Chips", price: "£4.5", category: "Sides", image: "/fries.jpg" },
  { title: "Chilli Cheesy Chips", price: "£5.5", category: "Sides", image: "/fries.jpg" },
  { title: "Egg Fried Rice", price: "£5.5", category: "Sides", image: "/fries.jpg" },
  { title: "Vegetable Rice", price: "£5.5", category: "Sides", image: "/fries.jpg" },
  { title: "Spicy Rice", price: "£5", category: "Sides", image: "/sides.jpg" },
  { title: "Kitchri Rice", price: "£3.5", category: "Sides", image: "/sides.jpg" },
  { title: "Pilau Rice", price: "£3", category: "Sides", image: "/sides.jpg" },
  { title: "Naan Plain", price: "£1.25", category: "Sides", image: "/sides.jpg" },
  { title: "Butter Naan", price: "£1.25", category: "Sides", image: "/sides.jpg" },
  { title: "Garlic Naan", price: "£2.5", category: "Sides", image: "/sides.jpg" },
  { title: "Chilli Naan", price: "£2.5", category: "Sides", image: "/sides.jpg" },
  { title: "Cheesy Naan", price: "£3.5", category: "Sides", image: "/sides.jpg" },
  { title: "Roti", price: "£1.25", category: "Sides", image: "/sides.jpg" },
  { title: "Salad", price: "£1.5", category: "Sides", image: "/sides.jpg" },
  { title: "Coleslaw", price: "£2.5", category: "Sides", image: "/sides.jpg" },
  { title: "Special Sauce", price: "£1", category: "Sides", image: "/sides.jpg" },
  { title: "Tub Of Sauce (Ketchup/Mayo/Chilli/Mint)", price: "£.50p", category: "Sides", image: "/sides.jpg" },

  // Drinks
  { title: "Cans", price: "£1.5", category: "Drinks", image: "/drink.jpg" },
  { title: "Water Bottle", price: "£1",  category: "Drinks", image: "/drink.jpg" },
  { title: "Glass Bottle", price: "£1.5", category: "Drinks", image: "/drink.jpg" },
  { title: "African Glass Bottle", price: "£-", category: "Drinks", image: "/drink.jpg" },
  { title: "African Can", price: "£-", category: "Drinks", image: "/drink.jpg" },

];


const Menu = () => {
  const [selected, setSelected] = useState("Burgers");

  const filtered = selected === "All"
    ? allItems
    : allItems.filter((item) => item.category === selected);

  return (
    <section id="menu" className="w-full bg-black text-[#E5D9C2] py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8 mt-18">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">Main Menu</h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${
              selected === cat
                ? "bg-green-700 text-white shadow-md"
                : "bg-[#F26C22] text-white hover:bg-[#D42C27]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A] rounded-lg border border-[#333] overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#F26C22] hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
              <div className="mb-5">
                <span className="text-[#46A547] font-semibold block">
                  Price: {item.price}
                </span>
                {item.halfprice && (
                  <span className="text-[#F26C22] font-semibold block mt-1">
                    Half Price: {item.halfprice}
                  </span>
                )}
              </div>
              {item.desc && (
                <p className="text-[#B0B0B0] text-sm mb-4">{item.desc}</p>
              )}
              <button className="w-full bg-[#F26C22] hover:bg-[#D42C27] text-white py-2 rounded-md flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out">
                <span className="text-xl">+</span> Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#F26C22] hover:bg-[#D42C27] text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;