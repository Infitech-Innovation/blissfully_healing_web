"use client";
import {useEffect} from "react";
export default function StorySync(){
 useEffect(()=>{
  const els = [...document.querySelectorAll("[data-voyage-chapter]")] as HTMLElement[];
  const update=()=>{
    const vh=innerHeight;
    els.forEach((el)=>{
      const r=el.getBoundingClientRect();
      const d=Math.abs((r.top+r.height/2)-vh/2);
      el.style.setProperty("--op", String(Math.max(0, 1 - d / (vh * 0.82))));
    });
    document.documentElement.style.setProperty("--p", String(scrollY));
  };
  addEventListener("scroll", update, {passive: true});
  update();
  return ()=> removeEventListener("scroll", update);
 },[]);
 return null;
}
