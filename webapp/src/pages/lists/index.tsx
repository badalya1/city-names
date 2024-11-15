import { useAllLists } from "@/api/lists.api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function CityListsPage() {
  const { data, error, isLoading } = useAllLists();

  if (isLoading || data == undefined) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Lists of Cities
            </h2>

            <p className="text-muted-foreground">
              Here is a lists of cities created by users.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {data.map((list) => (
            <Link to={`/list/${list._id}`} key={list._id}>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: list.labelColor }}
                      aria-hidden="true"
                    ></span>
                    {list.fullName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{list.shortName}</p>
                  <p className="text-sm text-gray-500">
                    Updated: {new Date(list.updatedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Cities: {list.cities.length}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
