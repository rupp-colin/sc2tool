const protossUnits = {
  probe: {
    name: "probe",
    minCost: 50,
    gasCost: 0,
    timeCost: 12,
    supplyCost: 1,
    requirements: ["nexus"]
  },
  zealot: {
    name: "zealot",
    minCost: 100,
    gasCost: 0,
    timeCost: 27,
    warpGateCD: 20,
    supplyCost: 2,
    requirements: ["gateway"]
  },
  sentry: {
    name: "sentry",
    minCost: 50,
    gasCost: 100,
    timeCost: 23,
    warpGateCD: 23,
    supplyCost: 2,
    requirements: ["gateway", "cyberneticsCore"]
  },
  stalker: {
    name: "stalker",
    minCost: 125,
    gasCost: 50,
    timeCost: 30,
    warpGateCD: 23,
    supplyCost: 2,
    requirements: ["gateway", "cyberneticsCore"]
  },
  adept: {
    name: "adept",
    minCost: 100,
    gasCost: 25,
    timeCost: 30,
    warpGateCD: 20,
    supplyCost: 2,
    requirements: ["gateway", "cyberneticsCore"]
  },
  highTemplar: {
    name: "highTemplar",
    minCost: 50,
    gasCost: 150,
    timeCost: 39,
    warpGateCD: 32,
    supplyCost: 2,
    requirements: ["gateway", "templarArchives"]
  },
  darkTemplar: {
    name: "darkTemplar",
    minCost: 125,
    gasCost: 125,
    timeCost: 39,
    warpGateCD: 32,
    supplyCost: 2,
    requirements: ["gateway", "darkShrine"]
  },
  observer: {
    name: "observer",
    minCost: 25,
    gasCost: 75,
    timeCost: 21,
    supplyCost: 1,
    requirements: ["roboticsFacility"]
  },
  warpPrism: {
    name: "warpPrism",
    minCost: 250,
    gasCost: 0,
    timeCost: 36,
    supplyCost: 2,
    requirements: ["roboticsFacility"]
  },
  immortal: {
    name: "immortal",
    minCost: 275,
    gasCost: 100,
    timeCost: 39,
    supplyCost: 4,
    requirements: ["roboticsFacility"]
  },
  colossus: {
    name: "colossus",
    minCost: 300,
    gasCost: 200,
    timeCost: 54,
    supplyCost: 6,
    requirements: ["roboticsFacility", "roboticsBay"]
  },
  disruptor: {
    name: "disruptor",
    minCost: 150,
    gasCost: 150,
    timeCost: 36,
    supplyCost: 4,
    requirements: ["roboticsFacility", "roboticsBay"]
  },
  phoenix: {
    name: "phoenix",
    minCost: 150,
    gasCost: 100,
    timeCost: 25,
    supplyCost: 2,
    requirements: ["stargate"]
  },
  oracle: {
    name: "oracle",
    minCost: 150,
    gasCost: 150,
    timeCost: 37,
    supplyCost: 3,
    requirements: ["stargate"]
  },
  voidRay: {
    name: "voidRay",
    minCost: 250,
    gasCost: 150,
    timeCost: 43,
    supplyCost: 4,
    requirements: ["stargate"]
  },
  tempest: {
    name: "tempest",
    minCost: 250,
    gasCost: 175,
    timeCost: 43,
    supplyCost: 5,
    requirements: ["stargate"]
  },
  carrier: {
    name: "carrier",
    minCost: 350,
    gasCost: 250,
    timeCost: 64,
    supplyCost: 6,
    requirements: ["stargate"]
  },
  interceptor: {
    name: "interceptor",
    minCost: 15,
    gasCost: 0,
    timeCost: 9,
    supplyCost: 0,
    requirements: ["carrier"]
  }
};
