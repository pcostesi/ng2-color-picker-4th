# ng2-color-picker-4th

Simple color picker for Angular 2 with ng-bootstrap dependency

![Screenshot open](https://raw.githubusercontent.com/daniel4thsource/ng2-color-picker-4th/master/assets/screenshot-color-picker-open.png)

## Dependencies

The module relies on `ng-bootstrap` for dropdown functionality. (https://ng-bootstrap.github.io)

## Installation

To include in your project install via NPM with:

```
npm install --save ng2-color-picker-4th
```

You will then need to include the module to your app.module.ts:

```typescript
import { ColorPickerModule4th } from 'ng2-color-picker-4th';

// ...

@NgModule({
    imports: [
        ColorPickerModule4th
    ]
})
///...
```

Finally, include the component in your HTML as per the next section.

## HTML Component Markup

Once the module is installed, you will need to add HTML markup to include the picker in a component.
The minimum requirement is an [(ngModel)] attribute, which should provide a string representation of a color.

```html
<color-picker
    [(ngModel)]="color">
</color-picker>
```

It is possible to configure `ng2-color-picker` by providing a configuration object to the `[pickerConfig]` attribute (see the next section for more details on this object):

```html
<color-picker
    [(ngModel)]="color"
    [pickerConfig]="pickerOptions">
</color-picker>
```

## Configuration

`ng2-color-picker` exposes an interface to provide an indication of valid configuration properties, this can be referenced as a type for your configuration object by importing it:

```typescript
import { IPickerConfiguration } from 'ng2-color-picker-4th';
```

Which can then be used as the configuration object type in your component:

```typescript
public pickerOptions: IPickerConfiguration;
```

Current list of configuration options, types and default values:

| Property | Type | Default | Description. |
| -------- | ---- | ------- | ------------ |
| width | `number` | 25 | Width of the picker control. |
| height | `number` | 25 | Height of the picker control. |
| borderRadius | `number` | 4 | Radius of the picker control border. |
| availableColors | `string[]` | `['#f00', '#0f0', '#00f']` | Default list of colors available from the dropdown menu. |
