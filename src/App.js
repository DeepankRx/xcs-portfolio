import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
} from 'react-icons/ai';
import videos from './videoConstant';
const Card = ({ title, video, date }) => {
  return (
    <div className="w-full md:w-[25%] shadow-md rounded ">
      <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
        <video src={video} className="w-full h-full object-fit" controls />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-medium">{title}</h1>

        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

function App() {
  // Write 2 or 3 of your favourite subjects?
  const date = new Date(2023, 3, 3);

  const title = [
    'Introduction 1',
    'Introduction 2',
    'Write your Carrier Objective',
    'Write 2 or 3 of your favourite subjects?',
    'Tell us in detail about a project or training that you have done alongwith the learning?',
    'What would you consider a significant achievement in your life and why? What did you learn?',
    'What would you consider to be your strengths? Tell us one or two instance where you have demonstrate your strengths?',
    'Tell us about your weakness. What are you doing to overcome your weakness?',
    'What is the most difficult moment that you have faced in your life so far? What qualities helped you overcome the moment?',
    'Apart from academics, what else are you interested in? List separately in terms of extra curricular activities, sports and any other interests?',
    'Give an example of an area, concept or thing that you are absolutely passionate about?',
    'What would people say when they are asked about you as a person?',
    'What kind of people do you enjoy working with?',
    'What are the things that frustrate you?',
    'In the past year, what have you been dissatisfied about in your performance?',
    'What have you learnt from your activities in college?',
    'What do you look for in a job. Priorities and write in order.',
    'Where do you see yourself 5/10/15 years from now?',
    'What motivates you?',
    'Tell me about some of your recent goals and what you did to achieve them.',
    'Who is your role model? Why?',
    'So finally, tell us something more about yourself or introduce yourself?',
  ];

  return (
    <main className="px-8 md:px-20 lg:px-40">
      <Navbar />

      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
      >
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img
            src="https://avatars.githubusercontent.com/u/49677833?s=400&u=e9708ba48c895148eb28292671dd326d032f6f13&v=4"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-teal-500">
          DEEPANK PUSHPAD
        </h1>
        <h3 className="text-xl md:text-2xl">Full Stack Developer</h3>
        <p className="text-md py-1 text-gray-800 md:text-xl">
          Enthusiastic and motivated self-learning about information technology.
          Focused on cloud computing, devsecops, and web development. Now I am
          looking for more experience in my field.
        </p>
        <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
          <a href="https://www.linkedin.com/in/deepank-pushpad-747664188/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/DeepankRx">
            {' '}
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/deepank_rx/">
            {' '}
            <AiFillInstagram />
          </a>
        </div>
      </section>

      <section id="portfolio" className="mt-10">
        <h1 className="text-xl font-medium">Portfolio</h1>
        <p className="mt-1 text-md">Here are some videos about me.</p>
      </section>

      <section id="license" className="mt-10 w-full">
        <div className="flex w-full flex-wrap gap-10 justify-center items-center">
          {videos.map((video, i) => {
            const newDate = new Date(
              date.getTime() + 2 * i * 24 * 60 * 60 * 1000
            ); // Adding 7 days for each video
            return (
              <Card
                key={i}
                title={title[i]}
                video={video}
                date={newDate.toLocaleDateString()}
              />
            );
          })}
        </div>
      </section>

      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">Contact Me</h1>
          <p>Wanna talk anything?</p>

          <ul className="md:flex justify-center gap-4">
            <li className="flex items-center gap-2">
              <AiFillMail />
              <p>deepankpushpad10@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillEnvironment />
              <p>Aligarh,UP</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillPhone />
              <p>798-359-1349</p>
            </li>
          </ul>

          <div className="flex text-xl text-white gap-4 mt-2 md:justify-center">
            <a href="https://www.linkedin.com/in/deepank-pushpad-747664188/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/DeepankRx">
              {' '}
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/deepank_rx/">
              {' '}
              <AiFillInstagram />
            </a>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <p className="text-center text-sm text-gray-300 sm:text-center">
            © 2022
            <a href="https://dendi.ninja"> DEEPANK PUSHPAD</a>. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
