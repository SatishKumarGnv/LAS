// import Card from "@material-ui/core/Card";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import RestoreIcon from "@material-ui/icons/Restore";
// import * as moment from "moment";
import * as React from "react";
import { INoteFileProps, ISearchArrayValues } from "../DefaultLayout/HomePage";

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

export interface INoteFileValues {
  readonly ApplicationId: string;
  readonly RoleName: null;
  readonly CreatedOn: string;
  readonly Status: string;
  readonly Comments: string;
  readonly CommentsBy: string;
  readonly UserName: null;
  readonly ActivityId: number;
  readonly CurrentActivityId: number;
  readonly StatusId: number;
  readonly Id: number;
}
export interface INoteFileList {
  readonly noteFileList: ReadonlyArray<INoteFileValues>;
}

const NoteFileInnerForm = (props: INoteFileList & ISearchArrayValues) => (
  <div className="white-card">
    <div className="heading-application">
      <RestoreIcon /> <h4>Application History </h4>
    </div>
    <div className="group-cards-note">
      {/* <div className="card-application"> */}
      {props.searchArray.length !== 0
        ? props.noteFileList.map(x => (
            <div>
              <div className="note-card">
                <div className="note-card-grid">
                  {x.Status === "Approved" ? (
                    <MySnackbarContent variant="success" />
                  ) : (
                    <MySnackbarContent variant="error" />
                  )}
                </div>
                <div className="dilog-list">
                  <h4 className="heading-application">{x.CommentsBy}</h4>
                  <h4>{x.Comments.slice(8, x.Comments.length - 10)}</h4>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  </div>
);

const NoteFileForm = (props: INoteFileProps & ISearchArrayValues) => (
  <div>
    <NoteFileInnerForm
      noteFileList={props.noteFiles}
      searchArray={props.searchArray}
    />
  </div>
);

export default NoteFileForm;
