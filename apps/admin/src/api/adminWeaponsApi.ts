import api from "./api"

// Get all users 
export const apiGetWeapons = (param: any) => api().post("/admin/weapons/get", param)

export const apiGetWeapon = (robot_id: number) => api().post("/admin/weapons/getById", { robot_id })

export const apiUpdateWeapon = (data: any) => api().post("/admin/weapons/update", data)

export const apiUpdateWeaponAttribute = (data: any) => api().post("/admin/weapons/updateAttribute", data)

