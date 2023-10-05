const { useCallback, useState, useEffect } = require("react");
const { getPostsByID } = require("../service");

const useGetListPostsByID = (url) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);

  const getListPostsByID = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getPostsByID(url);
      //console.log({response})
      setPost(response?.data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getListPostsByID()
  }, [getListPostsByID])


  return { loading, post, getListPostsByID };
};

export default useGetListPostsByID;
