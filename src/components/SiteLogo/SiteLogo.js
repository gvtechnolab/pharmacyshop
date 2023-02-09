import React from 'react'
import { Box } from '@mui/material';

const SiteLogo = ({ name, light }) => {
    return (
        <Box sx={{
            color: light === undefined ? '#198754' : 'white',
            // display: 'flex',
            // justifyContent: 'center',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '8px 0',
            cursor: "default",
            fontSize: '18px'
        }}>
            <Box
                component="img"
                sx={{
                    height: 35,
                    width: 35,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="PharmacyShop"
                src="/assets/images/pharmacyshoplogo48.png" />
            <span>{name}</span>
        </Box>
    )
}

export default SiteLogo
