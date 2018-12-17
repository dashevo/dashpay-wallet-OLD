/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from "react";
import { navigation } from "navigation";
import { StoreProvider } from "containers";
import { LanguageProvider } from "containers";
import state from "state";
import translations from "translations";
import type { ReactComponent } from "./types";
import type { ReactElement } from "./types";

function enhance(Component: ReactComponent): ReactComponent {
  return class EnhancedComponent extends React.Component<any> {
    constructor(props) {
      super(props);
      this.navigation = navigation(props);
    }

    render(): ReactElement {
      const { componentId, rootTag, ...props } = this.props;
      return (
        <StoreProvider store={state}>
          <LanguageProvider translations={translations}>
            <Component
              {...props}
              navigation={this.navigation}
            />
          </LanguageProvider>
        </StoreProvider>
      );
    }
  };
}

export default enhance;
