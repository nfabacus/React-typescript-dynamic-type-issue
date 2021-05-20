import * as React from "react";
import { render } from "react-dom";

interface HelpMessage {
  headerText?: string;
  footerText?: string;
  message?: string;
}

interface FieldProps {
  name: string;
  helpMessage?: string | HelpMessage;
}

const ConditionalPropsComponent: React.FC<FieldProps> = ({
  name,
  helpMessage = ""
}) => {
  const helpMessageIsString = typeof helpMessage === "string";
  const helpText = helpMessageIsString ? helpMessage : helpMessage?.message;

  return (
    <div>
      <h1>{name}</h1>
      {helpMessage ? (
        <div>
          {!helpMessageIsString && (
            <div>
              <p>{helpMessage?.headerText}</p>
              <p>{helpMessage?.message}</p>
              <p>{helpMessage?.footerText}</p>
            </div>
          )}
          {helpMessageIsString && <p>{helpText}</p>}
        </div>
      ) : (
        <p>No help message</p>
      )}
    </div>
  );
};

export default ConditionalPropsComponent;

const rootElement = document.getElementById("root");
render(
  <ConditionalPropsComponent
    name="Dynamic Type Prop"
    helpMessage={{
      headerText: "Header Text",
      footerText: "Footer Text",
      message: "This is a message text."
    }}
  />,
  rootElement
);
