import { markerTemplate_3D } from '@/const';

export const markerListMock_3D = (typeName) => {
  switch (typeName) {
    case 'Air':
      return [
        {
          ...markerTemplate_3D,
          position: '120.596865,31.13846',
          labelID: '1',
          PM2: '10',
          PM10: '20',
          Temperature: 0,
          Humidity: 0,
          Anion: '22',
        },
        {
          ...markerTemplate_3D,
          position: '120.59425,31.131919',
          labelID: '2',
          PM2: '10',
          PM10: '20',
          Temperature: 0,
          Humidity: 0,
          Anion: '22',
        },
        {
          ...markerTemplate_3D,
          position: '120.591986,31.135273',
          labelID: '3',
          PM2: '10',
          PM10: '20',
          Temperature: 0,
          Humidity: 0,
          Anion: '22',
        },
        {
          ...markerTemplate_3D,
          position: '120.590935,31.140968',
          labelID: '4',
          PM2: '10',
          PM10: '20',
          Temperature: 0,
          Humidity: 0,
          Anion: '22',
        },
        {
          ...markerTemplate_3D,
          position: '120.593468,31.137808',
          labelID: '5',
          PM2: '10',
          PM10: '20',
          Temperature: 0,
          Humidity: 0,
          Anion: '22',
        },
      ];
    case 'AP':
      return [
        {
          ...markerTemplate_3D,
          position: '120.597691,31.139017',
          labelID: '2',
          Number: '182',
        },
        {
          ...markerTemplate_3D,
          position: '120.590557,31.137522',
          labelID: '3',
          Number: '182',
        },
        {
          ...markerTemplate_3D,
          position: '120.5923,31.141153',
          labelID: '4',
          Number: '182',
        },
        {
          ...markerTemplate_3D,
          position: '120.593702,31.132754',
          labelID: '5',
          Number: '182',
        },
      ];
    case 'Monitor':
      return [
        {
          ...markerTemplate_3D,
          position: '120.601392,31.137441',
          labelID: '3',
          Street: '水秀街',
          Status: '通畅',
          Speed: 12,
          Mileage: 5,
        },
        {
          ...markerTemplate_3D,
          position: '120.595741,31.140945',
          labelID: '4',
          Street: '开平路',
          Status: '通畅',
          Speed: 12,
          Mileage: 5,
        },
        {
          ...markerTemplate_3D,
          position: '120.590486,31.1379',
          labelID: '5',
          Street: '苏州太湖湾音乐喷泉',
          Status: '通畅',
          Speed: 12,
          Mileage: 5,
        },
        {
          ...markerTemplate_3D,
          position: '120.592192,31.139283',
          labelID: '6',
          Street: '苏州湾文化中心',
          Status: '通畅',
          Speed: 12,
          Mileage: 5,
        },
        {
          ...markerTemplate_3D,
          position: '120.593037,31.137004',
          labelID: '7',
          Street: '苏州湾博物馆',
          Status: '通畅',
          Speed: 12,
          Mileage: 5,
        },
      ];
    case 'Alarm':
      return [
        {
          ...markerTemplate_3D,
          position: '120.599488,31.135802',
          labelID: '3',
          Name: '景区用车',
          Position: '在线',
          Time: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.592642,31.142197',
          labelID: '4',
          Name: '景区用车',
          Position: '在线',
          Time: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.591339,31.141571',
          labelID: '5',
          Name: '景区用车',
          Position: '在线',
          Time: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.5893,31.137769',
          labelID: '6',
          Name: '景区用车',
          Position: '在线',
          Time: 60,
        },
      ];
    case 'Car':
      return [
        {
          ...markerTemplate_3D,
          position: '120.59514,31.135493',
          labelID: '3',
          Name: '景区用车',
          Speed: '23KM/H',
          Time: '4h',
        },
        {
          ...markerTemplate_3D,
          position: '120.591195,31.136293',
          labelID: '4',
          Name: '观光车阅湖台南站',
          Speed: '60KM/H',
          Time: '4h',
        },
        {
          ...markerTemplate_3D,
          position: '120.590845,31.139662',
          labelID: '5',
          Name: '观光车阅湖台北站',
          Speed: '60KM/H',
          Time: '4h',
        },
        {
          ...markerTemplate_3D,
          position: '120.59372,31.143804',
          labelID: '6',
          Name: '观光车绿宝石站',
          Speed: '60KM/H',
          Time: '4h',
        },
      ];
    case 'Parking':
      return [
        {
          ...markerTemplate_3D,
          position: '120.601716,31.135833',
          labelID: '3',
          Name: '万公堤停车场',
          In: 254,
          Capacity: 5000,
          Enter: 1500,
          Out: 4500,
          Status: '舒适',
        },
        {
          ...markerTemplate_3D,
          position: '120.593172,31.135497',
          labelID: '4',
          Name: '苏州湾大剧院停车场',
          In: 254,
          Capacity: 5000,
          Enter: 1500,
          Out: 4500,
          Status: '舒适',
        },
        {
          ...markerTemplate_3D,
          position: '120.593989,31.135254',
          labelID: '5',
          Name: '东3号门',
          In: 254,
          Capacity: 5000,
          Enter: 1500,
          Out: 4500,
          Status: '舒适',
        },
        {
          ...markerTemplate_3D,
          position: '120.592956,31.141184',
          labelID: '6',
          Name: '苏州湾黄金湖岸旅游区',
          In: 254,
          Capacity: 5000,
          Enter: 1500,
          Out: 4500,
          Status: '舒适',
        },
        {
          ...markerTemplate_3D,
          position: '120.593423,31.142691',
          labelID: '7',
          Name: '上书洲停车场',
          In: 254,
          Capacity: 5000,
          Enter: 1500,
          Out: 4500,
          Status: '舒适',
        },
      ];
    case 'PFlow':
      return [
        {
          ...markerTemplate_3D,
          position: '120.593595,31.136699',
          labelID: '3',
          Name: '万公堤景区',
          In: 4692,
          Capacity: 5000,
          Enter: 2500,
          Out: 4500,
          Status: '紧张',
        },
        {
          ...markerTemplate_3D,
          position: '120.592978,31.138364',
          labelID: '4',
          Name: '苏州湾大剧院',
          In: 4692,
          Capacity: 5000,
          Enter: 2500,
          Out: 4500,
          Status: '紧张',
        },
        {
          ...markerTemplate_3D,
          position: '120.59385,31.135478',
          labelID: '5',
          Name: '苏州湾博物馆',
          In: 4692,
          Capacity: 5000,
          Enter: 2500,
          Out: 4500,
          Status: '紧张',
        },
        {
          ...markerTemplate_3D,
          position: '120.594919,31.140763',
          labelID: '6',
          Name: '苏州绿地中心',
          In: 4692,
          Capacity: 5000,
          Enter: 2500,
          Out: 4500,
          Status: '紧张',
        },
        {
          ...markerTemplate_3D,
          position: '120.591222,31.13775',
          labelID: '7',
          Name: '阅湖台',
          In: 4692,
          Capacity: 5000,
          Enter: 2500,
          Out: 4500,
          Status: '紧张',
        },
      ];
    case 'Police':
      return [
        {
          ...markerTemplate_3D,
          position: '120.604267,31.135957',
          labelID: '3',
          Name: '张三',
          Status: '在线',
        },
      ];
    case 'Voice':
      return [
        {
          ...markerTemplate_3D,
          position: '120.603979,31.137286',
          labelID: '3',
          Name: '景区广播',
          Status: '在线',
          Volume: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.590593,31.137553',
          labelID: '4',
          Name: '景区广播',
          Status: '在线',
          Volume: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.592651,31.138132',
          labelID: '5',
          Name: '景区广播',
          Status: '在线',
          Volume: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.594088,31.134624',
          labelID: '6',
          Name: '景区广播',
          Status: '在线',
          Volume: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.590962,31.140976',
          labelID: '7',
          Name: '景区广播',
          Status: '在线',
          Volume: 60,
        },
        {
          ...markerTemplate_3D,
          position: '120.593046,31.14402',
          labelID: '8',
          Name: '景区广播',
          Status: '在线',
          Volume: 60,
        },
      ];
    case 'HeatMap':
      return [
        {
          ...markerTemplate_3D,
          // size: "0.3,0.3,0.3",
          deviation: '0,10,0', // y是高度
          position: '120.593306,31.138619',
          Name: '太湖绿洲',
          labelID: 111,
          Number: '78.1万',
        },
      ];
  }
};

export const heatMapRangeMock_3D = [
  {
    originname: 'heatmap1',
    origin: '120.593306,31.138619',
    deviation: '0,6,0',
    scale: '20,5,20',
    influenceRadius: 10,
    intensity: 0.5,
    eulerAngles: '0,0,0',
    points: [
      {
        position: '120.593284,31.138051',
        pointId: 'point1',
      },
      {
        position: '120.59319,31.138221',
        pointId: 'point2',
      },
      {
        position: '120.593059,31.138121',
        pointId: 'point3',
      },
      {
        position: '120.593405,31.138186',
        pointId: 'point4',
      },
      {
        position: '120.593347,31.138159',
        pointId: 'point5',
      },
      {
        position: '120.593306,31.138086',
        pointId: 'point6',
      },
      {
        position: '120.593383,31.138078',
        pointId: 'point7',
      },
      {
        position: '120.593261,31.138182',
        pointId: 'point8',
      },
      {
        position: '120.593243,31.138078',
        pointId: 'point9',
      },
      {
        position: '120.593311,31.138074',
        pointId: 'point10',
      },
      {
        position: '120.593154,31.138105',
        pointId: 'point11',
      },
      {
        position: '120.593329,31.138175',
        pointId: 'point12',
      },
    ],
  },
];
