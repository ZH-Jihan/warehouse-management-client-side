import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`https://secret-coast-30912.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });
  }, []);
  return [inventory, setInventory];
};
export default useInventoryDetails;
