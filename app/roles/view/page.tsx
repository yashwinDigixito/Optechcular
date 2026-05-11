"use client"
import React, { useState, useMemo } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Tabs, Tab, TextField, MenuItem, Select, 
  Avatar, IconButton, Chip, Checkbox, Switch, FormControlLabel, Button,
  InputAdornment, Stack, TablePagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

// Mock Data
const MOCK_USERS = [
  { name: 'Angelique Morse', email: 'benny89@yahoo.com', phone: '+46 8 123 456', company: 'Wuckert Inc', role: 'Content Creator', status: 'Banned' },
  { name: 'Ariana Lang', email: 'avery43@hotmail.com', phone: '+54 11 1234-5678', company: 'Feest Group', role: 'IT Administrator', status: 'Pending' },
  { name: 'Aspen Schmitt', email: 'mireya13@hotmail.com', phone: '+34 91 123 4567', company: 'Kihn Group', role: 'Financial Planner', status: 'Banned' },
  { name: 'Brycen Jimenez', email: 'tyrel.greenholt@gmail.com', phone: '+52 55 1234 5678', company: 'Rempel Group', role: 'HR Recruiter', status: 'Active' },
  { name: 'Jayvion Simon', email: 'nannie.abernathy70@yahoo.com', phone: '+1 202-555-0143', company: 'Lueilwitz and Sons', role: 'CEO', status: 'Active' },
  { name: 'Lucian Obrien', email: 'lucian.obrien@hotmail.com', phone: '+44 20 7946 0958', company: 'Goyette Inc', role: 'Project Manager', status: 'Pending' },
  { name: 'Deja Brady', email: 'deja.brady@gmail.com', phone: '+1 212-555-0198', company: 'Terry Ltd', role: 'Full Stack Developer', status: 'Active' },
];

const CountBadge = ({ count, color, active }: { count: number, color: string, active: boolean }) => (
  <Box component="span" sx={{
    ml: 1, px: 0.8, py: 0.2, borderRadius: '6px', fontSize: '12px', fontWeight: 700,
    backgroundColor: active ? color : (color + '20'), // Transparent version of color if inactive
    color: active ? '#fff' : color,
  }}>
    {count}
  </Box>
);

const UserList = () => {
  const [currentTab, setCurrentTab] = useState('All');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  // Filter Logic
  const filteredUsers = useMemo(() => {
    if (currentTab === 'All') return MOCK_USERS;
    return MOCK_USERS.filter(user => user.status === currentTab);
  }, [currentTab]);

  const handleChangePage = (event: unknown,新Page: number) => setPage(新Page);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return { bg: '#E6FFFA', text: '#00A76F' };
      case 'Pending': return { bg: '#FFF7ED', text: '#B76E00' };
      case 'Banned': return { bg: '#FFE9D5', text: '#B71D18' };
      default: return { bg: '#F4F6F8', text: '#637381' };
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>List</Typography>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: '#212B36', borderRadius: '8px', textTransform: 'none', px: 2 }}>
          Add user
        </Button>
      </Box>
      <Typography variant="body2" sx={{ color: '#637381', mb: 4 }}>Dashboard  •  User  •  List</Typography>

      <Paper sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)' }}>
        
        <Tabs 
          value={currentTab} 
          onChange={(_, v) => { setCurrentTab(v); setPage(0); }}
          sx={{ px: 2, borderBottom: '1px solid #F4F6F8', '& .MuiTabs-indicator': { bgcolor: '#212B36', height: 3 } }}
        >
          <Tab value="All" label={<Box sx={{ display: 'flex', alignItems: 'center' }}>All <CountBadge count={MOCK_USERS.length} color="#212B36" active={currentTab === 'All'} /></Box>} sx={{ textTransform: 'none', fontWeight: 600 }} />
          <Tab value="Active" label={<Box sx={{ display: 'flex', alignItems: 'center' }}>Active <CountBadge count={MOCK_USERS.filter(u => u.status === 'Active').length} color="#00A76F" active={currentTab === 'Active'} /></Box>} sx={{ textTransform: 'none', fontWeight: 600 }} />
          <Tab value="Pending" label={<Box sx={{ display: 'flex', alignItems: 'center' }}>Pending <CountBadge count={MOCK_USERS.filter(u => u.status === 'Pending').length} color="#B76E00" active={currentTab === 'Pending'} /></Box>} sx={{ textTransform: 'none', fontWeight: 600 }} />
          <Tab value="Banned" label={<Box sx={{ display: 'flex', alignItems: 'center' }}>Banned <CountBadge count={MOCK_USERS.filter(u => u.status === 'Banned').length} color="#B71D18" active={currentTab === 'Banned'} /></Box>} sx={{ textTransform: 'none', fontWeight: 600 }} />
        </Tabs>

        <Stack direction="row" spacing={2} sx={{ p: 2.5 }}>
          <Select defaultValue="all" size="small" sx={{ width: 200, borderRadius: '8px' }}>
            <MenuItem value="all">All Roles</MenuItem>
            <MenuItem value="admin">Administrator</MenuItem>
            <MenuItem value="creator">Content Creator</MenuItem>
          </Select>
          <TextField 
            fullWidth size="small" placeholder="Search..." variant="outlined"
            InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Stack>

        <TableContainer>
          <Table size={dense ? 'small' : 'medium'}>
            <TableHead sx={{ bgcolor: '#F4F6F8' }}>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox /></TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Phone number</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Company</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Role</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
                const style = getStatusStyle(user.status);
                return (
                  <TableRow key={user.email} hover>
                    <TableCell padding="checkbox"><Checkbox /></TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 40, height: 40 }} />
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{user.name}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{user.email}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.phone}</TableCell>
                    <TableCell>{user.company}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Chip label={user.status} sx={{ bgcolor: style.bg, color: style.text, fontWeight: 700, borderRadius: '6px', height: 24 }} />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                      <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ position: 'relative' }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ borderTop: '1px solid #F4F6F8' }}
          />
          <Box sx={{ position: 'absolute', left: 24, top: 12 }}>
             <FormControlLabel
                control={<Switch checked={dense} onChange={(e) => setDense(e.target.checked)} color="default" />}
                label="Dense"
              />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserList;