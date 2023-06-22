import { useTheme } from "@emotion/react";
import { FilterAlt, LocationOn, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogContent,
  Divider,
  FormControlLabel,
  Grid,
  Hidden,
  Icon,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const FilterBar = ({ filters, setFilters, getJobs, loading }) => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      flexWrap={"nowrap"}
      sx={{
        borderRadius: "6px",
        border: "solid 0px",
        overflow: "hidden",
        transform: "translateY(-50%)",
        bgcolor: "background.paper",
      }}
    >
      <Grid item md={5} sm={4} xs={12}>
        <TextField
          sx={(theme) => ({
            background: theme.palette.background.paper,
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": { height: "80px" },
          })}
          value={filters.q}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, q: e.target.value }))
          }
          placeholder={
            isXs ? "Filter by title" : "Filter by title, companies,expertise..."
          }
          fullWidth
          InputProps={
            isXs
              ? {
                  endAdornment: (
                    <InputAdornment position="end" sx={{ maxHeight: 48 }}>
                      <Stack direction={"row"} sx={{ height: 48 }} gap={1}>
                        <Button
                          sx={{ padding: 0, minWidth: 48 }}
                          onClick={() => setOpen(true)}
                        >
                          <Icon
                            sx={{
                              height: 20,
                              width: 20,
                              color:
                                theme.palette.mode === "light"
                                  ? "secondary.dark"
                                  : "white",
                            }}
                          >
                            <FilterAlt sx={{ height: 20, width: 20 }} />
                          </Icon>
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ padding: 0, minWidth: 48 }}
                          disabled={loading}
                          onClick={getJobs}
                        >
                          {loading ? (
                            <CircularProgress size={15} />
                          ) : (
                            <Search sx={{ width: 24, height: 24 }} />
                          )}
                        </Button>
                      </Stack>
                    </InputAdornment>
                  ),
                }
              : {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon color="primary" sx={{ width: 24, height: 24 }}>
                        <Search sx={{ width: 24, height: 24 }} />
                      </Icon>
                    </InputAdornment>
                  ),
                }
          }
        />
      </Grid>

      <Hidden smDown>
        <Grid item sx={{ height: 80 }}>
          <Divider orientation="vertical" />
        </Grid>
        <OtherFilters
          filters={filters}
          setFilters={setFilters}
          getJobs={getJobs}
          loading={loading}
        />
      </Hidden>
      {isXs && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent sx={{ p: 0 }}>
            <Grid container>
              <OtherFilters
                filters={filters}
                setFilters={setFilters}
                getJobs={getJobs}
                loading={loading}
              />
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </Grid>
  );
};
export default FilterBar;

const OtherFilters = ({ filters, setFilters, getJobs, loading }) => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Grid item md={4} sm={4} xs={12}>
        <TextField
          sx={(theme) => ({
            height: { sm: "80px", xs: "72px" },
            background: theme.palette.background.paper,
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": { height: { sm: "80px", xs: "72px" } },
          })}
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
          fullWidth
          placeholder="Filter by Location..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon color="primary" sx={{ width: 17, height: 24 }}>
                  <LocationOn sx={{ width: 17, height: 24 }} />
                </Icon>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm="auto" sx={isXs ? {} : { height: 80 }}>
        <Divider orientation={isXs ? "horizontal" : "vertical"} />
      </Grid>
      <Grid item md={4} sm={4} xs={12}>
        <Stack
          direction={{ sm: "row", xs: "column" }}
          alignItems={{ sm: "center" }}
          gap={{ sm: "26px", xs: 2 }}
          sx={{ bgcolor: "background.paper", p: 1 }}
        >
          <FormControlLabel
            sx={{
              m: 0,
              "& span": { fontWeight: 700 },
              px: { xs: "12px", sm: 0 },
            }}
            color="primary"
            control={
              <Checkbox
                checked={filters.fullTimeOnly}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    fullTimeOnly: e.target.checked,
                  }))
                }
              />
            }
            label="Full Time Only"
          />
          <Box sx={{ px: { xs: "24px", sm: 0 }, pb: { xs: "24px", sm: 0 } }}>
            <Button
              variant="contained"
              size={"large"}
              onClick={getJobs}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={15} /> : undefined}
              fullWidth={isXs}
            >
              Search
            </Button>
          </Box>
        </Stack>
      </Grid>
    </>
  );
};
