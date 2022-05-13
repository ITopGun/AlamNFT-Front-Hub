import { useState } from 'react';
// material
import {
  Stack,
  Box,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Typography
} from '@material-ui/core';
// components
import Scrollbar from '../../components/Scrollbar';
//
import SortingSelectingHead from './SortingSelectingHead';

// ----------------------------------------------------------------------

function createData(img, collection, volume, day, week, price, owners, items) {
  return { img, collection, volume, day, week, price, owners, items };
}

const SORTING_SELECTING_TABLE = [
  createData('/static/nft-images/moonbirds.png', 'Moonbirds', 66527.64, -61.3, 11, 18.5, '6.6K', '10.0K'),
  createData(
    '/static/nft-images/yacht-club.png',
    'Mutant Ape Yacht Club',
    6111.99,
    33.96,
    -11.97,
    26,
    '12.3K',
    '18.6K'
  ),
  createData(
    '/static/nft-images/murakami-flower.png',
    'Murakami.Flowers Seed',
    5591.32,
    6294.37,
    275.88,
    4.9,
    '3.6K',
    '1'
  ),
  createData('/static/nft-images/azuki.jpg', 'Azuki', 5648.33, -23.1, 30.34, 26.5, '5.5K', '10.0K'),
  createData('/static/nft-images/bored-ape.png', 'Bored Ape Yacht Club', 5478.39, -61.78, -6.89, 108, '6.4K', '10.0K'),
  createData('/static/nft-images/cryptoPunks.png', 'CryptoPunks', 5471.19, -18.38, 136.72, 18.5, '3.4K', '10.0K'),
  createData(
    '/static/nft-images/clone-takashi.png',
    'CLONE X - X TAKASHI MURAKAMI',
    3979.32,
    -43.3,
    25.35,
    18,
    '8.9K',
    '19.2K'
  )
];

const TABLE_HEAD = [
  {
    id: 'collection',
    numeric: false,
    disablePadding: true,
    label: 'Collection'
  },
  {
    id: 'volume',
    numeric: true,
    disablePadding: false,
    label: 'Volume'
  },
  {
    id: 'day',
    numeric: true,
    disablePadding: false,
    label: '24h %'
  },
  {
    id: 'week',
    numeric: true,
    disablePadding: false,
    label: '7d %'
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Floor Price'
  },
  {
    id: 'owners',
    numeric: true,
    disablePadding: false,
    label: 'Owners'
  },
  {
    id: 'items',
    numeric: true,
    disablePadding: false,
    label: 'Items'
  }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const imgStyle = {
  width: 50,
  height: 50,
  borderRadius: '50%'
};

export default function RankingTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('volume');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = SORTING_SELECTING_TABLE.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty SORTING_SELECTING_TABLE.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - SORTING_SELECTING_TABLE.length) : 0;

  return (
    <>
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table size="medium">
            <SortingSelectingHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              rowCount={SORTING_SELECTING_TABLE.length}
              onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
              {stableSort(SORTING_SELECTING_TABLE, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={index}>
                      <TableCell component="th" id={labelId} scope="row">
                        <Stack direction="row" spacing={2} alignItems="center">
                          <img src={row.img} alt={row.collection} style={imgStyle} />
                          <Typography variant="p">{row.collection}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="right">
                        <Stack direction="row" spacing={2} alignItems="center">
                          <img
                            src="/static/nft-images/ethereum.svg"
                            alt="ethereum"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <Typography variant="p">{row.volume}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="right">{row.day} %</TableCell>
                      <TableCell align="right">{row.week} %</TableCell>
                      <TableCell align="right">
                        <Stack direction="row" spacing={2} alignItems="center">
                          <img
                            src="/static/nft-images/ethereum.svg"
                            alt="ethereum"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <Typography variant="p">{row.price}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="right">{row.owners}</TableCell>
                      <TableCell align="right">{row.items}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 80 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={SORTING_SELECTING_TABLE.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
}
