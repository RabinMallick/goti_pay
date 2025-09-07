import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCreditCard,
  HiOutlineLink,
  HiOutlineRefresh,
  HiOutlineMail,
} from 'react-icons/hi';

export const termsData = [
  {
    title: { en: 'Acceptance of Terms', bn: 'শর্তাবলীর গ্রহণ' },
    content: {
      en: 'By using GOTIPAY services, you agree to comply with these Terms & Conditions. These terms govern your access and use of our payment gateway.',
      bn: 'GOTIPAY সেবা ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীর সাথে সম্মতি জানাচ্ছেন। এই শর্তাবলী আমাদের পেমেন্ট গেটওয়ে ব্যবহারের নিয়মাবলী নির্ধারণ করে।',
    },
    color: 'blue',
    icon: HiOutlineDocumentText,
  },
  {
    title: { en: 'User Responsibilities', bn: 'ব্যবহারকারীর দায়িত্ব' },
    content: {
      en: [
        'Maintain the confidentiality of your account credentials.',
        'Ensure accurate and lawful use of payment services.',
        'Report any unauthorized transactions immediately.',
        'Comply with all local and international payment regulations.',
      ],
      bn: [
        'আপনার অ্যাকাউন্টের তথ্য গোপন রাখুন।',
        'পেমেন্ট সেবা সঠিক ও আইনসম্মতভাবে ব্যবহার করুন।',
        'যে কোনো অননুমোদিত লেনদেন অবিলম্বে রিপোর্ট করুন।',
        'সকল স্থানীয় ও আন্তর্জাতিক পেমেন্ট নিয়ম মেনে চলুন।',
      ],
    },
    color: 'indigo',
    icon: HiOutlineShieldCheck,
  },
  {
    title: { en: 'Payment Transactions', bn: 'পেমেন্ট লেনদেন' },
    content: {
      en: [
        'All transactions are subject to verification and security checks.',
        'GOTIPAY is not responsible for delays caused by banks or third-party processors.',
        'Refunds and cancellations follow our internal policies and may require approval.',
        'Users must not attempt fraudulent or unauthorized transactions.',
      ],
      bn: [
        'সমস্ত লেনদেন যাচাই ও সুরক্ষা পরীক্ষার আওতায় পড়ে।',
        'ব্যাঙ্ক বা তৃতীয় পক্ষের কারণে বিলম্বের জন্য GOTIPAY দায়ী নয়।',
        'রিফান্ড ও বাতিলকরণ আমাদের অভ্যন্তরীণ নীতিমালা অনুযায়ী হয় এবং অনুমোদন প্রয়োজন হতে পারে।',
        'ব্যবহারকারীরা কোনো প্রতারণামূলক বা অননুমোদিত লেনদেন চেষ্টা করতে পারবেন না।',
      ],
    },
    color: 'green',
    icon: HiOutlineCreditCard,
  },
  {
    title: { en: 'Third-Party Services', bn: 'তৃতীয় পক্ষের সেবা' },
    content: {
      en: 'GOTIPAY may integrate with third-party banks or service providers. We are not responsible for their terms or privacy practices.',
      bn: 'GOTIPAY তৃতীয় পক্ষের ব্যাঙ্ক বা সেবা প্রদানকারীদের সাথে ইন্টিগ্রেশন করতে পারে। তাদের শর্তাবলী বা গোপনীয়তা নীতির জন্য আমরা দায়ী নয়।',
    },
    color: 'yellow',
    icon: HiOutlineLink,
  },
  {
    title: { en: 'Modifications to Terms', bn: 'শর্তাবলীর পরিবর্তন' },
    content: {
      en: 'GOTIPAY may update these terms at any time. Users will be notified of significant changes, and continued use of services indicates acceptance of updated terms.',
      bn: 'GOTIPAY যে কোনো সময় এই শর্তাবলী আপডেট করতে পারে। গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে ব্যবহারকারীদের জানানো হবে, এবং সেবা ব্যবহার অব্যাহত রাখলে এটি আপডেটকৃত শর্তাবলীর গ্রহণ বোঝায়।',
    },
    color: 'pink',
    icon: HiOutlineRefresh,
  },
  {
    title: { en: 'Contact', bn: 'যোগাযোগ' },
    content: {
      en: `For questions regarding these terms, please email <a href="mailto:support@gotipay.com" class="text-blue-600 underline">support@gotipay.com</a>.`,
      bn: `এই শর্তাবলী সম্পর্কিত প্রশ্নের জন্য, অনুগ্রহ করে ইমেইল করুন <a href="mailto:support@gotipay.com" class="text-blue-600 underline">support@gotipay.com</a>.`,
    },
    color: 'gray',
    icon: HiOutlineMail,
  },
];
