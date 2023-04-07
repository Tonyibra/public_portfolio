import React from 'react';
import { Container, HeadingTitle, TitleBox } from './WorkSection.styles';
import Text from '@/components/atoms/text/Text';
import WorkBox from '@/components/molecules/numberedBox/workBox/WorkBox';
import WorkPc from '@/assets/images/work_pc.jpg';
import WorkLebEssentials from '@/assets/images/work_le.jpg';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
const WorkSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Container id="Works">
      <HeadingTitle>
        <Text type="h5" color="#06FFF0" fontSize="18">
          My Works
        </Text>
      </HeadingTitle>
      <TitleBox>
        <Text
          type="h1"
          fontWeight="500"
          fontSize={isTabletOrMobile ? '40' : '62'}
        >
          How i can produce work that you are interested in
        </Text>
      </TitleBox>
      <WorkBox
        image={WorkPc.src}
        link="www.propertycard.com"
        type="Web Development"
        projectName="PropertyCard"
      />
      <WorkBox
        image={WorkLebEssentials.src}
        link="play.google.com/store/apps/details?id=com.tonyal123.LebEssentials"
        type="React Native"
        projectName="LebEssentials"
      />
      <Link href="/works">
        <Text textAlign="center" isLink type="h6" color="#06FFF0">
          More
        </Text>
      </Link>
    </Container>
  );
};

export default WorkSection;
