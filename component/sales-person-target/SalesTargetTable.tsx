"use client";

import { useState } from "react";

import { SalesTarget } from "@/assets/types";

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
  Typography
} from "@mui/material";

import { useRouter } from "next/navigation";

interface Props{
salesTargets:SalesTarget[];
setSalesTargetData:React.Dispatch<React.SetStateAction<SalesTarget[]>>;
}

export default function SalesTargetTable({
salesTargets,
setSalesTargetData,
}:Props){

const router=useRouter();

const [anchorEl,setAnchorEl]=useState<null|HTMLElement>(null);

const [selectedTargetId,setSelectedTargetId]=useState<string|null>(null);

const handleMenuOpen=(
event:React.MouseEvent<HTMLElement>,
id:string
)=>{
setAnchorEl(event.currentTarget);
setSelectedTargetId(id);
};

const handleMenuClose=()=>{
setAnchorEl(null);
setSelectedTargetId(null);
};

const handleStatusChange=(
id:string,
value:"Completed"|"In Progress"|"Pending"|"Overdue"
)=>{

setSalesTargetData((prev)=>
prev.map((target)=>
target.id===id
?{
...target,
status:value,
}
:target
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
Sales Person
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Target
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Achieved
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Remaining
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Due Date
</Typography>
</TableCell>

<TableCell align="center">
<Typography sx={{fontWeight:700}}>
Month
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

{salesTargets.map((target)=>(

<TableRow
key={target.id}
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
fontWeight:700,
color:"#2563EB",
fontSize:"14px",
}}
>
{target.salesPersonName}
</Typography>

</TableCell>

<TableCell align="center">

<Typography
sx={{
fontWeight:700,
fontSize:"14px",
}}
>
₹{target.targetAmount.toLocaleString()}
</Typography>

</TableCell>

<TableCell align="center">

<Typography
sx={{
fontWeight:700,
fontSize:"14px",
color:"#16A34A",
}}
>
₹{target.achievedAmount.toLocaleString()}
</Typography>

</TableCell>

<TableCell align="center">

<Typography
sx={{
fontWeight:700,
fontSize:"14px",
color:"#DC2626",
}}
>
₹{target.remainingAmount.toLocaleString()}
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
{new Date(target.dueDate).toLocaleDateString(
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

<Typography
sx={{
fontWeight:600,
fontSize:"14px",
color:"#475569",
}}
>
{target.month}
</Typography>

</TableCell>

<TableCell align="center">

<Select
size="small"
value={target.status}
onChange={(e)=>
handleStatusChange(
target.id,
e.target.value as
|"Completed"
|"In Progress"
|"Pending"
|"Overdue"
)
}
sx={{
minWidth:"145px",
borderRadius:"10px",
fontWeight:600,

background:
target.status==="Completed"
?"#DCFCE7"
:target.status==="Pending"
?"#FEE2E2"
:target.status==="Overdue"
?"#FEE2E2"
:"#DBEAFE",

color:
target.status==="Completed"
?"#15803D"
:target.status==="Pending"
?"#EA580C"
:target.status==="Overdue"
?"#DC2626"
:"#2563EB",

".MuiOutlinedInput-notchedOutline":{
border:"none",
},

".MuiSelect-icon":{
color:
target.status==="Completed"
?"#15803D"
:target.status==="Pending"
?"#EA580C"
:target.status==="Overdue"
?"#DC2626"
:"#2563EB",
},
}}
>

<MenuItem value="Completed">
Completed
</MenuItem>

<MenuItem value="In Progress">
In Progress
</MenuItem>

<MenuItem value="Pending">
Pending
</MenuItem>

<MenuItem value="Overdue">
Overdue
</MenuItem>

</Select>

</TableCell>

<TableCell align="center">

<IconButton
onClick={(e)=>
handleMenuOpen(
e,
target.id
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
selectedTargetId===target.id
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
`/sales-target/view/${target.id}`
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
`/sales-target/edit/${target.id}`
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