function UserResultCard(props) {
    const card = (
        <React.Fragment>
            <CardHeader
                title={props.userResult.announcement.topic}
                subheader={props.userResult.announcement.pub_date_time}
            />
            <CardActionArea onClick={handleOpenPopup}>
                <CardContent>
                    <Grid container spacing={2} columns={4}>
                        <Grid item xs={1}>
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                                S
                            </Avatar>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h5" component="div">
                                {props.userResult.result}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.userResult.remark}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpenPopup} size="small">Read More</Button>
                </CardActions>
            </CardActionArea>
        </React.Fragment>
    )

    return (
        <Card sx={{ maxWidth: 345 }}>{card}</Card>
    )
}

export default UserResultCard;
