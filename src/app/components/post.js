"use client";

import React from "react";
import useGetListPostsByID from "../hooks/useGetListPostsByID";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import stylesbl from "../styles/blog.module.css";
import { formatearFecha } from "../utils/utils";
import Spinner from "./Spinner";

const Post = () => {
  const { url } = useParams();
  const { loading, post } = useGetListPostsByID(url);
  //console.log(post);
  if (loading) return <Spinner/>;
  return (
    <>
      <article className={`${stylesbl.post} ${stylesbl["mt-3"]}`}>
        <Image
          src={post.attributes.image.data.attributes.url}
          width={1000}
          height={600}
          alt={`imagen blog ${post.attributes.title}`}
        />

        <div className={stylesbl.contenido}>
          <h3>{post.attributes.title}</h3>
          <p className={stylesbl.fecha}>
            {formatearFecha(post.attributes.publishedAt)}
          </p>
          <p className={stylesbl.texto}>{post.attributes.content}</p>
        </div>
      </article>
      <Link href="/blog" className={stylesbl.enlace}>
        Volver
      </Link>
    </>
  );
};

export default Post;
