"use client";

import { expenses } from "@/assets/genericdata";
import { Expense } from "@/assets/types";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import { useState } from "react";

import ExpenseFilters from "./ExpenseFilters";
import ExpenseTable from "./Expensetable";

export default function ExpenseManagementPage(){
const router=useRouter();
const [search,setSearch]=useState("");
const [status,setStatus]=useState("");
const [dateRange,setDateRange]=useState("");
const [fromDate,setFromDate]=useState("");
const [expenseData,setExpenseData]=useState<Expense[]>(expenses);
const expenseCount={
all:expenseData.length,
approved:expenseData.filter(
(expense)=>
expense.status==="Approved"
).length,
pending:expenseData.filter(
(expense)=>
expense.status==="Pending"
).length,
};

const filteredExpenses=
expenseData.filter((expense)=>{
const matchesSearch=!search||
expense.expenseName
.toLowerCase()
.includes(
search.toLowerCase()
);

const matchesStatus=
status
?expense.status===status
:true;

const expenseDate=
new Date(
expense.expenseDate
);

const matchesDate=
fromDate
?expenseDate.toDateString()===
new Date(fromDate).toDateString()
:true;

return(
matchesSearch&&
matchesStatus&&
matchesDate
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
Expense Management
</Typography>

<Button
variant="contained"
startIcon={<AddIcon/>}
onClick={()=>
router.push(
"/expenses/add"
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
Add Expense
</Button>

</Box>

<Box
sx={{
background:"#FFFFFF",
border:"1px solid #E2E8F0",
borderRadius:"24px",
overflow:"hidden",
}}
>

<ExpenseFilters
search={search}
setSearch={setSearch}
status={status}
setStatus={setStatus}
dateRange={dateRange}
setDateRange={setDateRange}
fromDate={fromDate}
setFromDate={setFromDate}
expenseCount={expenseCount}
/>

<Box sx={{p:3}}>

{(
search||
status||
fromDate||
dateRange
)&&(

<Typography
sx={{
mb:2,
color:"#64748B",
fontWeight:500,
}}
>
{filteredExpenses.length} results found
</Typography>

)}

<ExpenseTable
expenses={filteredExpenses}
setExpenseData={setExpenseData}
/>

</Box>

</Box>

</Box>
);
}