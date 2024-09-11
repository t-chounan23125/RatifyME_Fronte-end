import React from "react"

import { Stack } from "@mui/material"

import theme from "../../assets/themes"

const sectionStyle = {
    boxShadow: theme.customShadows.default,
    borderRadius: theme.customShape.section,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "32px",
    bgcolor: theme.palette.customColors.white,
}

const PageSection = ({children}) => {
    return (
        <Stack
                component="section"
                flexDirection={{ xs: "column", md: "row" }}
                sx={sectionStyle}>
            {children}
        </Stack>
    )
}

export default PageSection