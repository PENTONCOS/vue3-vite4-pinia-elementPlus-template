export const scenicList = [
  {
    key: 1,
    name: '农文合力湾区',
    location_3D: '',
    location_2D: '',
  },
  {
    key: 2,
    name: '艺术魅力湾区',
    location_3D: '',
    location_2D: '',
  },
  {
    key: 3,
    name: '运动合力湾区',
    location_3D: '',
    location_2D: '',
  },
  {
    key: 99,
    name: '全部显示',
    location_3D: '',
    location_2D: '',
  },
]

export const equipmentTypeList = [
  {
    name: '视频监控',
    typeName: ['Monitor', 'Monitor1'],
    show: false, // 是否在图例里被激活
    icon: 'Monitor',
    isLegend: true, // 是否展示在图例里
  },
  {
    name: '客流设备',
    typeName: ['PFlow'],
    show: true,
    icon: 'PFlow',
    isLegend: true,
  },
  {
    name: '环境检测',
    typeName: ['Air', 'Water'],
    show: false,
    icon: 'Environment',
    isLegend: true,
  },
  {
    name: '景区用车',
    typeName: ['Car'],
    show: false,
    icon: 'Car',
    isLegend: true,
  },
  {
    name: '公共广播',
    typeName: ['Voice', 'Broadcasting'],
    show: false,
    icon: 'Broadcasting',
    isLegend: true,
  },
  {
    name: '停车场',
    typeName: ['Parking'],
    show: true,
    icon: 'Parking',
    isLegend: true,
  },
  {
    name: '无线AP',
    typeName: ['AP'],
    show: false,
    icon: 'AP',
    isLegend: true,
  },
  {
    name: '报警柱',
    typeName: ['Alarm', 'Alarm1'],
    show: false,
    icon: 'Alarm',
    isLegend: true,
  },
  {
    name: '安保人员',
    typeName: ['Police', 'Police1'],
    show: false,
    icon: 'Police',
    isLegend: false,
  },
  {
    name: '景区船舶',
    typeName: ['Ship'],
    show: false,
    icon: 'Ship',
    isLegend: false,
  },
  {
    name: '热力图',
    typeName: ['HeatMap'],
    show: false,
    icon: 'HeatMap',
    isLegend: false,
  },
]

export const legendList = equipmentTypeList.filter((item) => item.isLegend)

export const getEquipmentTypeNameList = () => {
  let arr = [];
  equipmentTypeList.forEach((item) => {
    arr.push(...item.typeName)
  })
  return arr
}