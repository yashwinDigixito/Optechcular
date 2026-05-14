"use client";

import { useState } from "react";

import { LedgerGroup } from "@/assets/types";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
ledgerGroups:LedgerGroup[];
setLedgerGroupData:React.Dispatch<React.SetStateAction<LedgerGroup[]>>;
}

export default function LedgerGroupTable({
ledgerGroups,
setLedgerGroupData,
}:Props){

const router=useRouter();

const [anchorEl,setAnchorEl]=useState<null|HTMLElement>(null);

const [selectedLedgerId,setSelectedLedgerId]=useState<string|null>(null);

const handleMenuOpen=(
event:React.MouseEvent<HTMLElement>,
id:string
)=>{
setAnchorEl(event.currentTarget);
setSelectedLedgerId(id);
};

const handleMenuClose=()=>{
setAnchorEl(null);
setSelectedLedgerId(null);
};

const handleStatusChange=(
id:string,
value:"Active"|"Inactive"
)=>{

setLedgerGroupData((prev)=>
prev.map((ledger)=>
ledger.id===id
?{
...ledger,
status:value,
}
:ledger
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
Group Name
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Created At
</Typography>
</TableCell>

<TableCell>
<Typography sx={{fontWeight:700}}>
Notes
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

{ledgerGroups.map((ledger)=>(

<TableRow
key={ledger.id}
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
{ledger.groupName}
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
{new Date(ledger.createdAt).toLocaleDateString(
"en-GB",
{
day:"2-digit",
month:"2-digit",
year:"numeric",
}
)}
</Typography>

</TableCell>

<TableCell>

<Typography
sx={{
color:"#475569",
fontSize:"14px",
maxWidth:"250px",
whiteSpace:"nowrap",
overflow:"hidden",
textOverflow:"ellipsis",
}}
>
{ledger.notes}
</Typography>

</TableCell>

<TableCell align="center">

<Select
size="small"
value={ledger.status}
onChange={(e)=>
handleStatusChange(
ledger.id,
e.target.value as
|"Active"
|"Inactive"
)
}
sx={{
minWidth:"120px",
borderRadius:"10px",
fontWeight:600,

background:
ledger.status==="Active"
?"#DCFCE7"
:"#FEE2E2",

color:
ledger.status==="Active"
?"#15803D"
:"#DC2626",

".MuiOutlinedInput-notchedOutline":{
border:"none",
},

".MuiSelect-icon":{
color:
ledger.status==="Active"
?"#15803D"
:"#DC2626",
},
}}
>

<MenuItem value="Active">
Active
</MenuItem>

<MenuItem value="Inactive">
Inactive
</MenuItem>

</Select>

</TableCell>

<TableCell align="center">

<IconButton
onClick={(e)=>
handleMenuOpen(
e,
ledger.id
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
selectedLedgerId===ledger.id
}
onClose={handleMenuClose}
slotProps={{
paper:{
sx:{
borderRadius:"14px",
minWidth:"150px",
boxShadow:"0px 10px 30px rgba(15,23,42,0.08)",
},
},
}}
>

<MenuItem
onClick={()=>{
router.push(
`/ledger-groups/view/${ledger.id}`
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
`/ledger-groups/edit/${ledger.id}`
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

</Menu>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</TableContainer>
);
}