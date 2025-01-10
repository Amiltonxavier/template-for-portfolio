import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 3rem 0;
  position: relative;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
`;

const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const AnimatedWrapper = styled(motion.div)`
  display: flex;
  animation: ${marqueeAnimation} 20s linear infinite;
`;

const TechList = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #27272a;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  min-width: 200px;
`;

const IconWrapper = styled.div<{ bgColor: string; color: string }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
`;

const TechName = styled.span`
  color: white;
  font-weight: 500;
`;

export function TechnologyCarousel({ duplicatedTech }: { duplicatedTech: Array<{ name: string; icon: string; color: string }> }) {
  return (
    <Wrapper>
      <Title>Worked with</Title>
      <AnimatedWrapper>
        <TechList>
          {duplicatedTech.map((tech, index) => (
            <TechItem key={`${tech.name}-${index}`}>
              <IconWrapper
                bgColor={tech.color}
                color={tech.color === '#F7DF1E' ? 'black' : 'white'}
              >
                {tech.icon}
              </IconWrapper>
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
        </TechList>
      </AnimatedWrapper>
    </Wrapper>
  );
};
