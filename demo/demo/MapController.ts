/// <reference path="../../lib/esri.d.ts"/>

import esri = require("esri");
import Map = require("esri/map");
import Point = require("./Point");
import esriConfig = require("esri/config");

export = MapController;

class MapController {
    map: Map;

    constructor(public mapDiv: string) {
        esriConfig.defaults.io.proxyUrl = "/DojoProxy/proxy.ashx";
    }

    start() {
        var point = new Point(-122.45, 37.75); // long, lat
        point.log();

        var mapOptions: esri.MapOptions = {};
        mapOptions.basemap = "topo";
        mapOptions.center = point;
        mapOptions.zoom = 13;

        this.map = new Map(this.mapDiv, mapOptions);
    }
}
