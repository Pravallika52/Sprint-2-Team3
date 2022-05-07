import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styledComponents from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';

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
      <div >
        <SectionTitle heading="Know us"/>
        <div className="contactSection__wrapper" >
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="Pravallika - 7844452993" />
            <ContactInfoItem icon={<MdLocalPhone />} text="IndeeVara - 9371296562" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Sireesha - 6305685478" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Prakash - 7780501378" />
            <ContactInfoItem icon={<MdLocalPhone />} text="Vishal - 9381254635" />
            </div>
            <div className="right">
            <ContactInfoItem icon={<MdEmail />} text="pravallika@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="indeevara@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="sireesha@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="prakash@gmail.com" />
            <ContactInfoItem icon={<MdEmail />} text="vishal@gmail.com" />
          </div>
        </div>
      </div>
      </ContactSectionStyle>
  );
}