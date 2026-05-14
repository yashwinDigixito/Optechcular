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

status:string;
setStatus:(value:string)=>void;

ledgerGroup:string;
setLedgerGroup:(value:string)=>void;

ledgerCount?:{
all:number;
active:number;
inactive:number;
};
}

export default function LedgerFilters({
search,
setSearch,
status,
setStatus,
ledgerGroup,
setLedgerGroup,
ledgerCount,
}:Props){

const tabs=[

{
label:"All",
value:"",
count:ledgerCount?.all||0,
},

{
label:"Active",
value:"Active",
count:ledgerCount?.active||0,
},

{
label:"Inactive",
value:"Inactive",
count:ledgerCount?.inactive||0,
},
];

return(
<Box>

{/* STATUS TABS */}
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
sx={{
minHeight:"54px",

"& .MuiTabs-indicator":{
height:"3px",
borderRadius:"999px",

background:
status==="Active"
?"#16A34A"
:status==="Inactive"
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
?tab.value==="Active"
?"#16A34A"
:tab.value==="Inactive"
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
?tab.value==="Active"
?"#16A34A"
:tab.value==="Inactive"
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

{/* FILTERS */}
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
"Administrative",
"Utilities",
"Revenue",
]}
value={ledgerGroup||null}
onChange={(_,value)=>
setLedgerGroup(
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
renderInput={(params) => (

            <TextField
              {...params}
              label="Sort By Group"
            />
          )}
/>

<TextField
placeholder="Search ledger..."
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