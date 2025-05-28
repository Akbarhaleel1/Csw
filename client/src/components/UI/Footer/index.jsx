import Image from 'next/image';
import csw_logo_footer from '../../../../public/images/csw-logo_footer.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import {
  Wrapper,
  Inner,
  FooterMain,
  FooterColumn,
  ColumnTitle,
  FooterLinks,
  FooterLink,
  FooterBottom,
  Copyright,
  SocialLinks,
  SocialLink
} from './styles';

const Footer = () => {
  const footerData = [
    {
      title: 'Why Choose Us',
      links: [
        'Expert Counsellors',
        '1000+ University Partners',
        'Visa Success Rate',
        'Student Testimonials',
        'Scholarship Assistance'
      ]
    },
    {
      title: 'What We Do',
      links: [
        'Study Abroad Counselling',
        'University Applications',
        'Visa Guidance',
        'Pre-Departure Briefing',
        'Post-Arrival Support'
      ]
    },
    {
      title: 'Study Destinations',
      links: [
        'Study in USA',
        'Study in UK',
        'Study in Canada',
        'Study in Australia',
        'Study in Germany'
      ]
    },
    {
      title: 'Student Resources',
      links: [
        'Course Finder',
        'Scholarship Guide',
        'Cost Calculator',
        'Visa Checklist',
        'Accommodation Help'
      ]
    }
  ];

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF /> },
  { name: 'Twitter', icon: <FaTwitter /> },
  { name: 'Instagram', icon: <FaInstagram /> },
  { name: 'LinkedIn', icon: <FaLinkedinIn /> },
  { name: 'YouTube', icon: <FaYoutube /> }
];

  return (
    <Wrapper>
      <Inner>
        <Image 
          src={csw_logo_footer} 
          alt="CSW International Education Logo"
          width={150}
          height={50}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        
        <FooterMain>
          {footerData.map((column, index) => (
            <FooterColumn key={index}>
              <ColumnTitle>{column.title}</ColumnTitle>
              <FooterLinks>
                {column.links.map((link, i) => (
                  <FooterLink key={i}>{link}</FooterLink>
                ))}
              </FooterLinks>
            </FooterColumn>
          ))}
        </FooterMain>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} CSW International Education. All rights reserved.
          </Copyright>
          
          <SocialLinks>
            {socialLinks.map((social, i) => (
              <SocialLink 
                key={i} 
                href="#" 
                aria-label={social.name}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterBottom>
      </Inner>
    </Wrapper>
  );
};

export default Footer;