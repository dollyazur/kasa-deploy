import { useState, useEffect } from "react";
// On prend des outils de React : useState (pour se souvenir des choses) et useEffect (pour faire quelque chose après).

export const useFetch = (url) => {
  // On fait une fonction qui s'appelle `useFetch`, et elle a besoin d'une adresse (là où se trouvent les infos).
  const [data, setData] = useState(null);
  // On prépare une boîte vide pour ranger les infos qu’on va chercher.
  const [isLoading, setIsLoading] = useState(true);
  // On prépare un état qui dit : "Je suis en train de chercher, attends un peu !"
  const [error, setError] = useState(null);
  // Une autre boîte pour dire s’il y a un problème (par exemple, si on ne trouve pas le livre).

  useEffect(() => {
    // On dit : "Hé, fais ça quand la page s’affiche".
    const fetchData = async () => {
      // Une mission spéciale (async) pour aller chercher des infos.
      try {
        // On essaye de lire les infos.
        const response = await fetch(url);
        // On va chercher à l’adresse donnée.
        if (!response.ok) {
          // Si le livre est cassé (mauvaise réponse)…
          throw new Error("Erreur lors de la récupération des données");
          // On lance une alerte (une erreur).
        }
        const result = await response.json();
        // Si tout va bien, on transforme le livre en infos compréhensibles (JSON).
        setData(result);
        // Et on range les infos dans notre boîte.
      } catch (err) {
        // Si on n’arrive pas à lire le livre…
        setError(err.message);
        // On met le problème dans la boîte des erreurs.
      } finally {
        // À la fin, qu’il y ait un problème ou pas...
        setIsLoading(false);
        // On dit : "C’est bon, j’ai fini de chercher !"
      }
    };

    fetchData();
    // On commence la mission.
  }, [url]);
  // On fait ça chaque fois que l’adresse change.

  return { data, isLoading, error };
  // On renvoie nos boîtes (les infos, si on cherche encore ou s’il y a un problème).
};
