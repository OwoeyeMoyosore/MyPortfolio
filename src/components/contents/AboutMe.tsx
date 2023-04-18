
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "../styles.module.css"
import {ReactComponent as MyPicture} from "../../images/myPicture2.svg"

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
}));

type AboutMeProps = {
    name: string
    role? : string
    age?: number
    isLoggedIn? : boolean
}

const AboutMe = ({name, role}: AboutMeProps) => {
  return (
    <div className={styles.AboutMe}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} className={styles.grid}>
        <Grid item xs={12} sm={8} className={styles.trapezium}>
                <div>
                    <p>
                        Hello, I am <br/>
                        <span className={styles.name}>{name}</span>
                    </p>
                    <p>{role}</p>
                </div>
        </Grid>
        <Grid item xs={12} sm={4} className={styles.right}>
          <div className={styles.myPicture}>
            <MyPicture className={styles.myPicture}/>
          </div>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default AboutMe