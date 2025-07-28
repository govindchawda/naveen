const insecticides = [
  {
    name: "TWISTER",
    composition: "Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC",
    targetPest: "Aphids, Jassids, Thrips, Bollworms, Whiteflies, Leaf Folder, Green Leaf Hopper, Blue Beetles, Fruit Borer, Stem Borer",
    dose: "250–400 ml per Acre",
    packing: [
      { size: "1 Ltr", price: "1357" },
    ],
    image: "https://i.ibb.co/7xgWpGsw/b5b52550-1800-4a2c-b9b9-b221a59c17af.jpg"
  },
  {
    name: "CYCLONE 4.9",
    composition: "Lambda Cyhalothrin 4.9% CS",
    targetPest: "Thrips, Fleabeetle, Bollworms, Green Stink Bug, Leaf Folder, Shoot and Fruit Borer, Fruit Borer, Stem Borer",
    dose: "250–300 ml per Acre",
    packing: [
      { size: "1 Ltr", price: "483" }
    ],
    image: "https://i.ibb.co/s94Vy3ng/d41c6135-b2f1-4b35-bea3-6131c570de73.jpg"
  },
  {
    name: "THUNDER 404",
    composition: "Profenofos 40% + Cypermethrin 4% EC",
    targetPest: "Tobacco Caterpillar, Spotted bollworm, Pink bollworm, Aphids, Jassids, Thrips, Whiteflies",
    dose: "300–400 ml per Acre",
    packing: [
      { size: "1 Ltr", price: "649" }
    ],
    image: "https://i.ibb.co/Swd9hwt8/aec96d49-3863-4d4b-bc58-ffec68a74f2e.jpg"
  },
  {
    name: "SPENSER 505",
    composition: "Chlorpyrifos 50% + Cypermethrin 5% EC",
    targetPest: "Bollworm, White Fly, Heliothis, Aphid, Jassid, Thrips, Stem borer, Leaf roller, Fruit Borer, Rice leaf folder, Diamond Back Moth",
    dose: "300–400 ml per Acre",
    packing: [
      { size: "1 Ltr", price: "649" }
    ],
    image: "https://i.ibb.co/v60FsBXJ/d4b4e1a7-deb7-45c6-b098-1ebe981a9a76.jpg"
  },
  {
    name: "TENNET 25",
    composition: "Thiamethoxam 25% WG",
    targetPest: "Aphids, Jassids, Whitefly, Thrips",
    dose: "40–80 gm per Acre",
    packing: [
      { size: "1 kg", price: "2800" }
    ],
    image: "https://i.ibb.co/7Nds5mtk/40525dc9-11be-4fab-b171-fb3d644d3518.jpg"
  },
  // 
  {
    name: "MARCO",
    composition: "Carbendazim 12% + Mancozeb 63% WP",
    targetPest: "Broad Spectrum fungicide — Blast, sheath blight, Leaf spot & rust blight, powdery & downy mildew",
    dose: "250–500 gm per Acre",
    packing: [
      { size: "1 Kg", price: "531" }
    ],
    image: "MARCO.png"
  },
   {
    name: "PARTNER",
    composition: "Paraquat Dichloride 24% SL",
    targetWeeds: "Tea, Potato, Cotton, Rubber, Coffee, Sugarcane, Sunflower, Rice, Wheat, Maize, Grape, Apple, Aquatic Weeds",
    dose: "1000–2500 ml / Acre",
    packing: [
      { size: "1 Ltr", price: "413" },
    ],
    image: "https://i.ibb.co/v4HgWzHt/06dcd3cd-61bc-47ce-90db-5b6cc818f255.jpg"
  },
  {
    name: "BLACK LIST 71",
    composition: "Glyphosate 71% SG",
    targetWeeds: "Acalypha indica, Sida Acuta, Ixeris debilis, Parthenium, Digitaria sanguinalis, Dactyloctenium aegyptium, Eleusine indica, Desmodium, Cyanotis, Euphorbia hirta, Commelina benghalensis, Enneapogon cenchroides, Eragrostis ciliaris",
    dose: "1000–1500 ml / Acre",
    packing: [
      { size: "1 kg", price: "826" }
    ],
    image: "https://i.ibb.co/N6XC6sLG/b4c4d719-e39e-4c23-b9eb-b7212f9d14cc.jpg"
  },
  {
    name: "HUNTER",
    composition: "Imazethapyr 10% SL",
    targetWeeds: "Cyperus, Digitaria, Dithrix, Echinochloa colona, Echinochloa crusgalli, Euphorbia hirta, Euphorbia geniculata, Euphorbia Cheiradenia, Acalypha indica, Amaranthus spp., Commelina benghalensis",
    dose: "600–700 ml / Acre",
    packing: [
      { size: "1 Ltr", price: "2800" },
    ],
    image: "https://i.ibb.co/tw2qsdq0/4da8a1a1-b769-43c8-a930-a8a87dd29e17.jpg"
  },
   {
    name: "GLUE TOP",
    composition: "Silicon Base Wetting Agent",
    targetPest: "Use With All Pesticides & Fungicide As A Spreader And Sticker",
    dose: "5ml / 10ml in 15 Liter Water",
    packing: [
      { size: "1Ltr", price: "787" }
    ],
    image: "GLUE_TOP.png"
  },
  {
    name: "BHUMI",
    composition: "Humic Acid Powder",
    benefits: "Enhanced Nutrient Uptake, Improved Soil Structure, Increased Root Growth, And Enhanced Plant Health And Stress Tolerance",
    dose: "1 kg per Acre",
    packing: [
      { size: "1 Kg", price: "472" },
    ],
    image: "BHUMI.png"
  },
  {
    name: "MAGIC PLUS",
    composition: "Plant Growth Regulator And Multi-Nutrients",
    benefits: "Improves fruit quality, crop health, and increases overall growth",
    dose: "1 ml in 1 liter of water (Foliar spray/Drip)",
    packing: [
      { size: "1 Liter", price: "945" }
    ],
    image: "MAGIC_PLUS.png"
  }
];

async function getAllProducts() {
  let row = "";
  insecticides.forEach((items, index) => {
    row = row + `<div class="product-card">
          <div class="product-image">
              <img src=${items.image}>
            </div>
             <div class="product-title">name :- ${items.composition}</div>
              <div class="product-name">Dose :- ${items.dose}</div>
              <div class="product-name">price :-  ${items.packing.map(p => `${p.size}: ₹${p.price || 'N/A'}`).join(", ")}</div>
      <div class="product-description"> targetPest :- ${items.targetPest}</div>
    </div>`
    document.getElementById("product-slider").innerHTML = row
  })
}

getAllProducts();