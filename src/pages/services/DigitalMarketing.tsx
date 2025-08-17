import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart3, Search, MousePointer, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import CtaSection from '../../components/Common/CtaSection';
import ServiceTemplate from '../../components/Common/ServiceTemplate';

const DigitalMarketing = () => {
  const services = [
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
  ];

  const benefits = [
    'Data-driven approach with detailed analytics',
    'Targeted audience segmentation',
    'A/B testing for optimal performance',
    'Regular reporting and optimization',
    'Multi-channel campaign management',
    'Conversion rate optimization'
  ];

  const process = [
    { step: '1', title: 'Audit & Analysis', description: 'We analyze your current digital presence and identify opportunities' },
    { step: '2', title: 'Strategy Development', description: 'Create a comprehensive digital marketing strategy tailored to your goals' },
    { step: '3', title: 'Campaign Launch', description: 'Execute campaigns across chosen digital channels' },
    { step: '4', title: 'Monitor & Optimize', description: 'Continuous monitoring and optimization for maximum performance' }
  ];

  return (
      <ServiceTemplate
        title="Digital Marketing"
        description="Drive leads and boost ROI with performance-based digital marketing strategies."
        services={services}
        benefits={benefits}
        process={process}
      />
  );
};

export default DigitalMarketing;