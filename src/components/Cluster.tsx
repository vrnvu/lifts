import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Cluster() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise cluster</CardTitle>
        <CardDescription>
          Introduce your 1RM for the following exercieses to set up the program
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10px]">Exercise</TableHead>
              <TableHead className="w-[200px]">Current 1 RM</TableHead>
              <TableHead className="w-[200px]">Last 1 RM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">Bench press</TableCell>
              <TableCell>
                <Label htmlFor="ex-1" className="sr-only">
                  Stock
                </Label>
                <Input id="ex-1" type="number" defaultValue="100" />
              </TableCell>
              <TableCell>
                <Label htmlFor="last-ex-1" className="sr-only">
                  Stock
                </Label>
                <Input id="last-ex-1" type="number" defaultValue="100" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-semibold">Back squat</TableCell>
              <TableCell>
                <Label htmlFor="ex-2" className="sr-only">
                  Stock
                </Label>
                <Input id="ex-2" type="number" defaultValue="120" />
              </TableCell>
              <TableCell>
                <Label htmlFor="last-ex-2" className="sr-only">
                  Stock
                </Label>
                <Input id="last-ex-2" type="number" defaultValue="100" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-semibold">Weighted pullups</TableCell>
              <TableCell>
                <Label htmlFor="ex-3" className="sr-only">
                  Stock
                </Label>
                <Input id="ex-3" type="number" defaultValue="10" />
              </TableCell>
	      <TableCell>
                <Label htmlFor="last-ex-3" className="sr-only">
                  Stock
                </Label>
                <Input id="last-ex-2" type="number" defaultValue="100" />
	      </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
