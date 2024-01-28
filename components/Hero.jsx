import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl tb">
      <div className="flex items-center justify-center  h-screen ">
        <div className="">
          <h1 className="text-4xl font-bold">Hallo! I am Taib Islam,</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            vero, iure fugit ut delectus quis?
          </p>

          <button>view project</button>
        </div>

        <div className="">
          <img src="https://via.placeholder.com/550x550" alt="" />
        </div>
      </div>
    </div>
  );
}
