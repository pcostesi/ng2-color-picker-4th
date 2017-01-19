import { Component, Input, Output, EventEmitter, OnInit, Self } from '@angular/core';
import { NgModel, ControlValueAccessor } from '@angular/forms';

import { ColorPickerConfiguration } from '../models';
import { IColorPickerConfiguration } from '../interfaces';

@Component({
    selector: `color-picker[ngModel]`,
    template: `
        <div ngbDropdown class="d-inline-block">
            <button class="btn btn-outline-primary" id="dropdownMenu1" ngbDropdownToggle>Toggle dropdown</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
               <button class="dropdown-item">Action - 1</button>
                <button class="dropdown-item">Another Action</button>
                <button class="dropdown-item">Something else is here</button>
            </div>
        </div>
    `,
    styles: [
        `.color-picker-container {
            display: inline-block; }`,

        `.current-color {
            display: inline-block;
            background-color: #ff0000;
            cursor: pointer; }`,

        `.color-picker-color {
            display: inline-block;
            margin-left: 4px;
            cursor: pointer; }`,

        `.color-picker-dropdown {
            padding-bottom: 0;
        }`
    ],
    providers: [ NgModel ]
})
export class ColorPickerComponent implements ControlValueAccessor, OnInit {

    public cd: NgModel;

    public onChange: any = Function.prototype;

    public onTouched: any = Function.prototype;

    public config: ColorPickerConfiguration;

    @Input() pickerConfig: IColorPickerConfiguration;

    constructor(@Self() cd: NgModel) {
        this.cd = cd;
        cd.valueAccessor = this;

        this.config = new ColorPickerConfiguration();
    }

    /** OnInit implementation. */
    ngOnInit() {
        this._processOptions(this.pickerConfig);
    }

    /** ControlValueAccessor implementation. */
    writeValue(value: any): void { }

    /** ControlValueAccessor implementation. */
    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    /** ControlValueAccessor implementation. */
    registerOnTouched(fn: (_: any) => {}): void {
        this.onTouched = fn;
    }

    /**
     * Update the current color based on selection.
     *
     * @param {string} color
     *
     * @memberOf ColorPickerComponent
      */
    public setColor(color: string) {
        this.cd.viewToModelUpdate(color);
        this.onTouched();
    }

    /**
     * Wire up configuration.
     *
     * @private
     * @param {IColorPickerConfiguration} opts
     *
     * @memberOf ColorPickerComponent
     */
    private _processOptions(opts: IColorPickerConfiguration) {
        if (opts != null) {

            const IsNumber = (val: any) => typeof(val) === 'number';
            const IsArray = (val: any) => Array.isArray(val);

            // availableColors
            if (IsArray(opts.availableColors)) {
                this.config.availableColors = opts.availableColors;
            }

            // width
            if (IsNumber(opts.width)) {
                this.config.width = opts.width;
            }

            // height
            if (IsNumber(opts.height)) {
                this.config.height = opts.height;
            }

            // borderRadius
            if (IsNumber(opts.borderRadius)) {
                this.config.borderRadius = opts.borderRadius;
            }
        }
    }
}
