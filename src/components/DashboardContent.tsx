import DashboardCard from "./DashboardCard"
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiSolidUserBadge } from 'react-icons/bi';
import { AiFillProject } from 'react-icons/ai';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const users = [
  {
    "user_id": "UID101",
    "user_name": "Alice Green",
    "user_mail": "alice.green@domain.com",
    "role": "Team Lead",
    "status": "active",
  },
  {
    "user_id": "UID102",
    "user_name": "James Carter",
    "user_mail": "james.carter@domain.org",
    "role": "Developer",
    "status": "active",
  },
  {
    "user_id": "UID103",
    "user_name": "Mia Williams",
    "user_mail": "mia.williams@domain.net",
    "role": "HR Manager",
    "status": "active",
  },
  {
    "user_id": "UID104",
    "user_name": "Lucas Miller",
    "user_mail": "lucas.miller@domain.com",
    "role": "Intern",
    "status": "inactive",
  },
  {
    "user_id": "UID105",
    "user_name": "Sophia Anderson",
    "user_mail": "sophia.anderson@domain.co",
    "role": "Product Manager",
    "status": "active",
  },
  {
    "user_id": "UID106",
    "user_name": "Benjamin Harris",
    "user_mail": "benjamin.harris@domain.io",
    "role": "Designer",
    "status": "inactive",
  },
  {
    "user_id": "UID107",
    "user_name": "Ella Scott",
    "user_mail": "ella.scott@domain.edu",
    "role": "Developer",
    "status": "active",
  },
];

const projects = [
  {
    "project_id": "PID101",
    "project_name": "Cloud Migration Initiative",
    "project_head": "Alice Green",
    "deadline": "2024-11-30",
  },
  {
    "project_id": "PID102",
    "project_name": "IoT Sensor Integration",
    "project_head": "James Carter",
    "deadline": "2025-01-15",
  },
  {
    "project_id": "PID103",
    "project_name": "Employee Onboarding Portal",
    "project_head": "Mia Williams",
    "deadline": "2025-02-28",
  },
  {
    "project_id": "PID104",
    "project_name": "Data Visualization Dashboard",
    "project_head": "Sophia Anderson",
    "deadline": "2025-03-20",
  },
  {
    "project_id": "PID105",
    "project_name": "Mobile App Analytics",
    "project_head": "Ella Scott",
    "deadline": "2025-04-15",
  },
];



const DashboardContent = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex items-start justify-center w-full h-auto gap-20 pt-5">
        <DashboardCard heading="Total Users" count="20" icon={HiMiniUserGroup} lastMonth="8" />
        <DashboardCard heading="Number of Roles" count="11" icon={BiSolidUserBadge} lastMonth="4" />
        <DashboardCard heading="Ongoing Projects" count="9" icon={AiFillProject} lastMonth="6" />
      </div>
      <div className="flex gap-8 px-8">
        <div className="w-2/3 p-5 border-2 rounded-xl">
          <Table>
            <TableCaption className="text-xl text-blue-600">A list of your recent users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xl text-black">User ID</TableHead>
                <TableHead className="text-xl text-black">Name</TableHead>
                <TableHead className="text-xl text-black">Mail ID</TableHead>
                <TableHead className="text-xl text-black">Role</TableHead>
                <TableHead className="text-xl text-black">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.user_id}>
                  <TableCell className="font-medium">{user.user_id}</TableCell>
                  <TableCell>{user.user_name}</TableCell>
                  <TableCell className="text-blue-600"><a href={`mailto:${user.user_mail}`}>{user.user_mail}</a></TableCell>
                  <TableCell className="">{user.role}</TableCell>
                  <TableCell className={`${user.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>{user.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>
        <div className="w-1/3 p-5 border-2 rounded-xl">
          <Table>
            <TableCaption className="text-xl text-blue-600">A list of your recent projects.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-black">Project ID</TableHead>
                <TableHead className="text-black">Project Title</TableHead>
                <TableHead className="text-black">Project Head</TableHead>
                <TableHead className="text-black">Deadline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.project_id}>
                  <TableCell className="font-medium">{project.project_id}</TableCell>
                  <TableCell>{project.project_name}</TableCell>
                  <TableCell className="text-blue-600">{project.project_head}</TableCell>
                  <TableCell className="">{project.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>
      </div>
    </div>
  )
}

export default DashboardContent