import { useState, useEffect } from "react";
// On prend des outils de React : useState (pour se souvenir des choses) et useEffect (pour faire quelque chose après).

export const useFetch = (url) => {
  // On fait une fonction qui s'appelle `useFetch`, et elle a besoin d'une adresse (là où se trouvent les infos).
  const [data, setData] = useState(null);
  // On prépare une boîte vide pour ranger les infos qu’on va chercher.

  const [error, setError] = useState(null);
  // Une autre boîte pour dire s’il y a un problème.

  useEffect(() => {
    // On dit : "Hé, fais ça quand la page s’affiche".
    const fetchData = async () => {
      // Une mission spéciale (async) pour aller chercher des infos.
      try {
        // On essaye de lire les infos.
        const response = await fetch(url);
        // On va chercher à l’adresse donnée.
        if (!response.ok) {
          // Si mauvaise réponse
          throw new Error("Erreur lors de la récupération des données");
          // On lance une alerte.
        }
        const result = await response.json();
        // Si tout va bien, infos compréhensibles (JSON).
        setData(result);
        // Et on range les infos dans notre boîte.
      } catch (err) {
        // Si on n’arrive pas
        setError(err.message);
        // On met le problème dans la boîte des erreurs.
      }
    };

    fetchData();
    // On commence la mission.
  }, [url]);
  // On fait ça chaque fois que l’adresse change.

  return { data, error };
  // On renvoie nos boîtes (les infos, si on cherche encore ou s’il y a un problème).
};
