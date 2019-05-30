import * as React from "react";

// import WitnessDetailsForm from "../ProposalForm/WitnessDetails";

import RichTextEditor from "react-rte";

export interface IEmailTemplateStateValues {
  readonly textBody: string;

  onChange(event: any): void;
}

class Editor extends React.Component<IEmailTemplateStateValues> {
  public state = {
    value: RichTextEditor.createEmptyValue()
  };

  constructor(props: IEmailTemplateStateValues) {
    super(props);
  }

  public onChange = (value: any) => {
    this.setState({ ...this.state, value });
    if (this.props.onChange) {
      this.props.onChange(value.toString("html"));
    }
  
  };

  public onHandleSubmit = (event: IEmailTemplateStateValues) => {
    // tslint:disable-next-line:no-console
    console.log(event);
  };

  public render() {
    return (
      <div>
        <RichTextEditor
          name="textBody"
          value={this.state.value}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={(event: any) => this.onChange(event)}
        />
      </div>
    );
  }
}

export default Editor;
