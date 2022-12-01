import React from 'react';

import tmtnIMG from './assets/tmtn.png';
import ghSVG from './assets/github.svg';
import figmaSVG from './assets/figma.svg';
import websiteSVG from './assets/website.svg';

const projects = [
  {
    name: 'taylormadetech.net',
    description: 'company website',
    techstack: 'javascript (react), hosted on AWS with Amplify'
  },
  {
    name: 'secrets.taylormadetech.net',
    description: 'secret sharing website',
    techstack: 'javascript (react), hosted on AWS with Amplify'
  },
  {
    name: 'mgdrywall-usa.com',
    description: 'MG Drywall U.S.A company website',
    techstack: 'javascript (next.js), hosted on AWS with Amplify'
  },
  {
    name: 'discord-bot',
    description: 'discord bot project',
    techstack: 'node.js'
  },
  {
    name: 'myRides',
    description: 'an app to book your favorite Uber or Lyft driver',
    techstack: 'javascript (react) front end, python (django) backend'
  }
];

function App() {
  return (
    <main className="font-nunito">
      <header className="text-gray-900 pt-8 md:pt-16 capitalize text-center lg:flex lg:align-middle justify-center mx-4">
        <div className="my-auto lg:grow">
          <p className="text-3xl md:text-5xl">hector alvarez</p>
          <p className="text-lg">full stack development & UX \ UI</p>
        </div>
        <img src={tmtnIMG} className="max-w-md m-auto w-full" />
      </header>
      <h2 className="mx-4 text-2xl font-mplus font-bold">Project Catalog</h2>
      {projects.map((project) => {
        return (
          <div key={project.name} className="p-2 bg-gray-800 m-4 text-gray-100">
            <h3 className="text-xl">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
            <p className="pb-2 text-xs text-white">tech stack: {project.techstack}</p>
            <div className="h-16 bg-gray-200 flex justify-around">
              <img src={ghSVG} alt="github svg icon" className="py-2 px-6" />
              <img src={figmaSVG} alt="figma svg icon" className="py-2 px-6" />
              <img src={websiteSVG} alt="website svg icon" className="py-2 px-6" />
            </div>
          </div>
        );
      })}
      <footer className="bg-gray-300 text-lg text-center">copyright 2022</footer>
    </main>
  );
}

export default App;
