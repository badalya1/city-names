import { useCityListById } from "@/api/lists.api";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MapPin, User, Clock } from "lucide-react";

export default function CityListPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useCityListById(id ?? "");

  if (isLoading || data == undefined) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: data.labelColor }}
                aria-hidden="true"
              ></span>
              <CardTitle className="text-3xl">{data.fullName}</CardTitle>
            </div>
            <Badge variant="outline">{data.shortName}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <User className="text-gray-500" />
              <span>Owner ID: {data.ownerId}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-gray-500" />
              <span>
                Last Updated: {new Date(data.updatedAt).toLocaleString()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-gray-500" />
              <span>Total Cities: {data.cities.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cities in this List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Founded Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.cities.map((city) => (
                <TableRow key={city._id}>
                  <TableCell className="font-medium">{city.name}</TableCell>
                  <TableCell>{city.foundedYear}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
