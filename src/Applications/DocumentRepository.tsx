import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDocumentPropValues } from "src/DefaultLayout/HomePage";
import { IDocumentRepositoryState } from "../DefaultLayout/HomePage";

const DocumentRepository = (props: IDocumentRepositoryState) => (
  <div className="dashboard-container">
    <div className="img-container">
      <li>
        {props.documentList2.map((x: IDocumentPropValues) => (
          <div className="white-card-documentRepo">
            <div className="child-card">
              <img className="documentrepo-image" src="/images/approve.png" />
              <h4 className="color-h4">{x.PhotoIdTypeName}</h4>
              <img src={x.FileType} />
              <Button
                className="save-btn-view"
                color="primary"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={event => props.handleClick(event, x.PhotoId)}
              >
                View
              </Button>

              {/* <input
              accept="image/png, image/jpeg"
              id={`image${x.PhotoId}`}
              type="file"
              name={`image${x.PhotoId}`}
              // tslint:disable-next-line:jsx-no-lambda
              // onChange={evt =>
              //   props.handleUploadImageChange(evt, `image${x.PhotoId}`)
              // }
            /> */}
            </div>
          </div>
        ))}
      </li>
    </div>
  </div>
);
export default DocumentRepository;
