import { GridstackOptions } from './models/gridstack-options';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, QueryList, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { GridstackItemComponent } from './gridstack-item.component';
import { Item } from './models/item';
import { GridstackService } from '../services/gridstack.service';
import { Grid } from './models/grid';
export declare class GridstackComponent implements OnInit, OnDestroy, AfterViewInit, Grid {
    private _zone;
    private _el;
    private _renderer;
    private _gridstackService;
    gridstackItems: QueryList<GridstackItemComponent>;
    options: GridstackOptions;
    animate: boolean | string;
    width: number | string;
    height: number | string;
    change: EventEmitter<Item[]>;
    added: EventEmitter<Item[]>;
    removed: EventEmitter<Item[]>;
    generatedId: string;
    private _gridstack;
    private _ngUnsubscribe;
    constructor(_zone: NgZone, _el: ElementRef, _renderer: Renderer2, _gridstackService: GridstackService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _handleItemChanges(items);
    private _addItem(item);
    private _removeItem(item);
    private _setAttributeIfNotUndefined(attrName, val);
    private _isValueTrue(val);
}