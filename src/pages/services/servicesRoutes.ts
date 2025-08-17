import { 
  AdvertisingData, 
  AnimationData, 
  BrandingAndDesignData, 
  BrochureDesigningData, 
  CorporateDesigningData, 
  DigitalMarketingData, 
  OutdoorPublicityData, 
  PackagingDesigningData, 
  PrintingData, 
  PublicRelationData, 
  SeoSmoData, 
  SocialMediaMarketingData, 
  TraditionalMarketingData, 
  VideoProductionData, 
  EndToEndDevelopmentData 
} from "./servicesData";

import { 
  TrendingUp,        // Digital Marketing
  Hash,              // Social Media
  Paintbrush,        // Branding & Designing
  Megaphone,         // Traditional Marketing
  Video,             // Video Production
  Package,           // Packaging Designing
  FileText,          // Brochure Designing
  Building,          // Corporate Designing
  Search,            // SEO & SMO
  Monitor,           // Website Designing
  Film,              // Animation
  Users,             // Public Relations
  PanelsTopLeft,     // Advertising
  Printer,            // Printing
  MapPin
} from 'lucide-react';

export const serviceRoutes = [
    {
        icon: TrendingUp,
        title: "Digital Marketing",
        path: "/services/digital-marketing",
        prop: { ...DigitalMarketingData }
    },
    {
        icon: Hash,
        title: "Social Media Marketing",
        path: "/services/social-media-marketing",
        prop: { ...SocialMediaMarketingData }
    },
    {
        icon: Paintbrush,
        title: "Branding & Designing",
        path: "/services/branding-and-designing",
        prop: { ...BrandingAndDesignData }
    },
    {
        icon: Megaphone,
        title: "Traditional Marketing",
        path: "/services/traditional-marketing",
        prop: { ...TraditionalMarketingData }
    },
    {
        icon: Video,
        title: "Video Production",
        path: "/services/video-production",
        prop: { ...VideoProductionData }
    },
    {
        icon: Package,
        title: "Packaging Designing",
        path: "/services/packaging-designing",
        prop: { ...PackagingDesigningData }
    },
    {
        icon: FileText,
        title: "Brochure Designing",
        path: "/services/brochure-designing",
        prop: { ...BrochureDesigningData }
    },
    {
        icon: Building,
        title: "Corporate Designing",
        path: "/services/corporate-designing",
        prop: { ...CorporateDesigningData }
    },
    {
        icon: Search,
        title: "SEO & SMO",
        path: "/services/seo-sem",
        prop: { ...SeoSmoData }
    },
    {
        icon: Monitor,
        title: "End To End Development",
        path: "/services/end-to-end-development",
        prop: { ...EndToEndDevelopmentData }
    },
    {
        icon: Film,
        title: "Animation",
        path: "/services/animation",
        prop: { ...AnimationData }
    },
    {
        icon: Users,
        title: "Public Relations",
        path: "/services/public-relations",
        prop: { ...PublicRelationData }
    },
    {
        icon: PanelsTopLeft,
        title: "Advertising",
        path: "/services/advertising",
        prop: { ...AdvertisingData }
    },
    {
        icon: MapPin,
        title: "Outdoor Publicity",
        path: "/services/outdoor-advertising",
        prop: { ...OutdoorPublicityData }
    },
    {
        icon: Printer,
        title: "Printing",
        path: "/services/printing",
        prop: { ...PrintingData }
    }
];
