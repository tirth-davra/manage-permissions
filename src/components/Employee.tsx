
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { EmpData } from "../constants"
import { Link } from "react-router-dom"

const Employee = () => {

  return (
    <Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {EmpData.map((emp) => (
                    <TableRow key={emp.id}>
                            <TableCell>{emp.id}</TableCell>
                            <TableCell>{emp.name}</TableCell>
                            <TableCell>{emp.email}</TableCell>
                            <TableCell>{emp.status}</TableCell>
                            <TableCell>
                                <Link to="/permission">
                                    {emp.action}
                                </Link>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
  )
}

export default Employee