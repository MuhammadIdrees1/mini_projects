"use client";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("");

  const colorArray = [
    { label: "red", value: "bg-red-500", id: Math.random() },
    { label: "green", value: "bg-green-500", id: Math.random() },
    { label: "orange", value: "bg-orange-500", id: Math.random() },
    { label: "blue", value: "bg-blue-500", id: Math.random() },
    { label: "yellow", value: "bg-yellow-500", id: Math.random() },
    { label: "purple", value: "bg-purple-500", id: Math.random() },
    { label: "gray", value: "bg-gray-500", id: Math.random() },
    { label: "pink", value: "bg-pink-500", id: Math.random() },
  ];

  return (
    <main
      className={`flex min-h-screen justify-center items-end  p-24 ${color} text-white `}
    >
      <div className="bg-white flex  justify-between   gap-1 p-5 rounded-full shadow-md h-20">
        {colorArray.map((item) => {
          return (
            <button
              key={item.id}
              className={`${item.value} py-2 px-4 rounded-3xl shadow-md`}
              onClick={() => setColor(item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </main>
  );
}
