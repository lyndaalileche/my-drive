"use client"
import React from 'react';
import Inscription from '@/components/formulaireInscription'; 
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function InscriptionPage() {
  return (
    <div>
      <Navbar/>
      <Inscription/>
      <Footer/> 
    </div>
  );
};
