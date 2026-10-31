export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const contactEmail = 'mahmoud234@gmail.com'

export const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '45+', label: 'Demo projects' },
  { value: '30+', label: 'Demo clients' },
  { value: '90%', label: 'Illustrative satisfaction rate' },
]

export const services = [
  {
    number: '01',
    icon: 'social',
    title: 'Social Media Management',
    description: 'Managing Facebook and Instagram accounts and creating engaging content strategies.',
    tone: 'lavender',
  },
  {
    number: '02',
    icon: 'meta',
    title: 'Meta Ads Campaigns',
    description: 'Creating Facebook and Instagram advertising campaign concepts for Egyptian audiences.',
    tone: 'blue',
  },
  {
    number: '03',
    icon: 'google',
    title: 'Google Ads',
    description: 'Planning and optimizing Google advertising campaigns around clear business goals.',
    tone: 'peach',
  },
  {
    number: '04',
    icon: 'seo',
    title: 'Search Engine Optimization',
    description: 'Improving website visibility and organic search performance with useful, focused content.',
    tone: 'mint',
  },
  {
    number: '05',
    icon: 'content',
    title: 'Content Creation',
    description: 'Developing engaging Arabic and English content that feels right for each brand and audience.',
    tone: 'lavender',
  },
  {
    number: '06',
    icon: 'strategy',
    title: 'Digital Marketing Strategy',
    description: 'Building practical marketing strategies for Egyptian startups and local businesses.',
    tone: 'blue',
  },
] as const

export const workProcess = [
  {
    number: '01',
    icon: 'research',
    title: 'Audience Research',
    description: 'Understand the audience, market, and customer needs before choosing a direction.',
    tone: 'lavender',
  },
  {
    number: '02',
    icon: 'planning',
    title: 'Goal-Oriented Planning',
    description: 'Set clear objectives and measures of success around the business priorities.',
    tone: 'blue',
  },
  {
    number: '03',
    icon: 'content',
    title: 'Content Strategy',
    description: 'Shape useful messaging and content for the right channels and audience.',
    tone: 'peach',
  },
  {
    number: '04',
    icon: 'execution',
    title: 'Campaign Execution',
    description: 'Put the plan into action through coordinated creative, targeting, and publishing.',
    tone: 'mint',
  },
  {
    number: '05',
    icon: 'monitoring',
    title: 'Performance Monitoring',
    description: 'Review campaign and channel performance against the agreed objectives.',
    tone: 'blue',
  },
  {
    number: '06',
    icon: 'optimization',
    title: 'Continuous Optimization',
    description: 'Use performance insights to refine the strategy, content, and campaigns.',
    tone: 'lavender',
  },
] as const

export const marketingSkills = [
  'Social Media Marketing',
  'Facebook Ads',
  'Instagram Marketing',
  'Google Ads',
  'SEO',
  'Content Strategy',
  'Copywriting',
  'Marketing Analytics',
  'Campaign Optimization',
  'Brand Awareness',
]

export const marketingTools = [
  'Meta Business Suite',
  'Google Ads',
  'Google Analytics 4',
  'Google Search Console',
  'Canva',
  'CapCut',
  'SEMrush',
  'Mailchimp',
]

export type PortfolioProject = {
  title: string
  category: string
  description: string
  detail: string
  image: string
  imageAlt: string
  number: string
}

export const projects: PortfolioProject[] = [
  {
    title: 'Nile Fashion',
    category: 'Egyptian E-Commerce Marketing',
    description: 'A fictional Egyptian clothing store campaign concept focused on improving online visibility and attracting potential customers.',
    detail: 'This fictional case study explores audience research, a clearer campaign structure, and creative testing ideas for a made-up Egyptian clothing store. It is a demo concept only, not a real client engagement or a report of verified results.',
    image: `${import.meta.env.BASE_URL}images/project-ecommerce.jpg`,
    imageAlt: 'Customer completing a retail purchase at a checkout counter',
    number: '01',
  },
  {
    title: 'Cairo Coffee House',
    category: 'Social Media Marketing',
    description: 'A fictional Cairo coffee shop social media strategy focused on brand awareness and audience engagement.',
    detail: 'This fictional case study imagines a social media presence for a Cairo coffee shop, with ideas for a distinct brand voice, community-focused posts, and an engaging content rhythm. It is sample work and does not represent real client work or outcomes.',
    image: `${import.meta.env.BASE_URL}images/project-social.jpg`,
    imageAlt: 'Three coffee drinks being shared at a cafe table',
    number: '02',
  },
  {
    title: 'TechStart Egypt',
    category: 'Digital Marketing Strategy',
    description: 'A fictional Egyptian startup marketing strategy focused on organic growth and lead generation.',
    detail: 'This fictional strategy concept maps an early-stage Egyptian startup’s audience, content opportunities, and lead-generation journey. No real company, campaign results, or customer outcomes are represented.',
    image: `${import.meta.env.BASE_URL}images/project-seo.jpg`,
    imageAlt: 'Laptop displaying charts and website analytics',
    number: '03',
  },
]

export const testimonials = [
  {
    name: 'Ahmed Mahmoud',
    role: 'Startup Founder',
    quote: 'Mahmoud helped turn a long list of launch ideas into a clear digital marketing plan we could follow. This is fictional sample testimonial copy.',
    initials: 'AM',
  },
  {
    name: 'Mariam Ali',
    role: 'Small Business Owner',
    quote: 'The content direction felt much closer to the way our customers speak. This fictional quote shows the kind of feedback a business might share.',
    initials: 'MA',
  },
]

export const socialLinks = [
  { label: 'LinkedIn', status: 'Profile not connected' },
  { label: 'Instagram', status: 'Profile not connected' },
  { label: 'X', status: 'Profile not connected' },
] as const
