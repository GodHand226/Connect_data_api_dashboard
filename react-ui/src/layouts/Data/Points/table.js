import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function TableData({ data }) {
  return (
    <Table>
      <TableRow sx={{ backgroundColor: "#17C1E8" }}>
        <TableCell align="center">Column</TableCell>
        <TableCell align="center">Type</TableCell>
      </TableRow>
      <TableBody>
        {data.map((list, index) => (
          <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">{list.value}</TableCell>
            <TableCell align="center">{list.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
TableData.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the CoverLayout
TableData.propTypes = {
  data: PropTypes.object,
};

export default TableData;
