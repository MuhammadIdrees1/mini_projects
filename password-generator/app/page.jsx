"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let char = "!@#$%^&*~_-+?";
    if (characterAllowed) str += char;
    if (numberAllowed) str += num;
    for (let i = 1; i <= length; i++) {
      const random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  };
  const handleCopyToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    generatePassword();
  }, [length, characterAllowed, numberAllowed]);

  return (
    <main className="bg-black text-white flex justify-center items-center h-screen w-screen">
      <div className="bg-gray-500 px-5 py-2 rounded-xl h-32 flex flex-col justify-around">
        <div className="flex items-center justify-center">
          <input
            type="text"
            name=""
            className="text-black w-3/4 py-1 rounded-s-md px-2"
            id=""
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            onClick={handleCopyToClipBoard}
            className="w-1/4 bg-blue-600 py-1 rounded-e-md focus:hover:bg-blue-400"
          >
            copy
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            {" "}
            <input
              type="range"
              name=""
              id=""
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length: {length}</label>
          </div>
          <div className="">
            {" "}
            <input
              type="checkbox"
              name=""
              id=""
              value={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label>character:</label>
          </div>
          <div className="">
            {" "}
            <input
              type="checkbox"
              name=""
              id=""
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>number:</label>
          </div>
        </div>
      </div>
    </main>
  );
}
