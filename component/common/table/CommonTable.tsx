"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

import { Column } from "@/assets/types";
import { tableStyles } from "./TableStyles";

interface Props<T> {
  columns:Column[];
  rows:T[];
  renderCell: ( row: T, columnKey: string ) => ReactNode;
}
export default function CommonTable<T>({
  columns,
  rows,
  renderCell,
}: Props<T>) {
  return (
    <TableContainer
      sx={ tableStyles.container }
    >
      <Table
        sx={ tableStyles.table }
      >
        <TableHead>
          <TableRow
            sx={ tableStyles.headRow }
          >
            {columns.map(
              (column) => (
                <TableCell
                  key={ column.key }
                  align={ column.align }
                >
                  <Typography
                    sx={ tableStyles.headCell }
                  >
                    { column.label }
                  </Typography>
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ( row, index ) => (
              <TableRow
                key={index}
                hover
                sx={ tableStyles.row }
              >
                {columns.map(
                  (column) => (
                    <TableCell
                      key={ column.key }
                      align={ column.align }
                    >
                      {renderCell(
                        row,
                        column.key
                      )}
                    </TableCell>
                  )
                )}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}