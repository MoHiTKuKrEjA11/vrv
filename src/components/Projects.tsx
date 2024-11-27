import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

const projects = [
  {
    "project_id": "PID001",
    "project_name": "Social Media Platform",
    "project_head": "Emily Carter",
    "deadline": "2025-01-15",
    "status": "ongoing",
    "team_count": 5
  },
  {
    "project_id": "PID002",
    "project_name": "Inventory Management System",
    "project_head": "Jack Wilson",
    "deadline": "2025-02-28",
    "status": "ongoing",
    "team_count": 6
  },
  {
    "project_id": "PID003",
    "project_name": "Online Learning Portal",
    "project_head": "Sophia Green",
    "deadline": "2025-03-10",
    "status": "completed",
    "team_count": 7
  },
  {
    "project_id": "PID004",
    "project_name": "CRM Development",
    "project_head": "Michael Brown",
    "deadline": "2024-12-20",
    "status": "ongoing",
    "team_count": 4
  },
  {
    "project_id": "PID005",
    "project_name": "Blockchain Solution",
    "project_head": "Ava Collins",
    "deadline": "2025-04-05",
    "status": "completed",
    "team_count": 8
  },
  {
    "project_id": "PID006",
    "project_name": "Data Visualization Dashboard",
    "project_head": "Ethan Johnson",
    "deadline": "2025-01-25",
    "status": "ongoing",
    "team_count": 6
  },
  {
    "project_id": "PID007",
    "project_name": "AR/VR Gaming App",
    "project_head": "Sophia Lee",
    "deadline": "2025-03-01",
    "status": "ongoing",
    "team_count": 5
  },
  {
    "project_id": "PID008",
    "project_name": "Employee Engagement Tool",
    "project_head": "James White",
    "deadline": "2024-12-15",
    "status": "ongoing",
    "team_count": 7
  },
  {
    "project_id": "PID009",
    "project_name": "Payment Gateway Integration",
    "project_head": "Isabella Clark",
    "deadline": "2025-02-15",
    "status": "completed",
    "team_count": 4
  },
  {
    "project_id": "PID010",
    "project_name": "Cloud Cost Optimization",
    "project_head": "Benjamin Thomas",
    "deadline": "2025-01-05",
    "status": "ongoing",
    "team_count": 6
  }
];


const Projects = () => {
  return (
    <div className="flex max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Project ID</TableHead>
            <TableHead className="text-xl text-black">Project Title</TableHead>
            <TableHead className="text-xl text-black">Project Head</TableHead>
            <TableHead className="text-xl text-black">Deadline</TableHead>
            <TableHead className="text-xl text-black">Status</TableHead>
            <TableHead className="text-xl text-black">Team Count</TableHead>
            <TableHead className="text-xl text-black">Edit</TableHead>
            <TableHead className="text-xl text-black">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.project_id}>
              <TableCell className="font-medium">{project.project_id}</TableCell>
              <TableCell>{project.project_name}</TableCell>
              <TableCell className="text-blue-600">{project.project_head}</TableCell>
              <TableCell className="">{project.deadline}</TableCell>
              <TableCell className={`${project.status === 'completed' ? 'text-red-600' : 'text-green-600'}`}>{project.status}</TableCell>
              <TableCell className="">{project.team_count}</TableCell>
              <TableCell>
                <Button className="bg-green-600">Edit</Button>
              </TableCell>
              <TableCell>
                <Button variant='destructive'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Projects