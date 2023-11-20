import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#FFF",
  },
}));

const FormInput = () => {
  const classes = useStyles();

  return (
    <TextField
      inputProps={{ className: classes.input }}
      id="outlined"
      label="Write something..."
      variant="outlined"
    />
  );
};

export default FormInput;