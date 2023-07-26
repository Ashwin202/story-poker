import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  return [
   { id: 1, game_name: "Ruperta", sprint_no: 1, status: 1 },
   { id: 2, game_name: "Herbie", sprint_no: 2, status: 1 },
   { id: 3, game_name: "Petronille", sprint_no: 3, status: 1 },
   { id: 4, game_name: "Brion", sprint_no: 4, status: 1 },
   { id: 5, game_name: "Reuven", sprint_no: 5, status: 0 },
   { id: 6, game_name: "Carmen", sprint_no: 6, status: 1 },
   { id: 7, game_name: "Anette", sprint_no: 7, status: 0 },
   { id: 8, game_name: "Germayne", sprint_no: 8, status: 1 },
   { id: 9, game_name: "Ailee", sprint_no: 9, status: 0 },
   { id: 10, game_name: "Susanne", sprint_no: 10, status: 0 }
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
