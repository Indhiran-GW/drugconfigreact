import { Grid, GridColumn } from "@progress/kendo-react-grid";
import React from "react";

const GridComponet = ({ columns, data }) => {
  const [sort, setSort] = React.useState([]);
  const [skip, setSkip] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);

  React.useEffect(() => {
    console.log('GridComponent mounted');
    return () => {
      console.log('GridComponent destroyed');
    };
  }, []);

  const handlePageChange = (e) => {
    setSkip(e.page.skip);
    setPageSize(e.page.take);
  };

  return (
    <Grid
      style={{ height: '900px', width: '100%' }}
      data={data.slice(skip, skip + pageSize)}
      skip={skip}
      pageable={{
        buttonCount: 5,
        info: true,
        pageSizes: [5, 10, 20],
        previousNext: true,
      }}
      pageSize={pageSize}
      sortable
      sort={sort}
      onSortChange={(e) => setSort(e.sort)} 
      onPageChange={handlePageChange}
      filterable
    >
      {columns.map((col) => (
        <GridColumn
          key={col.field}
          field={col.field}
          title={col.title}
          format={col.format}
        />
      ))}
    </Grid>
  );
};

export default GridComponet;
