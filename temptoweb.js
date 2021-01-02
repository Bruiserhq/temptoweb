[
    {
        "id": "97cebe89.77add",
        "type": "tab",
        "label": "Temperature Sesor Flow",
        "disabled": false,
        "info": ""
    },
    {
        "id": "d7bf5e6b.36d",
        "type": "rpi-ds18b20",
        "z": "97cebe89.77add",
        "topic": "",
        "array": false,
        "name": "",
        "x": 290,
        "y": 240,
        "wires": [
            [
                "56d85a2f.2b7954",
                "2deb4dcd.7fc4f2"
            ]
        ]
    },
    {
        "id": "8138632c.cad73",
        "type": "inject",
        "z": "97cebe89.77add",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 240,
        "wires": [
            [
                "d7bf5e6b.36d"
            ]
        ]
    },
    {
        "id": "56d85a2f.2b7954",
        "type": "debug",
        "z": "97cebe89.77add",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 470,
        "y": 200,
        "wires": []
    },
    {
        "id": "2deb4dcd.7fc4f2",
        "type": "unit-converter",
        "z": "97cebe89.77add",
        "category": "temperature",
        "inputUnit": "C",
        "outputUnit": "F",
        "inputField": "payload",
        "outputField": "payload",
        "inputFieldType": "msg",
        "outputFieldType": "msg",
        "roundOutputField": true,
        "outputFieldDecimals": "1",
        "name": "",
        "x": 460,
        "y": 240,
        "wires": [
            [
                "6b0c930b.dc396c"
            ]
        ]
    },
    {
        "id": "6b0c930b.dc396c",
        "type": "ui_gauge",
        "z": "97cebe89.77add",
        "name": "Hot Tub",
        "group": "b39ba962.178d78",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "compass",
        "title": "Hot Tub Temperature",
        "label": "°F",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 620,
        "y": 240,
        "wires": []
    },
    {
        "id": "b39ba962.178d78",
        "type": "ui_group",
        "name": "Group 1",
        "tab": "f6becb70.f0df18",
        "order": 1,
        "disp": true,
        "width": 6
    },
    {
        "id": "f6becb70.f0df18",
        "type": "ui_tab",
        "name": "Tab 1",
        "icon": "dashboard",
        "order": 1
    }
]
