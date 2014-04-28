﻿/// <reference path="../../lib/esri.d.ts" />
define(["require", "exports", "esri/map", "esri/layers/ImageServiceParameters", "dojo/parser", "esri/config"], function(require, exports, Map, ImageServiceParameters, parser, esriConfig) {
    

    var CanvasRasterLayerController = (function () {
        function CanvasRasterLayerController(mapDiv, initialBasemap, imageServiceLayerUrl) {
            this.mapDiv = mapDiv;
            this.initialBasemap = initialBasemap;
            this.imageServiceLayerUrl = imageServiceLayerUrl;
            parser.parse();
            esriConfig.defaults.io.proxyUrl = "/EsriProxy/proxy.ashx";
        }
        CanvasRasterLayerController.prototype.start = function () {
            try  {
                var map = new Map(this.mapDiv, {
                    basemap: this.initialBasemap,
                    center: [-79.40, 43.64],
                    zoom: 12
                });

                var params = new ImageServiceParameters();
                params.noData = 0;
                var imageServiceLayer = new ArcGISImageServiceLayer(this.imageServiceLayerUrl, {
                    imageServiceParameters: params,
                    opacity: 0.75
                });
                map.addLayer(imageServiceLayer);
            } catch (error) {
                console.log(error);
            }
        };
        return CanvasRasterLayerController;
    })();
    return CanvasRasterLayerController;
});
//# sourceMappingURL=CanvasRasterLayerController.js.map
