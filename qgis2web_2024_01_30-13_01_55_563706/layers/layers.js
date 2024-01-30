var wms_layers = [];

var lyr_20240130_RGB_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "20240130_RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20240130_RGB_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686050.961985, -1973211.353674, 13695068.669474, -1969321.545041]
                            })
                        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_DisturbanceOutline_3 = new ol.format.GeoJSON();
var features_DisturbanceOutline_3 = format_DisturbanceOutline_3.readFeatures(json_DisturbanceOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DisturbanceOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_3.addFeatures(features_DisturbanceOutline_3);
var lyr_DisturbanceOutline_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DisturbanceOutline_3, 
                style: style_DisturbanceOutline_3,
                interactive: true,
                title: '<img src="styles/legend/DisturbanceOutline_3.png" /> Disturbance Outline'
            });
var format_HeritageExlcusionZone_4 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_4 = format_HeritageExlcusionZone_4.readFeatures(json_HeritageExlcusionZone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageExlcusionZone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_4.addFeatures(features_HeritageExlcusionZone_4);
var lyr_HeritageExlcusionZone_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeritageExlcusionZone_4, 
                style: style_HeritageExlcusionZone_4,
                interactive: true,
                title: '<img src="styles/legend/HeritageExlcusionZone_4.png" /> Heritage Exlcusion Zone'
            });
var format_original_exclusion_boundary_5 = new ol.format.GeoJSON();
var features_original_exclusion_boundary_5 = format_original_exclusion_boundary_5.readFeatures(json_original_exclusion_boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_original_exclusion_boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_original_exclusion_boundary_5.addFeatures(features_original_exclusion_boundary_5);
var lyr_original_exclusion_boundary_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_original_exclusion_boundary_5, 
                style: style_original_exclusion_boundary_5,
                interactive: true,
                title: '<img src="styles/legend/original_exclusion_boundary_5.png" /> original_exclusion_boundary'
            });
var format_TOPLLocalities_6 = new ol.format.GeoJSON();
var features_TOPLLocalities_6 = format_TOPLLocalities_6.readFeatures(json_TOPLLocalities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPLLocalities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPLLocalities_6.addFeatures(features_TOPLLocalities_6);
var lyr_TOPLLocalities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOPLLocalities_6, 
                style: style_TOPLLocalities_6,
                interactive: true,
                title: '<img src="styles/legend/TOPLLocalities_6.png" /> TOPL Localities'
            });
var format_ArtefactSites_7 = new ol.format.GeoJSON();
var features_ArtefactSites_7 = format_ArtefactSites_7.readFeatures(json_ArtefactSites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtefactSites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtefactSites_7.addFeatures(features_ArtefactSites_7);
var lyr_ArtefactSites_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArtefactSites_7, 
                style: style_ArtefactSites_7,
                interactive: true,
                title: '<img src="styles/legend/ArtefactSites_7.png" /> Artefact Sites'
            });
var group_image = new ol.layer.Group({
                                layers: [lyr_20240130_RGB_0,lyr_GoogleSatellite_1,],
                                title: "image"});

lyr_20240130_RGB_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_DisturbanceOutline_3.setVisible(true);lyr_HeritageExlcusionZone_4.setVisible(true);lyr_original_exclusion_boundary_5.setVisible(true);lyr_TOPLLocalities_6.setVisible(true);lyr_ArtefactSites_7.setVisible(true);
var layersList = [group_image,lyr_Roads_2,lyr_DisturbanceOutline_3,lyr_HeritageExlcusionZone_4,lyr_original_exclusion_boundary_5,lyr_TOPLLocalities_6,lyr_ArtefactSites_7];
lyr_Roads_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'project': 'project', 'length': 'length', });
lyr_DisturbanceOutline_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'name': 'name', 'land use': 'land use', 'description': 'description', 'tenement': 'tenement', 'date cleared': 'date cleared', 'mrf category': 'mrf category', 'permit number': 'permit number', 'area (ha)': 'area (ha)', 'layer': 'layer', 'path': 'path', });
lyr_HeritageExlcusionZone_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_original_exclusion_boundary_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TOPLLocalities_6.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'name': 'name', 'locality': 'locality', });
lyr_ArtefactSites_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'artefact': 'artefact', });
lyr_Roads_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'project': 'TextEdit', 'length': 'TextEdit', });
lyr_DisturbanceOutline_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', 'land use': 'TextEdit', 'description': 'TextEdit', 'tenement': 'TextEdit', 'date cleared': 'DateTime', 'mrf category': 'TextEdit', 'permit number': 'TextEdit', 'area (ha)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_HeritageExlcusionZone_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_original_exclusion_boundary_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TOPLLocalities_6.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'name': 'TextEdit', 'locality': 'TextEdit', });
lyr_ArtefactSites_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'artefact': 'TextEdit', });
lyr_Roads_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'project': 'no label', 'length': 'no label', });
lyr_DisturbanceOutline_3.set('fieldLabels', {'id': 'header label - visible with data', 'fid': 'no label', 'name': 'no label', 'land use': 'no label', 'description': 'no label', 'tenement': 'no label', 'date cleared': 'no label', 'mrf category': 'no label', 'permit number': 'no label', 'area (ha)': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HeritageExlcusionZone_4.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_original_exclusion_boundary_5.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_TOPLLocalities_6.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'name': 'hidden field', 'locality': 'no label', });
lyr_ArtefactSites_7.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'artefact': 'no label', });
lyr_ArtefactSites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});