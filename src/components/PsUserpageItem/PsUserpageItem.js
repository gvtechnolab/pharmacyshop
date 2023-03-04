import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PsUserpageItem = styled(Paper)(({ theme }) => ({
  // background: 'transparent',
  padding: "5px",
  margin: "5px 0",
  color: "#4c4c4c",
  cursor: "default",
  boxShadow:'none',
  display:'flex',
  justifyContent:'space-between',
}));

export default PsUserpageItem;