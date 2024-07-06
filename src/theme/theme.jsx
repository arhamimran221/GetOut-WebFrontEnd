import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  // Your existing theme configurations

  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: '12px', // Adjust font size here
      },
    },
  },
});
