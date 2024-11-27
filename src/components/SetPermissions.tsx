import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";
const permissions = [
  {
    'p_id': 'PID01',
    'p_name': 'View documents and report',
  },
  {
    'p_id': 'PID02',
    'p_name': 'View project details and change details',
  },
  {
    'p_id': 'PID03',
    'p_name': 'Apply for leave',
  },
  {
    'p_id': 'PID04',
    'p_name': 'Edit documents and report',
  },
  {
    'p_id': 'PID05',
    'p_name': 'View Project Details Edit project details',
  },
  {
    'p_id': 'PID06',
    'p_name': 'Access project budget',
  },
  {
    'p_id': 'PID07',
    'p_name': 'Add team member',
  },
  {
    'p_id': 'PID08',
    'p_name': 'Approve leave request',
  },
  {
    'p_id': 'PID09',
    'p_name': 'View employee and manager records',
  },
  {
    'p_id': 'PID10',
    'p_name': 'Edit employee and manager records',
  },
  {
    'p_id': 'PID11',
    'p_name': 'Delete employee and manager records',
  },
  {
    'p_id': 'PID12',
    'p_name': 'Add new users',
  },
  {
    'p_id': 'PID13',
    'p_name': 'Set permissions and roles',
  }
  
]
const SetPermissions = () => {
  return (
    <div className="flex flex-col gap-10 max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Task and Permissions</TableHead>
            <TableHead className="text-xl text-black">Employee</TableHead>
            <TableHead className="text-xl text-black">Manager</TableHead>
            <TableHead className="text-xl text-black">Admin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow key={permission.p_id} className="text-lg">
              <TableCell>{permission.p_name}</TableCell>
              <TableCell><Checkbox className="w-5 h-5"/></TableCell>
              <TableCell><Checkbox className="w-5 h-5"/></TableCell>
              <TableCell><Checkbox className="w-5 h-5"/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between px-10">

      
      <Button className="w-1/6"><FaPlus/>Add Task</Button>
      <Button className="w-1/6">Save Changes</Button>
      </div>
    </div>
  )
}

export default SetPermissions