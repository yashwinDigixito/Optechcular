"use client";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

interface Props {
  onView: () => void;
  onEdit: () => void;
}
export default function TableActions({ onView, onEdit}: Props) {
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
  return (
    <>
      <IconButton
        onClick={(e) =>
          setAnchorEl( e.currentTarget )
        }
        sx={{
          background: "#F8FAFC",
          width: 38,
          height: 38,
          "&:hover": {
            background: "#E2E8F0",
          },
        }}
      >
        <MoreVertIcon
          sx={{
            color: "#64748B",
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "14px",
              minWidth:"150px",
              boxShadow:"0px 10px 30px rgba(15,23,42,0.08)",
            },
          },
        }}
      >

        <MenuItem
          onClick={() => {
            onView();
            setAnchorEl(null);
          }}
        >
          <RemoveRedEyeOutlinedIcon
            sx={{
              mr: 1,
              color: "#2563EB",
            }}
          />
          View
        </MenuItem>
        <MenuItem
          onClick={() => {
            onEdit();
            setAnchorEl(null);
          }}
        >
          <EditIcon
            sx={{
              mr: 1,
              color: "#0F172A",
            }}
          />
          Edit
        </MenuItem>
      </Menu>
    </>
  );
}