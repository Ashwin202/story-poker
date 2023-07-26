
"use client"

import { ColumnDef } from "@tanstack/react-table"
export type Payment = {
  id: number
  game_name: string
  sprint_no: number
  status: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "game_name",
    header: "Game Name",
  },
  {
    accessorKey: "sprint_no",
    header: "Sprint Number",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
