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
                            id: 'wax',
                            type: 'image',
                            rect: ['189px', '117px', '171px', '165px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wax.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['206px', '50px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Parafin</p>",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'stitch',
                            type: 'image',
                            rect: ['125px', '55px', '312px', '268px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"stitch.svg",'0px','0px']
                        },
                        {
                            id: 'tubback',
                            type: 'image',
                            rect: ['133px', '161px', '295px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tubback.svg",'0px','0px']
                        },
                        {
                            id: 'leg',
                            type: 'image',
                            rect: ['251px', '7px', '51px', '175px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leg.svg",'0px','0px']
                        },
                        {
                            id: 'arm',
                            type: 'image',
                            rect: ['262px', '39px', '38px', '120px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arm.svg",'0px','0px']
                        },
                        {
                            id: 'legwax',
                            type: 'image',
                            rect: ['248px', '65px', '51px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"legwax.svg",'0px','0px']
                        },
                        {
                            id: 'armwax',
                            type: 'image',
                            rect: ['254px', '67px', '54px', '94px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"armwax.svg",'0px','0px']
                        },
                        {
                            id: 'tubfront',
                            type: 'image',
                            rect: ['119px', '197px', '312px', '177px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tubfront.svg",'0px','0px']
                        },
                        {
                            id: 'plastictub',
                            type: 'image',
                            rect: ['373px', '5px', '173px', '154px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"plastictub.svg",'0px','0px']
                        },
                        {
                            id: 'metaltub',
                            type: 'image',
                            rect: ['16px', '19px', '233px', '120px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"metaltub.svg",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['97px', '75px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​STEEL<span style=\"font-size: 44px;\">​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['319px', '58px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​PLASTIC</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'fire1',
                            display: 'block',
                            type: 'image',
                            rect: ['215px', '90px', '124px', '190px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire1.svg",'0px','0px']
                        },
                        {
                            id: 'fire2',
                            display: 'block',
                            type: 'image',
                            rect: ['222px', '90px', '110px', '189px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire2.svg",'0px','0px']
                        },
                        {
                            id: 'fire3',
                            display: 'block',
                            type: 'image',
                            rect: ['218px', '103px', '104px', '177px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire3.svg",'0px','0px']
                        },
                        {
                            id: 'fire4',
                            display: 'block',
                            type: 'image',
                            rect: ['225px', '106px', '107px', '174px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire4.svg",'0px','0px']
                        },
                        {
                            id: 'fire5',
                            display: 'block',
                            type: 'image',
                            rect: ['215px', '106px', '132px', '174px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire5.svg",'0px','0px']
                        },
                        {
                            id: 'fire6',
                            display: 'block',
                            type: 'image',
                            rect: ['222px', '111px', '113px', '169px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire6.svg",'0px','0px']
                        },
                        {
                            id: 'media22',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"media22.wav"],
                            preload: 'auto'
                        },
                        {
                            id: 'red',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"red.svg",'0px','0px']
                        },
                        {
                            id: 'bloodorange',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bloodorange.svg",'0px','0px']
                        },
                        {
                            id: 'orange',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"orange.svg",'0px','0px']
                        },
                        {
                            id: 'yello',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"yello.svg",'0px','0px']
                        },
                        {
                            id: 'lime',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lime.svg",'0px','0px']
                        },
                        {
                            id: 'olive',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"olive.svg",'0px','0px']
                        },
                        {
                            id: 'cyan',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cyan.svg",'0px','0px']
                        },
                        {
                            id: 'blue',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"blue.svg",'0px','0px']
                        },
                        {
                            id: 'purple',
                            display: 'block',
                            type: 'image',
                            rect: ['248px', '81px', '54px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"purple.svg",'0px','0px']
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
                    duration: 53382.336,
                    autoPlay: true,
                    data: [
                        [
                            "eid467",
                            "left",
                            0,
                            0,
                            "linear",
                            "${red}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid403",
                            "opacity",
                            11949,
                            500,
                            "linear",
                            "${orange}",
                            '0',
                            '1'
                        ],
                        [
                            "eid404",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${orange}",
                            '1',
                            '0'
                        ],
                        [
                            "eid471",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cyan}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid469",
                            "left",
                            0,
                            0,
                            "linear",
                            "${orange}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid567",
                            "top",
                            39386,
                            2171,
                            "linear",
                            "${legwax}",
                            '65px',
                            '234px'
                        ],
                        [
                            "eid568",
                            "top",
                            43000,
                            1148,
                            "linear",
                            "${legwax}",
                            '234px',
                            '65px'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fire6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid508",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fire2}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fire2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid393",
                            "opacity",
                            13694,
                            556,
                            "linear",
                            "${cyan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid394",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${cyan}",
                            '1',
                            '0'
                        ],
                        [
                            "eid395",
                            "opacity",
                            13333,
                            471,
                            "linear",
                            "${olive}",
                            '0',
                            '1'
                        ],
                        [
                            "eid396",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${olive}",
                            '1',
                            '0'
                        ],
                        [
                            "eid429",
                            "width",
                            0,
                            0,
                            "linear",
                            "${purple}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid470",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cyan}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid448",
                            "height",
                            0,
                            0,
                            "linear",
                            "${orange}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid612",
                            "width",
                            28540,
                            0,
                            "linear",
                            "${plastictub}",
                            '173px',
                            '173px'
                        ],
                        [
                            "eid441",
                            "width",
                            0,
                            0,
                            "linear",
                            "${olive}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid407",
                            "opacity",
                            11355,
                            320,
                            "linear",
                            "${red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid444",
                            "width",
                            0,
                            0,
                            "linear",
                            "${bloodorange}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid610",
                            "height",
                            28540,
                            0,
                            "linear",
                            "${plastictub}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid453",
                            "width",
                            0,
                            0,
                            "linear",
                            "${cyan}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid465",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bloodorange}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fire5}",
                            'block',
                            'block'
                        ],
                        [
                            "eid605",
                            "top",
                            31386,
                            0,
                            "linear",
                            "${plastictub}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid611",
                            "left",
                            28540,
                            2846,
                            "linear",
                            "${plastictub}",
                            '373px',
                            '350px'
                        ],
                        [
                            "eid601",
                            "top",
                            31386,
                            0,
                            "linear",
                            "${metaltub}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid546",
                            "opacity",
                            29130,
                            870,
                            "linear",
                            "${tubback}",
                            '0',
                            '1'
                        ],
                        [
                            "eid596",
                            "opacity",
                            44538,
                            462,
                            "linear",
                            "${tubback}",
                            '1',
                            '0'
                        ],
                        [
                            "eid608",
                            "opacity",
                            47304,
                            553,
                            "linear",
                            "${tubback}",
                            '0',
                            '1'
                        ],
                        [
                            "eid615",
                            "opacity",
                            52435,
                            499,
                            "linear",
                            "${tubback}",
                            '1',
                            '0'
                        ],
                        [
                            "eid155",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${wax}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            6000,
                            764,
                            "linear",
                            "${wax}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "opacity",
                            6764,
                            1236,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "opacity",
                            10000,
                            1085,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid450",
                            "width",
                            0,
                            0,
                            "linear",
                            "${orange}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid587",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tubfront}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid598",
                            "opacity",
                            45000,
                            553,
                            "linear",
                            "${stitch}",
                            '0',
                            '1'
                        ],
                        [
                            "eid599",
                            "opacity",
                            47000,
                            304,
                            "linear",
                            "${stitch}",
                            '1',
                            '0'
                        ],
                        [
                            "eid600",
                            "left",
                            31386,
                            0,
                            "linear",
                            "${metaltub}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid588",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tubfront}",
                            '197px',
                            '197px'
                        ],
                        [
                            "eid457",
                            "left",
                            0,
                            0,
                            "linear",
                            "${yello}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid456",
                            "top",
                            0,
                            0,
                            "linear",
                            "${yello}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid430",
                            "height",
                            0,
                            0,
                            "linear",
                            "${yello}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid579",
                            "opacity",
                            37130,
                            870,
                            "linear",
                            "${leg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid580",
                            "opacity",
                            44538,
                            462,
                            "linear",
                            "${leg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            5000,
                            436,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid577",
                            "top",
                            39386,
                            2171,
                            "linear",
                            "${leg}",
                            '7px',
                            '176px'
                        ],
                        [
                            "eid578",
                            "top",
                            43000,
                            1148,
                            "linear",
                            "${leg}",
                            '176px',
                            '7px'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fire1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid571",
                            "opacity",
                            42420,
                            459,
                            "linear",
                            "${legwax}",
                            '0',
                            '1'
                        ],
                        [
                            "eid572",
                            "opacity",
                            44538,
                            462,
                            "linear",
                            "${legwax}",
                            '1',
                            '0'
                        ],
                        [
                            "eid432",
                            "width",
                            0,
                            0,
                            "linear",
                            "${yello}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid510",
                            "opacity",
                            19763,
                            237,
                            "linear",
                            "${fire1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid511",
                            "opacity",
                            21000,
                            271,
                            "linear",
                            "${fire1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid445",
                            "height",
                            0,
                            0,
                            "linear",
                            "${red}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid435",
                            "width",
                            0,
                            0,
                            "linear",
                            "${blue}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid559",
                            "top",
                            31386,
                            2171,
                            "linear",
                            "${arm}",
                            '39px',
                            '208px'
                        ],
                        [
                            "eid562",
                            "top",
                            35000,
                            1148,
                            "linear",
                            "${arm}",
                            '208px',
                            '39px'
                        ],
                        [
                            "eid502",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fire1}",
                            '215px',
                            '215px'
                        ],
                        [
                            "eid462",
                            "top",
                            0,
                            0,
                            "linear",
                            "${olive}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fire3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid460",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lime}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid438",
                            "width",
                            0,
                            0,
                            "linear",
                            "${lime}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid542",
                            "opacity",
                            29130,
                            870,
                            "linear",
                            "${arm}",
                            '0',
                            '1'
                        ],
                        [
                            "eid564",
                            "opacity",
                            36538,
                            462,
                            "linear",
                            "${arm}",
                            '1',
                            '0'
                        ],
                        [
                            "eid463",
                            "left",
                            0,
                            0,
                            "linear",
                            "${olive}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid531",
                            "opacity",
                            22779,
                            237,
                            "linear",
                            "${fire3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid532",
                            "opacity",
                            24016,
                            271,
                            "linear",
                            "${fire3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid454",
                            "top",
                            0,
                            0,
                            "linear",
                            "${purple}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid529",
                            "opacity",
                            21271,
                            237,
                            "linear",
                            "${fire2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid530",
                            "opacity",
                            22508,
                            271,
                            "linear",
                            "${fire2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid442",
                            "height",
                            0,
                            0,
                            "linear",
                            "${bloodorange}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid581",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tubfront}",
                            '177px',
                            '177px'
                        ],
                        [
                            "eid589",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tubback}",
                            '95px',
                            '103px'
                        ],
                        [
                            "eid459",
                            "left",
                            0,
                            0,
                            "linear",
                            "${blue}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid498",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fire6}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid592",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tubback}",
                            '133px',
                            '126px'
                        ],
                        [
                            "eid535",
                            "opacity",
                            25795,
                            237,
                            "linear",
                            "${fire5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid536",
                            "opacity",
                            27032,
                            271,
                            "linear",
                            "${fire5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid533",
                            "opacity",
                            24287,
                            237,
                            "linear",
                            "${fire4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid534",
                            "opacity",
                            25524,
                            271,
                            "linear",
                            "${fire4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid493",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fire3}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid447",
                            "width",
                            0,
                            0,
                            "linear",
                            "${red}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid548",
                            "opacity",
                            29130,
                            870,
                            "linear",
                            "${tubfront}",
                            '0',
                            '1'
                        ],
                        [
                            "eid595",
                            "opacity",
                            44538,
                            462,
                            "linear",
                            "${tubfront}",
                            '1',
                            '0'
                        ],
                        [
                            "eid609",
                            "opacity",
                            47304,
                            553,
                            "linear",
                            "${tubfront}",
                            '0',
                            '1'
                        ],
                        [
                            "eid616",
                            "opacity",
                            52435,
                            499,
                            "linear",
                            "${tubfront}",
                            '1',
                            '0'
                        ],
                        [
                            "eid590",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tubback}",
                            '167px',
                            '161px'
                        ],
                        [
                            "eid458",
                            "top",
                            0,
                            0,
                            "linear",
                            "${blue}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid439",
                            "height",
                            0,
                            0,
                            "linear",
                            "${olive}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid389",
                            "opacity",
                            14250,
                            592,
                            "linear",
                            "${blue}",
                            '0',
                            '1'
                        ],
                        [
                            "eid390",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${blue}",
                            '1',
                            '0'
                        ],
                        [
                            "eid466",
                            "top",
                            0,
                            0,
                            "linear",
                            "${red}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid461",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lime}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid397",
                            "opacity",
                            12868,
                            465,
                            "linear",
                            "${lime}",
                            '0',
                            '1'
                        ],
                        [
                            "eid398",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${lime}",
                            '1',
                            '0'
                        ],
                        [
                            "eid558",
                            "top",
                            31386,
                            2171,
                            "linear",
                            "${armwax}",
                            '67px',
                            '236px'
                        ],
                        [
                            "eid561",
                            "top",
                            35000,
                            1148,
                            "linear",
                            "${armwax}",
                            '236px',
                            '67px'
                        ],
                        [
                            "eid582",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tubfront}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid451",
                            "height",
                            0,
                            0,
                            "linear",
                            "${cyan}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid383",
                            "opacity",
                            14842,
                            747,
                            "linear",
                            "${purple}",
                            '0',
                            '1'
                        ],
                        [
                            "eid384",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${purple}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${fire4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid436",
                            "height",
                            0,
                            0,
                            "linear",
                            "${lime}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid433",
                            "height",
                            0,
                            0,
                            "linear",
                            "${blue}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid497",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fire5}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid560",
                            "opacity",
                            34420,
                            459,
                            "linear",
                            "${armwax}",
                            '0',
                            '1'
                        ],
                        [
                            "eid563",
                            "opacity",
                            36538,
                            462,
                            "linear",
                            "${armwax}",
                            '1',
                            '0'
                        ],
                        [
                            "eid492",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fire3}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid399",
                            "opacity",
                            12449,
                            419,
                            "linear",
                            "${yello}",
                            '0',
                            '1'
                        ],
                        [
                            "eid400",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${yello}",
                            '1',
                            '0'
                        ],
                        [
                            "eid177",
                            "opacity",
                            6764,
                            1236,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            10000,
                            1085,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid167",
                            "opacity",
                            6869,
                            1131,
                            "linear",
                            "${plastictub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            10000,
                            1085,
                            "linear",
                            "${plastictub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid606",
                            "opacity",
                            47304,
                            553,
                            "linear",
                            "${plastictub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid613",
                            "opacity",
                            52435,
                            499,
                            "linear",
                            "${plastictub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid591",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tubback}",
                            '279px',
                            '295px'
                        ],
                        [
                            "eid405",
                            "opacity",
                            11675,
                            274,
                            "linear",
                            "${bloodorange}",
                            '0',
                            '1'
                        ],
                        [
                            "eid406",
                            "opacity",
                            17837,
                            1542,
                            "linear",
                            "${bloodorange}",
                            '1',
                            '0'
                        ],
                        [
                            "eid464",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bloodorange}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid537",
                            "opacity",
                            27303,
                            237,
                            "linear",
                            "${fire6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid538",
                            "opacity",
                            28540,
                            271,
                            "linear",
                            "${fire6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid496",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fire5}",
                            '215px',
                            '215px'
                        ],
                        [
                            "eid427",
                            "height",
                            0,
                            0,
                            "linear",
                            "${purple}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid468",
                            "top",
                            0,
                            0,
                            "linear",
                            "${orange}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid505",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fire4}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid503",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fire1}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid455",
                            "left",
                            0,
                            0,
                            "linear",
                            "${purple}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid504",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fire4}",
                            '225px',
                            '225px'
                        ],
                        [
                            "eid169",
                            "opacity",
                            6869,
                            1131,
                            "linear",
                            "${metaltub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            10000,
                            1085,
                            "linear",
                            "${metaltub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid607",
                            "opacity",
                            47304,
                            553,
                            "linear",
                            "${metaltub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid614",
                            "opacity",
                            52435,
                            499,
                            "linear",
                            "${metaltub}",
                            '1',
                            '0'
                        ],
                        [
                            "eid509",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fire2}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid499",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fire6}",
                            '111px',
                            '111px'
                        ],
                            [ "eid182", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${media22}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tubs_edgeActions.js");
})("EDGE-40418101");
