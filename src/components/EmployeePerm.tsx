import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { module } from "../constants";
import { typePermissions } from "../constants";

const EmployePerm = () => {

  return (
    <Box>
      <Table>
        <TableHead>
          <TableCell>Module</TableCell>
          {typePermissions.map((ele, index) => (
            <TableCell key={index}>{ele}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {module.map((ele, index) => (
            <TableRow key={index}>
              <TableCell>{ele}</TableCell>
              {typePermissions.map((_, ind) => (
                <TableCell key={ind}>
                    <Checkbox/>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display={"flex"} justifyContent={"space-between"} mt={3}>
        <Button>Back</Button>
        <Button>Save</Button>
      </Box>
    </Box>
  );
};

export default EmployePerm;
