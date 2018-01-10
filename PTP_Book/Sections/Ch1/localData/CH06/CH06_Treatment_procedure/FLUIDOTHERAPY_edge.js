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
                            rect: ['-1px', '0px', '596px', '795px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fluidotherapy.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['376px', '66px', '204px', '84px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [4,"rgba(255,0,0,1.00)","solid"]
                        },
                        {
                            id: 'arrow3',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['-62px', '177px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['180'],[],['0.3261','0.3261']]
                        },
                        {
                            id: 'arrow4',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['453px', '161px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.21942','0.21942']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['214px', '356px', '108px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['214px', '325px', '173px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['219px', '295px', '137px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['218px', '264px', '119px', '26px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(255, 0, 0)","solid"]
                        },
                        {
                            id: 'arrow5',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['277px', '170px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.21942','0.21942']]
                        },
                        {
                            id: 'arrow6',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['177px', '90px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['270'],[],['0.3261','0.3261']]
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
                            rect: [undefined, undefined, '595px', '792px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 97075,
                    autoPlay: true,
                    data: [
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
                            "eid121",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '0.21942',
                            '0.21942'
                        ],
                        [
                            "eid26",
                            "top",
                            12457,
                            0,
                            "linear",
                            "${arrow3}",
                            '177px',
                            '177px'
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
                            "eid124",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '0.21942',
                            '0.21942'
                        ],
                        [
                            "eid89",
                            "scaleY",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '0.21942',
                            '0.21942'
                        ],
                        [
                            "eid107",
                            "left",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '177px',
                            '177px'
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
                            "eid18",
                            "scaleX",
                            12457,
                            0,
                            "linear",
                            "${arrow3}",
                            '0.3261',
                            '0.3261'
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
                            "eid88",
                            "scaleX",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '0.21942',
                            '0.21942'
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
                            308,
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
                            27208,
                            292,
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
                            "eid125",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '376px',
                            '376px'
                        ],
                        [
                            "eid25",
                            "left",
                            12457,
                            0,
                            "linear",
                            "${arrow3}",
                            '-62px',
                            '-62px'
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
                            "eid19",
                            "scaleY",
                            12457,
                            0,
                            "linear",
                            "${arrow3}",
                            '0.3261',
                            '0.3261'
                        ],
                        [
                            "eid50",
                            "top",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid110",
                            "top",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '0.3261',
                            '0.3261'
                        ],
                        [
                            "eid123",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '204px',
                            '204px'
                        ],
                        [
                            "eid51",
                            "left",
                            22308,
                            0,
                            "linear",
                            "${arrow4}",
                            '453px',
                            '453px'
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
                            "eid93",
                            "top",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid94",
                            "left",
                            79911,
                            0,
                            "linear",
                            "${arrow5}",
                            '277px',
                            '277px'
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
                            "eid102",
                            "scaleX",
                            87750,
                            0,
                            "linear",
                            "${arrow6}",
                            '0.3261',
                            '0.3261'
                        ]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("FLUIDOTHERAPY_edgeActions.js");
})("EDGE-40818876");
