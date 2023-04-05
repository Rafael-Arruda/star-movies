import React, {useContext} from 'react';

import {PaginationContext} from '../../contexts/pagination';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {

  const {setPage} = useContext(PaginationContext);

  const handlePagination = (event, value) => {
    setPage(value);
  }

  return (
    <Stack spacing={2} marginTop={1} marginBottom={3}>
      <Pagination count={5} color="primary" onChange={handlePagination}/>
    </Stack>
  );
}