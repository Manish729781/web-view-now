
import React from 'react';
import { Card } from "@/components/ui/card";

interface ContactInformationProps {
  toolDetails: any;
}

const ContactInformation = ({ toolDetails }: ContactInformationProps) => {
  if (!toolDetails.contact) return null;

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#22223b] mb-6">{toolDetails.name} Support & Contact Information</h2>
      <div className="space-y-6">
        
        {toolDetails.contact.supportEmail && (
          <div>
            <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
              {toolDetails.name} Support Email & Customer service contact & Refund contact etc.
            </h3>
            <p className="text-[#5f5f7a]">
              Here is the {toolDetails.name} support email for customer service: 
              <a href={`mailto:${toolDetails.contact.supportEmail}`} className="text-[#7c5fff] hover:underline ml-1">
                {toolDetails.contact.supportEmail}
              </a>
              . More Contact, visit 
              <a href={toolDetails.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                the contact us page({toolDetails.contact.website})
              </a>
            </p>
          </div>
        )}

        <div>
          <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
            {toolDetails.name} Company
          </h3>
          <p className="text-[#5f5f7a]">
            {toolDetails.name} Company name: <strong>{toolDetails.name}</strong>.
          </p>
          <p className="text-[#5f5f7a]">
            More about {toolDetails.name}, Please visit 
            <a href={toolDetails.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
              the about us page({toolDetails.contact.website})
            </a>.
          </p>
        </div>

        {toolDetails.contact.loginUrl && (
          <div>
            <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
              {toolDetails.name} Login
            </h3>
            <p className="text-[#5f5f7a]">
              {toolDetails.name} Login Link: 
              <a href={toolDetails.contact.loginUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                {toolDetails.contact.loginUrl}
              </a>
            </p>
          </div>
        )}

        {toolDetails.contact.signupUrl && (
          <div>
            <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
              {toolDetails.name} Sign up
            </h3>
            <p className="text-[#5f5f7a]">
              {toolDetails.name} Sign up Link: 
              <a href={toolDetails.contact.signupUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                {toolDetails.contact.signupUrl}
              </a>
            </p>
          </div>
        )}

        {toolDetails.contact.linkedinUrl && (
          <div>
            <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
              {toolDetails.name} Linkedin
            </h3>
            <p className="text-[#5f5f7a]">
              {toolDetails.name} Linkedin Link: 
              <a href={toolDetails.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                {toolDetails.contact.linkedinUrl}
              </a>
            </p>
          </div>
        )}

        {toolDetails.contact.twitterUrl && (
          <div>
            <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
              {toolDetails.name} Twitter
            </h3>
            <p className="text-[#5f5f7a]">
              {toolDetails.name} Twitter Link: 
              <a href={toolDetails.contact.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                {toolDetails.contact.twitterUrl}
              </a>
            </p>
          </div>
        )}

        {toolDetails.contact.instagramUrl && (
          <div>
            <h3 className="font-semibold text-[#22223b] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#7c5fff] rounded-full"></div>
              {toolDetails.name} Instagram
            </h3>
            <p className="text-[#5f5f7a]">
              {toolDetails.name} Instagram Link: 
              <a href={toolDetails.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#7c5fff] hover:underline ml-1">
                {toolDetails.contact.instagramUrl}
              </a>
            </p>
          </div>
        )}

      </div>
    </Card>
  );
};

export default ContactInformation;
