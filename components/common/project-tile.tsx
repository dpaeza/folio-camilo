// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";
import Modal from "./modal";

const ProjectTile = ({
  project,
  animationEnabled,
  onOpenModal,
  onCloseModal,
}: {
  project: IProject;
  animationEnabled: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1, stop2],
  } = project;

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const isLink = Boolean(project.url);

  const Wrapper = isLink ? "a" : "div";

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, [projectCard]);

  const handleClick = (e: React.MouseEvent) => {
    if (!project.url) {
      e.preventDefault();
      setIsCarouselOpen(true);
      onOpenModal();
    }
  };

  const handleCloseModal = () => {
    setIsCarouselOpen(false);
    onCloseModal();  // avisar que cerramos modal
  };

  const renderTechIcons = (techStack: string[]): React.ReactNode => (
    <div
      className={`
        ${styles.techIcons} w-1/2 absolute left-1 top-[42%] -translate-y-1/2 hidden
        sm:flex flex-wrap gap-x-6 gap-y-4 justify-center items-center
      `}
    >
      {techStack.map((tech) => (
        <div
          className="w-1/4 flex justify-center items-center"
          key={tech}
        >
          <Image
            src={`/projects/tech/${tech}.svg`}
            alt={tech}
            height={45}
            width={45}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );

  const renderDescription = (description: string): React.ReactNode => (
    <h2
      className="text-lg z-10 tracking-wide font-medium"
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {description}
    </h2>
  );

  const renderProjectName = (name: string): React.ReactNode => (
    <h1
      className="text-2xl sm:text-3xl z-10 pl-2"
      style={{ transform: "translateZ(3rem)" }}
    >
      {name}
    </h1>
  );

  const renderTopBottomGradient = (gradient: string): React.ReactNode => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: `linear-gradient(180deg, ${gradient} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: `linear-gradient(0deg, ${gradient} 10%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  const renderProjectImage = (
    image: string,
    blurImage: string,
    name: string
  ): React.ReactNode => (
    <Image
      placeholder="blur"
      blurDataURL={blurImage}
      src={image}
      alt={name}
      layout="fill"
      className={`${styles.ProjectImg} z-0`}
    />
  );

  return (

    <>
      <Wrapper 
        {...(isLink 
          ? { 
              href: project.url, 
              target: "_blank", 
              rel: "noreferrer" 
            } 
          : {})}
        onClick={handleClick}
        className="link overflow-hidden rounded-3xl snap-start"
          style={{
            maxWidth: animationEnabled
              ? "calc(100vw - 2rem)"
              : "calc(100vw - 4rem)",
            flex: "1 0 auto",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
      >

        <div
          ref={projectCard}
          className={`
            ${styles.ProjectTile}
            rounded-3xl relative p-6 flex-col flex justify-between max-w-full
          `}
          style={{
            background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
          }}
        >
          <Image
            src="/project-bg.svg"
            alt="Project"
            layout="fill"
            className="absolute w-full h-full top-0 left-0 opacity-20"
          />
          {renderProjectImage(image, blurImage, name)}
          {renderTopBottomGradient(stop1)}
          {renderProjectName(name)}
          {renderTechIcons(tech)}
          {renderDescription(description)}
        </div>
      </Wrapper>

      {/* Modal con carrusel si no hay URL */}
      {!isLink && isCarouselOpen && (
        <Modal
          onClose={handleCloseModal}
          images={project.images ?? [image]}
        />
      )}
    </>
  );
};

export default ProjectTile;
