import { styled } from '@mui/material/styles';
import Link from 'next/link';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

const LinkElement = styled(Link)(({ theme }) => ({
    color: '#4c4c4c',
    "&:hover": {
        color: '#4c4c4c',
    }
}))

const LeftMenuLink = ({ icon, name, url }) => {
    return (
        <>
            <LinkElement href={url}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{color:'#198754'}}>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItemButton>
                </ListItem>
            </LinkElement>
        </>
    )
}

export default LeftMenuLink
