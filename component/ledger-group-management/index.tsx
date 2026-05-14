"use client";

import { useState } from "react";

import { ledgerGroups } from "@/assets/genericdata";

import { LedgerGroup } from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import LedgerGroupFilters from "./LedgerGroupFilters";
import LedgerGroupTable from "./LedgerGroupTable";

export default function LedgerGroupManagementPage(){

const router=useRouter();

const [search,setSearch]=useState("");

const [status,setStatus]=useState("");

const [groupData,setGroupData]=useState<LedgerGroup[]>(ledgerGroups);

/* COUNTS */
const ledgerGroupCount={

all:groupData.length,

active:groupData.filter(
(group)=>
group.status==="Active"
).length,

inactive:groupData.filter(
(group)=>
group.status==="Inactive"
).length,
};

/* FILTERED DATA */
const filteredGroups=
groupData.filter((group)=>{

const matchesSearch=
!search||

group.groupName
.toLowerCase()
.includes(
search.toLowerCase()
);

const matchesStatus=
status
?group.status===status
:true;

return(
matchesSearch&&
matchesStatus
);
});

return(
<Box
sx={{
p:3,
minHeight:"100vh",
background:"#F8FAFC",
}}
>

{/* HEADER */}
<Box
sx={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
mb:3,
flexWrap:"wrap",
gap:2,
}}
>

<Typography
sx={{
fontSize:"32px",
fontWeight:700,
color:"#0F172A",
}}
>
Ledger Group Management
</Typography>

<Button
variant="contained"
startIcon={<AddIcon/>}
onClick={()=>
router.push(
"/ledger-groups/add"
)
}
sx={{
borderRadius:"14px",
px:3,
height:"50px",
textTransform:"none",
fontWeight:700,
boxShadow:"none",
}}
>
Add Ledger Group
</Button>

</Box>

{/* MAIN CARD */}
<Box
sx={{
background:"#FFFFFF",
border:"1px solid #E2E8F0",
borderRadius:"24px",
overflow:"hidden",
}}
>

{/* FILTERS */}
<LedgerGroupFilters
search={search}
setSearch={setSearch}
status={status}
setStatus={setStatus}
ledgerGroupCount={ledgerGroupCount}
/>

{/* TABLE */}
<Box sx={{p:3}}>

{(
search||
status
)&&(

<Typography
sx={{
mb:2,
color:"#64748B",
fontWeight:500,
}}
>
{filteredGroups.length} results found
</Typography>

)}

<LedgerGroupTable
ledgerGroups={filteredGroups}
setLedgerGroupData={setGroupData}
/>

</Box>

</Box>

</Box>
);
}