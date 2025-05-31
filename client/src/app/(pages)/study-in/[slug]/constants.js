// constants.js
export const studyDestinations = [
  {
    id: 1,
    name: 'United States',
    slug: 'united-states',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop',
    description: 'The United States offers world-class education with diverse academic programs, cutting-edge research opportunities, and a multicultural environment. Home to many of the world\'s top-ranked universities, the US provides excellent career prospects and networking opportunities for international students.',
    popularCities: ['New York', 'Los Angeles', 'Boston', 'Chicago', 'San Francisco', 'Washington DC'],
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD', 'Certificate Programs'],
    averageTuition: {
      bachelor: { min: 20000, max: 60000 },
      master: { min: 25000, max: 70000 },
      phd: { min: 30000, max: 80000 }
    },
    livingExpenses: {
      min: 800,
      max: 2500
    },
    language: 'English',
    currency: 'USD',
    visaInfo: 'F-1 Student Visa required',
    highlights: [
      'World-renowned universities',
      'Diverse academic programs',
      'Research opportunities',
      'Post-study work options',
      'Cultural diversity'
    ]
  },
  {
    id: 2,
    name: 'United Kingdom',
    slug: 'united-kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop',
    description: 'The UK is home to some of the world\'s oldest and most prestigious universities. With a rich academic tradition, shorter degree programs, and proximity to Europe, it offers an excellent education system with strong industry connections and global recognition.',
    popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Liverpool', 'Bristol'],
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD', 'Foundation Programs'],
    averageTuition: {
      bachelor: { min: 15000, max: 45000 },
      master: { min: 18000, max: 50000 },
      phd: { min: 20000, max: 40000 }
    },
    livingExpenses: {
      min: 900,
      max: 2000
    },
    language: 'English',
    currency: 'GBP',
    visaInfo: 'Student Visa (formerly Tier 4) required',
    highlights: [
      'Historic universities',
      'Shorter degree duration',
      'Strong industry links',
      'Research excellence',
      'Gateway to Europe'
    ]
  },
  {
    id: 3,
    name: 'Canada',
    slug: 'canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56cd722?w=800&h=400&fit=crop',
    description: 'Canada offers high-quality education in a safe, multicultural environment with relatively affordable tuition fees. Known for its welcoming immigration policies, excellent healthcare system, and beautiful natural landscapes, Canada provides great opportunities for international students.',
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary', 'Edmonton'],
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD', 'Diploma Programs'],
    averageTuition: {
      bachelor: { min: 15000, max: 35000 },
      master: { min: 18000, max: 40000 },
      phd: { min: 20000, max: 35000 }
    },
    livingExpenses: {
      min: 700,
      max: 1800
    },
    language: 'English/French',
    currency: 'CAD',
    visaInfo: 'Study Permit required',
    highlights: [
      'Affordable education',
      'Post-graduation work permits',
      'Safe environment',
      'Multicultural society',
      'Immigration opportunities'
    ]
  },
  {
    id: 4,
    name: 'Australia',
    slug: 'australia',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    description: 'Australia combines academic excellence with a relaxed lifestyle and stunning natural beauty. With a strong focus on practical learning, research opportunities, and post-study work rights, Australia is an attractive destination for international students seeking quality education.',
    popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'],
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD', 'Vocational Programs'],
    averageTuition: {
      bachelor: { min: 20000, max: 45000 },
      master: { min: 22000, max: 50000 },
      phd: { min: 25000, max: 40000 }
    },
    livingExpenses: {
      min: 800,
      max: 2200
    },
    language: 'English',
    currency: 'AUD',
    visaInfo: 'Student Visa (subclass 500) required',
    highlights: [
      'High-quality education',
      'Work while studying',
      'Post-study work rights',
      'Beautiful lifestyle',
      'Research opportunities'
    ]
  },
  {
    id: 5,
    name: 'Germany',
    slug: 'germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=400&fit=crop',
    description: 'Germany offers world-class education with minimal or no tuition fees at public universities. Known for engineering, technology, and research excellence, Germany provides strong industry connections and excellent career opportunities in the heart of Europe.',
    popularCities: ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart'],
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD', 'Research Programs'],
    averageTuition: {
      bachelor: { min: 0, max: 20000 },
      master: { min: 0, max: 25000 },
      phd: { min: 0, max: 15000 }
    },
    livingExpenses: {
      min: 600,
      max: 1500
    },
    language: 'German/English',
    currency: 'EUR',
    visaInfo: 'Student Visa/Residence Permit required',
    highlights: [
      'Low/No tuition fees',
      'Engineering excellence',
      'Strong economy',
      'Central European location',
      'Research opportunities'
    ]
  }
];

// Dummy university data - will be replaced with database data
export const dummyUniversities = [
  {
    id: 1,
    name: 'Harvard University',
    country: 'United States',
    city: 'Boston',
    ranking: 1,
    tuitionFee: 55000,
    monthlyLiving: 1800,
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
    description: 'World-renowned Ivy League university',
    establishedYear: 1636,
    studentPopulation: 23000,
    internationalStudents: 25,
    acceptanceRate: 3.4,
    programs: ['Business', 'Medicine', 'Law', 'Engineering', 'Arts & Sciences']
  },
  {
    id: 2,
    name: 'Stanford University',
    country: 'United States',
    city: 'Stanford',
    ranking: 2,
    tuitionFee: 58000,
    monthlyLiving: 2200,
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD'],
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop',
    description: 'Leading university in innovation and technology',
    establishedYear: 1885,
    studentPopulation: 17000,
    internationalStudents: 22,
    acceptanceRate: 4.3,
    programs: ['Computer Science', 'Engineering', 'Business', 'Medicine', 'Liberal Arts']
  },
  {
    id: 3,
    name: 'MIT',
    country: 'United States',
    city: 'Cambridge',
    ranking: 3,
    tuitionFee: 57000,
    monthlyLiving: 1900,
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD'],
    image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400&h=300&fit=crop',
    description: 'Premier institute for science and technology',
    establishedYear: 1861,
    studentPopulation: 11500,
    internationalStudents: 33,
    acceptanceRate: 6.7,
    programs: ['Engineering', 'Computer Science', 'Physics', 'Economics', 'Architecture']
  },
  {
    id: 4,
    name: 'University of Oxford',
    country: 'United Kingdom',
    city: 'Oxford',
    ranking: 4,
    tuitionFee: 35000,
    monthlyLiving: 1400,
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD'],
    image: 'https://images.unsplash.com/photo-1571751164190-0d4595b96d8a?w=400&h=300&fit=crop',
    description: 'Historic university with academic excellence',
    establishedYear: 1096,
    studentPopulation: 24000,
    internationalStudents: 45,
    acceptanceRate: 17.5,
    programs: ['Arts & Humanities', 'Sciences', 'Medicine', 'Social Sciences', 'Law']
  },
  {
    id: 5,
    name: 'University of Cambridge',
    country: 'United Kingdom',
    city: 'Cambridge',
    ranking: 5,
    tuitionFee: 33000,
    monthlyLiving: 1300,
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD'],
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c280?w=400&h=300&fit=crop',
    description: 'Ancient university with modern excellence',
    establishedYear: 1209,
    studentPopulation: 23000,
    internationalStudents: 38,
    acceptanceRate: 21.0,
    programs: ['Natural Sciences', 'Engineering', 'Medicine', 'Arts & Humanities', 'Mathematics']
  },
  {
    id: 6,
    name: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto',
    ranking: 6,
    tuitionFee: 28000,
    monthlyLiving: 1200,
    studyLevels: ['Bachelor\'s', 'Master\'s', 'PhD'],
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
    description: 'Canada\'s leading research university',
    establishedYear: 1827,
    studentPopulation: 97000,
    internationalStudents: 27,
    acceptanceRate: 43.0,
    programs: ['Medicine', 'Engineering', 'Business', 'Arts & Science', 'Applied Science']
  }
];

// Filter options
export const studyLevels = [
  'All Levels',
  'Bachelor\'s',
  'Master\'s',
  'PhD',
  'Certificate Programs',
  'Diploma Programs',
  'Foundation Programs'
];

export const academicCertificates = [
  'High School Diploma',
  'Associate Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Professional Certification',
  'Other'
];

// Budget ranges
export const budgetRanges = {
  min: 0,
  max: 100000,
  step: 1000
};

export const livingExpenseRanges = {
  min: 300,
  max: 3000,
  step: 50
};