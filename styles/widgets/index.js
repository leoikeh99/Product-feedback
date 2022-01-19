import styled from "styled-components";

export const Tag = styled.span`
  display: inline-block;
  color: #4661e6;
  background: #f2f4ff;
  padding: 6px 16px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #cfd7ff;
  }
`;

export const SpaceOut = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap}px;
`;

export const UpvoteTag = styled.span`
  display: block;
  color: #3a4374;
  font-size: 13px;
  font-weight: 700;
  height: 53px;
  width: 40px;
  background: #f2f4fe;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    background: #cfd7ff;
  }
`;
