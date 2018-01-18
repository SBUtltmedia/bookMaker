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
                            id: 'boxmachine',
                            type: 'image',
                            rect: ['389px', '215px', '72px', '118px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"boxmachine.svg",'0px','0px']
                        },
                        {
                            id: 'Text18',
                            type: 'text',
                            rect: ['362px', '163px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​fluidotherapy</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'tubback',
                            type: 'image',
                            rect: ['311px', '138px', '183px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tubback.svg",'0px','0px']
                        },
                        {
                            id: 'arm',
                            type: 'image',
                            rect: ['353px', '160px', '116px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arm.svg",'0px','0px']
                        },
                        {
                            id: 'waxarm',
                            type: 'image',
                            rect: ['349px', '186px', '124px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"waxarm.svg",'0px','0px']
                        },
                        {
                            id: 'Text15',
                            type: 'text',
                            rect: ['359px', '301px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Paraffin</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'tubtop',
                            type: 'image',
                            rect: ['306px', '162px', '193px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tubtop.svg",'0px','0px']
                        },
                        {
                            id: 'heatpak',
                            type: 'image',
                            rect: ['193px', '266px', '164px', '200px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"heatpak.svg",'0px','0px']
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['33px', '307px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Moist Hotpacks</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text13',
                            type: 'text',
                            rect: ['86px', '287px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Hotpack/Coldpack</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'ultrasound',
                            type: 'image',
                            rect: ['17px', '92px', '143px', '295px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ultrasound.svg",'0px','0px']
                        },
                        {
                            id: 'projector',
                            type: 'image',
                            rect: ['412px', '128px', '85px', '252px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"projector.svg",'0px','0px']
                        },
                        {
                            id: 'thing',
                            type: 'image',
                            rect: ['160px', '81px', '226px', '154px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"thing.svg",'0px','0px']
                        },
                        {
                            id: 'rays',
                            type: 'image',
                            rect: ['273px', '153px', '52px', '64px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rays.svg",'0px','0px']
                        },
                        {
                            id: 'Text21',
                            type: 'text',
                            rect: ['48px', '294px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Mechanical</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text22',
                            type: 'text',
                            rect: ['362px', '292px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 224, 181);\">Acoustic</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'kettle',
                            type: 'image',
                            rect: ['166px', '71px', '161px', '184px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"kettle.svg",'0px','0px']
                        },
                        {
                            id: 'armside2',
                            type: 'image',
                            rect: ['57px', '-79px', '126px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"armside.svg",'0px','0px']
                        },
                        {
                            id: 'hot_tubbin',
                            type: 'image',
                            rect: ['25px', '258px', '198px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"hot%20tubbin.svg",'0px','0px']
                        },
                        {
                            id: 'Text17',
                            type: 'text',
                            rect: ['50', '200', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 224, 217);\">whirlpool</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'mediasplice',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"mediasplice.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['128px', '37px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Heat Transfer</p>",
                            font: ['Arial, Helvetica, sans-serif', [48, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['192px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Conduction<span style=\"font-size: 44px;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['192px', '163px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Convection</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['192px', '221px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Conversion</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(224,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['76px', '289px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Heating Modalities</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [48, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'leg',
                            type: 'image',
                            rect: ['267px', '87px', '125px', '200px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"leg.svg",'0px','0px']
                        },
                        {
                            id: 'fire',
                            type: 'image',
                            rect: ['397px', '69px', '32px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire.svg",'0px','0px']
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['82px', '329px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ATOMS</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['339px', '329px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​MOLECULES</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['24', '171px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​→</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['463', '187', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​←&nbsp;</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text12',
                            type: 'text',
                            rect: ['120px', '294px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ &nbsp; &nbsp; &nbsp;⇧ &nbsp; &nbsp;⇧</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [50, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['42px', '322px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 33px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">⇧ Conductor</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [39, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['274px', '324px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 32px;\">= &nbsp; ⇧ Heat Speed</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text16',
                            type: 'text',
                            rect: ['185px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Convection</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'water',
                            type: 'image',
                            rect: ['92px', '87px', '56px', '71px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"water.svg",'0px','0px']
                        },
                        {
                            id: 'air',
                            type: 'image',
                            rect: ['66px', '179px', '57px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"air.svg",'0px','0px']
                        },
                        {
                            id: 'Text19',
                            type: 'text',
                            rect: ['188px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Conduction</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text20',
                            type: 'text',
                            rect: ['186px', '17px', '181px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 33px;\">Conversion</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [27, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 76962.925,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "opacity",
                            10289,
                            711,
                            "linear",
                            "${leg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            25500,
                            306,
                            "linear",
                            "${leg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "width",
                            25806,
                            512,
                            "linear",
                            "${kettle}",
                            '161px',
                            '218px'
                        ],
                        [
                            "eid250",
                            "width",
                            57000,
                            475,
                            "linear",
                            "${kettle}",
                            '218px',
                            '145px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            8011,
                            989,
                            "linear",
                            "${kettle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            25500,
                            306,
                            "linear",
                            "${kettle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid100",
                            "opacity",
                            29874,
                            433,
                            "linear",
                            "${kettle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            33684,
                            316,
                            "linear",
                            "${kettle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid204",
                            "opacity",
                            41000,
                            784,
                            "linear",
                            "${kettle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid283",
                            "opacity",
                            62371,
                            456,
                            "linear",
                            "${kettle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "top",
                            35500,
                            582,
                            "linear",
                            "${arm}",
                            '160px',
                            '59px'
                        ],
                        [
                            "eid203",
                            "opacity",
                            39255,
                            1060,
                            "linear",
                            "${Text16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid287",
                            "opacity",
                            62371,
                            456,
                            "linear",
                            "${Text16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid149",
                            "top",
                            10289,
                            711,
                            "linear",
                            "${leg}",
                            '87px',
                            '92px'
                        ],
                        [
                            "eid258",
                            "width",
                            60000,
                            272,
                            "linear",
                            "${boxmachine}",
                            '72px',
                            '110px'
                        ],
                        [
                            "eid103",
                            "left",
                            30500,
                            0,
                            "linear",
                            "${Text9}",
                            '42px',
                            '42px'
                        ],
                        [
                            "eid116",
                            "top",
                            32000,
                            500,
                            "linear",
                            "${heatpak}",
                            '63px',
                            '87px'
                        ],
                        [
                            "eid214",
                            "top",
                            39255,
                            1060,
                            "linear",
                            "${heatpak}",
                            '87px',
                            '266px'
                        ],
                        [
                            "eid245",
                            "width",
                            50990,
                            1010,
                            "linear",
                            "${fire}",
                            '32px',
                            '72px'
                        ],
                        [
                            "eid67",
                            "top",
                            20000,
                            193,
                            "linear",
                            "${Text10}",
                            '187px',
                            '171px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            30318,
                            182,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            33684,
                            316,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            6523,
                            396,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            6919,
                            581,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid294",
                            "left",
                            17522,
                            0,
                            "linear",
                            "${Text6}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid295",
                            "font-size",
                            8250,
                            0,
                            "linear",
                            "${Text19}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid219",
                            "opacity",
                            47302,
                            698,
                            "linear",
                            "${boxmachine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid221",
                            "opacity",
                            50000,
                            243,
                            "linear",
                            "${boxmachine}",
                            '1',
                            '0'
                        ],
                        [
                            "eid259",
                            "opacity",
                            61000,
                            523,
                            "linear",
                            "${boxmachine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "opacity",
                            62371,
                            456,
                            "linear",
                            "${boxmachine}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            35000,
                            290,
                            "linear",
                            "${tubback}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${tubback}",
                            '1',
                            '0'
                        ],
                        [
                            "eid90",
                            "opacity",
                            26318,
                            182,
                            "linear",
                            "${heatpak}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            29660,
                            214,
                            "linear",
                            "${heatpak}",
                            '1',
                            '0'
                        ],
                        [
                            "eid117",
                            "opacity",
                            34000,
                            500,
                            "linear",
                            "${heatpak}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${heatpak}",
                            '1',
                            '0'
                        ],
                        [
                            "eid88",
                            "opacity",
                            26318,
                            182,
                            "linear",
                            "${Text13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            29660,
                            214,
                            "linear",
                            "${Text13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid130",
                            "opacity",
                            35000,
                            290,
                            "linear",
                            "${tubtop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${tubtop}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "left",
                            20000,
                            193,
                            "linear",
                            "${Text10}",
                            '463px',
                            '443px'
                        ],
                        [
                            "eid292",
                            "left",
                            17423,
                            0,
                            "linear",
                            "${Text7}",
                            '339px',
                            '339px'
                        ],
                        [
                            "eid156",
                            "top",
                            11620,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid159",
                            "top",
                            12475,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid160",
                            "top",
                            13620,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid161",
                            "top",
                            14475,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid166",
                            "top",
                            15620,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid167",
                            "top",
                            16475,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid172",
                            "top",
                            17715,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid173",
                            "top",
                            18570,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid178",
                            "top",
                            19715,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid179",
                            "top",
                            20570,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid184",
                            "top",
                            21715,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid185",
                            "top",
                            22570,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid190",
                            "top",
                            23715,
                            380,
                            "linear",
                            "${fire}",
                            '189px',
                            '171px'
                        ],
                        [
                            "eid191",
                            "top",
                            24570,
                            525,
                            "linear",
                            "${fire}",
                            '171px',
                            '189px'
                        ],
                        [
                            "eid243",
                            "top",
                            50990,
                            1010,
                            "linear",
                            "${fire}",
                            '189px',
                            '69px'
                        ],
                        [
                            "eid323",
                            "top",
                            57475,
                            525,
                            "linear",
                            "${fire}",
                            '69px',
                            '265px'
                        ],
                        [
                            "eid104",
                            "top",
                            30500,
                            0,
                            "linear",
                            "${Text9}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid3",
                            "font-size",
                            2700,
                            0,
                            "linear",
                            "${Text}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            1477,
                            523,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            6919,
                            581,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid148",
                            "left",
                            10289,
                            711,
                            "linear",
                            "${leg}",
                            '318px',
                            '267px'
                        ],
                        [
                            "eid70",
                            "opacity",
                            20193,
                            166,
                            "linear",
                            "${Text10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            22863,
                            264,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid235",
                            "height",
                            50702,
                            288,
                            "linear",
                            "${air}",
                            '75px',
                            '104px'
                        ],
                        [
                            "eid73",
                            "opacity",
                            23127,
                            123,
                            "linear",
                            "${Text12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            25500,
                            306,
                            "linear",
                            "${Text12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid61",
                            "opacity",
                            16991,
                            104,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            17618,
                            133,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid121",
                            "top",
                            30307,
                            0,
                            "linear",
                            "${Text14}",
                            '307px',
                            '307px'
                        ],
                        [
                            "eid59",
                            "opacity",
                            16500,
                            119,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            17618,
                            133,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '289px',
                            '289px'
                        ],
                        [
                            "eid154",
                            "opacity",
                            11000,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            12000,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            13000,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            14000,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "opacity",
                            15000,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            16000,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid174",
                            "opacity",
                            17095,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            18095,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid180",
                            "opacity",
                            19095,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            20095,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid186",
                            "opacity",
                            21095,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "opacity",
                            22095,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid192",
                            "opacity",
                            23095,
                            620,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            24095,
                            475,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            55000,
                            490,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            57000,
                            260,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid326",
                            "opacity",
                            70362,
                            357,
                            "linear",
                            "${fire}",
                            '0',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            71500,
                            362,
                            "linear",
                            "${fire}",
                            '1',
                            '0'
                        ],
                        [
                            "eid331",
                            "opacity",
                            76000,
                            500,
                            "linear",
                            "${projector}",
                            '0',
                            '1'
                        ],
                        [
                            "eid298",
                            "left",
                            8250,
                            0,
                            "linear",
                            "${Text19}",
                            '188px',
                            '188px'
                        ],
                        [
                            "eid212",
                            "opacity",
                            45884,
                            1116,
                            "linear",
                            "${air}",
                            '0',
                            '1'
                        ],
                        [
                            "eid220",
                            "opacity",
                            50000,
                            243,
                            "linear",
                            "${air}",
                            '1',
                            '0'
                        ],
                        [
                            "eid239",
                            "opacity",
                            53000,
                            778,
                            "linear",
                            "${air}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            57000,
                            260,
                            "linear",
                            "${air}",
                            '1',
                            '0'
                        ],
                        [
                            "eid134",
                            "top",
                            35500,
                            582,
                            "linear",
                            "${waxarm}",
                            '186px',
                            '85px'
                        ],
                        [
                            "eid233",
                            "left",
                            50702,
                            288,
                            "linear",
                            "${air}",
                            '91px',
                            '66px'
                        ],
                        [
                            "eid234",
                            "top",
                            50702,
                            288,
                            "linear",
                            "${air}",
                            '179px',
                            '65px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            35000,
                            290,
                            "linear",
                            "${arm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${arm}",
                            '1',
                            '0'
                        ],
                        [
                            "eid261",
                            "opacity",
                            60000,
                            477,
                            "linear",
                            "${Text17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid284",
                            "opacity",
                            62371,
                            456,
                            "linear",
                            "${Text17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            35000,
                            290,
                            "linear",
                            "${waxarm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${waxarm}",
                            '1',
                            '0'
                        ],
                        [
                            "eid122",
                            "left",
                            30307,
                            1693,
                            "linear",
                            "${Text14}",
                            '33px',
                            '41px'
                        ],
                        [
                            "eid115",
                            "left",
                            32000,
                            500,
                            "linear",
                            "${heatpak}",
                            '193px',
                            '42px'
                        ],
                        [
                            "eid244",
                            "height",
                            50990,
                            1010,
                            "linear",
                            "${fire}",
                            '57px',
                            '108px'
                        ],
                        [
                            "eid315",
                            "opacity",
                            68346,
                            154,
                            "linear",
                            "${Text21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid319",
                            "opacity",
                            70362,
                            138,
                            "linear",
                            "${Text21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid254",
                            "opacity",
                            60000,
                            477,
                            "linear",
                            "${hot_tubbin}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "opacity",
                            62371,
                            456,
                            "linear",
                            "${hot_tubbin}",
                            '1',
                            '0'
                        ],
                        [
                            "eid329",
                            "opacity",
                            74500,
                            500,
                            "linear",
                            "${ultrasound}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "height",
                            25806,
                            512,
                            "linear",
                            "${kettle}",
                            '184px',
                            '232px'
                        ],
                        [
                            "eid249",
                            "height",
                            57000,
                            475,
                            "linear",
                            "${kettle}",
                            '232px',
                            '160px'
                        ],
                        [
                            "eid256",
                            "top",
                            60000,
                            272,
                            "linear",
                            "${boxmachine}",
                            '265px',
                            '215px'
                        ],
                        [
                            "eid317",
                            "opacity",
                            69047,
                            453,
                            "linear",
                            "${Text22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            70362,
                            138,
                            "linear",
                            "${Text22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid150",
                            "left",
                            10289,
                            711,
                            "linear",
                            "${kettle}",
                            '92px',
                            '169px'
                        ],
                        [
                            "eid151",
                            "left",
                            11000,
                            0,
                            "linear",
                            "${kettle}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid96",
                            "left",
                            25806,
                            512,
                            "linear",
                            "${kettle}",
                            '92px',
                            '166px'
                        ],
                        [
                            "eid207",
                            "left",
                            44000,
                            731,
                            "linear",
                            "${kettle}",
                            '166px',
                            '267px'
                        ],
                        [
                            "eid223",
                            "left",
                            50243,
                            459,
                            "linear",
                            "${kettle}",
                            '267px',
                            '166px'
                        ],
                        [
                            "eid251",
                            "left",
                            57000,
                            475,
                            "linear",
                            "${kettle}",
                            '166px',
                            '204px'
                        ],
                        [
                            "eid302",
                            "top",
                            37339,
                            0,
                            "linear",
                            "${Text16}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid119",
                            "opacity",
                            34000,
                            500,
                            "linear",
                            "${Text14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${Text14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid290",
                            "opacity",
                            7732,
                            118,
                            "linear",
                            "${Text19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            38920,
                            335,
                            "linear",
                            "${Text19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid306",
                            "opacity",
                            64207,
                            293,
                            "linear",
                            "${thing}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "top",
                            17423,
                            0,
                            "linear",
                            "${Text7}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid301",
                            "left",
                            37339,
                            0,
                            "linear",
                            "${Text16}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid297",
                            "top",
                            8250,
                            0,
                            "linear",
                            "${Text19}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid293",
                            "top",
                            17522,
                            0,
                            "linear",
                            "${Text6}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid304",
                            "opacity",
                            62827,
                            173,
                            "linear",
                            "${Text20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "height",
                            39255,
                            1060,
                            "linear",
                            "${heatpak}",
                            '200px',
                            '100px'
                        ],
                        [
                            "eid257",
                            "height",
                            60000,
                            272,
                            "linear",
                            "${boxmachine}",
                            '118px',
                            '148px'
                        ],
                        [
                            "eid152",
                            "top",
                            10289,
                            711,
                            "linear",
                            "${kettle}",
                            '90px',
                            '95px'
                        ],
                        [
                            "eid97",
                            "top",
                            25806,
                            512,
                            "linear",
                            "${kettle}",
                            '90px',
                            '71px'
                        ],
                        [
                            "eid208",
                            "top",
                            44000,
                            731,
                            "linear",
                            "${kettle}",
                            '71px',
                            '87px'
                        ],
                        [
                            "eid224",
                            "top",
                            50243,
                            459,
                            "linear",
                            "${kettle}",
                            '87px',
                            '98px'
                        ],
                        [
                            "eid252",
                            "top",
                            57000,
                            475,
                            "linear",
                            "${kettle}",
                            '98px',
                            '78px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            2700,
                            1300,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            6919,
                            581,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            4860,
                            "linear",
                            "${Text2}",
                            '76px',
                            '75px'
                        ],
                        [
                            "eid106",
                            "opacity",
                            32000,
                            500,
                            "linear",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            33684,
                            316,
                            "linear",
                            "${Text11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "width",
                            50702,
                            288,
                            "linear",
                            "${air}",
                            '57px',
                            '82px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            35464,
                            536,
                            "linear",
                            "${Text15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            39000,
                            255,
                            "linear",
                            "${Text15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid215",
                            "width",
                            39255,
                            1060,
                            "linear",
                            "${heatpak}",
                            '164px',
                            '78px'
                        ],
                        [
                            "eid155",
                            "left",
                            11620,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid158",
                            "left",
                            12475,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid164",
                            "left",
                            13620,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid165",
                            "left",
                            14475,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid170",
                            "left",
                            15620,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid171",
                            "left",
                            16475,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid176",
                            "left",
                            17715,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid177",
                            "left",
                            18570,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid182",
                            "left",
                            19715,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid183",
                            "left",
                            20570,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid188",
                            "left",
                            21715,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid189",
                            "left",
                            22570,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid194",
                            "left",
                            23715,
                            380,
                            "linear",
                            "${fire}",
                            '235px',
                            '317px'
                        ],
                        [
                            "eid195",
                            "left",
                            24570,
                            525,
                            "linear",
                            "${fire}",
                            '317px',
                            '235px'
                        ],
                        [
                            "eid242",
                            "left",
                            50990,
                            1010,
                            "linear",
                            "${fire}",
                            '235px',
                            '397px'
                        ],
                        [
                            "eid322",
                            "left",
                            57475,
                            525,
                            "linear",
                            "${fire}",
                            '397px',
                            '248px'
                        ],
                        [
                            "eid308",
                            "opacity",
                            65884,
                            616,
                            "linear",
                            "${rays}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            5293,
                            707,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            6919,
                            581,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid210",
                            "opacity",
                            44731,
                            679,
                            "linear",
                            "${water}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            50000,
                            243,
                            "linear",
                            "${water}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            4572,
                            428,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            6919,
                            581,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid255",
                            "left",
                            60000,
                            272,
                            "linear",
                            "${boxmachine}",
                            '84px',
                            '389px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            17751,
                            159,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            20000,
                            193,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid264",
                            "opacity",
                            61000,
                            523,
                            "linear",
                            "${Text18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "opacity",
                            62371,
                            456,
                            "linear",
                            "${Text18}",
                            '1',
                            '0'
                        ],
                            [ "eid95", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${mediasplice}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("conduction_edgeActions.js");
})("EDGE-24421047");
