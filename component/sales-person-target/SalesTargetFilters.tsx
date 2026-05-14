"use client";

import SearchIcon from "@mui/icons-material/Search";

import {
  Autocomplete,
  Badge,
  Box,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

interface Props{
search:string;
setSearch:(value:string)=>void;

month:string;
setMonth:(value:string)=>void;

status:string;
setStatus:(value:string)=>void;

salesTargetCount?:{
all:number;
completed:number;
inProgress:number;
pending:number;
overdue:number;
};
}

export default function SalesTargetFilters({
search,
setSearch,
month,
setMonth,
status,
setStatus,
salesTargetCount,
}:Props){

const tabs=[

{
label:"All",
value:"",
count:salesTargetCount?.all||0,
},

{
label:"Completed",
value:"Completed",
count:salesTargetCount?.completed||0,
},

{
label:"In Progress",
value:"In Progress",
count:salesTargetCount?.inProgress||0,
},

{
label:"Pending",
value:"Pending",
count:salesTargetCount?.pending||0,
},

{
label:"Overdue",
value:"Overdue",
count:salesTargetCount?.overdue||0,
},
];

return(
<Box>

<Box
sx={{
px:3,
pt:2,
borderBottom:"1px solid #E2E8F0",
}}
>

<Tabs
value={status}
onChange={(_,value)=>
setStatus(value)
}
variant="scrollable"
scrollButtons="auto"

sx={{
minHeight:"54px",

"& .MuiTabs-indicator":{
height:"3px",
borderRadius:"999px",

background:
status==="Completed"
?"#16A34A"
:status==="In Progress"
?"#2563EB"
:status==="Pending"
?"#EA580C"
:status==="Overdue"
?"#DC2626"
:"#0F172A",
},
}}
>

{tabs.map((tab)=>(

<Tab
key={tab.label}
value={tab.value}
disableRipple

label={
<Box
sx={{
display:"flex",
alignItems:"center",
gap:1,
}}
>

<Typography
sx={{
textTransform:"none",
fontWeight:600,

color:
status===tab.value
?tab.value==="Completed"
?"#16A34A"
:tab.value==="In Progress"
?"#2563EB"
:tab.value==="Pending"
?"#EA580C"
:tab.value==="Overdue"
?"#DC2626"
:"#0F172A"
:"#64748B",

fontSize:"15px",
}}
>
{tab.label}
</Typography>

<Badge
badgeContent={tab.count}

sx={{
"& .MuiBadge-badge":{

position:"static",
transform:"none",

background:
status===tab.value
?tab.value==="Completed"
?"#16A34A"
:tab.value==="In Progress"
?"#2563EB"
:tab.value==="Pending"
?"#EA580C"
:tab.value==="Overdue"
?"#DC2626"
:"#0F172A"
:"#F1F5F9",

color:
status===tab.value
?"#FFFFFF"
:"#475569",

borderRadius:"8px",
minWidth:"24px",
height:"24px",
fontWeight:700,
fontSize:"12px",
},
}}
/>

</Box>
}

sx={{
minHeight:"54px",
px:0,
mr:5,
}}
/>

))}

</Tabs>

</Box>

<Box
sx={{
p:3,
display:"flex",
gap:2,
flexWrap:"wrap",
borderBottom:"1px solid #E2E8F0",
}}
>

<Autocomplete
options={[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
]}

value={month||null}

onChange={(_,value)=>
setMonth(
value||""
)
}

sx={{
minWidth:"240px",

"& .MuiOutlinedInput-root":{
borderRadius:"16px",
background:"#FFFFFF",
height:"56px",
},
}}

renderInput={(params)=>(

<TextField
{...params}
placeholder="Filter by Month"
/>

)}
/>

<TextField
placeholder="Search sales person..."
value={search}

onChange={(e)=>
setSearch(
e.target.value
)
}

sx={{
flex:1,
minWidth:"320px",

"& .MuiOutlinedInput-root":{
borderRadius:"16px",
background:"#FFFFFF",
height:"56px",
},

"& input":{
color:"#64748B",
},
}}

slotProps={{
input:{
startAdornment:(
<InputAdornment position="start">
<SearchIcon
sx={{
color:"#94A3B8",
}}
/>
</InputAdornment>
),
},
}}
/>

</Box>

</Box>
);
}