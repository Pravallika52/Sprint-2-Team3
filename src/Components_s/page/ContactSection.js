import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ContactSectionStyle = styled.div`
  padding: 0.5rem;
  .contactSection__wrapper {
    display: flex;
    gap: 0.5rem;
    margin-top: 3rem;
    justify-content: space-between;
    position: relative;
  }
    `;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div style={{backgroundColor:'lightblue'}}>
        <SectionTitle heading=""/><br/>
        <SectionTitle heading="Project Partners:"/>
        <div className="contactSection__wrapper" >
          <div >
            <ContactInfoItem icon={<MdLocalPhone />} text="Pravallika Gokeda- 7893444536" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Indee Vara Lalam - 9381996567" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Korla Sai Sireesha - 6305695429" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Karanam Prakash Jeevan  - 7780601398" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Jannu Vishaal - 9381254635" />
            </div>
            <div >
            <br/>
              <a href='www.linkedin.com/in/pravallika-gokeda-8095061a4'>
              <LinkedInIcon /></a><br/><br/><br/><br/>
              <a href='www.linkedin.com/in/indee-vara-lalam-998828205'>
              <LinkedInIcon /></a><br/><br/><br/><br/>
              <a href='www.linkedin.com/in/korla-sai-sireesha-416296207'>
              <LinkedInIcon /></a><br/><br/><br/><br/><br/>
              <a href='www.linkedin.com/in/karanam-prakash-jeevan-5a432a207'>
              <LinkedInIcon /></a><br/><br/><br/><br/>
              <a href='www.linkedin.com/in/vishaal-jannu-96229b207'>
              <LinkedInIcon /></a>
            </div>
            <div >
            <ContactInfoItem icon={<MdEmail />} text="pravallikagokeda@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="indulalam26@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="sireesha.korla10@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="rakashjeevan2000@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="vishaaljannu@gmail.com" />
          </div>
        </div>
      </div>
      </ContactSectionStyle>
  );
}
