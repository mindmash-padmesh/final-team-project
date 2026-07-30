import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MuiButton from "@mui/material/Button";


function EmployeeToolbar({
    searchTerm,
    setSearchTerm,
    selectedDepartment,
    setSelectedDepartment,
    departments,
    sortOption,
    setSortOption,
    onAdd
}) {
    return (
      <div className="employee-toolbar">
        <div className="search-box">
          <TextField
            label="Search Employee"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
        </div>
        <div className="toolbar-buttons">
          <FormControl size="small" fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              value={selectedDepartment}
              label="Department"
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <MenuItem value="All">All Departments</MenuItem>
              {departments.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              label="Sort By"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="name-asc">(A-Z)</MenuItem>
              <MenuItem value="name-desc">(Z-A)</MenuItem>
              <MenuItem value="id-asc">ID(Low to High)</MenuItem>
              <MenuItem value="id-desc">ID (High to Low)</MenuItem>
              <MenuItem value="department-asc">Department(A-Z)</MenuItem>
              <MenuItem value="department-desc">Department(Z-A)</MenuItem>
            </Select>
          </FormControl>

                <MuiButton
                    fullWidth
            variant="contained"
            color="primary"
            onClick={onAdd}
            sx={{
              height: 40,
              textTransform: "none",
              borderRadius: "8px",
              fontWeight: 500,
              px: 2,
            }}
          >
            Add Employee
          </MuiButton>
        </div>
      </div>
    );
}
export default EmployeeToolbar;