ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7851").setExtent([490696.237651, 8069504.766884, 501604.618906, 8076180.294676]);
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
var lyr_site_comp_may_2024_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "site_comp_may_2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/site_comp_may_2024_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047661, 13690974.580305, -1969212.879783]
                            })
                        });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: "Roads",
                interactive: false,
                    title: '<img src="styles/legend/Roads_2.png" /> Roads'
                });
var format_DisturbanceOutline_3 = new ol.format.GeoJSON();
var features_DisturbanceOutline_3 = format_DisturbanceOutline_3.readFeatures(json_DisturbanceOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_3.addFeatures(features_DisturbanceOutline_3);
var lyr_DisturbanceOutline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisturbanceOutline_3, 
                style: style_DisturbanceOutline_3,
                popuplayertitle: "Disturbance Outline",
                interactive: false,
                    title: '<img src="styles/legend/DisturbanceOutline_3.png" /> Disturbance Outline'
                });
var format_HeritageExlcusionZone_4 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_4 = format_HeritageExlcusionZone_4.readFeatures(json_HeritageExlcusionZone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HeritageExlcusionZone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_4.addFeatures(features_HeritageExlcusionZone_4);
var lyr_HeritageExlcusionZone_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageExlcusionZone_4, 
                style: style_HeritageExlcusionZone_4,
                popuplayertitle: "Heritage Exlcusion Zone",
                interactive: true,
                    title: '<img src="styles/legend/HeritageExlcusionZone_4.png" /> Heritage Exlcusion Zone'
                });
var format_ThunderbirdHillsArea_5 = new ol.format.GeoJSON();
var features_ThunderbirdHillsArea_5 = format_ThunderbirdHillsArea_5.readFeatures(json_ThunderbirdHillsArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_ThunderbirdHillsArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThunderbirdHillsArea_5.addFeatures(features_ThunderbirdHillsArea_5);
var lyr_ThunderbirdHillsArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThunderbirdHillsArea_5, 
                style: style_ThunderbirdHillsArea_5,
                popuplayertitle: "Thunderbird Hills Area",
                interactive: true,
                    title: '<img src="styles/legend/ThunderbirdHillsArea_5.png" /> Thunderbird Hills Area'
                });
var format_TOPLLocalities_6 = new ol.format.GeoJSON();
var features_TOPLLocalities_6 = format_TOPLLocalities_6.readFeatures(json_TOPLLocalities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_TOPLLocalities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPLLocalities_6.addFeatures(features_TOPLLocalities_6);
var lyr_TOPLLocalities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPLLocalities_6, 
                style: style_TOPLLocalities_6,
                popuplayertitle: "TOPL Localities",
                interactive: true,
                    title: '<img src="styles/legend/TOPLLocalities_6.png" /> TOPL Localities'
                });
var format_ArtefactSites_7 = new ol.format.GeoJSON();
var features_ArtefactSites_7 = format_ArtefactSites_7.readFeatures(json_ArtefactSites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_ArtefactSites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtefactSites_7.addFeatures(features_ArtefactSites_7);
var lyr_ArtefactSites_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtefactSites_7, 
                style: style_ArtefactSites_7,
                popuplayertitle: "Artefact Sites",
                interactive: true,
                    title: '<img src="styles/legend/ArtefactSites_7.png" /> Artefact Sites'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_site_comp_may_2024_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_DisturbanceOutline_3.setVisible(true);lyr_HeritageExlcusionZone_4.setVisible(true);lyr_ThunderbirdHillsArea_5.setVisible(true);lyr_TOPLLocalities_6.setVisible(true);lyr_ArtefactSites_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_site_comp_may_2024_1,lyr_Roads_2,lyr_DisturbanceOutline_3,lyr_HeritageExlcusionZone_4,lyr_ThunderbirdHillsArea_5,lyr_TOPLLocalities_6,lyr_ArtefactSites_7];
lyr_Roads_2.set('fieldAliases', {'name': 'name', 'type': 'type', 'project': 'project', 'length': 'length', 'display': 'display', 'id': 'id', });
lyr_DisturbanceOutline_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area (ha)': 'Area (ha)', });
lyr_HeritageExlcusionZone_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ThunderbirdHillsArea_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TOPLLocalities_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'locality': 'locality', });
lyr_ArtefactSites_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'artefact': 'artefact', 'altLabel': 'altLabel', });
lyr_Roads_2.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'project': 'TextEdit', 'length': 'TextEdit', 'display': '', 'id': 'TextEdit', });
lyr_DisturbanceOutline_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area (ha)': 'TextEdit', });
lyr_HeritageExlcusionZone_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_ThunderbirdHillsArea_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TOPLLocalities_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'locality': 'TextEdit', });
lyr_ArtefactSites_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'artefact': 'TextEdit', 'altLabel': '', });
lyr_Roads_2.set('fieldLabels', {'name': 'hidden field', 'type': 'hidden field', 'project': 'hidden field', 'length': 'hidden field', 'display': 'hidden field', 'id': 'hidden field', });
lyr_DisturbanceOutline_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Area (ha)': 'no label', });
lyr_HeritageExlcusionZone_4.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_ThunderbirdHillsArea_5.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', });
lyr_TOPLLocalities_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'locality': 'hidden field', });
lyr_ArtefactSites_7.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'artefact': 'hidden field', 'altLabel': 'no label', });
lyr_ArtefactSites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});