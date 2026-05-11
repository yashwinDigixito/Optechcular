"use client";

import {
    Box,
} from "@mui/material";

import SearchField from "@/component/common/SearchField";

interface RoleFiltersProps {
  search: string;

  setSearch: (
    value: string
  ) => void;
}

export default function RoleFilters({
  search,
  setSearch,
}: RoleFiltersProps) {

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 3,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <SearchField
          placeholder="Search role name..."
          value={search}
          onChange={setSearch}
        />
      </Box>
    </Box>
  );
}