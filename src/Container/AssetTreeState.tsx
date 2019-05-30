import * as React from "react";
import AssetTreeList from "../Asset-Management/AssetTreeTable";

export interface IAssetTreeItemValues {
  readonly Name: string;
  readonly Level: string;
  readonly Type: string;
  readonly FriendlyName: string;
  readonly ConditionIndex: number;
  readonly ReplacementCost: number;
  readonly Quantity: number;
}

export interface IAssetTreeItemProps {
  readonly assetTreeValues: IAssetTreeItemValues;
}

export interface IAssetTreeListProps {
  readonly assetTreeList: ReadonlyArray<IAssetTreeItemValues>;
}
class AssetTreeState extends React.Component<IAssetTreeListProps> {
  public state = {
    assetTreeList: []
  };
  public render() {
    return <AssetTreeList assetTreeList={this.state.assetTreeList} />;
  }
}

export default AssetTreeState;
