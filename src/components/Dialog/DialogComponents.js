import React from 'react';
import styled from 'styled-components';
import TextButton from '../TextButton';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';

export const DialogSmallHeader = styled(DialogHeader)`
  min-height: 0px;
  padding: 18px;
  text-align: center;
  display: flex;
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    width:100%;
  }
  span{
    width: auto;
  }

`;

export const DialogSmallBody = styled(DialogBody)`
  padding: 18px;
  text-align: center;
  p{
    padding: 18px 0;
    margin: 0;
    white-space: pre-line;
  }
`;
export const DialogButtonRow = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  button{
    margin: 0 auto;
  }
`;
export const DialogSmallButton = styled.div`


`;
export const DialogNormalHeader = styled(DialogHeader)`
  min-height: 0px;
  padding: 18px;
  text-align: left;
  display: flex;
  flex-direction:row;
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    width: calc(100% - 100px);
    text-align:left;
  }
  span{
    width: auto;
  }
  button{
    padding:0;
    position: initial;
    margin-left:auto;
    margin-right:0px;
    display: flex;
    justify-content: center;
  }
`;
export const DialogNormalBody = styled(DialogBody)`
  padding: 18px;
`;
export const DialogNormalButton = styled(TextButton)`
  background-color: red;
`;
export const DialogNormalContentRow = styled.div`
  margin-bottom:18px;
  :last-child{
    margin-bottom: 0;
  }
`;
export default {
  DialogSmallHeader,
  DialogSmallBody,
  DialogButtonRow,
  DialogNormalHeader,
  DialogNormalBody,
  DialogNormalButton,
  DialogNormalContentRow,
};
