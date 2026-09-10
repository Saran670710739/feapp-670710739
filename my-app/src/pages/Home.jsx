import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data";
import MovieCard from "../components/MovieCard";
import MovieGallery from "../components/MovieGallery";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <div className="mx-auto mt-8 max-w-5xl">
        <MovieCard title="Interstellar" year={2014}/>
      </div>
       <h2 className="mt-8 text-2xl font-bold text-slate-800"> ดูหนังเพิ่มเติม</h2>
       <div className="ma-auto mt-8 max-w-md">
        <MovieGallery/>
       </div>
    </div>
  );
}

export default Home;