"use client";


import useGetListCourses from "../hooks/useGetListCourses";
import style from "../styles/curso.module.css";
import Spinner from "./Spinner";

const Course = () => {
  const { loading, course } = useGetListCourses();
 // console.log({ course });
  if (loading) return <Spinner/>;
  return (
    <div>
      <section className={`${style.curso} curso`}>
        <style jsx>{`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${course?.attributes?.image?.data?.attributes?.url});
          }
        `}</style>
        <div className={`contenedor ${style.grid}`}>
          <div className={style.contenido}>
            <h2 className="heading">{course?.attributes?.title}</h2>
            <p>{course?.attributes?.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
