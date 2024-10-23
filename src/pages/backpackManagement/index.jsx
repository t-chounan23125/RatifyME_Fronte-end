// Custom import
import DashboardContainer from "../../components/styles/DashboardContainer";
import PageTitle from "../../components/PageTitle";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import BackpackList from "./BackpackList";
import { useSelector } from "react-redux";
import { useFetchBadgeByEarnerQuery } from "../../store/api/badgeManagement/badgeApi";
import { skipToken } from "@reduxjs/toolkit/query";

const BackpackManagement = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);

    const [searchQuery, setSearchQuery] = useState("");
    const { earnerData } = useSelector((state) => state.global);

    const { data: badges } = useFetchBadgeByEarnerQuery(
        earnerData ? { earnerId: earnerData?.id, search: searchQuery } : skipToken,
    );
    console.log(earnerData.id, badges?.badgeClasses);

    const [result, setResult] = useState(badges?.totalRecords || 0);

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        if (badges?.totalRecords) {
            setResult(badges?.results);
        } else if (badges?.results) {
            setResult(badges.totalRecords);
        } else {
            setResult(0);
        }
    }, [badges]);

    const onPage = (newPage) => {
        setPage(newPage);
    };
    return (
        <DashboardContainer sx={{ pb: 4 }}>
            <PageTitle title="Backpack Management" />
            <SearchBar
                showButton={false}
                textInButton="Add Badge"
                badges={badges?.badgeClasses || []}
                onSearchChange={handleSearchChange}
                total={badges?.totalRecords || 0}
                onPage={onPage}
                limit={limit || []}
                page={page || []}
                result={result || []}
            >
                <BackpackList />
            </SearchBar>
        </DashboardContainer>
    );
};

export default BackpackManagement;
