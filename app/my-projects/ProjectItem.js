"use client";
import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-5">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.bodyText}</p>

      <div className="flex space-x-4 mb-4">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {link.text}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium text-white bg-gray-800 py-1 px-3 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
