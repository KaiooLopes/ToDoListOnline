import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  orderBy,
  onSnapshot,
  where,
  query,
} from "firebase/firestore";

export const useFetchDocuments = (doc, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) return;
      setLoading(true);

      const collectionRef = await collection(db, doc);

      try {
        let q;
        if (uid === null) {
          q = await query(collectionRef, orderBy("createdAt", "asc"));
        } else {
          q = await query(
            collectionRef,
            where("uid", "==", uid),
            orderBy("createdAt", "asc")
          );
        }

        await onSnapshot(q, (QuerySnapshot) => {
          setDocuments(
            QuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };
    loadData();
  }, [doc, documents, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
