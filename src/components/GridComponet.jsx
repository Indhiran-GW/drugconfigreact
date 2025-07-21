import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { DropDownButton, Button } from "@progress/kendo-react-buttons";
import { orderBy, filterBy } from "@progress/kendo-data-query";
import React from "react";
// import { Grid, GridColumn as Column, GridToolbar, GridCustomCellProps } from '@progress/kendo-react-grid';

const GridComponet = ({ columns, data }) => {

    
  const [sort, setSort] = React.useState([]);
  const [skip, setSkip] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [filter, setFilter] = React.useState();

  // Action items for dropdown button
  const actionItems = [
    { text: 'Edit', id: 'edit' },
    { text: 'View', id: 'view' },
    { text: 'Delete', id: 'delete' },
    { text: 'Copy', id: 'copy' }
  ];

  const handleItemClick = (e, dataItem) => {
    console.log('Action clicked:', e.item.text, 'for item:', dataItem);
    // Handle different actions here
    switch(e.item.id) {
      case 'edit':
        console.log('Edit action for:', dataItem);
        break;
      case 'view':
        console.log('View action for:', dataItem);
        break;
      case 'delete':
        console.log('Delete action for:', dataItem);
        break;
      case 'copy':
        console.log('Copy action for:', dataItem);
        break;
      default:
        break;
    }
  };

//   React.useEffect(() => {
//     console.log('GridComponent mounted');
//     return () => {
//       console.log('GridComponent destroyed');
//     };
//   }, []);

  const handlePageChange = (e) => {
    setSkip(e.page.skip);
    setPageSize(e.page.take);
  };

  const handleFilterChange = (e) => {
    setFilter(e.filter);
    setSkip(0); // Reset to first page when filtering
  };

  // Apply filtering first, then sorting
  let processedData = data;
  
  if (filter) {
    processedData = filterBy(processedData, filter);
  }
  
  if (sort.length > 0) {
    processedData = orderBy(processedData, sort);
  }
  
  // Get the current page data
  const currentPageData = processedData.slice(skip, skip + pageSize);

  // Action cell component with dropdown
  const MyCommandEditCell = props => (
    <td>
      <DropDownButton
        items={actionItems}
        onItemClick={(e) => handleItemClick(e, props.dataItem)}
        text="Actions"
        className="custom-action-button"
      />
    </td>
  );

  return (
    <Grid
      style={{ height: 'auto', width: '100%' }}
      data={currentPageData}
      total={processedData.length}
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
      filterable={true}
      filter={filter}
      onFilterChange={handleFilterChange}
    >

   <GridColumn filterable={false} width={50} columnType="checkbox" />

    {/* <Column  title="Actio1ns" cells={{
        data: MyCommandCell,
        edit: {
          text: MyCommandEditCell
        }
      }} width="200px" /> */}

      {columns.map((col) => (
        <GridColumn
          key={col.field}
          field={col.field}
          title={col.title}
          format={col.format}
          filter={col.filtertype}
        />
      ))}
      
      {/* Actions Column
      <GridColumn
        title="Actions"
        width="150px"
        filterable={false}
        sortable={false}
        cell={MyCommandEditCell}
      /> */}
    </Grid>
  );
};

export default GridComponet;
