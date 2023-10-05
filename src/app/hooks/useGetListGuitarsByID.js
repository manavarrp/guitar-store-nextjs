const { useCallback, useState, useEffect } = require("react");
const { getGuitarsByID } = require("../service");

const useGetListGuitarsByID = (url) => {
  const [loading, setLoading] = useState(true);
  const [guitar, setGuitar] = useState([]);

  const getListGuitarByID = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getGuitarsByID(url);
      //console.log({response})
      setGuitar(response?.data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getListGuitarByID()
  }, [getListGuitarByID])


  return { loading, guitar, getListGuitarByID };
};

export default useGetListGuitarsByID;
