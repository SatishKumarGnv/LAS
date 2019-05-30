import {
  IDistrictValues,
  IPropertySearchResultTaxValues
} from "src/DefaultLayout/HomePage";
import { IConfirmationProps } from "src/PTMSMASTERS/PropertySearchAndTaxPay/ComfirmationForm";
import { ISearchSessionProps } from "src/PTMSMASTERS/PropertySearchAndTaxPay/SearchSessionForm";
import { url } from "./Config";
import { httpGet, httpPost } from "./MyProfileService";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export const PostPropertySearchPaytax = (values: ISearchSessionProps) => {
  const MandalName = values.selectMandalValues
    .filter((x: IDistrictValues) => x.MandalId === values.MandalId)
    .map((x: IDistrictValues) => x.Description)[0];

  const MuncipalCorporation = values.selectMunciValues
    .filter((x: IDistrictValues) => x.MunciId === values.MunciId)
    .map((x: IDistrictValues) => x.Description)[0];

  const TownShipName = values.selectTownValues
    .filter((x: IDistrictValues) => x.TownId === values.TownId)
    .map((x: IDistrictValues) => x.Description)[0];

  const body = JSON.stringify({
    CreatedBy: UserId,
    DistrictName: values.Description,
    MandalName,
    Muncipal_Corporation: MuncipalCorporation,
    OwnerName: values.OwnerName,
    TownShipName
  });
  return httpPost("AssessmentAPI/PropertySearch_Paytax ", body);
};

export const GetSelectedUsers = () => {
  return httpGet("AssessmentAPI/getUsers_receipts");
};

// view bill

export const GetViewBillApi = (values: IPropertySearchResultTaxValues) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return fetch(
    `${url}AssessmentAPI/UploadDocumentsForApplication?TotalAmount=${
      values.TaxAmount
    }&Year=${currentYear}&Percent=${1}&UserId=${UserId}&RequestID=${
      values.RequestId
    }`,
    {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const GetConfirmationInsertTaxDetails = (values: IConfirmationProps) => {
  const body = JSON.stringify({
    PayMentMode: values.paymentMode,
    PayorAddress: values.houseNoBuildingName,
    PayorEmail: values.emailId,
    PayorMobileNumber: values.mobileNumber,
    PayorName: values.payerName,
    PropertyID: values.propertyType,
    TaxAmount: values.taxAmount,
    // tslint:disable-next-line:object-literal-sort-keys
    ChequeNumber: "",
    ChequeDate: "",
    receiptCollectedby: values.selectUserName,
    BookReceiptNo: values.bookReceiptNumber,
    OwnerName: values.OwnerName,
    referanceID: values.referanceID
  });
  return httpPost("AssessmentAPI/InsertTaxDetails", body);
};

// sadaptms.com:894/api/
