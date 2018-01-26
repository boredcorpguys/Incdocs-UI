import { User } from './User';

export class Company {
    private name: string;
    private pan: string;
    private rm: User;
    private arm1: User;
    private arm2: User;
    private admin: User;
    private mop1: User; // this can be a list?
    private mop2: User;

    constructor($name: string, $pan: string, $rm: User, $arm1: User, $arm2: User, $admin: User, $mop1: User, $mop2: User) {
        this.name = $name;
        this.pan = $pan;
        this.rm = $rm;
        this.arm1 = $arm1;
        this.arm2 = $arm2;
        this.admin = $admin;
        this.mop1 = $mop1;
        this.mop2 = $mop2;
    }

    public get $rm(): User {
        return this.rm;
    }

    public set $rm(value: User) {
        this.rm = value;
    }

    public get $arm1(): User {
        return this.arm1;
    }

    public get $mop2(): User {
        return this.mop2;
    }

    public set $mop2(value: User) {
        this.mop2 = value;
    }

    public get $mop1(): User {
        return this.mop1;
    }

    public set $mop1(value: User) {
        this.mop1 = value;
    }


    public get $arm2(): User {
        return this.arm2;
    }

    public set $arm2(value: User) {
        this.arm2 = value;
    }

    public set $arm1(value: User) {
        this.arm1 = value;
    }

    public get $admin(): User {
        return this.admin;
    }

    public set $admin(value: User) {
        this.admin = value;
    }


    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }


    public get $pan(): string {
        return this.pan;
    }

    public set $pan(value: string) {
        this.pan = value;
    }



}
