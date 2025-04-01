"use client";
import React from 'react';
import Image from 'next/image';

const CopyButton = ({ value, size = 26 }: { value: string; size?: number }) => {
  const [copyOk, setCopyOk] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setCopyOk(true);
    setTimeout(() => setCopyOk(false), 1000);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute right-3 top-2 p-1 cursor-pointer border rounded-lg border-neutral-500 hidden group-hover:block transition-transform"
    >
      <Image
        src={copyOk ? '/check-white.svg' : '/copy-New.svg'}
        alt="copied"
        width={size}
        height={size}
      />
    </div>
  );
};

export default CopyButton;
