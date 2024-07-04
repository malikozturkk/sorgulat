'use client';
import React from 'react';
import CustomerListAutoCard from '@/components/CustomerListAutoCard';
import CustomerListManuelCard from '@/components/CustomerListManuelCard';

const CustomerList = () => {
  return (
    <div className="mx-6 mt-6 flex justify-center h-[80vh]">
      <div className="max-w-[400px] flex items-center justify-center flex-col gap-3">
        <CustomerListAutoCard />
        <p className="text-small text-default-500">veya</p>
        <CustomerListManuelCard />
      </div>
    </div>
  );
};

export default CustomerList;
