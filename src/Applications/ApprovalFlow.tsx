import Card from "@material-ui/core/Card";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
// import RestoreIcon from "@material-ui/icons/Restore";
// import * as moment from "moment";
import * as React from "react";
import {
  //   INoteFileProps,
  IApprovalFlowProps,
  ISearchArrayValues
} from "../DefaultLayout/HomePage";

const variantIcon = {
  success: CheckCircleIcon,
  // tslint:disable-next-line:object-literal-sort-keys
  error: CloseIcon
};

export const MySnackbarContent = (props: any) => {
  const { variant } = props;
  const Icon = variantIcon[variant];

  return <SnackbarContent message={<Icon />} />;
};

export interface IApprovalFlowValues {
  readonly WorkFlowActivityName: string;
  readonly CreatedOn: null;
  readonly CreatedBy: number;
  readonly ModifiedOn: null;
  readonly ModifiedBy: number;
  readonly WorkFlowActivityId: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
  readonly UserName: string;
  readonly AllocateTo: string;
  readonly AllocationType: string;
  readonly AgreementType: string;
  readonly CurrentActivityId: number;
  readonly ActivitityOrderId: number;
}
export interface IApprovalFlowList {
  readonly approvalFlowList: ReadonlyArray<IApprovalFlowValues>;
}

const NoteFileInnerForm = (props: IApprovalFlowList & ISearchArrayValues) => (
  <div className="white-card">
    <div className="heading-application">
      {/* <RestoreIcon /> <h4>Application History </h4> */}
    </div>
    <div className="group-cards">
      {/* <div className="card-application"> */}
      {props.searchArray.length !== 0
        ? props.approvalFlowList.map(x => (
            <div className="Application-card">
              <Card>
                <div>
                  {x.WorkFlowActivityName === "FormFilling" ? (
                    <img src="/images/Artboard 2.png" />
                  ) : (
                    <img src="/images/Artboard 1.png" />
                  )}
                  <h3>
                    {x.UserName}({x.WorkFlowActivityName})
                  </h3>
                </div>
              </Card>
            </div>
          ))
        : ""}
    </div>
  </div>
  // </div>
);

const ApprovalForm = (props: IApprovalFlowProps & ISearchArrayValues) => (
  <div>
    <NoteFileInnerForm
      approvalFlowList={props.approvalFiles}
      searchArray={props.searchArray}
    />
  </div>
);

export default ApprovalForm;
