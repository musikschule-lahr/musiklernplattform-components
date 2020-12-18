import styled from 'styled-components';

import Button from '../../components/Button';

export const AddButton = styled(Button)`
  background-color: ${(props) => props.theme.my.colors.green};
  color: white;
`;

export const CancelButton = styled(Button)`
  color: white;
`;
