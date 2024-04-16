import React from "react";

const MentionsLegalesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Mentions Légales
      </h2>
      <div className="text-gray-800">
        <p>
          Bienvenue sur la page des Mentions Légales de PerfectDriver. Vous
          trouverez ci-dessous les informations légales relatives à
          l&apos;utilisation de notre plateforme.
        </p>

        <p className="mt-4">
          <strong>Responsable de la publication :</strong> Les4Parfaits
        </p>
        <p className="mt-4">
          <strong>Hébergeur :</strong> Versel
        </p>
        <p className="mt-4">
          <strong>Numéro de SIRET :</strong> 123 456 789 00010
        </p>
        <p className="mt-4">
          Les informations recueillies font l&apos;objet d&apos;un traitement
          informatique destiné à la gestion de notre plateforme. Conformément à
          la loi &quot;Informatique et Libertés&quot;, vous disposez d&apos;un
          droit d&apos;accès, de rectification et de suppression des données
          vous concernant.
        </p>
        <p className="mt-4">
          Pour exercer ce droit ou pour toute autre demande concernant vos
          données personnelles, veuillez nous contacter à les4parfaits@gmail.com
        </p>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
