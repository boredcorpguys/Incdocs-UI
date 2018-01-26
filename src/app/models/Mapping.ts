import { User } from './User';
import { Role } from './Role';
import { Company } from './Company';

export class Mapping {
    private user: string;
    private company: string;
    private role: Role;
    private mappedOn: string; // should be a timestamp


    constructor($user: string, $company: string, $role: Role, $mappedOn: string) {
        this.user = $user;
        this.company = $company;
        this.role = $role;
        this.mappedOn = $mappedOn;
    }


    public get $user(): string {
        return this.user;
    }

    public set $user(value: string) {
        this.user = value;
    }

    public get $company(): string {
        return this.company;
    }

    public set $company(value: string) {
        this.company = value;
    }

    public get $role(): Role {
        return this.role;
    }

    public set $role(value: Role) {
        this.role = value;
    }

    public get $mappedOn(): string {
        return this.mappedOn;
    }

    public set $mappedOn(value: string) {
        this.mappedOn = value;
    }

}

