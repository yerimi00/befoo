"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import testImg from "../../../public/images/testImg.png";
import { useRouter } from "next/navigation";

const testImgSrc = testImg.src;

// 페이지 컨테이너를 수정해 여백 문제 해결
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 70px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #4cd964;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 16px 8px 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${(props) => (props.isActive ? "#333" : "#f2f2f2")};
  color: ${(props) => (props.isActive ? "#fff" : "#888")};
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

// 가이드 컨테이너를 수정해 여백 문제 해결
const GuidesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
  width: 100%;
`;

const GuideCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 240px;
`;

const GuideImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GuideInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const GuideTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 4px 0;
`;

const GuideDescription = styled.p`
  font-size: 16px;
  margin: 0;
  opacity: 0.8;
`;

const BookmarkButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function Guide() {
  const router = useRouter();

  const guides = [
    {
      id: "1",
      title: "가이드 이름",
      description: "가이드 소개가 들어갈 간단한 한 줄 설명...",
      imageUrl: testImgSrc,
    },
    {
      id: "2",
      title: "가이드 이름",
      description: "가이드 소개가 들어갈 간단한 한 줄 설명...",
      imageUrl: testImgSrc,
    },
    {
      id: "3",
      title: "가이드 이름",
      description: "가이드 소개가 들어갈 간단한 한 줄 설명...",
      imageUrl: testImgSrc,
    },
  ];

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => router.back()}>← 돌아보기</BackButton>
        <PageTitle>공식 가이드 모아보기</PageTitle>
        <div style={{ width: "70px" }}></div>
      </Header>

      <FilterContainer>
        <FilterChip isActive={true}>지역 선택</FilterChip>
        <FilterChip isActive={false}>건강 필터</FilterChip>
      </FilterContainer>

      <GuidesContainer>
        {guides.map((guide) => (
          <GuideCard key={guide.id}>
            <GuideImage>
              <Image
                src={guide.imageUrl}
                alt="Guide Image"
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </GuideImage>
            <BookmarkButton>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </BookmarkButton>
            <GuideInfo>
              <GuideTitle>{guide.title}</GuideTitle>
              <GuideDescription>{guide.description}</GuideDescription>
            </GuideInfo>
          </GuideCard>
        ))}
      </GuidesContainer>
    </PageContainer>
  );
}
