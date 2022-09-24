import { Schema, model} from "mongoose"

interface IUserFavorites { 
    name: string,
    favorites: [any]
}
const userFavorites = new Schema<IUserFavorites>({
    name: { type: String, required: true},
    favorites: { type: [], required: false}
})
  
export const UserFavorites = model<IUserFavorites>('UserFavorites', userFavorites)