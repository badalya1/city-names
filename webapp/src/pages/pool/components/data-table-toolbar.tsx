import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import useTableModal from "./hooks/table-modal";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const tableModal = useTableModal();

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter cities..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        <Button
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          variant="secondary"
          onClick={() => tableModal.openNewCityModal()}
        >
          <Plus />
          Create
        </Button>
      </div>
      <div className="flex gap-2">
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <Button
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
            variant="destructive"
          >
            <Trash2 />
            Delete {table.getFilteredSelectedRowModel().rows.length} selected
          </Button>
        )}

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
