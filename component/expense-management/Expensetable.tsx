"use client";

import { Expense } from "@/assets/types";
import { useState } from "react";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import {
  IconButton,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props{
expenses:Expense[];
setExpenseData:React.Dispatch<React.SetStateAction<Expense[]>>;
}

export default function ExpenseTable({
expenses,
setExpenseData,
}:Props){

const router=useRouter();

const [anchorEl,setAnchorEl]=useState<null|HTMLElement>(null);

const [selectedExpenseId,setSelectedExpenseId]=useState<string|null>(null);

const handleMenuOpen=(
event:React.MouseEvent<HTMLElement>,
id:string
)=>{
setAnchorEl(event.currentTarget);
setSelectedExpenseId(id);
};

const handleMenuClose=()=>{
setAnchorEl(null);
setSelectedExpenseId(null);
};

const handleStatusChange=(
id:string,
value:"Approved"|"Pending"
)=>{

setExpenseData((prev)=>
prev.map((expense)=>
expense.id===id
?{
...expense,
status:value,
}
:expense
)
);
};

return(
<TableContainer
sx={{
borderRadius:"20px",
overflow:"hidden",
background:"#FFFFFF",
}}
>

<Table
sx={{
"& .MuiTableCell-root":{
py:2,
borderColor:"#F1F5F9",
},
}}
>

<TableHead>

<TableRow
sx={{
background:"#F8FAFC",
borderBottom:"1px solid #E2E8F0",
}}
>

<TableCell>
<Typography sx={{fontWeight:700}}>
Expense Name
</Typography>
</TableCell>

<TableCell>
<Typography sx={{fontWeight:700}}>
Ledger
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Amount
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Date
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Status
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Actions
</Typography>
</TableCell>

</TableRow>

</TableHead>

<TableBody>

{expenses.map((expense)=>(

<TableRow
key={expense.id}
hover
sx={{
"&:hover":{
background:"#F8FAFC",
},
}}
>

<TableCell>
<Typography
sx={{
color:"#2563EB",
fontWeight:700,
fontSize:"14px",
}}
>
{expense.expenseName}
</Typography>
</TableCell>

<TableCell>
<Typography
sx={{
color:"#475569",
fontSize:"14px",
}}
>
{expense.ledger}
</Typography>
</TableCell>

<TableCell align="center">
<Typography
sx={{
fontWeight:700,
fontSize:"14px",
}}
>
₹{expense.amount.toLocaleString()}
</Typography>
</TableCell>

<TableCell align="center">
<Typography
sx={{
color:"#64748B",
fontWeight:500,
fontSize:"14px",
}}
>
{new Date(expense.expenseDate).toLocaleDateString(
"en-GB",
{
day:"2-digit",
month:"2-digit",
year:"numeric",
}
)}
</Typography>
</TableCell>

<TableCell align="center">

<Select
size="small"
value={expense.status}
onChange={(e)=>
handleStatusChange(
expense.id,
e.target.value as
|"Approved"
|"Pending"
)
}
sx={{
minWidth:"130px",
borderRadius:"10px",
fontWeight:600,
background:
expense.status==="Approved"
?"#DCFCE7"
:"#FEF3C7",

color:
expense.status==="Approved"
?"#15803D"
:"#B45309",

".MuiOutlinedInput-notchedOutline":{
border:"none",
},

".MuiSelect-icon":{
color:
expense.status==="Approved"
?"#15803D"
:"#B45309",
},
}}
>

<MenuItem value="Approved">
Approved
</MenuItem>

<MenuItem value="Pending">
Pending
</MenuItem>

</Select>

</TableCell>

<TableCell align="center">

<IconButton
onClick={(e)=>
handleMenuOpen(
e,
expense.id
)
}
sx={{
background:"#F8FAFC",
width:38,
height:38,

"&:hover":{
background:"#E2E8F0",
},
}}
>

<MoreVertIcon
sx={{
color:"#64748B",
}}
/>

</IconButton>

<Menu
anchorEl={anchorEl}
open={
Boolean(anchorEl)&&
selectedExpenseId===expense.id
}
onClose={handleMenuClose}
slotProps={{
paper:{
sx:{
borderRadius:"14px",
minWidth:"160px",
boxShadow:"0px 10px 30px rgba(15,23,42,0.08)",
},
},
}}
>

<MenuItem
onClick={()=>{
router.push(
`/expenses/view/${expense.id}`
);
handleMenuClose();
}}
>

<RemoveRedEyeOutlinedIcon
sx={{
mr:1,
color:"#2563EB",
}}
/>

View

</MenuItem>

<MenuItem
onClick={()=>{
router.push(
`/expenses/edit/${expense.id}`
);
handleMenuClose();
}}
>

<EditIcon
sx={{
mr:1,
color:"#0F172A",
}}
/>

Edit

</MenuItem>

<MenuItem>

<PrintOutlinedIcon
sx={{
mr:1,
color:"#059669",
}}
/>

Print

</MenuItem>

<MenuItem>

<DownloadOutlinedIcon
sx={{
mr:1,
color:"#DC2626",
}}
/>
Download
</MenuItem>
</Menu>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
}