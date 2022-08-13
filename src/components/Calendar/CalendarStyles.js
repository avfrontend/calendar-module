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
  transition: all 0.3s ease-in-out;
  &:nth-child(odd) {
    background: rgb(243, 242, 241);
  }

  &:hover {
    background: rgb(237, 235, 233);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    a {
      color: rgb(213, 17, 31);
    }
  }
`;

export const EventLink = styled(Link)`
  font-size: 14px;
  color: rgb(3, 120, 124);
  text-decoration: none;
  display: block;
`;

export const DialogHeader = styled.div`
  display: flex;
  height: 280px; ;
`;

export const DialogImageWrapper = styled.div`
  width: 70%;
`;

export const DialogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DialogGrayBox = styled.div`
  background: rgb(243, 242, 241);
  width: 30%;
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-weight: bold;
  }
  h4 {
    font-weight: 800;
  }
  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const DialogBody = styled.div`
  display: flex;
  padding-bottom: 100px;
`;

export const DialogDescWrapper = styled.div`
  width: 70%;
  padding: 20px;
  h1 {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 10px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  a {
    color: rgb(3, 120, 124);
    text-decoration: none;
  }
  table {
    color: #333;
    background: white;
    border: 1px solid grey;
    font-size: 12pt;
    border-collapse: collapse;
    margin-bottom: 10px;
  }
  table thead th,
  table tfoot th {
    color: #777;
    background: rgba(0, 0, 0, 0.1);
  }
  table th,
  table td {
    padding: 0.5em;
    border: 1px solid lightgrey;
  }
  ol,
  ul {
    padding-left: 30px;
    margin-bottom: 10px;
  }
`;

export const DialogDescPar = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const DialogEventDetailsWrapper = styled.div`
  width: 30%;
  padding: 10px;
  div {
    margin: 10px 0;
  }
  h4 {
    font-size: 14px;
    font-weight: 600;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
  }
`;

export const DialogAddCalendarLink = styled(Link)`
  color: rgb(3, 120, 124);
  text-decoration: none;
`;

export const DialogFooter = styled.div`
  padding: 20px;
`;
export const DialogFooterSeparator = styled.div`
  width: 100%;
  height: 2px;
  display: block;
  background: #b7b7b7;
  margin: 10px auto 10px auto;
`;
