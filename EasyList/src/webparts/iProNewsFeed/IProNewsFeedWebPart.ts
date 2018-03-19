import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'IProNewsFeedWebPartStrings';
import IProNewsFeed from './components/IProNewsFeed';
import { IIProNewsFeedProps } from './components/IIProNewsFeedProps';

export interface IIProNewsFeedWebPartProps {
  description: string;
}

export default class IProNewsFeedWebPart extends BaseClientSideWebPart<IIProNewsFeedWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIProNewsFeedProps > = React.createElement(
      IProNewsFeed,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}