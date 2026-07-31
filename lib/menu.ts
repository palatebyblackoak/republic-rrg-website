export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuSection = {
  id: string;
  label: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Buffalo Shrimp",
        description:
          "Gulf shrimp, corn meal breading, fried and tossed in honey buffalo sauce, cucumber-jicama salad.",
        price: "$12",
      },
      {
        name: "Texas Ceviche",
        description:
          "Gulf shrimp, white fish filet, lime vinaigrette, pico de gallo, tortilla chips.",
        price: "$16",
      },
      {
        name: "Ahi Tuna Ceviche",
        description:
          "Ahi tuna cubed, chopped jicama, avocado, red onions, serrano peppers, ginger vinaigrette, tortilla chips.",
        price: "$19",
      },
      {
        name: "Fried Calamari",
        description:
          "Breaded calamari rings, tomatillo, honey buffalo sauce.",
        price: "$12",
      },
      {
        name: "Costra de Ribeye",
        description:
          "Crispy cheese tortilla shell filled with ribeye, guacamole, served with salsa roja & verde.",
        price: "$18",
      },
      {
        name: "Stuffed Bacon Wrapped Quail",
        description:
          "Anaheim peppers, cream cheese, grill veggies, loaded mashed potatoes, port reduction.",
        price: "$20",
      },
      {
        name: "Fried Mushrooms",
        description: "Hand-breaded whole mushrooms, cilantro-ranch dressing.",
        price: "$11",
      },
      {
        name: "Guacamole",
        description:
          "Avocado, onions, tomatoes, serrano peppers, cilantro, tortilla chips.",
        price: "$14",
      },
      {
        name: "Queso and Chorizo",
        description:
          "Chorizo San Manuel, mozzarella, grilled vegetables, tomatillo sauce, flour tortillas.",
        price: "$12",
      },
      {
        name: "Stuffed Chile Fritos",
        description:
          "Anaheim peppers, Texas goat cheese, cream cheese, chorizo San Manuel, red and green salsa, queso fresco.",
        price: "$16",
      },
      {
        name: "Beef Nachos",
        description:
          "Chips, black beans, cheddar, beef, avocado sauce, pico de gallo, sour cream.",
        price: "$17",
      },
      {
        name: "Artichoke Spinach Dip",
        description:
          "Spinach, artichoke, serrano peppers, bacon, jack cheese, tortilla chips.",
        price: "$12",
      },
      {
        name: "Ribeye Chicharrones",
        description:
          "Bed of guacamole, 8oz ribeye, queso fresco, and chips.",
        price: "$18",
      },
      {
        name: "Grill Cauliflower",
        description:
          "Grilled cauliflower marinated in chile guajillo, chipotle, orange zest, finished with parmesan cheese.",
        price: "$11",
      },
    ],
  },
  {
    id: "soups-salads",
    label: "Soups & Salads",
    title: "Soups & Salads",
    note: "Dressings: Balsamic Vinegar, Cilantro Ranch, Bleu Cheese, Lime-Oregano Vinaigrette, Caesar. Add-Ons: Chicken $8, Salmon $10, Shrimp (4) $10, Ahi Tuna $12.",
    items: [
      {
        name: "Tortilla Soup",
        description:
          "Chicken, caldo, pasilla peppers, avocado cubes, cheese, and tortilla strips.",
        price: "$9 / $15",
      },
      {
        name: "Poblano Chicken Corn Chowder Soup",
        description:
          "Poblano cream soup, chicken, roasted corn, and potatoes.",
        price: "$9 / $15",
      },
      {
        name: "House Greek Salad",
        description:
          "Mix lettuce, queen olives, cucumber, bell peppers, tomato, red onion, lime-oregano vinaigrette, feta.",
        price: "$12",
      },
      {
        name: "Wedge Salad",
        description:
          "Iceberg lettuce, bacon bits, cherry tomatoes, red onions, blue cheese dressing, balsamic drizzle.",
        price: "$10",
      },
      {
        name: "Republic Citrus Salad",
        description:
          "Mixed greens, Texas goat cheese, valley citrus, caramelized walnuts, raspberry vinaigrette.",
        price: "$12",
      },
      {
        name: "Chimichurri Steak Salad",
        description:
          "Fajita, chimichurri sauce, mixed lettuce, grilled asparagus, bell peppers, portobello mushrooms, avocado.",
        price: "$19",
      },
      {
        name: "Avocado Caesar Salad",
        description:
          "Chopped romaine, jicama slices, avocado, artichokes, cherry tomatoes, shaved parmesan, cotija cheese.",
        price: "$10",
      },
    ],
  },
  {
    id: "local-favorites",
    label: "Local Favorites",
    title: "Local Favorites",
    items: [
      {
        name: "Grilled Ribeye",
        description:
          "12 oz ribeye, creamy potato au-gratin, grilled bacon wrapped jalapeño, seasonal vegetables.",
        price: "$34",
      },
      {
        name: "Texas Filet",
        description:
          "8 oz filet, epazote butter, creamy potato au-gratin, port sauce, grilled asparagus.",
        price: "$36",
      },
      {
        name: "Santa Fe Ranch Flat Iron Steak",
        description:
          "Flat iron steak, serrano chimichurri sauce, black beans, cilantro rice, guacamole, queso fresco, pico de gallo, flour tortillas.",
        price: "$24",
      },
      {
        name: "Fajitas (Beef or Chicken)",
        description:
          "Sautéed onions and bell peppers, cilantro rice, black beans, pico de gallo, queso fresco, guacamole, flour tortillas.",
        price: "$20",
      },
      {
        name: "Laminas de Ribeye",
        description:
          "Thinly sliced ribeye, blue corn tortillas, costra de queso, guacamole, pickled onions, black beans.",
        price: "$20",
      },
      {
        name: "Baby Back Ribs",
        description:
          "Half rack ribs, smoked BBQ sauce, street corn elote, loaded mashed potatoes.",
        price: "$20",
      },
      {
        name: "Pipian Short Ribs",
        description:
          "Beef short ribs, pipian mole verde sauce, loaded mashed potato, seasonal vegetables.",
        price: "$28",
      },
      {
        name: "44 Farms Chicken Fried Steak",
        description:
          "Spicy country gravy, street corn elote, loaded mashed potatoes.",
        price: "$16",
      },
      {
        name: "Bone-In Pork Chop",
        description:
          "Grilled bone-in pork chop, green tomatillo sauce, loaded mashed potatoes, seasonal vegetables.",
        price: "$22",
      },
      {
        name: "Split Bone-In Ribeye",
        description:
          "22 oz bone-in ribeye, potatoes au-gratin, grilled asparagus.",
        price: "$50",
      },
      {
        name: "Avocado Chicken",
        description:
          "Grilled chicken breast, creamy avocado sauce, parmesan, cilantro rice, seasonal vegetables.",
        price: "$18",
      },
      {
        name: "Rotisserie Chicken",
        description:
          "Half roasted chicken, loaded mashed potatoes, street corn elote.",
        price: "$15",
      },
      {
        name: "Desert Fire Pasta",
        description:
          "Linguini pasta, shrimp, poblano cream sauce, bell peppers, mushrooms, onions, parmesan.",
        price: "$20",
      },
      {
        name: "Avocado Salmon",
        description:
          "Grilled salmon fillet, creamy avocado sauce, parmesan, cilantro rice, seasonal vegetables.",
        price: "$25",
      },
      {
        name: "Shrimp Shish Kabobs",
        description:
          "Gulf shrimp stuffed with serrano cream cheese, bacon wrapped, house BBQ sauce, veggies and rice.",
        price: "$25",
      },
      {
        name: "Fish Veracruz",
        description:
          "Pan seared fish fillet, veracruz sauce, cilantro rice, seasonal vegetables.",
        price: "$27",
      },
      {
        name: "Pico Pescado and Shrimp",
        description:
          "Lightly breaded fish fillet, fried shrimp, buffalo sauce, fries, street corn elote.",
        price: "$24",
      },
    ],
  },
  {
    id: "enchiladas",
    label: "Enchiladas",
    title: "Enchiladas",
    items: [
      {
        name: "Suizas",
        description:
          "Chicken, tomatillo cream sauce, Swiss cheese, rice, black beans, queso fresco, pico de gallo.",
        price: "$16",
      },
      {
        name: "Del Mar",
        description:
          "Gulf shrimp, white fish, chipotle cream sauce, rice, black beans, queso fresco, pico de gallo.",
        price: "$18",
      },
      {
        name: "Vegetarians",
        description:
          "Spinach, cheese, creamy chimichurri sauce, rice and black beans.",
        price: "$13",
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas & Calzones",
    title: "Pizzas & Calzones",
    note: "Small / Large pricing shown where applicable.",
    items: [
      {
        name: "Pepperoni",
        description:
          "Tomato basil sauce, mozzarella, cheddar cheese, and pepperoni.",
        price: "$10 / $19",
      },
      {
        name: "Our Famous Texas Goat Cheese",
        description:
          "Texas garlic olive oil, mushrooms, goat cheese and mozzarella, walnuts, and fresh basil.",
        price: "$14 / $24",
      },
      {
        name: "Supreme",
        description:
          "Tomato-basil sauce, mozzarella, pepperoni, Italian sausage, mushrooms, bell peppers, and red onions.",
        price: "$14 / $24",
      },
      {
        name: "Hawaiian",
        description:
          "Tomato-basil sauce, mozzarella cheese, Canadian bacon, pineapple, and red onions.",
        price: "$12 / $22",
      },
      {
        name: "Margherita",
        description:
          "Texas garlic olive oil, tomatoes, fresh mozzarella, fresh basil, and pine nuts.",
        price: "$10 / $20",
      },
      {
        name: "Smoke Salmon",
        description:
          "Texas garlic olive oil, mozzarella, cream cheese, smoked salmon, capers, and red onions.",
        price: "$12 / $22",
      },
      {
        name: "Fajita Pizza",
        description:
          "Tomato-basil sauce, mozzarella cheese, fajita, avocado, cilantro, red onions, and chimichurri sauce.",
        price: "$16 / $27",
      },
      {
        name: "Cheeseburger",
        description:
          "Tomato-basil sauce, mozzarella and American cheese, ground beef, bacon, chipotle mayo, and red onions.",
        price: "$12 / $20",
      },
      {
        name: "BBQ Chicken",
        description:
          "Barbecue sauce, mozzarella, and chicken breast.",
        price: "$14 / $24",
      },
      {
        name: "Meat Lovers",
        description:
          "Tomato-basil sauce, mozzarella, ground beef, Canadian bacon, chorizo, pepperoni, Italian sausage.",
        price: "$16",
      },
      {
        name: "Spinach and Shrimp Calzone",
        description:
          "Texas garlic olive oil, mozzarella, sautéed shrimp, spinach, dill, parmesan.",
        price: "$14",
      },
      {
        name: "Supremo Calzone",
        description:
          "Tomato-basil sauce, mozzarella, pepperoni, Italian sausage, mushrooms, bell peppers, parmesan.",
        price: "$16",
      },
      {
        name: "Mexican Calzone",
        description:
          "Tomato-basil sauce, mozzarella, chorizo, pineapple, white onions, garlic olive oil, dill, parmesan.",
        price: "$12",
      },
      {
        name: "Pepperoni Calzone",
        description:
          "Tomato basil sauce, mozzarella, pepperoni, Texas garlic olive oil, dill, parmesan.",
        price: "$11",
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    title: "Burgers & Sandwiches",
    note: "Sides: fries, onion rings, loaded mashed potatoes, cilantro rice, black beans, veggies.",
    items: [
      {
        name: "Republic Burger",
        description: "1/2 lb beef patty, lettuce, tomato, pickle, onions.",
        price: "$11",
      },
      {
        name: "Ribeye Sandwich",
        description:
          "Grilled 8 oz ribeye, baguette bread, sautéed mushrooms, pickle, swiss cheese.",
        price: "$16",
      },
      {
        name: "Crispy Chicken Fried Chicken Sandwich",
        description:
          "Crispy chicken, honey buffalo, cilantro ranch, lettuce, onion, tomatoes, French fries.",
        price: "$14",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    title: "Desserts",
    items: [
      {
        name: "Banana Bread Pudding",
        description:
          "House made banana bread pudding, vanilla ice cream, caramel pecan sauce.",
        price: "$10",
      },
      {
        name: "Carlota",
        description:
          "Traditional Mexican dessert, citrus layered cookie lime pie.",
        price: "$9",
      },
      {
        name: "Chocolate Brownie with Ice Cream",
        description:
          "Hot chocolate brownie, vanilla ice cream, whipped cream.",
        price: "$9",
      },
      {
        name: "Almond Taco",
        description:
          "Roasted almond taco shell, white vanilla mousse, fresh pineapple and strawberries.",
        price: "$10",
      },
      {
        name: "Strawberry or Mango Cheesecake",
        description:
          "In-house cheesecake, your choice of strawberries or mango.",
        price: "$9",
      },
    ],
  },
];
