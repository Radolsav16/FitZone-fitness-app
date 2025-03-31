export const challangeTypeOptions = [
    {value:" ",label:"Select challenge type"},
    {value:"strength",label:"Strength"},
    {value:"cardio",label:"Cardio"},
    {value:"flexibility",label:"Flexibility"},
    {value:"weight_loss",label:"Weight Loss"}
  ];
  
  export const difficultyOptions = [
    {value:" ",label:"Select difficulty"},
    {value:"beginner",label:"Beginner"},
    {value:"intermediate",label:"Intermediate"},
    {value:"advanced",label:"Advanced"},
  ];
  
 export  const durationOptions = [
    {value:" ",label:"Select duration"},
    {value:"7",label:"7 Days"},
    {value:"14",label:"14 Days"},
    {value:"30",label:"30 Days"},
  ];
  
 export  const equipmentOptions = [
    {value:" ",label:"Select required equipment"},
    {value:"none",label:"No Equipment"},
    {value:"dumbbells",label:"Dumbbells"},
    {value:"resistance_bands",label:"Resistance Bands"},
    {value:"yoga_mat",label:"Yoga Mat"},
    {value:"barbell",label:"Barbell"},
    {value:"treadmill",label:"Treadmill"},
  
  ];

  export const categoryOptions = [
    {value:"",label:"Select required category"},
    {value:"General",label:"General"},
    {value:"Fitness",label:"Fitness"},
    {value:"Health",label:"Health"},
    {value:"Nutrition",label:"Nutrition"},
    {value:"Motivation",label:"Motivation"},
  ]

  export const sortOptions = [
    { name: 'General', href: '/fitzone/blog'},
    { name: 'Fitness', href: '/fitzone/blog?sortedBy=fitness'},
    { name: 'Health', href: '/fitzone/blog?sortedBy=health'},
    { name: 'Nutrition', href: '/fitzone/blog?sortedBy=nutrition'},
    { name: 'Motivation', href: '/fitzone/blog?sortedBy=motivation'},
  ]

export const stats = [
  { id: 1, name: 'Total Weight Lost Globally in lbs', value: '4.5 million' },
  { id: 2, name: 'Average Body Fat Percentage (all users)', value: '19%' },
  { id: 3, name: 'Average Improvement in Strength', value: '+ 25 lbs' },
  { id: 4, name: 'Average Daily Calories Burned (per user)', value: '350 kcal' },
  { id: 5, name: 'Average Working Out Time Per Week', value: '5 hours' },
  { id: 6, name: 'Challenges Participation ', value: '67%' },
];
  
export const selectionExercise = [
  { name: 'Triceps', href: '/fitzone/triceps/exercises'},
  { name: 'Biceps', href: '/fitzone/biceps/exercises'},
  { name: 'Back', href: '/fitzone/lats/exercises'},
  { name: 'Leg', href: '/fitzone/quads/exercises'},
  { name: 'Core/Abs Exercises', href: '/fitzone/abs/exercises'},
  { name: 'Delts', href: '/fitzone/delts/exercises'}
]

export const selectionRecipes = [
  { name: 'Desserts 🍫', href: '/fitzone/recipes/desserts'},
  { name: 'Main 🍳', href: '/fitzone/recipes/main'},
  { name: 'Snacks 🥞 ', href: '/fitzone/recipes/snacks'},
  { name: 'Beverages 🧃', href: '/fitzone/recipes/bevarages'},
]


export const subCategories = [
  { name: "Accessories", href: "/fitzone/shop/accessories" },
  { name: "Martial Arts Gear", href: "/fitzone/shop/martial-arts-gear" },
  { name: "Supplements", href: "/fitzone/shop/supplements" },
  { name: "Training Apparel", href: "/fitzone/shop/training-apparel" },
  { name: "Strength Equipment", href: "/fitzone/shop/strength-equipment" },
  { name: "Endurance Tools", href: "/fitzone/shop/endurance-tools" },
  { name: "Recovery Equipment", href: "/fitzone/shop/recovery-equipment" },
  { name: "Outdoor Gear", href: "/fitzone/shop/outdoor-gear" },
  { name: "Cardio Machines", href: "/fitzone/shop/cardio-machines" },
  { name: "Gym Essentials", href: "/fitzone/shop/gym-essentials" },
];



export const selectionCategoryOptions = [
{value:"",label:"Select required category"},
{value:"gym-essentials",label:"Gym Essentials"},
{value:"accessories",label:"Accessories"},
{value:"cardio-machines",label:"Cardio Machines"},
{value:"supplements",label:"supplements"},
{value:"martial-arts-gear",label:"Martial Arts Gear"}, 
{value: "training-apparel", label: "Training Apparel"},
{ value: "strength-equipment", label:"Strength Equipment"},
{ value: "endurance-tools", label: "Endurance-Tools" },
{ value: "recovery-equipment", label: "Recovery-Equipment" },
{ value: "Outdoor Gear", label: "Outdoor Gear" },
]