import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card9() {
  const [play, setPlay] = useState(false);

  return (
    <div className="border w-[350px] glass rounded-xl flex">
      <img
        src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
        alt="music"
        width="150"
        height="150"
        className="rounded-2xl p-2"
      />

      <div className="px-4 py-4">
        <div className="font-outerSans py-3">
          <h1>Toxic</h1>
          <p className="text-xs">BoyWithUke</p>
        </div>
        <div className="flex w-full justify-evenly">
          <button className="fill-[#ffffff4d] mx-2 border rounded-full border-gray-500 p-1">
            <svg
              width="30"
              height="30"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FastRewindRoundedIcon"
            >
              <path d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"></path>
            </svg>
          </button>

          <button
            className="fill-white border rounded-full border-gray-500 p-1"
            onClick={() => setPlay(!play)}
          >
            {play === true ? (
              <svg
                width="30"
                height="30"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PlayArrowRoundedIcon"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PauseRoundedIcon"
              >
                <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"></path>
              </svg>
            )}
          </button>

          <button className="fill-[#ffffff4d] mx-2 border rounded-full border-gray-500 p-1">
            <svg
              width="30"
              height="30"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FastForwardRoundedIcon"
            >
              <path d="m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// App Component
function App() {
  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-xl">Tailwind test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/30374205/pexels-photo-30374205/free-photo-of-cat-on-tiled-floor-with-shadow-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 mb-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <Card9 />
    </>
  );
}

export default App
