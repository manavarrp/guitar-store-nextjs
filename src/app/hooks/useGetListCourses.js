const { useCallback, useState, useEffect } = require("react");
const { getBCourse } = require("../service");

const useGetListCourses = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});

  const getListCourses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getBCourse();
      //console.log(response.da)
      setCourse(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getListCourses();
  }, [getListCourses]);

  return { loading, course, getListCourses };
};

export default useGetListCourses;
