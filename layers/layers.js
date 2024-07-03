ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7851").setExtent([494631.076480, 8072580.068769, 498016.940984, 8074248.950717]);
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
var lyr_240525_Site_composite_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "240525_Site_composite",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/240525_Site_composite_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047665, 13690974.632713, -1969212.879783]
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
                interactive: true,
                    title: '<img src="styles/legend/Roads_2.png" /> Roads'
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
var format_mining_exclusion_area_4 = new ol.format.GeoJSON();
var features_mining_exclusion_area_4 = format_mining_exclusion_area_4.readFeatures(json_mining_exclusion_area_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_mining_exclusion_area_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mining_exclusion_area_4.addFeatures(features_mining_exclusion_area_4);
var lyr_mining_exclusion_area_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mining_exclusion_area_4, 
                style: style_mining_exclusion_area_4,
                popuplayertitle: "mining_exclusion_area",
                interactive: true,
                    title: '<img src="styles/legend/mining_exclusion_area_4.png" /> mining_exclusion_area'
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
var group_image = new ol.layer.Group({
                                layers: [lyr_240525_Site_composite_1,],
                                fold: "open",
                                title: "image"});

lyr_GoogleSatellite_0.setVisible(true);lyr_240525_Site_composite_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_HeritageExlcusionZone_3.setVisible(true);lyr_mining_exclusion_area_4.setVisible(true);lyr_ThunderbirdHillsArea_5.setVisible(true);lyr_TOPLLocalities_6.setVisible(true);lyr_ArtefactSites_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_image,lyr_Roads_2,lyr_HeritageExlcusionZone_3,lyr_mining_exclusion_area_4,lyr_ThunderbirdHillsArea_5,lyr_TOPLLocalities_6,lyr_ArtefactSites_7];
lyr_Roads_2.set('fieldAliases', {'name': 'name', 'type': 'type', 'project': 'project', 'length': 'length', 'display': 'display', 'id': 'id', });
lyr_HeritageExlcusionZone_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_mining_exclusion_area_4.set('fieldAliases', {'id': 'id', });
lyr_ThunderbirdHillsArea_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_TOPLLocalities_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'locality': 'locality', });
lyr_ArtefactSites_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'artefact': 'artefact', 'altLabel': 'altLabel', });
lyr_Roads_2.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'project': 'TextEdit', 'length': 'TextEdit', 'display': '', 'id': 'TextEdit', });
lyr_HeritageExlcusionZone_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_mining_exclusion_area_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ThunderbirdHillsArea_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_TOPLLocalities_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'locality': 'TextEdit', });
lyr_ArtefactSites_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'artefact': 'TextEdit', 'altLabel': '', });
lyr_Roads_2.set('fieldLabels', {'name': 'hidden field', 'type': 'hidden field', 'project': 'hidden field', 'length': 'hidden field', 'display': 'hidden field', 'id': 'hidden field', });
lyr_HeritageExlcusionZone_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_mining_exclusion_area_4.set('fieldLabels', {'id': 'hidden field', });
lyr_ThunderbirdHillsArea_5.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_TOPLLocalities_6.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'locality': 'hidden field', });
lyr_ArtefactSites_7.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'artefact': 'hidden field', 'altLabel': 'inline label - always visible', });
lyr_ArtefactSites_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});