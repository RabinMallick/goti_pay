import {
  FaCreditCard,
  FaBarcode,
  FaRegFileAlt,
  FaQrcode,
  FaRocket,
  FaShoppingCart,
  FaWallet,
  FaGlobe,
  FaBuilding,
  FaUsers,
  FaCoins,
} from 'react-icons/fa';
import React from 'react';

// Icon mapping with more variety
const icons = {
  creditCard: <FaCreditCard />,
  barcode: <FaBarcode />,
  file: <FaRegFileAlt />,
  qrcode: <FaQrcode />,
  rocket: <FaRocket />,
  shoppingCart: <FaShoppingCart />,
  wallet: <FaWallet />,
  globe: <FaGlobe />,
  building: <FaBuilding />,
  users: <FaUsers />,
  coins: <FaCoins />,
};

interface MegaMenuItem {
  name: string;
  href?: string;
  submenu?: {
    heading: string;
    items: {
      title: string;
      description: string;
      href: string;
      icon: React.ReactNode;
      badge?: string;
    }[];
  }[];
  icon?: React.ReactNode;
}

export const menuItems: MegaMenuItem[] = [
  {
    name: 'Payments',
    submenu: [
      {
        heading: 'Accept Payments Online',
        items: [
          {
            title: 'Payment Aggregator',
            description: 'Accepting payments made easy',
            href: '#',
            icon: icons?.wallet,
          },
          {
            title: 'Payment Gateway',
            description: 'Payments on your Website & App',
            href: '#',
            icon: icons?.rocket,
            badge: 'NEW',
          },
          {
            title: 'Payment Links',
            description: 'Create & send links to collect money',
            href: '#',
            icon: icons?.file,
          },
          {
            title: 'Payment Pages',
            description: 'Get paid with personalized page',
            href: '#',
            icon: icons?.shoppingCart,
          },
          {
            title: 'Webstore',
            description: 'List, sell, get paid in minutes',
            href: '#',
            icon: icons?.barcode,
            badge: 'NEW',
          },
          {
            title: 'QR Codes',
            description: 'Multi-feature QR for your business',
            href: '#',
            icon: icons?.qrcode,
          },
        ],
      },
      {
        heading: 'Accept International Payments',
        items: [
          {
            title: 'International Payments',
            description: 'Accept payments from across the globe',
            href: '#',
            icon: icons?.globe,
          },
          {
            title: 'International Bank Transfers',
            description: 'Accept USD, GBP, EUR payments',
            href: '#',
            icon: icons?.building,
          },
        ],
      },
      
      {
        heading: 'Accept Payments Offline',
        items: [
          {
            title: 'GotiPay POS',
            description: 'Accept Payments In-Store',
            href: '#',
            icon: icons?.coins,
            badge: 'NEW',
          },
        ],
      },
    ],
  },
  {
    name: 'Pricing',
    submenu: [
      {
        heading: 'Pricing Plans',
        items: [
          {
            title: 'Standard Plan',
            description: 'Ideal for startups and SMEs',
            href: '/pricing/standard',
            icon: icons?.users,
          },
          {
            title: 'Enterprise Plan',
            description: 'Best for large businesses',
            href: '/pricing/enterprise',
            icon: icons?.building,
          },
        ],
      },
    ],
  },
  {
    name: 'Payroll',
    submenu: [
      {
        heading: 'Payroll',
        items: [
          {
            title: 'For Startups & SMEs',
            description: 'Simplified payroll for small businesses',
            href: '/payroll/startups-smes',
            icon: icons?.wallet,
          },
          {
            title: 'For Enterprises',
            description: 'Enterprise-grade payroll solutions',
            href: '/payroll/enterprises',
            icon: icons?.coins,
            badge: 'NEW',
          },
        ],
      },
    ],
  },
  { name: 'Partners', href: '/partners', icon: icons?.rocket },
  { name: 'Developers', href: '/developers', icon: icons?.rocket },
  { name: 'Demo', href: '/demo', icon: icons?.shoppingCart },
];
