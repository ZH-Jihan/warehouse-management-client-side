import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch(`https://secret-coast-30912.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      });
  }, []);
  return [inventories, setInventories];
};
export default useInventories;
