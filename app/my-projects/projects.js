"use client";
import React from 'react';
import ProjectItem from './ProjectItem';
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { HeadingDivider } from "components";

const projectsData = {
  "projects": [
    {
      "image": "images/projects/amazon.png",
      "title": "Amazon Landing Page",
      "bodyText": "- Amazon Clone built with Next.js\n - Optimized user interface for smooth navigation on laptop devices\n - Custom design optimized for laptop screen sizes",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/amazon-clone" },
        { "text": "Production Link", "href": "https://amazon-landing-page-taupe.vercel.app/" }
      ],
      "tags": ["Amazon Clone", "NextJs", "TypeScript"]
    },
    {
      "image": "images/projects/spotify.png",
      "title": "Spotify Clone Frontend",
      "bodyText": "- Spotify Clone built with Next.js\n - Optimized user interface for smooth navigation on laptop devices\n - Custom design optimized for laptop screen sizes",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/spotify-clone" },
        { "text": "Production Link", "href": "https://spotify-clone-frontend-rho.vercel.app/home" }
      ],
      "tags": ["Spotify Clone", "NextJs", "TypeScript"]
    },
    {
      "image": "images/projects/emart.png",
      "title": "EMART",
      "bodyText": "- eMart E-commerce App built with React\n - Browse and add products to your cart or wishlist\n - User-friendly interface for easy navigation and shopping\n - Fetch product data from FakeStoreAPI\n - Fully responsive design for all devices",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/E-MART" },
        { "text": "Production Link", "href": "https://e-mart-qy3p.vercel.app/" }
      ],
      "tags": ["Emart Website", "NextJs", "TypeScript", "Redux", "FakeStoreAPI"]
    },
    {
      "image": "images/projects/calculator.png",
      "title": "Calculator App",
      "bodyText": "- Basic Calculator App built with React\n - Perform basic arithmetic operations (Addition, Subtraction, Multiplication, Division)\n - Fully responsive design for seamless use on all devices",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/calculator" },
        { "text": "Production Link", "href": "https://calculator-ydvf.vercel.app/" }
      ],
      "tags": ["Calculator", "NextJs", "TypeScript"]
    },
    {
      "image": "images/projects/weather.png",
      "title": "Weather App",
      "bodyText": "- Weather App built with React\n - Fetch weather data from a Weather API and display forecasts for your location",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/weather-app" },
        { "text": "Production Link", "href": "https://weather-app-nine-dusky-50.vercel.app/" }
      ],
      "tags": ["Weather-App", "NextJs", "TypeScript", "OpenWeatherMap API"]
    },
    {
      "image": "images/projects/expense.png",
      "title": "Expense Tracker App",
      "bodyText": "- Expense Tracker App built with React\n - Add and remove expenses with ease\n - Visualize your expenses using a dynamic pie chart\n - Fully responsive design for use on all devices",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/expense-tracker" },
        { "text": "Production Link", "href": "https://expense-tracker-ywb7.vercel.app/home" }
      ],
      "tags": ["Expense-Tracker-App", "NextJs", "TypeScript", "Redux"]
    },
    {
      "image": "images/projects/movie.png",
      "title": "Movie Advisor App",
      "bodyText": "- Movie Advisor App built with React\n - Fetch movie data using an external API\n - Browse and search for movies easily\n - Add movies to your personal wishlist",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/movie-advisor" },
        { "text": "Production Link", "href": "https://movie-advisor-lugp.vercel.app/" }
      ],
      "tags": ["Movie-Advisor-App", "NextJs", "TypeScript", "Redux"]
    },
    {
      "image": "images/projects/todo.png",
      "title": "ToDo-List App",
      "bodyText": "- Simple To-Do List App built with React\n - Add and delete tasks easily\n - Fully responsive design for all screen sizes",
      "links": [
        { "text": "GitHub", "href": "https://github.com/Vasanth-0212/todo-list" },
        { "text": "Production Link", "href": "https://todo-list-6jzj.vercel.app/" }
      ],
      "tags": ["ToDo-List", "NextJs", "TypeScript"]
    },
    {
      "image": "images/projects/hostel.png",
      "title": "Hostel Website",
      "bodyText": "- Hostel Website built with React\n - Easy booking system for rooms and accommodations\n - UPI integration for seamless payments\n - Fully responsive design for a smooth experience on all devices",
      "links": [
        { "text": "GitHub", "href": "https://github.com/vasanth0212/HostelWebsite" },
        { "text": "Production Link", "href": "https://vasanth0212.github.io/HostelWebsite/" }
      ],
      "tags": ["Hostel-Website", "HTML", "CSS", "JavaScript"]
    }
  ]
};

const ProjectsList = () => {
  return (
    <LazyMotion features={domAnimation} id ="project">
      <HeadingDivider title="Latest Projects" className='mb-6' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </LazyMotion>
  );
};

export default ProjectsList;
