import {Box, Card, CardContent, Typography} from '@mui/material';

function IconCard({title,value,icon,color}){
    return(
        <Card sx={{flex:1, minWidth:"200px", boxShadow:2, borderRadius:2}}>
            <CardContent sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <Box>
                    <Typography variant='body2' color='text.secondary' sx={{marginBottom:1}}>{title}</Typography>
                    <Typography variant='h4' fontWeight="600">{value}</Typography>
                </Box>
                <Box 
                  sx={{
                        width:50,
                        height:50,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius:"50%",
                        color:"var(--white)",
                        backgroundColor:color,
                        fontSize:26
                    }}>
                      {icon}
                    </Box>
            </CardContent>
        </Card>
    )
}

export default IconCard;