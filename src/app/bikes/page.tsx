'use client'
import React from 'react';
import { Container, Typography, CircularProgress, Pagination, TextField, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Card from "../components/shared/Card";
import { Bike , Count} from '../types/bikes'; // Import the Item type if defined separately
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Bikes: React.FC = () => {
  // bikes data
  const [data, setData] = useState<Bike[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10); // Adjust based on your 
  // bikes count data
  const [countData, setCountData] = useState<Count[] | null>(null);
  const [countLoading, setCountLoading] = useState<boolean>(true);
  const [countError, setCountError] = useState<string | null>(null);

    // Fetch data from the API
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const query = new URLSearchParams({
          page: page.toString(),
          per_page: '10',
          distance: '10',
          stolenness: 'proximity',
          location: 'Munich',
          query: search,
          startDate: startDate ? startDate.toISOString() : '',
          endDate: endDate ? endDate.toISOString() : '',
        }).toString();

        const response = await fetch(`https://bikeindex.org:443/api/v3/search?${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const responseData: any = await response.json();
        const data: Bike[] = responseData.bikes;
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCountData = async () => {
      setCountLoading(true); // Start loading
      try {
        const query = new URLSearchParams({
          distance: '10',
          stolenness: 'proximity',
          location: 'Munich',
          query: search,
          startDate: startDate ? startDate.toISOString() : '',
          endDate: endDate ? endDate.toISOString() : '',
        }).toString();

        const response = await fetch(`https://bikeindex.org:443/api/v3/search/count?${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const countData: any = await response.json();
        setCountData(countData);
        setTotalPages(Math.ceil(Number(countData.stolen) / 10));
      } catch (err: any) {
        setCountError(err.message);
      } finally {
        setCountLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
      fetchCountData();
    }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = () => {
    setPage(1);
    fetchData();
    fetchCountData();
  };

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container component="main" sx={{ pt: 13 }}>
      <Typography variant="h4" gutterBottom>
       Search For Nearby Stolen Bikes
      </Typography>
      <Grid container spacing={2}>
          <Grid size={10}>
            <Grid size={12} sx={{py: 1}}>
              <TextField value={search} size='small' fullWidth id="outlined-basic1" label="Partial Case Title" variant="outlined"
              onChange={(e)=> setSearch(e.target.value)} />
            </Grid>
            <Grid size={12} sx={{py: 1,display: 'flex', justifyContent: 'space-between'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Start Date"
                value={startDate}
                sx={{width: '48%'}}
                onChange={(date) => setStartDate(date)}
                slotProps={{
                  textField: { size: 'small' } 
                }}
              />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  sx={{ width: '48%'}}
                  onChange={(date) => setEndDate(date)}
                  slotProps={{
                    textField: { size: 'small' } 
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid size={2} sx={{py: 1}}>
          <Button onClick={handleSearchChange} color='primary' variant="contained" sx={{width: '100%', height: '100%'}}>
            <SearchIcon sx={{width: '70px', height: '70px', textAlign: 'center', justifyContent: 'center'}}  />
          </Button>
          </Grid>
        </Grid>
        {loading || countLoading ? (
          <Container sx={{display: 'flex', justifyContent: 'center', height: '50vh'}}>
            <CircularProgress sx={{margin: 'auto'}} />
          </Container>
        ) : data && data.length ? (
        <Box>
          {countLoading ? (
            <Typography variant="h6" gutterBottom>
              Stolen Bikes in Munich : wait...
            </Typography>
          ): (
            <Typography variant="h6" gutterBottom>
              Stolen Bikes in Munich :  {countData?.stolen}
            </Typography>
          )}
          <Card items={data}/>
          <Pagination 
            sx={{ margin: 'auto', width: 'fit-content' , p: 5}} 
            count={totalPages} page={page} 
            onChange={handlePageChange}
            color="primary" />
        </Box>
      ) : (
        <Container>
          <Typography variant="h6" color="error">
            Data Empty..
          </Typography>
        </Container>
      )}
    </Container>
  );
};

export default Bikes;