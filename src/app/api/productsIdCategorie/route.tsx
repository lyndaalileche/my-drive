import getProduitWithMarqueAndIdCategorie from '@/api/getProduitWithMarqueAndIdCatégorie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id_categorie } = req.query;

  try {
    const produits = await getProduitWithMarqueAndIdCategorie(Number(id_categorie));
    res.status(200).json(produits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
  }
}