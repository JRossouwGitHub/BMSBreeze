import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import MobilePricing from '../components/MobilePricing'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#0094FF',
      color: theme.palette.common.white,
      fontSize: 24,
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(desc, basic, standard, premium) {
    return { desc, basic, standard, premium };
  }

  const rows = [
    createData('Price (monthly)', '$75', '$150', '$400'),
    createData('Users (max)', 3, 10, 25),
    createData('Unlimited Document Storage', 'No', 'Yes', 'Yes'),
    createData('Training (hourly sessions)', 'None', 5, 10),
    createData('Intergration (on set up)', 'No', 'Yes', 'Yes'),
  ];

  const rows2 = [
    createData('Additional Training', '| Hourly rate for extra training', '$75 ', 'per hour'),
    createData('Consulting Fee', '| Hourly rate for requested work', '$100 ', 'per hour'),
    createData('Intergration', '| Cost of intergration from previous platform or new data', '$120 ', 'each'),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  

const Pricing = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="content">
            <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                    Plans
                    {!isMobile ? (<><br /><br /></>) : null}
            </Typography>
            {!isMobile ? (<>
              <TableContainer style={{display: 'block', width: '75%', margin: '0 auto', color: '#0094FF'}}>
                <Table className={classes.table} aria-label="customized table" style={{border: '2px solid #0094FF'}}>
                    <TableHead>
                        <TableRow style={{border: '2px solid #0094FF'}}>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="center" style={{border: '2px solid #0094FF'}}>BASIC</StyledTableCell>
                            <StyledTableCell align="center" style={{border: '2px solid #0094FF'}}>STANDARD</StyledTableCell>
                            <StyledTableCell align="center" style={{border: '2px solid #0094FF'}}>PREMIUM</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.desc}>
                            <StyledTableCell component="th" scope="row" style={{color: '#0094FF', border: '2px solid #0094FF'}}>
                                {row.desc}
                            </StyledTableCell>
                            <StyledTableCell align="center" style={{color: '#0094FF', border: '2px solid #0094FF'}}>{row.basic}</StyledTableCell>
                            <StyledTableCell align="center" style={{color: '#0094FF', border: '2px solid #0094FF'}}>{row.standard}</StyledTableCell>
                            <StyledTableCell align="center" style={{color: '#0094FF', border: '2px solid #0094FF'}}>{row.premium}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    <StyledTableRow>
                            <StyledTableCell component="th" scope="row" style={{color: '#0094FF', border: '2px solid #0094FF'}}>
                            </StyledTableCell>
                            <StyledTableCell align="center" style={{color: '#0094FF', border: '2px solid #0094FF'}}>
                                <Button variant="contained" color="primary">
                                    <Link to='/buy-basic' className="nostyle">Buy BASIC</Link>
                                </Button>
                            </StyledTableCell>
                            <StyledTableCell align="center" style={{color: '#0094FF', border: '2px solid #0094FF'}}>
                                <Button variant="contained" color="primary">
                                    <Link to='/buy-standard' className="nostyle">Buy STANDARD</Link>
                                </Button>
                            </StyledTableCell><StyledTableCell align="center" style={{color: '#0094FF', border: '2px solid #0094FF'}}>
                                <Button variant="contained" color="primary">
                                    <Link to='/buy-premium' className="nostyle">Buy PREMIUM</Link>
                                </Button>
                            </StyledTableCell>
                    </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography color="primary" className="desc-body2">
                    <br />
                    <i>*The 14 Day free trial gives the user full use of the BASIC plan for the entire 14 Days.</i>
                    <br /><br /><br />
            </Typography>
            <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                    Additional Prices
                    {!isMobile ? (<><br /><br /></>) : null}
            </Typography>
            <TableContainer style={{display: 'block', width: '75%', margin: '0 auto', color: '#0094FF'}}>
                <Table className={classes.table} aria-label="customized table" style={{border: '2px solid #0094FF'}}>
                    <TableBody>
                    {rows2.map((row) => (
                        <StyledTableRow key={row.desc} style={{border: '2px solid #0094FF'}}>
                            <StyledTableCell component="th" scope="row" style={{color: '#0094FF'}}>
                                {row.desc}
                            </StyledTableCell>
                            <StyledTableCell align="left" style={{color: '#0094FF'}}><i>{row.basic}</i></StyledTableCell>
                            <StyledTableCell align="center" style={{color: '#0094FF'}}><strong>{row.standard}</strong><i>{row.premium}</i></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant={!isMobile ? "h5" : "h6"} color="primary" className="desc-body2">
                    <br />
                    If you would like any of these additional services, please <Link className="navlink-mobile2" to='/contact'><strong><u>Contact Us</u></strong></Link>.
            </Typography>
            <Typography color="primary" className="desc-body2">
                    <br />
                    <i>*All prices are valid until xx/xx/xxxx and are represented in AUD.</i>
                    <br /><br /><br />
            </Typography>
            </>) : (<>
              <MobilePricing />
            </>)}
        </div>
    )
}

export default Pricing
