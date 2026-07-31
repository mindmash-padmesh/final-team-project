import { DataGrid, useGridApiContext, useGridSelector, gridPageCountSelector, gridPaginationModelSelector } from '@mui/x-data-grid';
import {Pagination} from '@mui/material';

function CustomPagination() {
  const apiRef = useGridApiContext();

  const pageCount = useGridSelector(
    apiRef,
    gridPageCountSelector
  );
  const paginationModel = useGridSelector(
    apiRef,
    gridPaginationModelSelector
  );
   return (
    <Pagination
      count={pageCount}
      page={paginationModel.page + 1}
      showFirstButton showLastButton
      onChange={(event, newPage) => {
        apiRef.current.setPage(newPage - 1);
      }}
      siblingCount={1}
      boundaryCount={1}
      shape="rounded"
      color="primary"
    />
  );
}

export default CustomPagination;