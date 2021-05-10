import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import { User } from "./User";
import { Genre } from "./Genre";

@Table
export class User_Genre extends Model<User_Genre> {

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @ForeignKey(() => Genre)
  @Column
  genre_id!: number;
}