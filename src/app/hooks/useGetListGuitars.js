const { useCallback, useState, useEffect } = require("react");
const { getGuitars } = require("../service");

const useGetListGuitars = () => {
  const [loading, setLoading] = useState(true);
  const [guitars, setGuitars] = useState([]);

  const getListGuitar = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getGuitars();
      //console.log(response.da)
      setGuitars(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getListGuitar();
  }, [getListGuitar]);

  return { loading, guitars, getListGuitar };
};

export default useGetListGuitars;
