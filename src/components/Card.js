import styled from 'styled-components';

const Card = styled.div`
   border-radius: 15px;
   box-shadow: 0px 10px 25px 0px rgba(32, 33, 44, 0.1);
   overflow: hidden;
   margin: 15px 0;
   background-color: #fff;
`;

const CardContent = styled.div`
   margin: 35px;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export { Card, CardContent }
