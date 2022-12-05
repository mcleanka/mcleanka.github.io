import React from "react";
/* import Card from "@mui/material/Card";
import { createTheme, useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


import { purple } from '@mui/material/colors';

const useStyles: any = createTheme({
	root: {
		minWidth: 0,
		marginTop: "10px",
		marginBottom: "10px",
		display: "flex",
	},
	card: {
		width: "100%",
		marginLeft: "15px",
		marginRight: "15px",
		margin: "auto",
		transition: "0.3s",
		minHeight: "270px",
		borderRadius: ".625rem!important",
		boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
		"&:hover": {
			boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
		},
	},
	tittle: {
		"&:active": {
			color: "#00008E",
		},
	},
	cardContent: {
		minHeight: "120px",
	},
	cardActions: {
		padding: "16px",
	},
	avatar: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
	},
	dot: {
		height: "12px",
		width: "12px",
		borderRadius: "50%",
		display: "inline-block",
	},
}); */

const RepositoryCard = ({ repo, language }: any) => {
	/* const classes: any = useTheme();
	return (
		<Grid xs={12} sm={6} lg={3} className={classes.root}>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe" className={classes.avatar}>
							<span
								className="octicon octicon-repo"
								style={{ fontSize: "20px" }}
							></span>
						</Avatar>
					}
					title={
						<Typography variant="h6">
							<a
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className={classes.tittle}
								style={{ textDecoration: "none", color: "#551A8B" }}
							>
								{repo.name}
							</a>{" "}
						</Typography>
					}
				/>

				<CardContent className={classes.cardContent}>
					<Typography variant="body1">{repo.description}</Typography>
				</CardContent>
				<CardActions className={classes.cardActions}>
					{repo.language ? (
						<React.Fragment>
							<span
								className={classes.dot}
								style={{ backgroundColor: language[repo.language]["color"] }}
							></span>
							<Typography style={{ marginRight: "10px" }}>
								{repo.language}
							</Typography>
						</React.Fragment>
					) : null}
					{repo.stargazers_count >= 0 ? (
						<React.Fragment>
							<a
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: "none",
									marginRight: "10px",
									color: "#551A8B",
								}}
							>
								<span className="octicon octicon-star">
									{" "}
									{repo.stargazers_count}
								</span>
							</a>
						</React.Fragment>
					) : null}
					{repo.forks_count >= 0 ? (
						<React.Fragment>
							<a
								href={`${repo.html_url}/fork`}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: "none",
									marginRight: "10px",
									color: "#551A8B",
								}}
							>
								<span className="octicon octicon-repo-forked">
									{repo.forks_count}
								</span>
							</a>
						</React.Fragment>
					) : null}
				</CardActions>
			</Card>
		</Grid>
	); */
};

export default RepositoryCard;