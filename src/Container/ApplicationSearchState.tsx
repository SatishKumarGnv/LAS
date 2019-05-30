import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// tslint:disable-next-line:ordered-imports
import * as moment from "moment";
// import Typography from "@material-ui/core/Typography";
import * as React from "react";
import {
  getAgreementTypeValues,
  getAllocatedValues,
  GetApplicationSearchValues,
  getCityTypeValues
  // getLandAllocationTypeValues
  // getAllocatedValues
} from "../Api_Integration/ApplicationSearchService";
import { IAgremmentTypeValues, loader } from "../DefaultLayout/HomePage";
import ApplicationSearchForm from "../LandAllocation/ApplicationSearchForm";
import ApplicationSearchTable from "../LandAllocation/ApplicationSearchTable";
import { DateRange } from "./LoginAuditTrailState";
export interface IApplicationCityValues {
  readonly TownshipId: number;
  readonly TownshipName: string;
}
export interface ILandAllocationValues {
  readonly AllocationId: number;
  readonly AllocationName: string;
}
export interface ISearchExpandValueProps {
  readonly applicationSearchValues: IApplicationSearchTableItems;
}
export interface IApplicationSearchStateValues {
  readonly landAllocatedTo: string;
  readonly LandAllocatedToId: number;
  readonly authorizedPersonName: string;
  readonly allocationTypeId: number;
  readonly organizationName: string;
  readonly authorisedPersonEmailAddress: string;
  readonly AgreementId: number;
  readonly AgreementName: string;
  readonly enterApplicationId: string;
  readonly mobileNumber: string;
  readonly TownshipId: number;
  readonly TownshipName: string;
  readonly LandAllocationTypeName: string;
  readonly LandAllocationId: number;
  readonly TypeOfFilter: number;
  readonly FromDate: string;
  readonly ToDate: string;
  onHandleSearch(event: any): void;
}
export interface ISelectThemeCityProps {
  readonly selectThemeCityTYpeValues: ReadonlyArray<IApplicationCityValues>;
}
export interface ISelectAgrementTypeProps {
  readonly agreementTypeValues: ReadonlyArray<IAgremmentTypeValues>;
}
export interface ISelectAllocationProps {
  readonly selectLandAllocationTypeValues: ReadonlyArray<ILandAllocationValues>;
  handleLandAllocationChange(event: any): void;
  handleAllocationClick(event: any): void;
}
export interface IApplicationSearchTableItems {
  readonly ApplicationId: string;
  readonly TownshipName: string;
  readonly OrgName: string;
  readonly Status: string;
  readonly RequiredLandSize: number;
  readonly AgreementTypeName: string;
  readonly AllocationSubTypeName: string;
  readonly AllocationTypeName: string;
  readonly UserName: string;
  readonly UserPhoneNumber: string;
  readonly UserEmailAddress: string;
}
export interface IApplicationSearchTableProps {
  readonly applicationSearchValues: IApplicationSearchTableItems;
  readonly expandApplicationId: string;
  readonly dialogExpandOpen: boolean;
  onHandleClick(event: any): void;
}
export interface IApplicationSearchTableList {
  readonly applicationTableValues: ReadonlyArray<IApplicationSearchTableItems>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly expandApplicationId: string;
  readonly dialogExpandOpen: boolean;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  onHandleSearch(event: any): void;
  onHandleClick(event: any): void;
  onHandleClose(): void;
}
export interface ISearchExpandRowProps {
  readonly applicationTableValues: ReadonlyArray<IApplicationSearchTableItems>;
  readonly expandApplicationId: string;
  readonly dialogExpandOpen: boolean;
  onHandleClick(event: any): void;
}
class ApplicationSearchState extends React.Component<
  IApplicationSearchStateValues &
    IApplicationSearchTableList &
    IApplicationCityValues &
    ISelectAgrementTypeProps &
    ISearchExpandRowProps
> {
  public state = {
    LandAllocatedToId: 1,
    landAllocatedTo: "1",
    // tslint:disable-next-line:object-literal-sort-keys
    authorizedPersonName: "",
    // tslint:disable-next-line:object-literal-sort-keys
    allocationTypeId: 0,
    organizationName: "",
    authorisedPersonEmailAddress: "",
    AgreementId: 0,
    AgreementName: "",
    enterApplicationId: "",
    mobileNumber: "",
    applicationTableValues: [],
    page: 0,
    rowsPerPage: 5,
    count: 0,
    searchInput: "",
    emptyRows: 0,
    agreementTypeValues: [],
    TownshipId: 0,
    TownshipName: "",
    AllocationId: 0,
    AllocationName: "",
    dialogExpandOpen: false,
    selectThemeCityTYpeValues: [],
    selectLandAllocationTypeValues: [],
    dropdownOpen: false,
    CountryId: 0,
    CountryName: "",
    open: false,
    expandApplicationId: "",
    ToDate: "",
    TypeOfFilter: 0,
    FromDate: "",
    date: new Date()
  };
  constructor(
    props: IApplicationSearchStateValues &
      IApplicationCityValues &
      ILandAllocationValues &
      IApplicationSearchTableList &
      ISearchExpandRowProps &
      ISelectAgrementTypeProps
  ) {
    super(props);
  }
  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res = await getAllocatedValues(this.state.LandAllocatedToId);
      const res2 = await getCityTypeValues();
      this.setState({
        ...this.state,
        selectLandAllocationTypeValues: res.objAllocationTypesList,
        selectThemeCityTYpeValues: res2.townshipViewModelLst
      });
      if (loader != null) {
        loader.style.display = "none";
      }
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
      if (loader != null) {
        loader.style.display = "block";
      }
    }
  }
  public handleClose = () => {
    this.setState({
      ...this.state,
      dialogExpandOpen: false
    });
  };
  public onHandleSearch = (event: any) => {
    if (event.TypeOfFilter === 6) {
      this.setState({
        AgreementId: event.AgreementId,
        AllocationId: event.LandAllocationId,
        enterApplicationId: event.enterApplicationId,
        // tslint:disable-next-line:object-literal-sort-keys
        FromDate: event.FromDate,
        TownshipId: event.TownshipId,
        ToDate: event.ToDate,
        TypeOfFilter: event.TypeOfFilter,
        authorisedPersonEmailAddress: event.authorisedPersonEmailAddress,
        authorizedPersonName: event.authorizedPersonName,
        mobileNumber: event.mobileNumber,
        organizationName: event.organizationName
      });
    } else {
      const dates = DateRange(event.TypeOfFilter);
      this.setState({
        AgreementId: event.AgreementId,
        AllocationId: event.LandAllocationId,
        FromDate: moment(dates[0]).format("DD/MM/YYYY"),
        TownshipId: event.TownshipId,
        // tslint:disable-next-line:object-literal-sort-keys
        ToDate: moment(dates[1]).format("DD/MM/YYYY"),
        TypeOfFilter: event.TypeOfFilter,
        authorisedPersonEmailAddress: event.authorisedPersonEmailAddress,
        authorizedPersonName: event.authorizedPersonName,
        mobileNumber: event.mobileNumber,
        // tslint:disable-next-line:object-literal-sort-keys
        enterApplicationId: event.enterApplicationId,
        organizationName: event.organizationName
      });
    }
    GetApplicationSearchValues(
      this.state.LandAllocatedToId,
      this.state.AllocationId,
      this.state.AgreementId,
      this.state.TownshipId,
      this.state.organizationName,
      this.state.enterApplicationId,
      this.state.authorizedPersonName,
      this.state.authorisedPersonEmailAddress,
      this.state.mobileNumber,
      this.state.FromDate,
      this.state.ToDate
    )
      .then(res => {
        this.setState({
          ...this.state,
          applicationTableValues: res.aaData,
          count: res.aaData.length,
          searchInput: ""
        });
      })
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
  };
  // onClick Expands based on Application Id
  public handleClick = (event: any) => {
    this.setState({
      ...this.state,
      dialogExpandOpen: true,
      expandApplicationId: event,
      open: !this.state.open
    });
  };
  public handleLandAllocationClick = (e: { target: { value: string } }) => {
    getAllocatedValues(parseInt(e.target.value, 10))
      .then(res => {
        this.setState({
          ...this.state,
          landAllocatedTo: e.target.value,
          // tslint:disable-next-line:object-literal-sort-keys
          LandAllocatedToId: parseInt(e.target.value, 10),
          selectLandAllocationTypeValues: res.objAllocationTypesList
        });
      })
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
  };
  public handleAllocationChange = (event: any) => {
    getAgreementTypeValues(
      this.state.LandAllocatedToId,
      event.target.value
    ).then(res => {
      this.setState({
        ...this.state,
        AllocationId: event.target.value,
        agreementTypeValues: res.objAgreementTypesList
      });
    });
  };
  public handleTableSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.applicationTableValues.filter(
      (x: IApplicationSearchTableItems) =>
        searchInput !== ""
          ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.TownshipName.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.OrgName.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.AllocationTypeName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.Status.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.RequiredLandSize.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          : true
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };
  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div className="inner-header-titile">
          {/* <img src="/images/login-audit-icon.png" /> */}
          <h2>Application Search</h2>
        </div>
        <Card className="card-none">
          <CardContent>
            <ApplicationSearchForm
              TypeOfFilter={this.state.TypeOfFilter}
              FromDate={this.state.FromDate}
              ToDate={this.state.ToDate}
              LandAllocatedToId={this.state.LandAllocatedToId}
              landAllocatedTo={this.state.landAllocatedTo}
              authorizedPersonName={this.state.authorizedPersonName}
              allocationTypeId={this.state.allocationTypeId}
              organizationName={this.state.organizationName}
              authorisedPersonEmailAddress={
                this.state.authorisedPersonEmailAddress
              }
              AgreementId={this.state.AgreementId}
              AgreementName={this.state.AgreementName}
              enterApplicationId={this.state.enterApplicationId}
              mobileNumber={this.state.mobileNumber}
              onHandleSearch={this.onHandleSearch}
              agreementTypeValues={this.state.agreementTypeValues}
              selectThemeCityTYpeValues={this.state.selectThemeCityTYpeValues}
              selectLandAllocationTypeValues={
                this.state.selectLandAllocationTypeValues
              }
              TownshipId={this.state.TownshipId}
              TownshipName={this.state.TownshipName}
              LandAllocationTypeName={this.state.AllocationName}
              LandAllocationId={this.state.AllocationId}
              handleAllocationClick={this.handleAllocationChange}
              handleLandAllocationChange={this.handleLandAllocationClick}
            />
          </CardContent>
        </Card>
        {(this.state.TownshipId !== 0 && this.state.LandAllocatedToId !== 0) ||
        this.state.TypeOfFilter !== 0 ||
        this.state.TownshipId !== 0 ||
        this.state.AllocationId !== 0 ? (
          <div>
            <Card className="graph-card">
              <CardContent>
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h4"
                  className="grap-heading"
                >
                  <img src="/images/table-icon.png" />
                  Search Results
                </Typography>
              </CardContent>
              <ApplicationSearchTable
                onHandleClick={this.handleClick}
                expandApplicationId={this.state.expandApplicationId}
                // open={this.state.open}
                applicationTableValues={this.state.applicationTableValues}
                count={this.state.count}
                onHandlePageChange={this.handleChangePage}
                onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                page={this.state.page}
                rowsPerPage={this.state.rowsPerPage}
                searchInput={this.state.searchInput}
                onHandleSearch={this.handleTableSearch}
                dialogExpandOpen={this.state.dialogExpandOpen}
                onHandleClose={this.handleClose}
              />
            </Card>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default ApplicationSearchState;
