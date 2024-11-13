import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export type City = {
  id: string;
  name: string;
  foundingDate: string;
};
// Simulate a database read for tasks.
function getCities() {
  return [
    {
      id: "1",
      name: "New York",
      foundingDate: "1624",
    },
    {
      id: "2",
      name: "Los Angeles",
      foundingDate: "1781",
    },
    {
      id: "3",
      name: "Chicago",
      foundingDate: "1833",
    },
    {
      id: "4",
      name: "Houston",
      foundingDate: "1836",
    },
    {
      id: "5",
      name: "Phoenix",
      foundingDate: "1881",
    },
    {
      id: "6",
      name: "Philadelphia",
      foundingDate: "1682",
    },
    {
      id: "7",
      name: "San Antonio",
      foundingDate: "1718",
    },
    {
      id: "8",
      name: "San Diego",
      foundingDate: "1769",
    },
    {
      id: "9",
      name: "Dallas",
      foundingDate: "1841",
    },
    {
      id: "10",
      name: "San Jose",
      foundingDate: "1777",
    },
    {
      id: "8",
      name: "San Diego",
      foundingDate: "1769",
    },
    {
      id: "9",
      name: "Dallas",
      foundingDate: "1841",
    },
    {
      id: "10",
      name: "San Jose",
      foundingDate: "1777",
    },
    {
      id: "8",
      name: "San Diego",
      foundingDate: "1769",
    },
    {
      id: "9",
      name: "Dallas",
      foundingDate: "1841",
    },
    {
      id: "10",
      name: "San Jose",
      foundingDate: "1777",
    },
    {
      id: "8",
      name: "San Diego",
      foundingDate: "1769",
    },
    {
      id: "9",
      name: "Dallas",
      foundingDate: "1841",
    },
    {
      id: "10",
      name: "San Jose",
      foundingDate: "1777",
    },
    {
      id: "8",
      name: "San Diego",
      foundingDate: "1769",
    },
    {
      id: "9",
      name: "Dallas",
      foundingDate: "1841",
    },
    {
      id: "10",
      name: "San Jose",
      foundingDate: "1777",
    },
    {
      id: "8",
      name: "San Diego",
      foundingDate: "1769",
    },
    {
      id: "9",
      name: "Dallas",
      foundingDate: "1841",
    },
    {
      id: "10",
      name: "San Jose",
      foundingDate: "1777",
    },
  ];
}

export default function CityPoolPage() {
  const cities = getCities();

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
        <DataTable data={cities} columns={columns} />
      </div>
    </>
  );
}
