export const site = {
  name: "Republic of the Rio Grande",
  tagline: "Grill & Cantina",
  descriptor: "Brick Oven · Steaks · Seafood · Cantina · Revolución!",
  address: "1411 S 10th St, McAllen, TX 78501",
  addressLine1: "1411 S 10th St",
  addressLine2: "McAllen, TX 78501",
  phone: "(956) 994-8385",
  phoneHref: "tel:+19569948385",
  email: "republicmanagement1411@gmail.com",
  established: "1998",
  hours: [
    { day: "Mon – Wed", time: "11AM – 11PM" },
    { day: "Thursday", time: "11AM – 12AM" },
    { day: "Fri – Sat", time: "11AM – 1AM" },
    { day: "Sunday", time: "Closed" },
  ],
  reservation:
    "https://www.opentable.com/booking/restref/availability?rid=215005&lang=en-US&correlationId=5c91f7b3-9694-457a-83fb-222cfff99693&restRef=215005",
  giftCards:
    "https://onelink.quickgifts.com/merchant/republic-of-the-rio-grande/",
  social: {
    facebook: "https://www.facebook.com/ElRepublic",
    instagram: "https://www.instagram.com/republicoftheriogrande/",
    twitter: "https://x.com/RepublicRio",
    google: "https://www.google.com/maps/search/?api=1&query=Republic+of+the+Rio+Grande+McAllen+TX",
    tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g55879-d465998-Reviews-Republic_of_the_Rio_Grande-McAllen_Texas.html",
    yelp: "https://www.yelp.com/biz/republic-of-the-rio-grande-mcallen",
  },
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=1411+S+10th+St+McAllen+TX+78501",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reserve", href: "/reservations" },
  { label: "Gift Cards", href: site.giftCards, external: true },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];
