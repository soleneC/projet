import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Widget1 from '../src/component/Widget1';
import Widget2 from '../src/component/Widget2';
import Widget3 from '../src/component/Widget3';
import Widget4 from '../src/component/Widget4';
import Widget5 from '../src/component/Widget5';
import Widget6 from '../src/component/Widget6';
import Widget7 from '../src/component/Widget7';


storiesOf('Widgets', module)
  .addDecorator(story => <div style={{ "background": "black" }}>{ story() }</div>)
  .add('Widget1', () => <Widget1/>)
  .add('Widget2', () => <Widget2/>)
  .add('Widget3', () => <Widget3/>)
  .add('Widget4', () => <Widget4/>)
  .add('Widget5', () => <Widget5/>)
  .add('Widget6', () => <Widget6/>)
  .add('Widget7', () => <Widget7/>)
