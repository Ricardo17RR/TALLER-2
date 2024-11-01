import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ManagerError } from "src/common/errors/manager.error";
import { UserEntity } from "./entities/user.entity";


@Injectable()
export class UsersService {

  private Users:UserEntity[] = [
    { id: 1, name: "Roberto", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "admin", gender: "masculino", isActive: true},
    { id: 3, name: "Pedro", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "usuario", gender: "masculino", isActive: true},
    { id: 4, name: "Maria", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "usuario", gender: "masculino", isActive: true},
    { id: 5, name: "Laura", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "admin", gender: "masculino", isActive: true},
    { id: 6, name: "Pablo", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "usuario", gender: "masculino", isActive: true},
    { id: 7, name: "Celeste", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "usuario", gender: "masculino", isActive: true},
    { id: 8, name: "Moises", age: 15, photo: [], email: "robetokfjf", password: "12345tg", role: "admin", gender: "masculino", isActive: true}
  ]


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<UserEntity> {
    try {
        const User = this.Users.find((User) => User.id === id && User.isActive === true);
        if (!User) {
            throw new ManagerError({
                type: 'NOT_FOUND',
                message: 'Supplier not found',
            });
        }
        return User;
    } catch (error) {
        ManagerError.createSignatureError(error.message);
    }
}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
