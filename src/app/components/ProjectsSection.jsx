"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BoardMe - Content Management System",
    description:
      "Co-space booking system with contact management and admin dashboard.",
    image: "/images/projects/boardme.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Gayasri72/BoardMe-Javascript/tree/content-managemnt-function-kavindu",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "GameSpot - Gaming Platform",
    description:
      "Gaming platform with authentication, game listings, and user libraries.",
    image: "/images/projects/gamespot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IT22897008-KavinduTheekshana/GameSpot",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "EaseTask - Task Management Application",
    description:
      "Android app for task management with categorization and reminders.",
    image: "/images/projects/easetask.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/IT22897008-KavinduTheekshana/EaseTask",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Laptop Price Predictor - Machine Learning Web App",
    description:
      "ML-powered web app to predict laptop prices based on specifications.",
    image: "/images/projects/laptoppricepredictor.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/IT22897008-KavinduTheekshana/Laptop-Price-Predictor",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Eat 'N Split - Expense Sharing Application",
    description:
      "Bill-splitting web app with an intuitive interface for expense sharing.",
    image: "/images/projects/eat&split.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IT22897008-KavinduTheekshana/eat-n-split",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
