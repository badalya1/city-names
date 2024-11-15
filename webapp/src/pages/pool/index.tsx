import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useCities } from "@/api/cities.api";

export default function CityPoolPage() {
  const { data, error, isLoading } = useCities();

  if (isLoading || data == undefined) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of cities in the pool!
            </p>
          </div>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </>
  );
}
