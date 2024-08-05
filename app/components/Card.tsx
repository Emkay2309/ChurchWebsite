import Link from 'next/link';
import React from 'react';

interface CardProps {
  title?: string;
  content: React.ReactNode;
  image?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, image, footer }) => {
  return (
    <div className="card-container border border-slate-800 rounded-lg shadow-lg overflow-hidden mb-6">
      {/* {image && <Image src={image} alt={title} className="card-image w-full h-48 object-cover" />} */}
      <div className="card-content p-4 ">
        {title && <h2 className="card-title text-2xl font-bold my-2">{title}</h2>}
        <div className="card-body text-base text-gray-700">{content}</div>
      </div>
      {footer && <Link href={""} className=" flex justify-end  p-4">{footer +"->" }</Link>}
    </div>
  );
};

export default Card;
