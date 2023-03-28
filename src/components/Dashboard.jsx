import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import Person4Icon from "@mui/icons-material/Person4";
import { VictoryChart, VictoryBar, VictoryLine, VictoryTheme } from "victory";
import { DataGrid } from "@mui/x-data-grid";
import { motion } from "framer-motion";
import { Chip, Grid, LinearProgress, Paper } from "@mui/material";
const Dashboard = () => {
  const handleChipClick = () => {
    console.info("You clicked the Chip.");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "center",

                flexDirection: "column",
                gap: 2,
                p: 2,
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h6">120</Typography>
                  <Typography variant="p">Total Orders</Typography>
                </Box>
                <IconButton>
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <MenuBookIcon
                      sx={{
                        backgroundColor: "#01A361",
                        color: "white",
                        borderRadius: "50px",
                        padding: "5px 2px",
                      }}
                      fontSize="large"
                    />
                  </motion.div>
                </IconButton>
              </Box>
              <LinearProgress
                color="success"
                variant="determinate"
                value={50}
              />
            </Paper>
          </motion.div>
        </Grid>
        <Grid item md={3} xs={6}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "center",

                flexDirection: "column",
                gap: 2,
                p: 2,
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h6">120</Typography>
                  <Typography variant="p">Total Customers</Typography>
                </Box>
                <IconButton>
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <PersonIcon
                      sx={{
                        backgroundColor: "#01A361",
                        color: "white",
                        borderRadius: "50px",
                        padding: "5px 2px",
                      }}
                      fontSize="large"
                    />
                  </motion.div>
                </IconButton>
              </Box>
              <LinearProgress
                color="success"
                variant="determinate"
                value={30}
              />
            </Paper>
          </motion.div>
        </Grid>
        <Grid item md={3} xs={6}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "center",

                flexDirection: "column",
                gap: 2,
                p: 2,
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h6">40</Typography>
                  <Typography variant="p">Total Waiters</Typography>
                </Box>
                <IconButton>
                  <motion.a whileTap={{ scale: 0.8 }}>
                    <Person4Icon
                      sx={{
                        backgroundColor: "#01A361",
                        color: "white",
                        borderRadius: "50px",
                        padding: "5px 2px",
                      }}
                      fontSize="large"
                    />
                  </motion.a>
                </IconButton>
              </Box>
              <LinearProgress
                color="success"
                variant="determinate"
                value={70}
              />
            </Paper>
          </motion.div>
        </Grid>
        <Grid item md={3} xs={6}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "center",

                flexDirection: "column",
                gap: 2,
                p: 2,
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h6">20</Typography>
                  <Typography variant="p">Available Tables</Typography>
                </Box>
                <IconButton>
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <TableRestaurantIcon
                      sx={{
                        backgroundColor: "#01A361",
                        color: "white",
                        borderRadius: "50px",
                        padding: "5px 2px",
                      }}
                      fontSize="large"
                    />
                  </motion.div>
                </IconButton>
              </Box>
              <LinearProgress
                color="success"
                variant="determinate"
                value={20}
              />
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5">Orders</Typography>
              <Box display="flex" gap={1}>
                <Chip label="Monthly" onClick={handleChipClick} />
                <Chip label="Weekly" onClick={handleChipClick} />
                <Chip label="Today" onClick={handleChipClick} />
              </Box>
            </Box>

            <VictoryChart domainPadding={50} width={700}>
              <VictoryBar
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onClick: () => {
                        return [
                          {
                            target: "data",
                            mutation: (props) => {
                              const fill = props.style && props.style.fill;
                              return fill === "green"
                                ? null
                                : { style: { fill: "green" } };
                            },
                          },
                        ];
                      },
                    },
                  },
                ]}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                style={{ data: { fill: "#01A361" } }}
                data={[
                  { x: 1, y: 7 },
                  { x: 2, y: 8 },
                  { x: 3, y: 6 },
                  { x: 4, y: 5 },
                  { x: 5, y: 9 },
                ]}
              />
            </VictoryChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h5">Revenue</Typography>
              <Box display="flex" gap={1}>
                <Chip label="Monthly" onClick={handleChipClick} />
                <Chip label="Weekly" onClick={handleChipClick} />
                <Chip label="Today" onClick={handleChipClick} />
              </Box>
            </Box>

            <VictoryChart width={700}>
              <VictoryLine
                interpolation="natural"
                style={{
                  data: { stroke: "#01A361" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 },
                ]}
              />
            </VictoryChart>
          </Paper>
        </Grid>
      </Grid>
      {/* <Paper
        elevation={3}
        sx={{
          width: { xs: "450px", sm: "530px", md: "1000px" },
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h5">Recent Orders</Typography>
        </Box>
        <Box
          sx={{
            height: 400,
            // width: { xs: "450px", md: "1000px" },
            width: "100%",
            overflowX: "auto",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Paper> */}
    </div>
  );
};

export default Dashboard;
