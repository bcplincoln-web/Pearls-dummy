// Shared fallback product catalog.
// Used by BOTH index.html (public site) and admin.html (admin panel) as the
// bundled default when the live Vercel Blob catalog hasn't been saved yet.
//
// IMPORTANT: This is the single source of truth for the fallback list.
// Edit this file only — do NOT hand-edit a duplicate array inside
// index.html or admin.html, or the two will silently drift out of sync.
//
// Once an admin saves changes via /admin.html, the live Blob JSON becomes
// the real source of truth and this file is only used before the first
// save (or if the Blob fetch fails).

window.DEFAULT_PRODUCTS = [
    // Category: Purified
    {
        id: 1, name: "Single Membrane System", category: "Purified Water Systems", price: "Contact Us",
        desc: "Reliable single membrane purification for entry-level stations.",
        images: ["/card1/SINGLE.webp"]
    },
    {
        id: 2, name: "Double Membrane System", category: "Purified Water Systems", price: "Contact Us",
        desc: "Dual RO filtration strength for medium to high volume operations.",
        images: ["/card1/DOUBLE.webp"]
    },
    {
        id: 3, name: "Triple Membrane (Auto)", category: "Purified Water Systems", price: "Contact Us",
        desc: "Automated high-capacity triple membrane system for commercial use.",
        images: ["/card1/TRIPLE.webp"]
    },
    {
        id: 4, name: "Quadruple Membrane", category: "Purified Water Systems", price: "Contact Us",
        desc: "Industrial-grade heavy duty quadruple membrane setup.",
        images: ["/card1/QUADRUPLE.webp"]
    },

    // Category: Mineral & High pH
    {
        id: 5, name: "Mineral Water System", category: "Mineral & High pH", price: "Contact Us",
        desc: "Remineralization system to add essential minerals back into purified water.",
        images: ["/card2/REGULAR.webp"]
    },
    {
        id: 6, name: "High pH Alkaline Unit", category: "Mineral & High pH", price: "Contact Us",
        desc: "Boosts your water pH securely for excellent alkaline health benefits.",
        images: ["/card2/2N1.webp"]
    },
    {
        id: 7, name: "Ultrafine Mineral + Alkaline", category: "Mineral & High pH", price: "Contact Us",
        desc: "The ultimate 2-in-1 combo system providing both mineral and alkaline outputs.",
        images: ["/card2/PREMIUM AND ULTRAFINE.webp"]
    },
    {
        id: 8, name: "3-in-1 Complete Station", category: "Mineral & High pH", price: "Contact Us",
        desc: "Dispenses Purified, Mineral, and Alkaline from one integrated powerhouse.",
        images: ["/card3/3N1-MINERAL.webp"]
    },

    // Category: Services
    {
        id: 18, name: "Complete Rehab Treatment", category: "Services", price: "Contact Us",
        desc: "Full system overhaul, deep sanitization, and pipe realignment.",
        images: ["/services/REHAB.webp","/services/REHAB1.webp"]
    },
    {
        id: 19, name: "Membrane Replacement Labor", category: "Services", price: "Contact Us",
        desc: "Professional on-site installation and tuning service.",
        images: ["/services/Membrane Replacement.webp"]
    },
    {
        id: 20, name: "Staff Re-training Course", category: "Services", price: "Contact Us",
        desc: "Comprehensive on-site operational and maintenance training for your staff.",
        images: ["/services/Staff Retraining.webp"]
    },

    // Category: Water Related Products
    {
        id: 200, name: "Reverse Osmosis", category: "Water Related Products", price: "Contact Us",
        desc: "Multi-stage reverse osmosis system that removes up to 99% of contaminants including heavy metals, dissolved solids, bacteria, and chemicals. Ideal for producing pure drinking water for homes or light commercial use.",
        images: ["/OTHERS/REVERSE OSMOSIS.webp"]
    },
    {
        id: 201, name: "Mini Reverse Osmosis", category: "Water Related Products", price: "Contact Us",
        desc: "Compact, space-saving reverse osmosis unit designed for smaller households, apartments, or under-sink installation. Delivers high-quality purified water with efficient filtration in a minimal footprint.",
        images: ["/OTHERS/MINI REVERSE OSMOSIS.webp"]
    },
    {
        id: 202, name: "Pre Treatment Household Centralized", category: "Water Related Products",price: "Contact Us",
        desc: "Whole-house pre-treatment system that conditions incoming water by removing sediment, chlorine, and hardness before it reaches other filtration stages. Protects downstream equipment and improves overall water quality throughout the home.",
        images: ["/OTHERS/PRE TREATMENT HOUSEHOLD CENTRALIZED.webp"]
    },
    {
        id: 203, name: "Nano Filtration", category: "Water Related Products",price: "Contact Us",
        desc: "Advanced nano-filtration system that selectively removes bacteria, viruses, organic compounds, and larger dissolved particles while retaining beneficial minerals. Suitable for both residential and commercial applications requiring high-purity water.",
        images: ["/OTHERS/NANO FILTRATION.webp"]
    },
    {
        id: 204, name: "High PH Water Processor", category: "Water Related Products",price: "Contact Us",
        desc: "Water treatment unit that elevates pH levels to produce alkaline water. Enhances taste and provides potential health benefits by adding beneficial minerals after purification.",
        images: ["/OTHERS/HIGH PH WATER FILTRATION.webp"]
    },
    {
        id: 205, name: "Wall Hung Filter", category: "Water Related Products",price: "Contact Us",
        desc: "Space-efficient wall-mounted filtration system with multiple filter stages. Easy to install and maintain, ideal for kitchens, utility rooms, or areas with limited floor space.",
        images: ["/OTHERS/WALL HUNG 1.webp"]
    },
      {
        id: 206, name: "Stainless Sink Countertop", category: "Water Related Products",price: "Contact Us",
        desc: "Durable stainless steel sink and countertop unit designed for water filling stations, commercial kitchens, or refill points. Hygienic, corrosion-resistant, and easy to clean.",
        images: ["/OTHERS/STAINLESS SINK COUNTERTOP.webp"]
    },
     {
        id: 207, name: "Ice Maker", category: "Water Related Products",price: "Contact Us",
        desc: "Commercial or residential ice-making machine that produces clean ice from purified water. Suitable for offices, restaurants, or homes requiring a steady supply of ice.",
        images: ["/OTHERS/ICEMAKER2.webp", "/OTHERS/ICEMAKER.webp"]
    },
     {
        id: 208, name: "Laundry", category: "Water Related Products",price: "Contact Us",
        desc: "Specialized water treatment solution for laundry applications that softens water, reduces mineral buildup, and improves washing efficiency while protecting machines and fabrics.",
        images: ["/OTHERS/LAUNDRY.webp","/OTHERS/LAUNDRY1.webp"]
    },
      {
        id: 209, name: "Containers", category: "Water Related Products",price: "Contact Us",
        desc: "High-quality water storage containers designed for safe, hygienic holding of purified water. Available in various sizes for residential, commercial, or bulk storage needs.",
        images: ["/OTHERS/CONTAINERS.webp", "/OTHERS/CONTAINER2.webp"]
    },
      {
        id: 210, name: "Water Tanks", category: "Water Related Products",price: "Contact Us",
        desc: "Durable storage tanks designed for holding purified or treated water. Available in various capacities for residential, commercial, or bulk storage needs, ensuring safe and hygienic water reserve.",
        images: ["/OTHERS/WATER TANKS.webp"]
    },


    // Category: Consumables -> Wall Hung Filters
    { id: 101, name: "PW1", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/PW1.webp"] },
    { id: 102, name: "PW2", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/PW2.webp"] },
    { id: 103, name: "Mineral", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/MINERAL.webp"] },
    { id: 104, name: "M+", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/M+.webp"] },
    { id: 105, name: "PW1 C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.webp"] },
    { id: 106, name: "PW2 C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.webp"] },
    { id: 107, name: "PW3 C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.webp"] },
    { id: 108, name: "Mineral C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/MINERAL C.webp"] },
    { id: 109, name: "M+ C", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "", images: ["/consumables/wallhungfilters/m+c.webp"] },
    { id: 110, name: "Brine Tank", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 70, 80, and 120 liters", images: ["/consumables/wallhungfilters/brine tank.webp"] },
    { id: 111, name: "PU Elbow (10 or 12 mm)", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 10 and 12 mm", images: ["/consumables/wallhungfilters/PU ELBOW.webp"] },
    { id: 112, name: "PU Straight (10 or 12 mm)", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 10 and 12 mm", images: ["/consumables/wallhungfilters/PU STRAIGHT.webp"] },
    { id: 113, name: "Quick Connect (1/2 or 1/4)", category: "Consumables", subCategory: "Wall Hung Filters", price: "Ask for Price", desc: "Available in 1/2 and 1/4", images: ["/consumables/wallhungfilters/QUICK CONNECT.webp"] },

    // Category: Consumables -> Sediment Filters
    { id: 120, name: "10x54", category: "Consumables", subCategory: "Sediment Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.webp"] },
    { id: 121, name: "13x54", category: "Consumables", subCategory: "Sediment Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.webp"] },
    { id: 122, name: "16x54", category: "Consumables", subCategory: "Sediment Filters", price: "Ask for Price", desc: "", images: ["consumables/wallhungfilters/M+.webp"] },

    // Category: Consumables -> Carbon Block
    { id: 123, name: "AC Cream", category: "Consumables", subCategory: "Carbon Block", price: "Ask for Price", desc: "Hydrosep", images: ["/ac cream.webp"] },
    { id: 124, name: "AC Green", category: "Consumables", subCategory: "Carbon Block", price: "Ask for Price", desc: "CocoPure, CocoPlus, CocoOne, CocoSure", images: ["/consumables/sediment/ac green.webp"] },

    // Category: Consumables -> UV Sterilizer
    { id: 170, name: "UV Lamp", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["/consumables/uv sterilizer/UV_LAMP.webp"] },
    { id: 171, name: "UV Ballast", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["/consumables/uv sterilizer/UV_BALLAST.webp"] },
    { id: 172, name: "UV Chamber", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["/consumables/uv sterilizer/UV_CHAMBER.webp"] },
    { id: 173, name: "UV Quartz Glass", category: "Consumables", subCategory: "UV Sterilizer", price: "Ask for Price", desc: "Available in 16, 24, 25, and 35 watts", images: ["/consumables/uv sterilizer/UV_QUARTZ.webp"] },

    // Category: Consumables -> Elements
    { id: 130, name: "Activated Carbon", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/carbon.webp"] },
    { id: 131, name: "Anthracite", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/anthracite.webp"] },
    { id: 132, name: "Pebbles", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/pebbles.webp"] },
    { id: 133, name: "Resin", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/consumables/elements/RESIN.webp"] },
    { id: 134, name: "Salt", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/claro vida salt.webp"] },
    { id: 135, name: "Silica Sand", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["consumables/elements/SILICA_SAND.webp"] },
    { id: 136, name: "Solenoid Valve", category: "Consumables", subCategory: "Elements", price: "Ask for Price", desc: "", images: ["/consumables/elements/solenoid valve.webp"] },

    // Category: Consumables -> Heads
    { id: 140, name: "Manual Head Softener", category: "Consumables", subCategory: "Heads", price: "Ask for Price", desc: "", images: ["/consumables/heads/MANUAL_HEAD_SOFTENER.webp"] },
    { id: 141, name: "Manual Head Multimedia of Carbon", category: "Consumables", subCategory: "Heads", price: "Ask for Price", desc: "", images: ["/consumables/heads/manual head multimedia of carbon.webp"] },
    { id: 142, name: "Automatic Head Softener", category: "Consumables", subCategory: "Heads", price: "Ask for Price", desc: "", images: ["consumables/heads/AUTOMATIC HEAD_SOFTENER.webp"] },

    // Category: Consumables -> FRP Tanks
    { id: 143, name: "10x54", category: "Consumables", subCategory: "FRP Tanks", price: "Ask for Price", desc: "", images: ["/consumables/frp_tank/10x54.webp"] },
    { id: 144, name: "13x54", category: "Consumables", subCategory: "FRP Tanks", price: "Ask for Price", desc: "", images: ["/consumables/frp_tank/10x54.webp"] },
    { id: 145, name: "16x54", category: "Consumables", subCategory: "FRP Tanks", price: "Ask for Price", desc: "", images: ["/consumables/frp_tank/10x54.webp"] },

    // Category: Consumables -> RO Membrane
    { id: 154, name: "40X40", category: "Consumables", subCategory: "RO Membrane", price: "Ask for Price", desc: "Vontron (ULP 21, ULP 11), Dupont-Filmtec Before (BW 30), Netto (Espa 3, Espa 4), Octagon, Hydropure, YQS, American Power", images: ["/consumables/membranes/40x40.webp"] },
    { id: 155, name: "80x40", category: "Consumables", subCategory: "RO Membrane", price: "Ask for Price", desc: "Dupont-Filmtec Before (RO 400, RO 400 Advance), American Power (RO 400, RO 400 Advance)", images: ["/consumables/membranes/40x40.webp"] },

    // Category: Consumables -> Filter Cartridge
    { id: 160, name: "SL10 Blue/Clear", category: "Consumables", subCategory: "Filter Cartridge", price: "Ask for Price", desc: "", images: ["/consumables/filter/sl10.webp"] },
    { id: 161, name: "SL 20 Blue/Clear", category: "Consumables", subCategory: "Filter Cartridge", price: "Ask for Price", desc: "", images: ["/consumables/filter/sl10.webp"] },
    { id: 162, name: "BB20", category: "Consumables", subCategory: "Filter Cartridge", price: "Ask for Price", desc: "", images: ["/consumables/filter/sl10.webp"] },

    // Category: Consumables -> Accessories
    { id: 163, name: "Membrane", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in manual and reverse osmosis", images: ["/consumables/membranes/40x40.webp"] },
    { id: 164, name: "Spanner", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in black and white", images: ["/consumables/accessories/SPANNER.webp"] },
    { id: 165, name: "Upper Strainer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/UPPER_STRAINER.webp"] },
    { id: 166, name: "Lower Strainer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/lower strainer.webp"] },
    { id: 167, name: "Oil Pressure Gauge", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in 100 psi and 350 psi", images: ["/consumables/accessories/oil pressure.webp"] },
    { id: 168, name: "Flow Meter", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/flow meter.webp"] },
    { id: 169, name: "Selector Switch", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/selector switch.webp"] },
    { id: 174, name: "Pilot Light", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in red, green, and blue", images: ["/consumables/accessories/pilot light.webp"] },
    { id: 175, name: "Buzzer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/buzzer.webp"] },
    { id: 176, name: "Timer", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/timer.webp"] },
    { id: 177, name: "Heat Gun", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/heatgun.webp"] },
    { id: 178, name: "Blue Hose", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/blue hose.webp"] },
    { id: 179, name: "White Hose", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "", images: ["/consumables/accessories/white hose.webp"] },
    { id: 180, name: "PVC Clamp White", category: "Consumables", subCategory: "Accessories", price: "Ask for Price", desc: "Available in size big and small", images: ["/consumables/accessories/pvc clamp white.webp"] }
];
