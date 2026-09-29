import type { AuthPageCopy, Category, Course, FooterColumn, LandingCopy, LogoAsset, Testimonial } from '../types'

export { imageAsset as asset } from '../assets'

export const landingCopy: LandingCopy = {
  heroTitle: 'Get Access to Hundreds\nCourses Available',
  heroSubtitle: 'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
  featuresTitle: 'Discover Your Passion,\nBuild Your Skills',
  courseDescription: 'At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different\nfields, from technology to the arts, and make a difference in your career and life.',
  categoryTitle: 'Explore Diverse Learning Paths at Bytespace',
  categoryDescription: "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various\nfields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  pathTitle: 'Your Path to Professional\nGrowth Starts Here!',
  pathDescription: 'Explore our curated selection of courses tailored to enhance\nyour capabilities and accelerate your career journey.\nWhether you are looking to sharpen specific skills, gain\nindustry expertise, or embark on a new career path entirely,\nwe have the resources you need.',
  creatorTitle: 'Create & Manage\nCourses Easily.',
  creatorDescription: 'supports individuals or entities in the creation, publication,\nand administration of educational courses.',
  ctaTitle: 'Unlock Your Potential as a\nCreator with ByteSpace',
  ctaDescription: 'Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a\npart of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your\nexpertise by publishing your finest course on the ByteSpace Course Library.',
  testimonialTitle: 'Discover What Our\nCommunity Is Saying',
  testimonialDescription: 'At ByteSpace, our vibrant community of learners and creators is at the\nheart of what we do. Hear directly from those who have experienced the\ntransformative journey of learning and creating on our platform. Explore\ntestimonials that reflect the diverse perspectives of enthusiastic learners\nand accomplished creators.',
  newsletterDescription: 'Stay Up to date with our latest features and releases by joining our newsletter.',
  newsletterConsent: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our\ncompany.',
}

export const chipRows: string[][] = [
  ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

export const courses: Course[] = [
  { title: 'Learn Figma from Basic', left: 120, top: 543, thumbnail: '08', creator: 'purepearl studio', rating: '4.5', level: 'Beginner', avatarImage: '09', price: '$25' },
  { title: 'Build Digital Asset', left: 533, top: 543, thumbnail: '10', creator: 'purepearl studio', rating: '4.5', level: 'Beginner', avatarImage: '09', price: '$25' },
  { title: 'the Power of Big Data', left: 946, top: 543, thumbnail: '12', creator: 'purepearl studio', rating: '4.5', level: 'Beginner', avatarImage: '09', price: '$25' },
  { title: 'Balancing Productivity and Focus', left: 120, top: 967, thumbnail: '14', creator: 'purepearl studio', rating: '4.5', level: 'Beginner', avatarImage: '09', price: '$25' },
  { title: 'Mastering Money Management', left: 533, top: 967, thumbnail: '16', creator: 'purepearl studio', rating: '4.5', level: 'Beginner', avatarImage: '09', price: '$25' },
  { title: 'From Idea to Startup Success', left: 946, top: 967, thumbnail: '18', creator: 'purepearl studio', rating: '4.5', level: 'Beginner', avatarImage: '09', price: '$25' },
]

export const logos: LogoAsset[] = [
  { image: '03', left: 150, width: 175 }, { image: '04', left: 390, width: 175 }, { image: '05', left: 630, width: 178 }, { image: '06', left: 871, width: 178 }, { image: '07', left: 1113, width: 178 },
]

export const categories: Category[] = [
  { name: 'Design', image: '20', left: 119 }, { name: 'Development', image: '21', left: 326 }, { name: 'IT & Software', image: '22', left: 533 },
  { name: 'Business', image: '23', left: 740 }, { name: 'Marketing', image: '24', left: 947 }, { name: 'Photography', image: '25', left: 1154 },
]

export const testimonials: Testimonial[] = [
  { name: 'Sarah M.', role: 'Enthusiastic Learner', image: '30', left: 118, height: 432, marginTop: 20, quote: 'ByteSpace has transformed my\napproach to learning. The diverse range\nof courses and the quality of content\nprovided by creators have exceeded my\nexpectations. The platform truly fosters a\nsense of community and lifelong\nlearning.' },
  { name: 'James L.', role: 'Lifelong Learner', image: '31', left: 533, height: 436, marginTop: 22, quote: "I've tried several online learning\nplatforms, and ByteSpace stands out for\nits vibrant community and the variety of\ncourses available. The easy navigation\nand engaging content make it a go-to\nplatform for continuous skill\ndevelopment." },
  { name: 'Alex B.', role: 'Inspired Creator', image: '32', left: 948, height: 406, marginTop: 22, quote: "As a creator, ByteSpace has been a\ngame-changer for me. The Course Editor\nis user-friendly, and the support from the\ncommunity is incredible. It's fulfilling to\nsee my courses making a positive impact\non learners globally." },
]

export const footerColumns: FooterColumn[] = [
  { left: 740, links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'] },
  { left: 947, links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'] },
  { left: 1154, links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'] },
]

export const navigationLabels = { home: 'Home', courses: 'Courses', creators: 'Creators', signIn: 'Sign In', joinUs: 'Join Us' }
export const uiLabels = { searchPlaceholder: 'Course, topic, creator', search: 'Search', logoAlt: 'Logoipsum', studentsAlt: 'Students', avatarAlt: '26+ students', byteSpaceAlt: 'ByteSpace', more: '+ More', level: 'Beginner', creator: 'purepearl studio', lifetime: '/lifetime', emailLabel: 'Email', emailPlaceholder: 'Enter your email', privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookies Settings', copyright: '@ 2023 ByteSpace. All rights reserved.', joinCreator: 'Join as Creator' }
export const pathChecks = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community']
export const happyStudents = { title: 'Happy Students', rating: '4.5', count: '(240)' }
export const heroCards = { design: 'UI/UX Design', designMeta: '200 Courses   •   1000+ Students', progress: 'Learning Progress', progressValue: '55%' }
export const stats = { students: '12K', courses: '70+', creators: '16', studentLabel: 'Students', courseLabel: 'Courses', creatorLabel: 'Creators', productName: 'ByteSpace' }
export const authCopy: AuthPageCopy = { eyebrow: 'ByteSpace', loginTitle: 'Welcome back.', loginDescription: 'Sign in to continue learning.', signupTitle: 'Make room to grow.', signupDescription: 'Create an account and start learning.', emailLabel: 'Email', passwordLabel: 'Password', nameLabel: 'Name', signIn: 'Sign in', createAccount: 'Create account', newMember: 'New to ByteSpace?', existingMember: 'Already learning with us?', backHome: 'Back to home' }
