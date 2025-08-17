import { Box, FileText, Briefcase, BarChart3, Globe, Film, Users, Megaphone, Image, Printer,Paintbrush, Palette, Eye, Package, Mail, MousePointer, Search,  Heart,  MessageCircle, Code, Boxes, Smartphone, Cloud, Lock } from "lucide-react";
import { ServiceTemplateProps } from "../../components/Common/ServiceTemplate";

import {background} from '../../assets/Background/bgExport.ts'

const {digitalMarketing, socialMediaMarketing, brandingAndDesign, web, outDoorPublicity, packaging, videoProduction, brochure, printing, traditionalMarketing,corporateDesigning, seo, ad, animation, publicRelation} = background

export const DigitalMarketingData: ServiceTemplateProps = {
    title: "Digital Marketing",
    img: digitalMarketing,
    description: "Drive leads and boost ROI with performance-based digital marketing strategies.",
    services: [
        {
            icon: Search,
            title: 'Google Ads & PPC',
            description: 'Targeted pay-per-click campaigns that drive qualified traffic and maximize ROI.'
        },
        {
            icon: BarChart3,
            title: 'SEO',
            description: 'Organic search optimization to improve rankings and increase visibility.'
        },
        {
            icon: Mail,
            title: 'Email Campaigns',
            description: 'Personalized email marketing that nurtures leads and drives conversions.'
        },
        {
            icon: MousePointer,
            title: 'Content Marketing',
            description: 'Valuable content that attracts, engages, and converts your target audience.'
        }
    ],
    benefits: [
        'Data-driven approach with detailed analytics',
        'Targeted audience segmentation',
        'A/B testing for optimal performance',
        'Regular reporting and optimization',
        'Multi-channel campaign management',
        'Conversion rate optimization'
    ],
    process: [
        { step: '1', title: 'Audit & Analysis', description: 'We analyze your current digital presence and identify opportunities' },
        { step: '2', title: 'Strategy Development', description: 'Create a comprehensive digital marketing strategy tailored to your goals' },
        { step: '3', title: 'Campaign Launch', description: 'Execute campaigns across chosen digital channels' },
        { step: '4', title: 'Monitor & Optimize', description: 'Continuous monitoring and optimization for maximum performance' }
    ]
};

export const SocialMediaMarketingData: ServiceTemplateProps = {
    title: "Social Media Marketing",
    img: socialMediaMarketing,
    description: "Engage your audience and build brand loyalty through strategic social media campaigns.",
    services: [
        {
      icon: Users,
      title: 'Content Strategy',
      description: 'Develop engaging content calendars that resonate with your audience and drive engagement.'
    },
    {
      icon: MessageCircle,
      title: 'Community Management',
      description: 'Build and nurture online communities through active engagement and customer support.'
    },
    {
      icon: BarChart3,
      title: 'Paid Social Campaigns',
      description: 'Targeted advertising campaigns that reach your ideal customers and drive conversions.'
    },
    {
      icon: Heart,
      title: 'Influencer Partnerships',
      description: 'Connect with relevant influencers to expand your reach and build credibility.'
    }
    ],
    benefits: [
        'Increased brand awareness and visibility',
    'Higher engagement with target audience',
    'Improved customer loyalty and retention',
    'Enhanced customer support and communication',
    'Greater website traffic and lead generation',
    'Competitive advantage in your industry'
    ],
    process: [
        { step: '1', title: 'Strategy Development', description: 'Define goals and target audience for your social media presence.' },
        { step: '2', title: 'Content Planning', description: 'Create a content calendar with diverse posts to engage your audience.' },
        { step: '3', title: 'Execution', description: 'Launch campaigns and manage daily interactions on your profiles.' },
        { step: '4', title: 'Review & Optimize', description: 'Regularly analyze performance and adjust strategies for better results.' }
    ]
}

export const BrandingAndDesignData: ServiceTemplateProps = {
    title: "Branding & Design",
    img: brandingAndDesign,
    description: "Create a strong brand identity that resonates with your audience and sets you apart.",
    services: [
        {
      icon: Paintbrush,
      title: 'Logo Design',
      description: 'Create memorable logos that capture your brand essence and stand out in the market.'
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Develop comprehensive brand positioning and messaging that resonates with your audience.'
    },
    {
      icon: Eye,
      title: 'Visual Identity',
      description: 'Design cohesive visual systems including colors, typography, and graphic elements.'
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Create packaging that attracts customers and communicates your brand values effectively.'
    }
    ],
    benefits: [
        'Custom logo design with multiple variations',
    'Complete brand style guide and guidelines',
    'Color palette and typography selection',
    'Business card and stationery design',
    'Social media templates and assets',
    'Brand application examples and mockups'
    ],
    process: [
        { step: '1', title: 'Brand Discovery', description: 'Understand your business, target audience, and market landscape.' },
        { step: '2', title: 'Concept Development', description: 'Create initial design concepts based on your brand vision.' },
        { step: '3', title: 'Design Refinement', description: 'Refine designs based on feedback to ensure alignment with your goals.' },
        { step: '4', title: 'Final Delivery', description: 'Provide all necessary files and guidelines for consistent brand application.' }
    ]
};

export const TraditionalMarketingData: ServiceTemplateProps = {
    title: "Traditional Marketing",
    img: traditionalMarketing,
    description: "Reach your audience through proven traditional marketing channels that build trust and credibility.",
    services: [
        {
        icon: BarChart3,
        title: 'Print Advertising',
        description: 'Targeted print campaigns in newspapers, magazines, and brochures to reach local audiences.'
        },
        {
        icon: Mail,
        title: 'Direct Mail',
        description: 'Personalized direct mail campaigns that deliver your message directly to potential customers'
        },
        {
        icon: MousePointer,
        title: 'Event Marketing',
        description: 'Engage your audience through trade shows, conferences, and community events'
        },
        {
        icon: Search,
        title: 'Outdoor Advertising',
        description: 'High-visibility billboards and signage that capture attention in key locations'
        }
    ],
    benefits: [
        'Tangible marketing materials that leave a lasting impression',
        'Targeted campaigns that reach specific demographics',
        'High credibility and trust with traditional media',
        'Effective for local and regional marketing',
        'Complement digital marketing efforts for a holistic approach',
        'Measurable results through tracking and analytics'
    ],
    process: [
        { step: '1', title: 'Market Research', description: 'Identify target demographics and effective channels for your campaigns.' },
        { step: '2', title: 'Campaign Planning', description: 'Develop a comprehensive marketing plan that includes print, direct mail, and events.' },
        { step: '3', title: 'Execution', description: 'Implement your marketing campaigns across selected channels.' },
        { step: '4', title: 'Analysis and Optimization', description: 'Measure campaign performance and optimize for better results.' }
    ]
};

export const VideoProductionData: ServiceTemplateProps = {
    title: "Video Production",
    img: videoProduction,
    description: "Engage your audience with high-quality video content that tells your brand story.",
    services: [
        {
            icon: Search,
            title: 'Corporate Videos',
            description: 'Professional videos that showcase your company culture, values, and offerings.'
        },
        {
            icon: BarChart3,
            title: 'Promotional Videos',
            description: 'Engaging promotional content that highlights your products and services.'
        },
        {
            icon: Mail,
            title: 'Testimonial Videos',
            description: 'Authentic customer testimonials that build trust and credibility.'
        },
        {
            icon: MousePointer,
            title: 'Event Coverage',
            description: 'Capture key moments from your events with high-quality video production.'
        }
    ],
    benefits: [
        'Increased engagement and retention rates',
        'Higher conversion rates through compelling storytelling',
        'Enhanced brand visibility and awareness',
        'Versatile content for multiple platforms',
        'Professional quality that reflects your brand image',
        'Measurable results through video analytics'
    ],
    process: [
        { step: '1', title: 'Pre-Production', description: 'Concept development, scriptwriting, and planning for your video project.' },
        { step: '2', title: 'Production', description: 'Filming with professional equipment and experienced crew.' },
        { step: '3', title: 'Post-Production', description: 'Editing, sound design, and visual effects to create a polished final product.' },
        { step: '4', title: 'Delivery', description: 'Provide the final video in required formats for distribution.' }
    ]
};

export const PackagingDesigningData: ServiceTemplateProps = {
    title: "Packaging Designing",
    img: packaging,
    description: "Design creative and functional packaging that attracts customers and communicates your brand essence.",
    services: [
        {
            icon: Box,
            title: 'Custom Packaging Design',
            description: 'Unique packaging tailored to your product and brand identity.'
        },
        {
            icon: Globe,
            title: 'Sustainable Solutions',
            description: 'Eco-friendly packaging options that align with environmental values.'
        },
        {
            icon: Image,
            title: 'Product Label Design',
            description: 'Visually appealing labels that enhance product presentation.'
        },
        {
            icon: BarChart3,
            title: 'Market Trend Alignment',
            description: 'Packaging concepts that match industry trends and consumer preferences.'
        }
    ],
    benefits: [
        'Improves product shelf appeal',
        'Supports brand recognition',
        'Protects product integrity',
        'Encourages repeat purchases',
        'Differentiates from competitors',
        'Conveys quality and value'
    ],
    process: [
        { step: '1', title: 'Research & Inspiration', description: 'Understand product, audience, and market positioning.' },
        { step: '2', title: 'Concept Creation', description: 'Develop packaging ideas with brand alignment.' },
        { step: '3', title: 'Design Finalization', description: 'Refine designs and prepare for print production.' },
        { step: '4', title: 'Delivery', description: 'Provide print-ready files and mockups.' }
    ]
};

export const BrochureDesigningData: ServiceTemplateProps = {
    title: "Brochure Designing",
    img: brochure,
    description: "Create informative and visually appealing brochures that showcase your business effectively.",
    services: [
        {
            icon: FileText,
            title: 'Corporate Brochures',
            description: 'Professional brochures for corporate presentations and branding.'
        },
        {
            icon: Image,
            title: 'Product Catalogues',
            description: 'Detailed product listings with appealing visuals and descriptions.'
        },
        {
            icon: Globe,
            title: 'Digital Brochures',
            description: 'Interactive PDF brochures for online distribution.'
        },
        {
            icon: Paintbrush,
            title: 'Creative Layouts',
            description: 'Custom layouts to enhance readability and engagement.'
        }
    ],
    benefits: [
        'Effective marketing collateral',
        'Showcases products and services clearly',
        'Supports sales efforts',
        'Builds brand credibility',
        'Cost-effective for mass distribution',
        'Reusable for events and promotions'
    ],
    process: [
        { step: '1', title: 'Requirement Gathering', description: 'Understand the purpose and target audience of the brochure.' },
        { step: '2', title: 'Content & Layout Planning', description: 'Organize text, images, and calls to action.' },
        { step: '3', title: 'Design Execution', description: 'Create an appealing and functional design.' },
        { step: '4', title: 'Finalization & Print', description: 'Provide print and digital-ready files.' }
    ]
};

export const CorporateDesigningData: ServiceTemplateProps = {
    title: "Corporate Designing",
    img: corporateDesigning,
    description: "Build a professional corporate identity that reflects your brand values and enhances business communication.",
    services: [
        {
            icon: Briefcase,
            title: 'Corporate Branding',
            description: 'Consistent branding for all corporate materials.'
        },
        {
            icon: FileText,
            title: 'Annual Reports & Documents',
            description: 'Professionally designed corporate reports and presentations.'
        },
        {
            icon: Users,
            title: 'Internal Communication Materials',
            description: 'Designs that engage and inform employees effectively.'
        },
        {
            icon: Globe,
            title: 'Corporate Stationery',
            description: 'Letterheads, envelopes, and business cards for a unified brand presence.'
        }
    ],
    benefits: [
        'Consistent professional image',
        'Improves brand trust and recognition',
        'Enhances communication clarity',
        'Supports marketing efforts',
        'Reflects company culture',
        'Strengthens market position'
    ],
    process: [
        { step: '1', title: 'Brand Understanding', description: 'Analyze your brand guidelines and corporate goals.' },
        { step: '2', title: 'Concept Creation', description: 'Develop design concepts that align with brand vision.' },
        { step: '3', title: 'Design Implementation', description: 'Apply designs across corporate materials.' },
        { step: '4', title: 'Delivery & Guidelines', description: 'Provide all files with usage guidelines.' }
    ]
};

export const SeoSmoData: ServiceTemplateProps = {
    title: "SEO & SMO",
    img: seo,
    description: "Boost your online presence through search engine optimization and social media optimization.",
    services: [
        {
            icon: BarChart3,
            title: 'SEO Strategy',
            description: 'Improve search rankings and organic traffic.'
        },
        {
            icon: Globe,
            title: 'On-Page Optimization',
            description: 'Optimize website structure, content, and keywords.'
        },
        {
            icon: Users,
            title: 'Social Media Optimization',
            description: 'Enhance brand visibility on social platforms.'
        },
        {
            icon: Search,
            title: 'Analytics & Reporting',
            description: 'Track performance and adjust strategies.'
        }
    ],
    benefits: [
        'Higher search engine rankings',
        'Improved brand awareness',
        'Increased organic traffic',
        'Better audience targeting',
        'Enhanced social engagement',
        'Long-term marketing results'
    ],
    process: [
        { step: '1', title: 'Audit & Research', description: 'Analyze website and social media performance.' },
        { step: '2', title: 'Optimization', description: 'Implement SEO and SMO strategies.' },
        { step: '3', title: 'Content & Engagement', description: 'Create optimized content and social campaigns.' },
        { step: '4', title: 'Monitoring & Improvement', description: 'Continuously track and refine efforts.' }
    ]
};

export const EndToEndDevelopmentData: ServiceTemplateProps = {
    title: "End-to-End Development",
    img: web,
    description: "Comprehensive development of applications, software, and websites, from concept to deployment and beyond.",
    services: [
        {
            icon: Code,
            title: 'Custom Application Development',
            description: 'Tailored web and mobile applications designed to meet your unique business needs.'
        },
        {
            icon: Boxes,
            title: 'Enterprise Software Solutions',
            description: 'Scalable and secure systems for complex organizational requirements.'
        },
        {
            icon: Smartphone,
            title: 'Cross-Platform Mobile Apps',
            description: 'Seamless mobile experiences on iOS and Android platforms.'
        },
        {
            icon: Globe,
            title: 'Full-Stack Web Development',
            description: 'Robust front-end and back-end solutions for modern websites.'
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps Integration',
            description: 'Efficient deployment pipelines and cloud-native architectures.'
        },
        {
            icon: Lock,
            title: 'Security & Compliance',
            description: 'Built-in security practices and adherence to industry standards.'
        }
    ],
    benefits: [
        'Single partner for end-to-end execution',
        'Faster time-to-market',
        'Scalable architecture for growth',
        'Seamless integration with existing systems',
        'Enhanced user experience across platforms',
        'Continuous support and maintenance'
    ],
    process: [
        { step: '1', title: 'Discovery & Planning', description: 'Gather requirements, define scope, and identify technology stack.' },
        { step: '2', title: 'Design & Prototyping', description: 'Build UI/UX prototypes and system architecture.' },
        { step: '3', title: 'Development & Testing', description: 'Iterative coding, QA, and performance optimization.' },
        { step: '4', title: 'Deployment', description: 'Launch applications with CI/CD and cloud infrastructure.' },
        { step: '5', title: 'Ongoing Support', description: 'Monitor, maintain, and scale for future growth.' }
    ]
};


export const AnimationData: ServiceTemplateProps = {
    title: "Animation",
    img: animation,
    description: "Bring your ideas to life with engaging 2D, 3D, and motion graphics animations.",
    services: [
        {
            icon: Film,
            title: 'Explainer Videos',
            description: 'Simplify complex concepts through animations.'
        },
        {
            icon: Image,
            title: 'Motion Graphics',
            description: 'Dynamic visuals for marketing and branding.'
        },
        {
            icon: Users,
            title: 'Character Animation',
            description: 'Animated characters for storytelling.'
        },
        {
            icon: Globe,
            title: '3D Modeling & Animation',
            description: 'Realistic 3D assets and animations.'
        }
    ],
    benefits: [
        'Increases audience engagement',
        'Simplifies complex topics',
        'Improves brand recall',
        'Versatile content format',
        'Enhances storytelling',
        'Boosts conversions'
    ],
    process: [
        { step: '1', title: 'Concept Development', description: 'Plan animation style and script.' },
        { step: '2', title: 'Storyboard Creation', description: 'Outline key scenes and flow.' },
        { step: '3', title: 'Animation Production', description: 'Design and animate assets.' },
        { step: '4', title: 'Final Delivery', description: 'Provide optimized video files.' }
    ]
};

export const PublicRelationData: ServiceTemplateProps = {
    title: "Public Relation",
    img: publicRelation,
    description: "Manage your brand’s image and build strong relationships with the public and media.",
    services: [
        {
            icon: Users,
            title: 'Media Relations',
            description: 'Connect with journalists and influencers.'
        },
        {
            icon: Megaphone,
            title: 'Press Releases',
            description: 'Announce news with impactful press releases.'
        },
        {
            icon: Globe,
            title: 'Event PR',
            description: 'Promote events for maximum coverage.'
        },
        {
            icon: BarChart3,
            title: 'Crisis Management',
            description: 'Protect brand reputation during challenges.'
        }
    ],
    benefits: [
        'Builds brand credibility',
        'Strengthens media connections',
        'Improves public perception',
        'Supports marketing efforts',
        'Generates positive publicity',
        'Manages brand image proactively'
    ],
    process: [
        { step: '1', title: 'Strategy Planning', description: 'Outline PR goals and key messages.' },
        { step: '2', title: 'Execution', description: 'Distribute news and engage with media.' },
        { step: '3', title: 'Monitoring', description: 'Track public and media response.' },
        { step: '4', title: 'Evaluation', description: 'Analyze results and adjust strategy.' }
    ]
};

export const AdvertisingData: ServiceTemplateProps = {
    title: "Advertising",
    img: ad,
    description: "Reach your target audience through strategic advertising campaigns across various media.",
    services: [
        {
            icon: Megaphone,
            title: 'Print Ads',
            description: 'Targeted ads in newspapers and magazines.'
        },
        {
            icon: Globe,
            title: 'Digital Advertising',
            description: 'Online ads for better targeting and reach.'
        },
        {
            icon: BarChart3,
            title: 'Campaign Strategy',
            description: 'Data-driven approach to maximize ROI.'
        },
        {
            icon: Image,
            title: 'Creative Ad Design',
            description: 'Eye-catching visuals for better engagement.'
        }
    ],
    benefits: [
        'Boosts brand visibility',
        'Drives targeted traffic',
        'Supports sales growth',
        'Flexible media options',
        'Measurable results',
        'Enhances brand image'
    ],
    process: [
        { step: '1', title: 'Audience Research', description: 'Identify and understand target customers.' },
        { step: '2', title: 'Campaign Planning', description: 'Select media and create ads.' },
        { step: '3', title: 'Execution', description: 'Launch and manage campaigns.' },
        { step: '4', title: 'Analysis', description: 'Track performance and optimize.' }
    ]
};

export const OutdoorPublicityData: ServiceTemplateProps = {
    title: "Outdoor Publicity",
    img: outDoorPublicity,
    description: "Increase brand reach with high-impact outdoor advertising solutions.",
    services: [
        {
            icon: Image,
            title: 'Billboards',
            description: 'Large-format ads for high visibility.'
        },
        {
            icon: Globe,
            title: 'Transit Advertising',
            description: 'Ads on buses, taxis, and transit stations.'
        },
        {
            icon: Megaphone,
            title: 'Event Branding',
            description: 'Outdoor branding for events and exhibitions.'
        },
        {
            icon: BarChart3,
            title: 'Location Analysis',
            description: 'Choose the best spots for maximum exposure.'
        }
    ],
    benefits: [
        'Captures mass audience attention',
        'Creates strong brand recall',
        'Complements other advertising channels',
        'Long-lasting exposure',
        'Highly visible in public spaces',
        'Supports local market penetration'
    ],
    process: [
        { step: '1', title: 'Planning', description: 'Select prime outdoor locations.' },
        { step: '2', title: 'Design', description: 'Create impactful visual ads.' },
        { step: '3', title: 'Deployment', description: 'Install ads in targeted spots.' },
        { step: '4', title: 'Monitoring', description: 'Track visibility and impact.' }
    ]
};

export const PrintingData: ServiceTemplateProps = {
    title: "Printing",
    img: printing,
    description: "High-quality printing services for all your business and promotional needs.",
    services: [
        {
            icon: Printer,
            title: 'Offset Printing',
            description: 'Ideal for bulk printing with high quality.'
        },
        {
            icon: Image,
            title: 'Digital Printing',
            description: 'Fast and flexible printing for short runs.'
        },
        {
            icon: FileText,
            title: 'Promotional Materials',
            description: 'Flyers, banners, and posters for marketing.'
        },
        {
            icon: Box,
            title: 'Custom Merchandise',
            description: 'Branded items like mugs, t-shirts, and bags.'
        }
    ],
    benefits: [
        'Professional finish and quality',
        'Variety of materials and formats',
        'Cost-effective for bulk orders',
        'Supports marketing campaigns',
        'Customizable to brand needs',
        'Fast turnaround times'
    ],
    process: [
        { step: '1', title: 'Requirement Gathering', description: 'Understand printing needs and specifications.' },
        { step: '2', title: 'Design Preparation', description: 'Prepare artwork for print.' },
        { step: '3', title: 'Production', description: 'Print materials with high-quality control.' },
        { step: '4', title: 'Delivery', description: 'Deliver finished products to client.' }
    ]
};