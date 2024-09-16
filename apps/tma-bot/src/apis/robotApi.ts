import api from "./api"

export const apiRobotSetItem = (param: any) => api().post("/bot/robot/set-item", param)

export const apiRobotLevelUp = () => api().post('/bot/robot/level-up')
