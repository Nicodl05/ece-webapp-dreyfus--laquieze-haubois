import supabase from "";
import { useEffect, useState } from "react";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothiers] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("contacts").select("*");
      if (error) {
        setFetchError(error);
      }
      setSmoothiers(data);
    };
    fetchSmoothies();
  }, []);
};
