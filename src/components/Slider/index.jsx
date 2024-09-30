import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import Container from './styles';

import ProjectModule from '../ProjectModule';
import { projects } from '../../mocks/projects';

export default function Slider() {
  return (
    <Container id="my-projects">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 2500,
          perPage: 3,
          breakpoints: {
            1440: {
              perPage: 2,
            },
            1024: {
              perPage: 1,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <SplideSlide key={index}>
            <ProjectModule
              className="carrossel-item"
              projectName={project.projectName}
              subtitle={project.subtitle}
              skill1={project.skills[0]}
              skill2={project.skills[1]}
              skill3={project.skills[2]}
              imageProject={project.imageProject}
              access={project.access}
              linkProject={project.linkProject}
              linkSite={project.linkSite}
            />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}
