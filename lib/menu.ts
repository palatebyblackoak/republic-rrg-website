export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuGroup = {
  heading?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  label: string;
  title: string;
  note?: string;
  items?: MenuItem[];
  groups?: MenuGroup[];
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
          "Jumbo shrimp, corn meal breading, fried and tossed on honey buffalo sauce and cucumber-jicama salad.",
        price: "$14",
      },
      {
        name: "Texas Ceviche",
        description:
          "Jumbo shrimp, white fish filet, lime vinaigrette, Pico de Gallo, and tortilla chips.",
        price: "$16",
      },
      {
        name: "Ahi Tuna Ceviche",
        description:
          "Ahi tuna cubed, chopped Jicama, avocado, red onions, serrano peppers, ginger vinaigrette, and tortilla chips.",
        price: "$19",
      },
      {
        name: "Fried Calamari",
        description:
          "Breaded calamari rings, tomatillo, and honey buffalo sauce.",
        price: "$14",
      },
      {
        name: "Costra de Ribeye",
        description:
          "Crispy cheese tortilla shell filled with ribeye, guacamole and served with salsa roja & verde.",
        price: "$19",
      },
      {
        name: "Stuffed Bacon Wrapped Quail",
        description:
          "Anaheim peppers and cream cheese, grill veggies, loaded mashed potatoes finished with port reduction.",
        price: "$20",
      },
      {
        name: "Fried Mushrooms",
        price: "$11",
      },
      {
        name: "Guacamole",
        description:
          "Avocado, onions, tomatoes, serrano peppers, cilantro, and tortilla chips.",
        price: "$15",
      },
      {
        name: "Queso and Chorizo",
        description:
          "Chorizo San Manuel, Mozzarella cheese, grilled vegetables, tomatillo sauce, and flour tortillas.",
        price: "$14",
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
          "Chips, black beans, cheddar cheese, beef, avocado sauce, Pico de Gallo, and sour cream.",
        price: "$18",
      },
      {
        name: "Artichoke Spinach Dip",
        description:
          "Spinach, artichoke, serrano peppers and bacon, Jack cheese, and tortilla chips.",
        price: "$12",
      },
      {
        name: "Ribeye Chicharrones",
        description:
          "Bed of guacamole, 10 oz ribeye, queso fresco, and chips.",
        price: "$20",
      },
      {
        name: "Fried Cauliflower",
        description:
          "Fried cauliflower marinated in chile guajillo, chipotle, orange zest, finished with parmesan cheese.",
        price: "$12",
      },
    ],
  },
  {
    id: "soups-salads",
    label: "Soups & Salads",
    title: "Soups & Salads",
    note: "Add-On to your salad: Chicken $8, Salmon $12, (4) Shrimp $10, Ahi Tuna $12. Dressings: Balsamic Vinegar, Cilantro Ranch, Bleu Cheese, Lime-Oregano Vinaigrette, Caesar.",
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
          "Mix lettuce, queen olives, cucumber, bell peppers, tomato, red onion, lime-oregano vinaigrette, and feta cheese.",
        price: "$12",
      },
      {
        name: "Wedge Salad",
        description:
          "Iceberg lettuce, bacon bits, cherry tomatoes, red onions, blue cheese dressing, and drizzle of balsamic vinaigrette.",
        price: "$12",
      },
      {
        name: "Republic Citrus Salad",
        description:
          "Mixed greens, fresh Texas goat cheese, valley citrus, and caramelized walnuts finished with a raspberry vinaigrette.",
        price: "$12",
      },
      {
        name: "Chimichurri Steak Salad",
        description:
          "Fajita, chimichurri sauce, mix lettuce, grilled asparagus, bell peppers, red onions, portobello mushrooms, and avocado slices.",
        price: "$20",
      },
      {
        name: "Avocado Caesar Salad",
        description:
          "Chopped romaine lettuce, jicama slices, avocado, artichokes, cherry tomatoes, shaved parmesan and cotija cheese.",
        price: "$12",
      },
    ],
  },
  {
    id: "local-favorites",
    label: "Local Favorites",
    title: "Local Favorites",
    groups: [
      {
        items: [
          {
            name: "Grilled Ribeye",
            description:
              "12 oz. ribeye, creamy potato au-gratin, grilled bacon wrapped jalapeño, and seasonal vegetables.",
            price: "$36",
          },
          {
            name: "Texas Filet",
            description:
              "8 oz. filet, epazote butter, creamy potato au-gratin, port sauce, and grilled asparagus.",
            price: "$38",
          },
          {
            name: "Flat Iron Steak",
            description:
              "Flat iron steak, serrano chimichurri sauce, black beans, cilantro rice, guacamole, queso fresco, pico de gallo, and flour tortillas.",
            price: "$24",
          },
          {
            name: "Fajitas",
            description:
              "Local beef or chicken fajitas, sautéed onions and bell peppers, cilantro rice, black beans, pico de gallo, queso fresco, flour tortillas, and guacamole.",
            price: "$20",
          },
          {
            name: "Laminas de Ribeye",
            description:
              "Thinly sliced ribeye, blue corn tortillas, costra de queso, guacamole, pickled onions, served with black beans.",
            price: "$20",
          },
          {
            name: "Baby Back Ribs",
            description:
              "Half rack of ribs, smoked BBQ sauce, street corn elote, and loaded mashed potatoes.",
            price: "$20",
          },
          {
            name: "Pipian Short Ribs",
            description:
              "Beef short ribs, pipian mole verde sauce, loaded mashed potato, and seasonal vegetables.",
            price: "$28",
          },
          {
            name: "Chicken Fried Steak",
            description:
              "Spicy country gravy, street corn elote, and loaded mashed potatoes.",
            price: "$16",
          },
          {
            name: "Bone-In Pork Chop",
            description:
              "Grilled bone-in pork chop served with green tomatillo sauce, loaded mashed potatoes, and seasonal vegetables.",
            price: "$22",
          },
          {
            name: "Split Bone-In Ribeye",
            description:
              "22 oz bone-in ribeye steak, grilled to your specification, served with potatoes au-gratin and grilled asparagus.",
            price: "$56",
          },
          {
            name: "Avocado Chicken",
            description:
              "Grilled chicken breast, creamy avocado sauce, parmesan cheese, cilantro rice, and seasonal vegetables.",
            price: "$18",
          },
          {
            name: "Rotisserie Chicken",
            description:
              "Half a roasted chicken, loaded mashed potatoes, and street corn elote.",
            price: "$16",
          },
          {
            name: "Desert Fire Pasta",
            description:
              "Linguini pasta, shrimp, poblano cream sauce, bell peppers, mushrooms, onions, and parmesan cheese.",
            price: "$22",
          },
          {
            name: "Avocado Salmon",
            description:
              "Grilled salmon fillet, creamy avocado sauce, parmesan cheese, cilantro rice, and seasonal vegetables.",
            price: "$29",
          },
          {
            name: "Shrimp Shish Kabobs",
            description:
              "Jumbo shrimp stuffed with serrano cream cheese, bacon wrapped and lightly dipped in our house BBQ sauce, served with veggies and rice.",
            price: "$26",
          },
          {
            name: "Pico Pescado and Shrimp",
            description:
              "Lightly breaded fish fillet, fried shrimp, buffalo sauce, fries, and street corn elote.",
            price: "$26",
          },
        ],
      },
      {
        heading: "Our Famous Enchiladas",
        items: [
          {
            name: "Suizas",
            description:
              "Chicken tomatillo cream sauce, Swiss cheese, rice, black beans, queso fresco, and pico de gallo.",
            price: "$16",
          },
          {
            name: "Del Mar",
            description:
              "Gulf shrimp, white fish, chipotle cream sauce, rice, black beans, queso fresco, and pico de gallo.",
            price: "$18",
          },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas & Calzones",
    title: "Republic Pizzas & Calzones",
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
        description: "Barbecue sauce, mozzarella, and chicken breast.",
        price: "$14 / $24",
      },
      {
        name: "Meat Lovers",
        description:
          "Tomato-basil sauce, mozzarella, ground beef, Canadian bacon, chorizo, pepperoni, and Italian sausage.",
        price: "$16 / $28",
      },
      {
        name: "Spinach and Shrimp Calzone",
        description:
          "Texas garlic olive oil, mozzarella, sautéed shrimp and spinach, dill, and parmesan cheese.",
        price: "$14",
      },
      {
        name: "Supremo Calzone",
        description:
          "Tomato-basil sauce, mozzarella, pepperoni, Italian sausage, mushrooms, bell peppers, red onions, and parmesan.",
        price: "$16",
      },
      {
        name: "Mexican Calzone",
        description:
          "Tomato-basil sauce, mozzarella, chorizo, fresh pineapples, white onions, garlic olive oil, dill, and parmesan cheese.",
        price: "$12",
      },
      {
        name: "Pepperoni Calzone",
        description:
          "Tomato basil sauce, mozzarella, pepperoni, Texas garlic olive oil, dill, and parmesan cheese.",
        price: "$12",
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    title: "Burgers & Sandwiches",
    note: "Sides: fries, onion rings, loaded mashed potatoes, cilantro rice, black beans, and veggies.",
    items: [
      {
        name: "Republic Burger",
        description: "½ lb. beef patty, lettuce, tomato, pickle, and onions.",
        price: "$11",
      },
      {
        name: "Ribeye Sandwich",
        description:
          "Grilled 8 oz ribeye steak, baguette bread, sautéed mushrooms, pickle, and swiss cheese.",
        price: "$18",
      },
      {
        name: "Crispy Chicken Fried Chicken Sandwich",
        description:
          "Crispy chicken marinated in honey buffalo, cilantro ranch drizzled, lettuce, onion, tomatoes, and French fries.",
        price: "$14",
      },
    ],
  },
];
