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
    "user_image": "https://example.com/images/user1.png",
    "user_id": "UID001",
    "user_name": "Alice Walker",
    "user_mail": "alice.walker@example.com",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user2.png",
    "user_id": "UID002",
    "user_name": "Michael Brown",
    "user_mail": "michael.brown@example.net",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user3.png",
    "user_id": "UID003",
    "user_name": "Sophia Turner",
    "user_mail": "sophia.turner@example.org",
    "role": "Team Lead",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user4.png",
    "user_id": "UID004",
    "user_name": "James Carter",
    "user_mail": "james.carter@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user5.png",
    "user_id": "UID005",
    "user_name": "Emma Wilson",
    "user_mail": "emma.wilson@example.co",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user6.png",
    "user_id": "UID006",
    "user_name": "Oliver Green",
    "user_mail": "oliver.green@example.net",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user7.png",
    "user_id": "UID007",
    "user_name": "Charlotte Adams",
    "user_mail": "charlotte.adams@example.org",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user8.png",
    "user_id": "UID008",
    "user_name": "Henry White",
    "user_mail": "henry.white@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user9.png",
    "user_id": "UID009",
    "user_name": "Ava Martinez",
    "user_mail": "ava.martinez@example.co",
    "role": "Team Lead",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user10.png",
    "user_id": "UID010",
    "user_name": "Lucas Johnson",
    "user_mail": "lucas.johnson@example.net",
    "role": "Employee",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user11.png",
    "user_id": "UID011",
    "user_name": "Mia Hill",
    "user_mail": "mia.hill@example.org",
    "role": "Manager",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user12.png",
    "user_id": "UID012",
    "user_name": "Elijah Moore",
    "user_mail": "elijah.moore@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user13.png",
    "user_id": "UID013",
    "user_name": "Isabella Davis",
    "user_mail": "isabella.davis@example.co",
    "role": "Team Lead",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user14.png",
    "user_id": "UID014",
    "user_name": "Ethan Harris",
    "user_mail": "ethan.harris@example.net",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user15.png",
    "user_id": "UID015",
    "user_name": "Amelia Scott",
    "user_mail": "amelia.scott@example.org",
    "role": "Manager",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user16.png",
    "user_id": "UID016",
    "user_name": "Logan Clark",
    "user_mail": "logan.clark@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user17.png",
    "user_id": "UID017",
    "user_name": "Harper Reed",
    "user_mail": "harper.reed@example.net",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user18.png",
    "user_id": "UID018",
    "user_name": "Alexander Wright",
    "user_mail": "alexander.wright@example.org",
    "role": "Team Lead",
    "status": "inactive"
  },
  {
    "user_image": "https://example.com/images/user19.png",
    "user_id": "UID019",
    "user_name": "Ella Lopez",
    "user_mail": "ella.lopez@example.com",
    "role": "Employee",
    "status": "active"
  },
  {
    "user_image": "https://example.com/images/user20.png",
    "user_id": "UID020",
    "user_name": "Zoe King",
    "user_mail": "zoe.king@example.co",
    "role": "Manager",
    "status": "active"
  }
];


const Employees = () => {
  return (
    <div className="flex max-h-[750px] scorll p-10 w-full border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-black">Employee</TableHead>
            <TableHead className="text-xl text-black">Employee ID</TableHead>
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
                  <AvatarImage src={user.user_image} />
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

export default Employees