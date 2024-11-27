import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

const users = [
  {
    "user_image": "https://randomuser.me/api/portraits/men/1.jpg",
    "user_id": "MID001",
    "user_name": "Emily Carter",
    "user_mail": "emily.carter@domain.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/women/2.jpg",
    "user_id": "MID002",
    "user_name": "Jack Wilson",
    "user_mail": "jack.wilson@domain.net",
    "role": "Manager",
    "status": "inactive"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/men/3.jpg",
    "user_id": "MID003",
    "user_name": "Sophia Green",
    "user_mail": "sophia.green@domain.org",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/women/4.jpg",
    "user_id": "MID004",
    "user_name": "Michael Brown",
    "user_mail": "michael.brown@domain.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/men/5.jpg",
    "user_id": "MID005",
    "user_name": "Ava Collins",
    "user_mail": "ava.collins@domain.co",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/women/6.jpg",
    "user_id": "MID006",
    "user_name": "Ethan Johnson",
    "user_mail": "ethan.johnson@domain.net",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/men/7.jpg",
    "user_id": "MID007",
    "user_name": "Sophia Lee",
    "user_mail": "sophia.lee@domain.org",
    "role": "Manager",
    "status": "inactive"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/women/8.jpg",
    "user_id": "MID008",
    "user_name": "James White",
    "user_mail": "james.white@domain.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/men/9.jpg",
    "user_id": "MID009",
    "user_name": "Isabella Clark",
    "user_mail": "isabella.clark@domain.co",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://randomuser.me/api/portraits/women/10.jpg",
    "user_id": "MID010",
    "user_name": "Benjamin Thomas",
    "user_mail": "benjamin.thomas@domain.net",
    "role": "Manager",
    "status": "active"
  }
];



const Managers = () => {
  return (
    <div className="flex max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Manager</TableHead>
            <TableHead className="text-xl text-black">Manager ID</TableHead>
            <TableHead className="text-xl text-black">Name</TableHead>
            <TableHead className="text-xl text-black">Mail ID</TableHead>
            <TableHead className="text-xl text-black">Role</TableHead>
            <TableHead className="text-xl text-black">Status</TableHead>
            <TableHead className="text-xl text-black">Edit</TableHead>
            <TableHead className="text-xl text-black">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.user_id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>{user.user_id}</AvatarFallback>
                </Avatar>

              </TableCell>
              <TableCell className="font-medium">{user.user_id}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell className="text-blue-600"><a href={`mailto:${user.user_mail}`}>{user.user_mail}</a></TableCell>
              <TableCell className="">{user.role}</TableCell>
              <TableCell className={`${user.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>{user.status}</TableCell>
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

export default Managers