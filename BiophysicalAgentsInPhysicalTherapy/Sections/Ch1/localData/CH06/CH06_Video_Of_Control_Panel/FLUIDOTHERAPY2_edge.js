/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fluidotherapy',
                            type: 'image',
                            rect: ['-228px', '-17px', '790px', '1054px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fluidotherapy.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['292px', '77px', '204px', '84px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [4,"rgba(255,0,0,1.00)","solid"]
                        },
                        {
                            id: 'arrow3',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['-43px', '134px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['180'],[],['0.3261','0.3261']]
                        },
                        {
                            id: 'arrow4',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['406px', '134px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3261','0.3261']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['118px', '325px', '166px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['113px', '281px', '263px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['118px', '239px', '209px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['125px', '195px', '207px', '50px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'arrow5',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['248px', '106px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.37179','0.37179']]
                        },
                        {
                            id: 'arrow6',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['112px', '-1px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['270'],[],['0.4637','0.4637']]
                        },
                        {
                            id: 'media1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"media1.m4a"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 102307.12,
                    autoPlay: false,
                    data: [
                        [
                            "eid206",
                            "left",
                            32170,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            50676,
                            324,
                            "linear",
                            "${Rectangle3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            68000,
                            159,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            3000,
                            639,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            12000,
                            457,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "width",
                            32170,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid203",
                            "height",
                            32170,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid200",
                            "width",
                            27295,
                            0,
                            "linear",
                            "${Rectangle}",
                            '166px',
                            '166px'
                        ],
                        [
                            "eid216",
                            "left",
                            70814,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid153",
                            "height",
                            0,
                            3000,
                            "linear",
                            "${Ellipse}",
                            '84px',
                            '98px'
                        ],
                        [
                            "eid186",
                            "scaleX",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '0.3261',
                            '0.3261'
                        ],
                        [
                            "eid207",
                            "top",
                            32170,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid166",
                            "top",
                            12457,
                            5543,
                            "linear",
                            "${arrow3}",
                            '177px',
                            '134px'
                        ],
                        [
                            "eid215",
                            "width",
                            70814,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid138",
                            "height",
                            21881,
                            0,
                            "linear",
                            "${Stage}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            12457,
                            0,
                            "linear",
                            "${arrow3}",
                            '180deg',
                            '180deg'
                        ],
                        [
                            "eid7",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid69",
                            "opacity",
                            32170,
                            330,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            47902,
                            171,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid218",
                            "top",
                            70814,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid152",
                            "top",
                            0,
                            3000,
                            "linear",
                            "${Ellipse}",
                            '66px',
                            '77px'
                        ],
                        [
                            "eid187",
                            "scaleY",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '0.3261',
                            '0.3261'
                        ],
                        [
                            "eid213",
                            "height",
                            70814,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '0.37179',
                            '0.37179'
                        ],
                        [
                            "eid211",
                            "left",
                            50676,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid137",
                            "width",
                            21881,
                            0,
                            "linear",
                            "${Stage}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid140",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid148",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${fluidotherapy}",
                            '-2px',
                            '-17px'
                        ],
                        [
                            "eid162",
                            "top",
                            14573,
                            2927,
                            "linear",
                            "${fluidotherapy}",
                            '-17px',
                            '-119px'
                        ],
                        [
                            "eid168",
                            "top",
                            22250,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '-119px',
                            '-119px'
                        ],
                        [
                            "eid196",
                            "top",
                            27157,
                            138,
                            "linear",
                            "${fluidotherapy}",
                            '-119px',
                            '-147px'
                        ],
                        [
                            "eid151",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${Ellipse}",
                            '376px',
                            '292px'
                        ],
                        [
                            "eid229",
                            "left",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid212",
                            "top",
                            50676,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid163",
                            "scaleX",
                            12457,
                            5543,
                            "linear",
                            "${arrow3}",
                            '0.3261',
                            '0.4637'
                        ],
                        [
                            "eid55",
                            "opacity",
                            22308,
                            141,
                            "linear",
                            "${arrow4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            26831,
                            377,
                            "linear",
                            "${arrow4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid219",
                            "scaleX",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '0.37179',
                            '0.37179'
                        ],
                        [
                            "eid198",
                            "height",
                            27295,
                            0,
                            "linear",
                            "${Rectangle}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            70814,
                            186,
                            "linear",
                            "${Rectangle4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            77803,
                            197,
                            "linear",
                            "${Rectangle4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]],
                            [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]]
                        ],
                        [
                            "eid208",
                            "height",
                            50676,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid223",
                            "left",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid98",
                            "opacity",
                            79911,
                            176,
                            "linear",
                            "${arrow5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            86843,
                            157,
                            "linear",
                            "${arrow5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "height",
                            0,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '737px',
                            '737px'
                        ],
                        [
                            "eid147",
                            "height",
                            2250,
                            750,
                            "linear",
                            "${fluidotherapy}",
                            '737px',
                            '1054px'
                        ],
                        [
                            "eid158",
                            "height",
                            14573,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '1054px',
                            '1054px'
                        ],
                        [
                            "eid170",
                            "height",
                            22250,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '1054px',
                            '1054px'
                        ],
                        [
                            "eid195",
                            "height",
                            27157,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '1054px',
                            '1054px'
                        ],
                        [
                            "eid210",
                            "width",
                            50676,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '209px',
                            '209px'
                        ],
                        [
                            "eid139",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid150",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${fluidotherapy}",
                            '-2px',
                            '-228px'
                        ],
                        [
                            "eid161",
                            "left",
                            14573,
                            2927,
                            "linear",
                            "${fluidotherapy}",
                            '-228px',
                            '-3px'
                        ],
                        [
                            "eid173",
                            "left",
                            22250,
                            58,
                            "linear",
                            "${fluidotherapy}",
                            '-3px',
                            '-231px'
                        ],
                        [
                            "eid197",
                            "left",
                            27157,
                            138,
                            "linear",
                            "${fluidotherapy}",
                            '-231px',
                            '-171px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            12457,
                            0,
                            "linear",
                            "${arrow3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            18000,
                            197,
                            "linear",
                            "${arrow3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            22000,
                            250,
                            "linear",
                            "${arrow3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            87750,
                            291,
                            "linear",
                            "${arrow6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            96857,
                            218,
                            "linear",
                            "${arrow6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "opacity",
                            27295,
                            261,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            31893,
                            277,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "width",
                            0,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '553px',
                            '553px'
                        ],
                        [
                            "eid149",
                            "width",
                            2250,
                            750,
                            "linear",
                            "${fluidotherapy}",
                            '553px',
                            '790px'
                        ],
                        [
                            "eid157",
                            "width",
                            14573,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '790px',
                            '790px'
                        ],
                        [
                            "eid169",
                            "width",
                            22250,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '790px',
                            '790px'
                        ],
                        [
                            "eid194",
                            "width",
                            27157,
                            0,
                            "linear",
                            "${fluidotherapy}",
                            '790px',
                            '790px'
                        ],
                        [
                            "eid165",
                            "left",
                            12457,
                            5543,
                            "linear",
                            "${arrow3}",
                            '-62px',
                            '-43px'
                        ],
                        [
                            "eid106",
                            "rotateZ",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '270deg',
                            '270deg'
                        ],
                        [
                            "eid164",
                            "scaleY",
                            12457,
                            5543,
                            "linear",
                            "${arrow3}",
                            '0.3261',
                            '0.4637'
                        ],
                        [
                            "eid191",
                            "top",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid230",
                            "top",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid226",
                            "scaleY",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '0.4637',
                            '0.4637'
                        ],
                        [
                            "eid154",
                            "width",
                            0,
                            3000,
                            "linear",
                            "${Ellipse}",
                            '204px',
                            '237px'
                        ],
                        [
                            "eid190",
                            "left",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '406px',
                            '406px'
                        ],
                        [
                            "eid202",
                            "top",
                            27295,
                            0,
                            "linear",
                            "${Rectangle}",
                            '325px',
                            '325px'
                        ],
                        [
                            "eid224",
                            "top",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid201",
                            "left",
                            27295,
                            0,
                            "linear",
                            "${Rectangle}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid2",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid225",
                            "scaleX",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '0.4637',
                            '0.4637'
                        ],
                            [ "eid126", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${media1}', [] ] ]
                    ]
                }
            },
            "arrow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['0px', '0px', '230px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '230px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("FLUIDOTHERAPY2_edgeActions.js");
})("EDGE-40818876");
