import { MaterialIcons } from "@expo/vector-icons";

const categoryColors = {
  Santé: "#FFC107",
  Éducation: "#4CAF50",
  Transport: "#F44336",
  "Alimentation et restauration": "#FF9800",
  Hébergement: "#9C27B0",
  "Culture et art": "#2196F3",
  "Institutions publiques": "#E91E63",
  "Services financiers": "#3F51B5",
  "Lieux de culte": "#795548",
  "Stations de carburant": "#009688",
};

export type Category = {
  category: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  color: string;
  description: string;
  subcategory: subcategory[];
};

type subcategory = {
  title: string;
  type: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  color: string;
  description: string;
};

export const data: Category[] = [
  {
    category: "Santé",
    icon: "medical-services",
    color: categoryColors["Santé"],
    description: "Santé",
    subcategory: [
      {
        title: "Clinic",
        type: "clinic",
        icon: "local-hospital",
        color: categoryColors["Santé"],
        description: "Clinic",
      },
      {
        title: "Pharmacy",
        type: "pharmacy",
        icon: "local-pharmacy",
        color: categoryColors["Santé"],
        description: "Pharmacy",
      },
      {
        title: "Doctors",
        type: "doctors",
        icon: "healing",
        color: categoryColors["Santé"],
        description: "Doctors",
      },
      {
        title: "Health post",
        type: "health_post",
        icon: "favorite",
        color: categoryColors["Santé"],
        description: "Health post",
      },
    ],
  },
  {
    category: "Éducation",
    icon: "cast-for-education",
    color: categoryColors["Éducation"],
    description: "Éducation",
    subcategory: [
      {
        title: "School",
        type: "school",
        icon: "school",
        color: categoryColors["Éducation"],
        description: "School",
      },
      {
        title: "University",
        type: "university",
        icon: "share",
        color: categoryColors["Éducation"],
        description: "University",
      },
      {
        title: "College",
        type: "college",
        icon: "chat",
        color: categoryColors["Éducation"],
        description: "College",
      },
      {
        title: "Library",
        type: "library",
        icon: "local-library",
        color: categoryColors["Éducation"],
        description: "Library",
      },
    ],
  },
  {
    category: "Transport",
    icon: "directions-transit",
    color: categoryColors["Transport"],
    description: "Transport",
    subcategory: [
      {
        title: "Bus stop",
        type: "bus_stop",
        icon: "bus-alert",
        color: categoryColors["Transport"],
        description: "Bus stop",
      },
      {
        title: "Bus station",
        type: "bus_station",
        icon: "directions-bus",
        color: categoryColors["Transport"],
        description: "Bus station",
      },
      {
        title: "Driving school",
        type: "driving_school",
        icon: "drive-eta",
        color: categoryColors["Transport"],
        description: "Driving school",
      },
    ],
  },
  {
    category: "Alimentation et restauration",
    icon: "fastfood",
    color: categoryColors["Alimentation et restauration"],
    description: "Alimentation et restauration",
    subcategory: [
      {
        title: "Fast food",
        type: "fast_food",
        icon: "fastfood",
        color: categoryColors["Alimentation et restauration"],
        description: "Fast food",
      },
      {
        title: "Restaurant",
        type: "restaurant",
        icon: "local-restaurant",
        color: categoryColors["Alimentation et restauration"],
        description: "Restaurant",
      },
      {
        title: "Cafe",
        type: "cafe",
        icon: "local-cafe",
        color: categoryColors["Alimentation et restauration"],
        description: "Cafe",
      },
      {
        title: "Bar",
        type: "bar",
        icon: "local-bar",
        color: categoryColors["Alimentation et restauration"],
        description: "Bar",
      },
    ],
  },
  {
    category: "Hébergement",
    icon: "house",
    color: categoryColors["Hébergement"],
    description: "Hébergement",
    subcategory: [
      {
        title: "Guest house",
        type: "guest_house",
        icon: "house",
        color: categoryColors["Hébergement"],
        description: "Guest house",
      },
      {
        title: "Hotel",
        type: "hotel",
        icon: "hotel",
        color: categoryColors["Hébergement"],
        description: "Hotel",
      },
    ],
  },
  {
    category: "Culture et art",
    icon: "beach-access",
    color: categoryColors["Culture et art"],
    description: "Culture et art",
    subcategory: [
      {
        title: "Museum",
        type: "museum",
        icon: "museum",
        color: categoryColors["Culture et art"],
        description: "Museum",
      },
      {
        title: "Artwork",
        type: "artwork",
        icon: "architecture",
        color: categoryColors["Culture et art"],
        description: "Artwork",
      },
      {
        title: "Memorial",
        type: "memorial",
        icon: "memory",
        color: categoryColors["Culture et art"],
        description: "Memorial",
      },
    ],
  },
  {
    category: "Institutions publiques",
    icon: "public",
    color: categoryColors["Institutions publiques"],
    description: "Institutions publiques",
    subcategory: [
      {
        title: "Courthouse",
        type: "courthouse",
        icon: "favorite",
        color: categoryColors["Institutions publiques"],
        description: "Courthouse",
      },
      {
        title: "Police",
        type: "police",
        icon: "local-police",
        color: categoryColors["Institutions publiques"],
        description: "Police",
      },
      {
        title: "Information",
        type: "information",
        icon: "info",
        color: categoryColors["Institutions publiques"],
        description: "Information",
      },
      {
        title: "Social centre",
        type: "social_centre",
        icon: "groups",
        color: categoryColors["Institutions publiques"],
        description: "Social centre",
      },
    ],
  },
  {
    category: "Services financiers",
    icon: "account-balance",
    color: categoryColors["Services financiers"],
    description: "Services financiers",
    subcategory: [
      {
        title: "Bank",
        type: "bank",
        icon: "account-balance",
        color: categoryColors["Services financiers"],
        description: "Bank",
      },
    ],
  },
  {
    category: "Lieux de culte",
    icon: "change-history",
    color: categoryColors["Lieux de culte"],
    description: "Lieux de culte",
    subcategory: [
      {
        title: "Place of worship",
        type: "place_of_worship",
        icon: "wrong-location",
        color: categoryColors["Lieux de culte"],
        description: "Place of worship",
      },
    ],
  },
  {
    category: "Stations de carburant",
    icon: "local-gas-station",
    color: categoryColors["Stations de carburant"],
    description: "Stations de carburant",
    subcategory: [
      {
        title: "Fuel",
        type: "fuel",
        icon: "local-gas-station",
        color: categoryColors["Stations de carburant"],
        description: "Fuel",
      },
    ],
  },
];
