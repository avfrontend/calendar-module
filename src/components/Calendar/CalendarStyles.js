import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Calendar = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 380px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg {
    font-size: 25px;
    margin-right: 5px;
  }
`;

export const CalendarTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: rgb(51, 51, 51);
`;

export const Events = styled.div``;

export const EventsItem = styled.div`
  padding: 10px 5px;
  &:nth-child(odd) {
    background: rgb(243, 242, 241);
  }

  &:hover {
    background-color: rgb(237, 235, 233);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    a {
      color: rgb(213, 17, 31);
    }
  }
`;

export const EventLink = styled(Link)`
  color: blue;
  font-size: 14px;
  color: rgb(3, 120, 124);
  text-decoration: none;
  display: block;
`;

export const DialogRow = styled.div`
  display: flex;
`;

export const DialogImageWrapper = styled.div`
  width: 70%;
`;

export const DialogImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const DialogGrayBox = styled.div`
  background: rgb(243, 242, 241);
  width: 30%;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    font-weight: 800;
  }
`;
