// MachineryData.js
export const machineryCategories = [
  {
    id: "noodle-pasta-processing",
    name: "Noodle & Pasta Processing Lines",
    tagline: "High-yield extrusion and precision shaping technology.",
    items: [
      {
        slug: "50-kg-dough-mixer",
        name: "Commercial Dough Mixer (50 kg)",
        img: "/assets/mixture.jpeg",
        desc: "Industrial heavy-torque structural mixer engineered specifically to ensure perfect gluten development and dough hydration without heat generation.",
        specs: ["Batch Capacity: 50 kg / Batch", "Power: 2 HP Motor", "Material: Food-Grade SS Contact Parts, Mild Steel (MS) Non-Contact Structure", "Drive: Heavy Oil-Bath Gearbox"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "manual-noodles-making-machine",
        name: "Manual Noodles Making Machine",
        img: "/assets/ManualNoodlesMaking.jpeg",
        desc: "Heavy-duty entry-level noodle making machine engineered for smaller setups, featuring high-efficiency manual batch adjustments and reliable output.",
        specs: ["Production Capacity: 100 kg to 120 kg/hr", "Power: 2 HP Motor", "Cutter Size: 1.5 mm Precision Cutter"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "10-roller-noodles-making-machine",
        name: "10 Roller Noodles Making Machine",
        img: "/assets/10RollerNoodlesMaking.jpeg",
        desc: "Semi-automatic heavy-duty noodle processing machine equipped with a specialized gearbox for continuous multi-stage dough flattening.",
        specs: ["Production Capacity: 100 kg/hr", "Power: 3 HP Motor with Integrated Gearbox", "Cutter Size: 1.4 mm / 1.0 mm Precision Cutter Options"],
        price: "₹ 2,20,000",
        isFeatured: true
      },
      {
        slug: "12-roller-noodles-making-machine",
        name: "12 Roller Noodles Making Machine",
        img: "/assets/12RollerNoodlesMaking.jpeg",
        desc: "High-yield automated roller configuration system designed for medium-scale factories requiring consistent sheet thickness control.",
        specs: ["Production Capacity: 200 kg to 250 kg/hr", "Power: 3 HP Motor with Integrated Gearbox", "Cutter Size: 1.5 mm Standard Cutter"],
        price: "₹ 2,50,000",
        isFeatured: false
      },
      {
        slug: "14-roller-noodles-making-machine",
        name: "14 Roller Noodles Making Machine",
        img: "/assets/14RollerNoodlesMaking.jpeg",
        desc: "Commercial grade automated noodle production unit featuring high-precision heavy reduction gears and advanced multi-roller sheet processing.",
        specs: ["Production Capacity: 300 kg to 400 kg/hr", "Power: 3 HP Motor with Integrated Gearbox", "Cutter Size: 1.5 mm Standard Cutter"],
        price: "₹ 3,50,000",
        isFeatured: false
      },
      {
        slug: "16-roller-noodles-making-machine",
        name: "16 Roller Noodles Making Machine",
        img: "/assets/16RollerNoodlesMaking.jpeg",
        desc: "Industrial-scale high-speed multi-roller production system designed to process maximum starch volumes with zero structural fractures.",
        specs: ["Production Capacity: 400 kg to 500 kg/hr", "Power: 5 HP Heavy Duty Motor with Integrated Gearbox", "Cutter Size: 1.5 mm Precision Cutter"],
        price: "₹ 4,50,000",
        isFeatured: true
      },
      {
        slug: "18-roller-double-hopper-noodles-machine",
        name: "18 Roller Noodles Making Machine (Double Hopper)",
        img: "/assets/NoodlesMakingDoubleHopher.jpeg",
        desc: "Advanced high-performance system configured with dual feeding hoppers, dual motors, and dual gearboxes for premium uniform dough processing.",
        specs: ["Production Capacity: 600 kg/hr", "Power Configuration: 2 Independent Motors & 2 Gearboxes", "Feeding System: High-Capacity Double Hopper", "Cutter System: 1 Precision Cutter"],
        price: "₹ 7,00,000",
        isFeatured: false
      },
      {
        slug: "22-roller-double-hopper-noodles-machine",
        name: "22 Roller Noodles Making Machine (Double Hopper)",
        img: "/assets/NoodlesMakingDoubleHopher.jpeg",
        desc: "The ultimate massive-scale continuous automated noodle processing plant featuring high-torque double drive trains and dual cutting attachments.",
        specs: ["Production Capacity: 700 kg to 1000 kg/hr", "Power Configuration: 2 High-Torque Motors & 2 Heavy Duty Gearboxes", "Feeding System: Double Hopper Setup", "Cutter System: 2 Advanced Cutters Included"],
        price: "₹ 9,00,000",
        isFeatured: true
      },
      {
        slug: "automatic-noodle-extruder-machine",
        name: "Automatic Noodle Extruder Machine",
        img: "/assets/AutomaticNoodleExtruderMachine.jpg",
        desc: "Fully automated, PLC-controlled heavy extrusion line designed for continuous long-strand production with uniform dough hydration.",
        specs: ["Capacity: 250-300 kg/hr", "Power: 7.5 kW Heavy Duty Motor", "Material: Food-Grade SS 304", "Control System: Delta PLC Touchscreen"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "semi-automatic-noodle-extruder-machine",
        name: "Semi Automatic Noodle Extruder Machine",
        img: "/assets/AutomaticNoodleExtruderMachine.jpg",
        desc: "Cost-effective, high-torque extruder providing precise manual batch controls with highly consistent structural noodle outputs.",
        specs: ["Capacity: 100-150 kg/hr", "Power: 5 HP Motor", "Material: Partial SS 304 & MS Frame", "Die Customization: Available"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "semi-automatic-pasta-making-machine",
        name: "Semi Automatic Pasta Making Machine",
        img: "/assets/PastaMakingMachineManufacturers.jpg",
        desc: "Versatile industrial pasta extruder ideal for mid-scale businesses to produce fusilli, penne, and macaroni effortlessly.",
        specs: ["Capacity: 80-120 kg/hr", "Power: 4.5 kW System", "Dies Included: 4 Brass Dies", "Cooling System: Integrated Water Jackets"],
        price: "Price on Request",
        isFeatured: false
      },
     
      {
        slug: "noodles-steamer-100-kg",
        name: "Noodles Steamer (100 kg Bulk)",
        img: "/assets/noodledough.jpg",
        desc: "Institutional stationary heavy pressure steaming vault crafted entirely out of thick SS 304 panels for bulk preparation loads up to 100 kg.",
        specs: ["Capacity: 100 kg per Cycle", "Gasket Type: High-Temperature Food Grade Silicone", "Working Pressure: 0.5 - 1.5 Bar", "Shelves: 10 Reinforced Grid Trays"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "100kg-mixer-grinder-gearbox",
        name: "Commercial Mixer Grinder with Gearbox (100 kg)",
        img: "/assets/100kg_mixer_grinder_with_gearbox.jpeg",
        desc: "Heavy-duty commercial mixer grinder featuring a robust U-shaped stainless steel tank, powered by a high-torque motor and heavy-reduction gear system for effortless uniform blending.",
        specs: ["Batch Capacity: 100 kg / Batch", "Structure: Stainless Steel Mixing Tank with MS Frame", "Drive System: Heavy Reduction Gearbox with Electric Motor", "Application: Bulk dough mixing and semi-solid food blending"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "pasta-making-machine-heavy-setup",
        name: "Industrial Pasta Making Machine (50kg to 1000kg Setup)",
        img: "/assets/PastaMakingmachine_50kg_to_1000kg_all_setup.jpeg",
        desc: "Comprehensive heavy-duty industrial pasta and macaroni processing plant equipped with an advanced integrated control panel, multi-stage mixing, and conveyor line for mass production.",
        specs: ["Capacity Range: 50 kg to 1000 kg/hr", "Control Panel: Fully centralized monitoring with PID controllers", "Material: Heavy-duty food-grade stainless steel construction", "Automation: Semi to Fully Automatic configurations"],
        price: "Price on Request",
        isFeatured: true
      },
      {
        slug: "pani-puri-making-machine",
        name: "Automatic Pani Puri Making Machine",
        img: "/assets/PaniPurimakingmachine.jpeg",
        desc: "Compact and highly efficient automated machine engineered for uniform rolling, cutting, and continuous output of perfect circular puri sheets.",
        specs: ["Application: Pani Puri, Golgappa, and Papdi production", "Drive: Integrated motor with multi-roller sheet thickness adjustment", "Conveyor System: Food-grade green PVC conveyor belt", "Design: Space-saving robust frame structure"],
        price: "Price on Request",
        isFeatured: false
      }
    ]
  },
  {
    id: "fruit-tomato-processing",
    name: "Fruit & Tomato Processing Plants",
    tagline: "Industrial washing, pulping, and thermal stabilization units.",
    items: [
     
      {
        slug: "steam-jacketed-kettle",
        name: "Industrial Steam Jacketed Kettle",
        img: "/assets/IndustrialSteamJacketedKettle.jpg",
        desc: "Hemispherical double-walled boiling pan offering seamless uniform indirect steam jacket insulation to eliminate product burning or scorching.",
        specs: ["Volume: 200L / 500L Variants", "Tilting System: Worm-Gear Manual Handwheel", "Pressure Limit: Up to 4 Bar Structural Rating", "Stirrer: Scraper Assembly with PTFE Blades"],
        price: "Price on Request",
        isFeatured: true
      },
     
   
      {
        slug: "fruit-pulper",
        name: "Commercial Fruit Pulper & Separator",
        img: "/assets/CommercialFruitPulper&Separator.jpg",
        desc: "Dual-stage operational refinement system providing clean visual extraction of dense pulps away from raw skins, seeds, and hard waste fiber.",
        specs: ["Rotor Speed: 960 RPM Optimized", "Sieve Aperture: 0.5mm to 2mm Screens Available", "Yield Efficiency: >94% Extract Retention", "Maintenance: Tool-less Chamber Disassembly"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "mango-pulp-extractor",
        name: "Industrial Mango Pulp Extractor",
        img: "/assets/Mangopulp.jpeg",
        desc: "High-efficiency sanitary stainless steel pulping machine specifically designed to separate smooth fruit pulp from seeds and skins with maximum yield.",
        specs: ["Application: Mango, papaya, guava, and tomato pulping", "Material: Full Food-Grade Stainless Steel (SS) Body", "Structure: Rigid inclined frame with high-capacity processing chamber", "Operation: Easy maintenance with quick-release sieves"],
        price: "Price on Request",
        isFeatured: false
      }
    ]
  },
  {
    id: "boilers-kitchen-equipment",
    name: "Steam Generation & Commercial Kitchens",
    tagline: "High-efficiency thermal units and robust industrial kitchen setups.",
    items: [
     
      {
        slug: "electric-steamer-12-tray",
        name: "Commercial 12-Tray Electric Steamer (50 kg)",
        img: "/assets/electricsteamer12tre50kgcapacityFullyssbodyParis.jpeg",
        desc: "Premium institutional multi-tier food steamer constructed with a fully stainless steel body, heavy-duty door latches, and smooth caster wheels for effortless kitchen mobility.",
specs: [
  "Capacity: Available in 50 kg (12 Trays) & 100 kg (24 Trays) Options",
  "Material: Complete Food-Grade Stainless Steel (SS) Body",
  "Mobility: Industrial swivel caster wheels with brakes",
  "Application: Bulk steaming of rice, idlis, momos, and vegetables"],
        price: "65000",
        isFeatured: false
      },
      {
        slug: "electric-dryer-cabinet-multi-tray",
        name: "Industrial Electric Cabinet Dryer Series",
        img: "/assets/ElectricDryer6tre12tre_24tre_60tre_95tre_and220tre.jpeg",
        desc: "Heavy-insulated batch cabinet drying units equipped with precise electronic control panels, analog multi-meters, and adjustable air-circulation vents.",
        specs: ["Available Models: 6, 12, 24, 60, 95, and 220 Trays", "Control Interface: Top-mounted analog temperature & voltage meters", "Finish: High-visibility durable protective coating", "Application: Uniform dehydration of food products, snacks, and powders"],
        price: "Price on Request",
        isFeatured: false
      },
      {
        slug: "bulk-steamer-boiler-multisource",
        name: "Industrial 10kg Multi-Source Steamer Vault",
        img: "/assets/Stemar10kgusetoboilerLPGwoodenandelectric.jpeg",
        desc: "Highly versatile multi-tier heavy pressure steaming vault designed to utilize steam from external boilers, LPG burners, wood-fired setups, or electric elements.",
        specs: ["Capacity: 10 kg compact high-density preparation", "Energy Options: Boiler connected, LPG gas, Wooden, or Electric", "Locking Mechanism: Heavy-duty dual mechanical clamp levers", "Base Support: Elevated rigid pillars with floor mounting flaps"],
        price: "85000",
        isFeatured: false
      },
      {
        slug: "electric-dryer-95-tray",
        name: "95-Tray Industrial Electric Dryer (Heavy Duty)",
        img: "/assets/ElectricDryer95tre.jpeg",
        desc: "Industrial-grade double-door cabinet dryer featuring dual-column tray racks, a side-mounted control station with digital indicators, and a powerful forced-air induction blower.",
        specs: ["Capacity: 95 High-capacity reinforced grid trays", "Control Station: Integrated phase indicators, digital temp controller, and safety toggles", "Door System: Heavy-duty dual-gasket insulated swing doors", "Circulation: Integrated high-volume hot air axial fan system"],
        price: "Price on Request",
        isFeatured: true
      }
    ]
  }
];