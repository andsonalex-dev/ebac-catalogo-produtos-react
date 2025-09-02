import styled from "styled-components";

const BannerWrapper = styled.div`
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

export default function Banner({ title }) {
  return (
    <BannerWrapper>
      <BannerTitle>{title}</BannerTitle>
    </BannerWrapper>
  );
}
