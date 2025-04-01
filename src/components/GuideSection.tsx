// GuideSection.tsx
"use client";

import React from "react";
import GuideCard from "./GuideCard";
import styled from "styled-components";
import Chip from "./Chip";
import { useRouter } from "next/navigation";

interface GuideSectionProps {
  title: string;
  showAllButton?: boolean;
  guides: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const SectionContainer = styled.div`
  margin: 24px 0 16px 0;
  width: 100%;
  overflow: hidden; // 컨테이너 바깥으로 내용이 넘치지 않도록 설정
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 12px;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: ;
  white-space: nowrap;
  padding-bottom: 16px;
  padding-left: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
  gap: 12px;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function GuideSection({
  title,
  showAllButton = true,
  guides,
}: GuideSectionProps) {
  const router = useRouter();

  const handleViewAll = () => {
    router.push("/guide");
  };
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {showAllButton && <Chip text="전체보기" onClick={handleViewAll} />}
      </SectionHeader>
      <CardsContainer>
        {guides.map((guide) => (
          <GuideCard
            key={guide.id}
            title={guide.title}
            description={guide.description}
            imageUrl={guide.imageUrl}
          />
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}
