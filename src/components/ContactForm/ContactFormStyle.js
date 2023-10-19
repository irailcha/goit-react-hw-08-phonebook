import styled from '@emotion/styled';
import { Field } from 'formik';



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  margin: 6px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  
`;

