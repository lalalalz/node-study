import {IsEmpty} from "class-validator";

export default class testDto {

    @IsEmpty()
    private readonly id;

    @IsEmpty()
    private readonly name;

    @IsEmpty()
    private readonly age;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

};