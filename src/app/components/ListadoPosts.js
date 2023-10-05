"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/grid.module.css";
import stylesbl from "../styles/blog.module.css";
import useGetListPosts from "../hooks/useGetListPosts";
import { formatearFecha } from "../utils/utils";
import Spinner from "./Spinner";

const ListadoPosts = () => {
  const { loading, posts } = useGetListPosts();
  //console.log(posts);
  if(loading) return <Spinner/>
  return (
    <main className="contenedor">
      <h1 className="heading">Blog</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id}>
            <article>
              <Image
                src={post.attributes.image.data.attributes.formats.medium.url}
                width={600}
                height={400}
                alt={`imagen blog ${post.attributes.title}`}
              />

              <div className={stylesbl.contenido}>
                <h3>{post.attributes.title}</h3>
                <p className={stylesbl.fecha}>{formatearFecha(post.attributes.publishedAt)}</p>
                <p className={stylesbl.resumen}>{post.attributes.content}</p>
                <Link
                  href={`/blog/${post.attributes.url}`}
                  className={stylesbl.enlace}
                >
                  Leer Post
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListadoPosts;
