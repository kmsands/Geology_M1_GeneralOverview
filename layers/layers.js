ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([491405.198780, 8068657.777925, 502313.580035, 8075333.305717]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: "Roads",
                interactive: false,
                title: '<img src="styles/legend/Roads_1.png" /> Roads'
            });
var format_DisturbanceOutline_2 = new ol.format.GeoJSON();
var features_DisturbanceOutline_2 = format_DisturbanceOutline_2.readFeatures(json_DisturbanceOutline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_2.addFeatures(features_DisturbanceOutline_2);
var lyr_DisturbanceOutline_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisturbanceOutline_2, 
                style: style_DisturbanceOutline_2,
                popuplayertitle: "Disturbance Outline",
                interactive: false,
                title: '<img src="styles/legend/DisturbanceOutline_2.png" /> Disturbance Outline'
            });
var format_HeritageExlcusionZone_3 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_3 = format_HeritageExlcusionZone_3.readFeatures(json_HeritageExlcusionZone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HeritageExlcusionZone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_3.addFeatures(features_HeritageExlcusionZone_3);
var lyr_HeritageExlcusionZone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageExlcusionZone_3, 
                style: style_HeritageExlcusionZone_3,
                popuplayertitle: "Heritage Exlcusion Zone",
                interactive: true,
                title: '<img src="styles/legend/HeritageExlcusionZone_3.png" /> Heritage Exlcusion Zone'
            });
var format_original_exclusion_boundary_4 = new ol.format.GeoJSON();
var features_original_exclusion_boundary_4 = format_original_exclusion_boundary_4.readFeatures(json_original_exclusion_boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_original_exclusion_boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_original_exclusion_boundary_4.addFeatures(features_original_exclusion_boundary_4);
var lyr_original_exclusion_boundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_original_exclusion_boundary_4, 
                style: style_original_exclusion_boundary_4,
                popuplayertitle: "original_exclusion_boundary",
                interactive: false,
                title: '<img src="styles/legend/original_exclusion_boundary_4.png" /> original_exclusion_boundary'
            });
var format_TOPLLocalities_5 = new ol.format.GeoJSON();
var features_TOPLLocalities_5 = format_TOPLLocalities_5.readFeatures(json_TOPLLocalities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_TOPLLocalities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPLLocalities_5.addFeatures(features_TOPLLocalities_5);
var lyr_TOPLLocalities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPLLocalities_5, 
                style: style_TOPLLocalities_5,
                popuplayertitle: "TOPL Localities",
                interactive: true,
                title: '<img src="styles/legend/TOPLLocalities_5.png" /> TOPL Localities'
            });
var format_ArtefactSites_6 = new ol.format.GeoJSON();
var features_ArtefactSites_6 = format_ArtefactSites_6.readFeatures(json_ArtefactSites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_ArtefactSites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtefactSites_6.addFeatures(features_ArtefactSites_6);
var lyr_ArtefactSites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtefactSites_6, 
                style: style_ArtefactSites_6,
                popuplayertitle: "Artefact Sites",
                interactive: true,
                title: '<img src="styles/legend/ArtefactSites_6.png" /> Artefact Sites'
            });
var group_image = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "image"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_DisturbanceOutline_2.setVisible(true);lyr_HeritageExlcusionZone_3.setVisible(true);lyr_original_exclusion_boundary_4.setVisible(true);lyr_TOPLLocalities_5.setVisible(true);lyr_ArtefactSites_6.setVisible(true);
var layersList = [group_image,lyr_Roads_1,lyr_DisturbanceOutline_2,lyr_HeritageExlcusionZone_3,lyr_original_exclusion_boundary_4,lyr_TOPLLocalities_5,lyr_ArtefactSites_6];
lyr_Roads_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'project': 'project', 'length': 'length', 'display': 'display', 'id': 'id', });
lyr_DisturbanceOutline_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area (ha)': 'Area (ha)', });
lyr_HeritageExlcusionZone_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_original_exclusion_boundary_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TOPLLocalities_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'locality': 'locality', });
lyr_ArtefactSites_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'artefact': 'artefact', 'altLabel': 'altLabel', });
lyr_Roads_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'project': 'TextEdit', 'length': 'TextEdit', 'display': '', 'id': 'TextEdit', });
lyr_DisturbanceOutline_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area (ha)': 'TextEdit', });
lyr_HeritageExlcusionZone_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_original_exclusion_boundary_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TOPLLocalities_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'locality': 'TextEdit', });
lyr_ArtefactSites_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'artefact': 'TextEdit', 'altLabel': '', });
lyr_Roads_1.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'project': 'no label', 'length': 'no label', 'display': 'no label', 'id': 'no label', });
lyr_DisturbanceOutline_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Area (ha)': 'no label', });
lyr_HeritageExlcusionZone_3.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_original_exclusion_boundary_4.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_TOPLLocalities_5.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'locality': 'no label', });
lyr_ArtefactSites_6.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'artefact': 'no label', 'altLabel': 'hidden field', });
lyr_ArtefactSites_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});